import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";
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
      opis4: `ZASTOSOWANIE
              instalacje domowe - mieszkania, domy jednorodzinne
              instalacje przemysłowe - hotele, budynki biurowe, budynki handlowo-usługowe, budynki magazynowe`,
      opis5: `ciśnienie maksymalne - wlot - 16 bar
              `,
      opis6: `maksymalna temperatura pracy - 65°C
              `,
      opis7: `przyłącza - 1/2" GW lub 3/4” GW
              `,
      opis8: `zastosowanie (medium) - woda
              `,
      opis9: `materiał - mosiądz
              `,
      opis10: `powłoka zewnętrzna - niklowana
              `,
      opis11: `manometr - 1 ÷ 6 bar
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
      opis10: `wymiar maskownicy zewnętrznej - 155 x 205 mm
              wymiar skrzynki podtynkowej - 130 x 185 mm`,
      opis11: `głębokość montażu - 60 ÷ 80 mm`,
      Symbole1: "Symbol: PROSTY - H1069",
      Symbole2: "Symbol: KĄTOWY -  H1070",
      Symbol: "H1069",
    },
    {
      nazwa1: `MIARKOWNIK CIĄGU`,
            nazwa2:  `POWIETRZA PIECA / KOTŁA - 3/4”`,
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
      nazwa2 :       `4x1” - 2x1/2” lub 6x1” - 2x1/2”`,
      mainUrl: `/GRZEWKA/GZREWKA_SPRZEGLA.jpg`,
      images: [`H1141.jpg`, `H1143.jpg`, `H1141_3.jpg`, `H1143_3.jpg`],
      opis1: `W średnich i dużych instalacjach składających się z kilku obiektów grzewczych. 
              Przez rozdzielenie hydrauliczne obiegów kotłowego i grzewczego uzyskuje się zmniejszenie wielkości zasilania, poprawę pracy, równomierność zasilenia pionów i łatwiejsze sterowanie systemem. Sprzęgło zmniejsza również straty energii i zakłócenia akustyczne.`,
      opis2: `Funkcje:
              ⦁	Hydraulicznego odprężenia obwodów kotła (kotłów) i instalacji grzewczej
              ⦁	Separatora powietrza`,
      opis3: `Sprzęgło hydrauliczne zamontowane w system grzewczy powoduje odprężenie hydrauliczne obiegów zasilających jednego lub wielokotłowych od obiegów grzewczych, co ułatwia regulację systemu i zmniejsza straty energetyczne.`,
      opis4: `Sprzęgło zamontowane w układzie grzewczym powoduje odmulanie i odpowietrzanie układu.`,
      opis5: `Zalety:
              ⦁	Brak oddziaływania hydraulicznego pomiędzy zasileniem, a obiegami grzewczymi
              ⦁	Zastosowanie w instalacjach jedno i wielokotłowych
              ⦁	Dowolność stosowania systemów regulacyjnych
              ⦁	Łatwiejsze zwymiarowanie pompy w obiegu kotłowym
              ⦁	Łatwiejszy dobór zaworów regulacyjnych
              ⦁	Chroni przed korozją niskotemperaturową
              `,
      opis6: `Charakterystyka: 
        ⦁	Króćce przyłączeniowe :  4x1"  / 6x1”          
        ⦁	Średnica: 76mm            
        ⦁	Przepływ: 4x1” - max 4800 l/h / 6x1” - max 6600 l/h
        ⦁	Pojemność: 1400 ml            
        ⦁	Ciśnienie nominalne: 10bar            
        ⦁	Temperatura pracy: max 90°C           
        ⦁	Waga: 2180g            
        ⦁	Ocieplenie: twarda pianka polietylenowa (XLPE)`,
      Symbole1: `4x1” -- 2x1/2” - H1141`,
      Symbole2: `6x1” -- 2x1/2” - H1143`,
      Symbol: "H1141",
    },
    {
      nazwa1: `UNICO - ZAWÓR GRZEJNIKOWY JEDNOOTWOROWY`,
      nazwa2:`UNIWERSALNY - KĄTOWO/PROSTY LUB LEWO/PRAWY`,
      nazwa3:`CZARNY/BIAŁY/CHROM/GRAFIT`,
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
      opis8: `Kolor : CZARNY`,
      opis9: `ZESTAW
              ⦁	zawór termostatyczny jednootworowy - 1szt
              ⦁	głowica termostatyczna - 1szt
              ⦁	złączki - PEX 16mm - 1 para
              ⦁	złączki - Miedź 15mm - 1 para
              `,
      opis10: `przyłącza - grzejniki łazienkowe (drabinki)`,
      opis11: `Kolory: CZARNY/BIAŁY/CHROM/GRAFIT `,
      Symbole1: "Symbole: CZARNY-H2006BK / BIALY-H2006WH / CHROM-H2006CH / GRAFIT-H2006GR",
      Symbol: "H2006BK",
    },
    {
      nazwa1: `REDUKTOR CIŚNIENIA WODY`, 
      nazwa2: `z FILTREM SIATKOWYM`,
      nazwa3: `3/4” lub 1”`,
      mainUrl: `/GRZEWKA/H3010/H3010_1.jpg`,
      images: [`H3010_1.jpg`, `H3010_2.jpg`, `H3010_3.jpg`, `H3034_2.jpg`, `H3034_3.jpg`],
      opis1: `DZIAŁANIE
              ⦁	Praca zaworu w czasie przepływu
  W przypadku otwarcia punktu czerpalnego w instalacji siła nacisku sprężyny przeważa nad przeciwstawną siłą nacisku membrany, grzybek zaworu przesuwa się ku dołowi, pozwalając na przepływ wody. Im wyższe jest zapotrzebowanie wody tym mniejsze jest ciśnienie działające na membranę co pozwala na większy przepływ wody przez urządzenie.
  ⦁	Praca zaworu bez przepływu
  W przypadku zamknięcia punktów czerpalnych w instalacji, ciśnienie wyjściowe rośnie i wypycha membranę ku górze. Grzybek zaworu jest zamknięty uniemożliwiając przepływ przez urządzenie jednocześnie utrzymując ciśnienie na poziomie zgodnym z nastawą. Różnica siły wytwarzanej przez membranę w odniesieniu do siły wytwarzanej przez sprężynę powoduję zamknięcie zaworu.
  ⦁	Filtrowanie (oczyszczanie wody)
  Woda wpływając do filtra, dostaje się do komory filtracyjnej, od zewnętrznej strony przepływa przez sito filtracyjne, na powierzchni którego zatrzymują się zanieczyszczenia.
  `,
      opis2: `materiał (korpus) - mosiądz `,
      opis3: `medium - woda`,
      opis4: `przyłącza - 3/4” lub 1” (z półśrubunkami)`,
      opis5: `max. ciśnienie wejściowe - 16 bar`,
      opis6: `zakres ciśnienia wyjściowego - 1 ÷ 6 bar`,
      opis7: `max. temperatura medium - 40°C`,
      opis8: `manometr - 10 bar`,
      opis9: `filtr siatkowy - stal nierdzewna`,
      opis10: `montaż - poziomy`,
      Symbole1:`Symbol: 3/4” - H3034 /  1” - H3010`,
      Symbol: "H3010",
    },
    
    {
      nazwa1: `REDUKTOR CIŚNIENIA WODY `,
      nazwa2:       `z FILTREM SIATKOWYM SAMOCZYSZCZĄCYM`,
      nazwa3:       `3/4” lub 1”`,
      mainUrl: `/GRZEWKA/H3210/H3210_1.jpg`,
      images: [`H3210_1.jpg`, `H3210_2.jpg`, `H3210_3.jpg`,`H3234_2.jpg`,`H3234_3.jpg`],
      opis1: `DZIAŁANIE
              ⦁	Praca zaworu w czasie przepływu
  W przypadku otwarcia punktu czerpalnego w instalacji siła nacisku sprężyny przeważa nad przeciwstawną siłą nacisku membrany, grzybek zaworu przesuwa się ku dołowi, pozwalając na przepływ wody. Im wyższe jest zapotrzebowanie wody tym mniejsze jest ciśnienie działające na membranę co pozwala na większy przepływ wody przez urządzenie.
  ⦁	Praca zaworu bez przepływu
  W przypadku zamknięcia punktów czerpalnych w instalacji, ciśnienie wyjściowe rośnie i wypycha membranę ku górze. Grzybek zaworu jest zamknięty uniemożliwiając przepływ przez urządzenie jednocześnie utrzymując ciśnienie na poziomie zgodnym z nastawą. Różnica siły wytwarzanej przez membranę w odniesieniu do siły wytwarzanej przez sprężynę powoduję zamknięcie zaworu.
  ⦁	Filtrowanie (oczyszczanie wody)
  Woda wpływając do filtra, dostaje się do komory filtracyjnej, od zewnętrznej strony przepływa przez sito filtracyjne, na powierzchni którego zatrzymują się zanieczyszczenia.
  `,
      opis2: `materiał (korpus) - mosiądz `,
      opis3: `medium - woda`,
      opis4: `przyłącza - 1" lub 3/4" (z półśrubunkami)`,
      opis5: `max. ciśnienie wejściowe - 16 bar`,
      opis6: `zakres ciśnienia wyjściowego - 1 ÷ 6 bar`,
      opis7: `max. temperatura medium - 40°C`,
      opis8: `manometr - 10 bar`,
      opis9: `filtr siatkowy - stal nierdzewna`,
      opis10: `montaż - poziomy`,
      Symbol: "H3210",
      Symbole1:`Symbole: 3/4"-H3234  1"-H3210`
    }
  ];
function Lista_technika_grzewcza() {
  return (
    <div>
      <Nav />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 text-center p-5">
        {grzewka.map((item) => (
          <Link
            className="m-5 md:hover:scale-105 md:transition-all"
            href={`/Grzewka/${item.Symbol}`}
            key={item.Symbol}
          >
            <div className="border m-2 flex flex-col items-center justify-center">
              <Image
                priority
                src={item.mainUrl}
                width={200}
                height={200}
                alt={item.Symbol}
              />
                          <div className='md:h-32 flex flex-col justify-center'>
                          <h3>{item.nazwa1 ? item.nazwa1 : ""}</h3>
              <h3>{item.nazwa2 ? item.nazwa2 : ""}</h3>
              <h3>{item.nazwa3 ? item.nazwa3 : ""}</h3>
            </div>

            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Lista_technika_grzewcza;
