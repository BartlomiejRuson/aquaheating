import React, { useEffect, useRef, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
const grzewka = [
  {
    nazwa1: `REDUKTOR CIŚNIENIA WODY`,
    nazwa2: `z MANOMETREM 6 Bar`,
    nazwa3: `1/2” lub 3/4”`,
    mainUrl: `/GRZEWKA/H1012/H1012.jpg`,
    images: [`H1012.jpg`, `H1012_wym.jpg`, `H1034_wym.jpg`],
    opis1: `ochrona elementów instalacji wodociągowej przed nadmiernym ciśnieniem wejściowym`,
    opis2: `stabilizacja ciśnienia wyjściowego`,
    opis3: `redukcja szumów w instalacji - dzięki stabilizacji i obniżeniu ciśnienia zostają zmniejszone szumy przepływu w instalacji`,
    opis4: `ZASTOSOWANIE`,
    opis5: ` - instalacje domowe - mieszkania, domy jednorodzinne`,
    opis6: ` - instalacje przemysłowe - hotele, budynki biurowe, budynki handlowo-usługowe, budynki magazynowe`,
    opis7: `ciśnienie maksymalne - wlot - 16 bar
            `,
    opis8: `maksymalna temperatura pracy - 65°C
            `,
    opis9: `przyłącza - 1/2" GW lub 3/4” GW
            `,
    opis10: `zastosowanie (medium) - woda
            `,
    opis11: `materiał - mosiądz
            `,
    opis12: `powłoka zewnętrzna - niklowana
            `,
    opis13: `manometr - 1 ÷ 6 bar
            `,
    Symbole1: " Symbol: 1/2” - H1012",
    Symbole2: " Symbol: 3/4” - H1034",
    Symbol: "H1012",
  },
  {
    nazwa1: `PODTYNKOWY - KASETOWY `,
    nazwa2: `OGRANICZNIK TEMPERATURY - RTL 3/4"`,
    nazwa3: `KĄTOWY lub PROSTY`,
    mainUrl: `/GRZEWKA/GRZEWKA_RTLe.jpg`,
    images: [
      `H1069_RTL_K_0.jpg`,
      `H1069_RTL_K_1.jpg`,
      `H1069_RTL_K_6.jpg`,
      `H1069_RTL_K_7.jpg`,
      `H1069_RTL_K_8B.jpg`,
      `H1069_RTL_K_8W.jpg`,
      `H1069_RTL_K_9.jpg`,
      `H1069_RTL_K_10.jpg`,
      `H1069_RTL_K_10W.jpg`,
      `H1069_RTL_K_10WR.jpg`,
      `H1069_RTL_K_11.jpg`,
    ],
    opis1: `materiał – mosiądz`,
    opis2: `ciśnienie robocze - 10bar`,
    opis3: `powierzchnia grzewcza – do 20 m2`,
    opis4: `medium – woda
            `,
    opis5: `przyłącza - 3/4"
            (do złączek PEX 16,0 mm lub miedź 15,0 mm)`,
    opis6: `głowica termostatyczna - M30x1,5
            `,
    opis7: `zakres nastawy - 1 ÷ 5
            `,
    opis8: `odpowietrznik`,
    opis9: `skrzynka podtynkowa - tworzywo sztuczne PP (polipropylen)`,
    opis10: `- wymiar maskownicy zewnętrznej - 155 x 205 mm`,
    opis11: `- wymiar skrzynki podtynkowej - 130 x 185 mm`,
    opis12: `głębokość montażu - 60 ÷ 80 mm`,
    Symbole1: "Symbol: PROSTY - H1069",
    Symbole2: "Symbol: KĄTOWY -  H1070",
    Symbol: "H1069",
  },
  {
    nazwa1: `MIARKOWNIK CIĄGU`,
    nazwa2: `POWIETRZA PIECA / KOTŁA - 3/4”`,
    mainUrl: `/GRZEWKA/H1091/Miarkownik_1.jpg`,
    images: [
      `Miarkownik1.jpg`,
      `Miarkownik2.jpg`,
      `Miarkownik3.jpg`,
      `Miarkownik4.jpg`,
      `Miarkownik5.jpg`,
    ],
    opis1: `Miarkownik ciągu powietrza, to regulator termostatyczny, sterujący temperaturą wody w piecu / kotle, poprzez zwiększanie lub zmniejszanie ilości powietrza potrzebnego do spalenia paliwa.`,
    opis2: `Pod wpływem zmian temperatury wody w piecu / kotle, głowica termostatyczna regulatora (miarkownika), przy pomocy dźwigni i łańcuszka uchyla lub przymyka klapę pieca, zwiększając lub zmniejszając dopływ powietrza (ciągu) do paleniska.`,
    opis3: `ZASTOSOWANIE
            piece / kotły opalane paliwami stałymi takimi jak np: węgiel, koks, miał, drewno`,
    opis4: `przyłącze - 3/4" GW`,
    opis5: `regulacja temperatury wody - 30 ÷ 90°C`,
    opis6: `montaż - pionowy lub poziomy`,
    opis7: `długość łańcuszka - 130 cm`,
    Symbol: "H1091",
  },
  {
    nazwa1: `SPRZĘGŁA HYDRAULICZNE`,
    nazwa2: `4x1” - 2x1/2” lub 6x1” - 2x1/2”`,
    mainUrl: `/GRZEWKA/GZREWKA_SPRZEGLA.jpg`,
    images: [`H1141.jpg`, `H1143.jpg`, `H1141_3.jpg`, `H1143_3.jpg`],
    opis1: `W średnich i dużych instalacjach składających się z kilku obiektów grzewczych. 
            Przez rozdzielenie hydrauliczne obiegów kotłowego i grzewczego uzyskuje się zmniejszenie wielkości zasilania, poprawę pracy, równomierność zasilenia pionów i łatwiejsze sterowanie systemem. Sprzęgło zmniejsza również straty energii i zakłócenia akustyczne.`,
    opis2: `Funkcje:`,
    opis3: ` ⦁	Hydraulicznego odprężenia obwodów kotła (kotłów) i instalacji grzewczej`,
    opis4: `    ⦁	Separatora powietrza`,
    opis5: `Sprzęgło hydrauliczne zamontowane w system grzewczy powoduje odprężenie hydrauliczne obiegów zasilających jednego lub wielokotłowych od obiegów grzewczych, co ułatwia regulację systemu i zmniejsza straty energetyczne.`,
    opis6: `Sprzęgło zamontowane w układzie grzewczym powoduje odmulanie i odpowietrzanie układu.`,
    opis7: `ZALETY:`,
    opis8: `   ⦁	Brak oddziaływania hydraulicznego pomiędzy zasileniem, a obiegami grzewczymi`,
    opis9: `  ⦁	Zastosowanie w instalacjach jedno i wielokotłowych`,
    opis10: `  ⦁	Dowolność stosowania systemów regulacyjnych`,
    opis11: `  ⦁	Łatwiejsze zwymiarowanie pompy w obiegu kotłowym`,
    opis12: `  ⦁	Łatwiejszy dobór zaworów regulacyjnych`,
    opis13: `  ⦁	Chroni przed korozją niskotemperaturową`,
    opis14: `Charakterystyka: `,
    opis15: `  ⦁	Króćce przyłączeniowe :  4x1"  / 6x1”          `,
    opis16: `   ⦁	Średnica: 76mm            `,
    opis17: `    ⦁	Przepływ: 4x1” - max 4800 l/h / 6x1” - max 6600 l/h`,
    opis18: `   ⦁	Pojemność: 1400 ml            `,
    opis19: `   ⦁	Ciśnienie nominalne: 10bar           `,
    opis20: `  ⦁	Temperatura pracy: max 90°C       `,
    opis21: `  ⦁	Waga: 2180g         `,
    opis22: `  ⦁	Ocieplenie: twarda pianka polietylenowa (XLPE)`,
    Symbole1: `Symbol 4x1” -- 2x1/2” - H1141`,
    Symbole2: `Symbol 6x1” -- 2x1/2” - H1143`,
    Symbol: "H1141",
  },
  {
    nazwa1: `UNICO - ZAWÓR GRZEJNIKOWY JEDNOOTWOROWY`,
    nazwa2: `UNIWERSALNY - KĄTOWO/PROSTY LUB LEWO/PRAWY`,
    nazwa3: `CZARNY/BIAŁY/CHROM/GRAFIT`,
    mainUrl: `/GRZEWKA/ZAWORY_UNICO.jpg`,
    images: [
      `H2006BK_0C.jpg`,
      `H2006BK_1C.jpg`,
      `ZGJO-GR_4.jpg`,
      `ZGJO-CH_2B.jpg`,
      `ZGJO-CH_3B.jpg`,
      `ZGJO-GR_6B.jpg`,
      `ZGJO-WH_7.jpg`,
    ],
    opis1: `Rodzaj przyłącza : UNIWERSALNY (kątowy lub prosty / lewy lub prawy)`,
    opis2: `Maksymalna temperatura pracy : 120°C`,
    opis3: `Maksymalne ciśnienie pracy : 10 bar`,
    opis4: `Regulacja temperatury grzejnika : ręczna`,
    opis5: `Głowica termostatyczna : M30x1,5`,
    opis6: `Rozstaw przyłącza : 50mm`,
    opis7: `Złączki przyłączeniowe : PEX 16mm lub Miedź 15mm`,
    opis9: `ZESTAW`,
    opis10: `⦁	zawór termostatyczny jednootworowy - 1szt`,
    opis11: ` ⦁	głowica termostatyczna - 1szt`,
    opis12: ` ⦁	złączki - PEX 16mm - 1 para`,
    opis13: ` ⦁	złączki - Miedź 15mm - 1 para`,
    opis14: `przyłącza - grzejniki łazienkowe (drabinki)`,
    opis15: `Kolory: CZARNY / BIAŁY / CHROM / GRAFIT `,
    Symbole1:
      "Symbole: CZARNY-H2006BK / BIALY-H2006WH / CHROM-H2006CH / GRAFIT-H2006GR",
    Symbol: "H2006BK",
  },
  {
    nazwa1: `REDUKTOR CIŚNIENIA WODY`,
    nazwa2: `z FILTREM SIATKOWYM`,
    nazwa3: `3/4” lub 1”`,
    mainUrl: `/GRZEWKA/H3010/H3010_1.jpg`,
    images: [
      `H3010_1.jpg`,
      `H3010_2.jpg`,
      `H3010_3.jpg`,
      `H3034_2.jpg`,
      `H3034_3.jpg`,
    ],
    opis1: `DZIAŁANIE`,
    opis2: ` ⦁	Praca zaworu w czasie przepływu
W przypadku otwarcia punktu czerpalnego w instalacji siła nacisku sprężyny przeważa nad przeciwstawną siłą nacisku membrany, grzybek zaworu przesuwa się ku dołowi, pozwalając na przepływ wody. Im wyższe jest zapotrzebowanie wody tym mniejsze jest ciśnienie działające na membranę co pozwala na większy przepływ wody przez urządzenie.`,
    opis3: `⦁	Praca zaworu bez przepływu
W przypadku zamknięcia punktów czerpalnych w instalacji, ciśnienie wyjściowe rośnie i wypycha membranę ku górze. Grzybek zaworu jest zamknięty uniemożliwiając przepływ przez urządzenie jednocześnie utrzymując ciśnienie na poziomie zgodnym z nastawą. Różnica siły wytwarzanej przez membranę w odniesieniu do siły wytwarzanej przez sprężynę powoduję zamknięcie zaworu.`,
    opis4: `⦁	Filtrowanie (oczyszczanie wody)
Woda wpływając do filtra, dostaje się do komory filtracyjnej, od zewnętrznej strony przepływa przez sito filtracyjne, na powierzchni którego zatrzymują się zanieczyszczenia.`,
    opis5: `materiał (korpus) - mosiądz `,
    opis6: `medium - woda`,
    opis7: `przyłącza - 3/4” lub 1” (z półśrubunkami)`,
    opis8: `max. ciśnienie wejściowe - 16 bar`,
    opis9: `zakres ciśnienia wyjściowego - 1 ÷ 6 bar`,
    opis10: `max. temperatura medium - 40°C`,
    opis11: `manometr - 10 bar`,
    opis12: `filtr siatkowy - stal nierdzewna`,
    opis13: `montaż - poziomy`,
    Symbole1: `Symbol: 3/4” - H3034 `,
    Symbole2: `Symbol: 1” - H3010  `,
    Symbol: "H3010",
  },

  {
    nazwa1: `REDUKTOR CIŚNIENIA WODY `,
    nazwa2: `z FILTREM SIATKOWYM SAMOCZYSZCZĄCYM`,
    nazwa3: `3/4” lub 1”`,
    mainUrl: `/GRZEWKA/H3210/H3210_1.jpg`,
    images: [
      `H3210_1.jpg`,
      `H3210_2.jpg`,
      `H3210_3.jpg`,
      `H3234_2.jpg`,
      `H3234_3.jpg`,
    ],
    opis1: `DZIAŁANIE`,
    opis2: ` ⦁	Praca zaworu w czasie przepływu
W przypadku otwarcia punktu czerpalnego w instalacji siła nacisku sprężyny przeważa nad przeciwstawną siłą nacisku membrany, grzybek zaworu przesuwa się ku dołowi, pozwalając na przepływ wody. Im wyższe jest zapotrzebowanie wody tym mniejsze jest ciśnienie działające na membranę co pozwala na większy przepływ wody przez urządzenie.`,
    opis3: `⦁	Praca zaworu bez przepływu
W przypadku zamknięcia punktów czerpalnych w instalacji, ciśnienie wyjściowe rośnie i wypycha membranę ku górze. Grzybek zaworu jest zamknięty uniemożliwiając przepływ przez urządzenie jednocześnie utrzymując ciśnienie na poziomie zgodnym z nastawą. Różnica siły wytwarzanej przez membranę w odniesieniu do siły wytwarzanej przez sprężynę powoduję zamknięcie zaworu.`,
    opis4: `⦁	Filtrowanie (oczyszczanie wody)
Woda wpływając do filtra, dostaje się do komory filtracyjnej, od zewnętrznej strony przepływa przez sito filtracyjne, na powierzchni którego zatrzymują się zanieczyszczenia.`,
    opis5: `materiał (korpus) - mosiądz `,
    opis6: `medium - woda`,
    opis7: `przyłącza - 1" lub 3/4" (z półśrubunkami)`,
    opis8: `max. ciśnienie wejściowe - 16 bar`,
    opis9: `zakres ciśnienia wyjściowego - 1 ÷ 6 bar`,
    opis10: `max. temperatura medium - 40°C`,
    opis11: `manometr - 10 bar`,
    opis12: `filtr siatkowy - stal nierdzewna`,
    opis13: `montaż - poziomy`,
    Symbol: "H3210",
    Symbole1: `Symbol: 3/4"- H3234`,
    Symbole2: `Symbol: 1"- H3210  `,
  },
];
function Grzewka() {
  const imgRef = useRef();
  const [mainImgUrl, setMainImgUrl] = useState("");
  const router = useRouter();
  const productId = router.query.GrzewkaId;
  const changeImage = (e, string) => {
    setMainImgUrl(string);
  };
  useEffect(() => {
    if (mainImgUrl != "") imgRef.current.src = mainImgUrl;
  }, [mainImgUrl]);

  const obecnyGrze = grzewka.filter((grze) => {
    if (grze.Symbol == productId) {
      return grze;
    }
  });
  return (
    <div>
      <Nav />
      <div className="w-52 ">
        {" "}
        <Link
          href="/Lista_technika_grzewcza"
          className="p-3 font-semibold flex items-center justify-center"
        >
          <AiOutlineLeft /> POZOSTAŁE ELEMENTY
        </Link>
      </div>
      {obecnyGrze.map((item) => {
        console.log(obecnyGrze);
        if (item.Symbol == productId) {
          return (
            <div key={item.Symbol} className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="productImageContainer">
                <img
                  ref={imgRef}
                  className="p-3"
                  src={item.mainUrl}
                  width={500}
                  height={500}
                  alt={item.Symbol}
                  priority
                />
                </div>

                <div className="grid grid-rows-2 grid-cols-5 gap-2">
                  {item.images.map((img, index) => {
                    return (
                      <div className="miniProductImageContainer">
                      <Image
                        className="border cursor-pointer"
                        key={index}
                        src={`/GRZEWKA/${item.Symbol}/${img}`}
                        alt={item.Symbol}
                        height={60}
                        width={60}
                        onClick={(e) => {
                          changeImage(e, `/GRZEWKA/${item.Symbol}/${img}`);
                        }}
                      />
                      </div>

                    );
                  })}
                </div>
              </div>
              <div className="flex font-semibold text-lg justify-center items-center">
                <div>
                  <h1 className=" text-3xl py-5">
                    {item.nazwa1 ? item.nazwa1 : item.nazwa} <br></br>{" "}
                    {item.nazwa2 ? item.nazwa2 : ""} <br></br>{" "}
                    {item.nazwa3 ? item.nazwa3 : ""}
                  </h1>

                  {item.opis1 ? <p>{item.opis1}</p> : null}
                  {item.opis2 ? <p>{item.opis2}</p> : null}
                  {item.opis3 ? <p>{item.opis3}</p> : null}
                  {item.opis4 ? <p>{item.opis4}</p> : null}
                  {item.opis5 ? <p>{item.opis5}</p> : null}
                  {item.opis6 ? <p>{item.opis6}</p> : null}
                  {item.opis7 ? <p>{item.opis7}</p> : null}
                  {item.opis8 ? <p>{item.opis8}</p> : null}
                  {item.opis9 ? <p>{item.opis9}</p> : null}
                  {item.opis10 ? <p>{item.opis10}</p> : null}
                  {item.opis11 ? <p>{item.opis11}</p> : null}
                  {item.opis12 ? <p>{item.opis12}</p> : null}
                  {item.opis13 ? <p>{item.opis13}</p> : null}
                  {item.opis14 ? <p>{item.opis14}</p> : null}
                  {item.opis15 ? <p>{item.opis15}</p> : null}
                  {item.opis16 ? <p>{item.opis16}</p> : null}
                  {item.opis17 ? <p>{item.opis17}</p> : null}
                  {item.opis18 ? <p>{item.opis18}</p> : null}
                  {item.opis19 ? <p>{item.opis19}</p> : null}
                  {item.opis20 ? <p>{item.opis20}</p> : null}
                  {item.opis21 ? <p>{item.opis21}</p> : null}
                  {item.opis22 ? <p>{item.opis22}</p> : null}
                  {item.opis23 ? <p>{item.opis23}</p> : null}
                  {item.opis24 ? <p>{item.opis24}</p> : null}

                  {item.Symbole1 ? (
                    <p>- {item.Symbole1}</p>
                  ) : (
                    <p>Symbol: {item.Symbol}</p>
                  )}
                  {item.Symbole2 ? <p>- {item.Symbole2}</p> : null}
                </div>
              </div>
            </div>
          );
        }
      })}
      <Footer />
    </div>
  );
}

export default Grzewka;
