import React, { useEffect, useRef, useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
const listaAkcesoriow = [
  {
    nazwa1:`WSPORNIKI / DYSTANSE`,
    nazwa2:`DO RUSZTÓW / MASKOWNIC ODPŁYWÓW`,
    mainUrl:`/AKCESORIA/WSPORNIKI/WS_1.jpg`,
    images:[`WS_1.jpg`,`WS_2.jpg`,`WS_3.jpg`,`WS_4.jpg`],
    opis1:`Ruszt odpływu posiada dystanse tłumiąco-wygłuszające zamocowane po bokach, zapobiegające obijaniu się rusztu o koryto odpływowe podczas użytkowania, 
    jak również utrzymają ruszt w idealnym środkowym położeniu w korycie odpływowym 
    oraz zapobiegają jego przesuwaniu się.
    `,
    Symbol:`WSPORNIKI`,

  },
  {
    nazwa1:`HACZYK`,
    nazwa2:`DO WYJMOWANIA RUSZTÓW`,
    opis1:``,
    mainUrl:`/AKCESORIA/HACZYK/haczyk.jpg`,
    images:[`haczyk.jpg`,`G_22.jpg`],
    Symbol:`HACZYK`

  },
  {
    nazwa1:`MATA USZCZELNIAJĄCA`,
     nazwa2:`HYDROIZOLACYJNA`,
    mainUrl:`/AKCESORIA/MATY/M_01.jpg`,
    images:[`M_01.jpg`,`M_1.jpg`,`M_02.jpg`,`M_03.jpg`,`M_04.jpg`,`M_05.jpg`,`Wymiar1.jpg`],
    opis1:`- Mata wykonany ze specjalnego tworzywa hydroizolacyjnego / wodoszczelnego.`,
    opis2:`- Poprawia szczelność połączenia odwodnienia liniowego z podłożem.`,
    opis3:`- Zabezpiecza przed przeciekaniem i przesiąkaniem odprowadzanej wody.`,
    opis4:`- Zapewnia długie i bezproblemowe użytkowanie odpływu.`,
      Symbol:`MATY`
  },
  {
    nazwa1:`NÓŻKI STABILIZACYJNE`,
     nazwa2:`DO ODPŁYWÓW LINIOWYCH`,
    mainUrl:`/AKCESORIA/NOZKI/Nogi1.jpg`,
    images:[`Nogi1.jpg`,`Nogi2.jpg`,`Nogi3.jpg`],
    opis1:`- Nóżki do odpływów liniowych znacznie ułatwiają montaż i odpowiednie wypoziomowanie odpływu w przestrzeni prysznicowej.`,
    opis2:`- Szeroka podstawa nóżek zapewnia stabilność odpływu w trakcie zalewania go betonem.`,
    opis3:`- średnica nóżki: 57 mm`,
    opis4:`- minimalna wysokość: 42 mm`,
    opis5:`- maksymalna wysokość: 54 mm`,
    Symbol:`NOZKI`
  },
  {
    nazwa1:`SYFON z REWIZJĄ`,
    nazwa2:`SZARY / CZARNY`,
    mainUrl:`/AKCESORIA/SYFONY_Rewizja.jpg`,
    images:[`SRP_1.jpg`,`TR_1_RBK_1.jpg`,`SRP_1B.jpg`,`TR_1_RBK_2.jpg`,`SRP_3.jpg`,`TR_1_RBK_4.jpg`,`SRP_5.jpg`,`TR_1_RBK_8.jpg`,],
    opis1:`- UNIWERSALNY - zastosowanie do większości odpływów dostępnych na rynku
    -  do odpływów podłogowych
    -  do odpływów ściennych / bocznych`,
    opis2:`- Nieprzyjemne zapachy zatrzymywane są przez spiętrzony poziom wody w syfonie co zapobiega przedostawaniu się nieprzyjemnych zapachów.
    Sitko/kratka z podłużnymi przegrodami. Zatrzymuje nieczystości, a jednocześnie zapewnia doskonały przepływ wody.`,
    opis3:`- materiał - tworzywo sztuczne (polipropylen)
    - uszczelnienie - dwuwargowa uszczelka (NBR zapewniająca lepszą szczelność
    `,
    opis4:`- otwierana górna pokrywa - łatwość czyszczenia
    - uszczelka dwuwargowa - podwójna szczelność połączenia`,
    opis5:`- Kolory: Czarny / Szary`,
    Symbole1:'Symbole: SZARY - TR1_R',
    Symbole2:'Symbole: CZARNY - TR1_RBK',
    Symbol:`TR1_R`
  },
    {
      nazwa1:`SYFON KULKOWY `,
      nazwa2:`SZARY / CZARNY`,
      mainUrl:`/AKCESORIA/SYFONY_Kulka.jpg`,
      images:[`TR2G_1A2.jpg`,`TR2_KBK_3.jpg`,`TR2G_1C.jpg`,`TR2G_2A.jpg`,`TR2_KBK_6.jpg`,`TR2G_4A.jpg`,`TR2_KBK_7.jpg`,`TR2G_5B.jpg`,`TR2_KBK_4.jpg`,],
      opis1:`- UNIWERSALNY - zastosowanie do większości odpływów dostępnych na rynku
      -  do odpływów podłogowych
      -  do odpływów ściennych / bocznych`,
      opis2:`- Nieprzyjemne zapachy zatrzymywane są przez spiętrzony poziom wody w syfonie lub kiedy woda wyschnie w syfonie opadają wewnętrzne kulki zapobiegając przedostawaniu się nieprzyjemnych zapachów.
      Sitko/kratka z podłużnymi przegrodami. Zatrzymuje nieczystości, a jednocześnie zapewnia doskonały przepływ wody.`,
      opis3:`- materiał - tworzywo sztuczne (polipropylen)
      - uszczelnienie - dwuwargowa uszczelka (NBR zapewniająca lepszą szczelność
      `,
      opis4:`- otwierana górna pokrywa - łatwość czyszczenia
      - uszczelka dwuwargowa - podwójna szczelność połączenia
      - syfon - mokro / suchy`,
      opis5:`Kolory: Czarny / Szary`,
      Symbole1:'Symbole: SZARY - TR2_K',
      Symbole2:'Symbole: CZARNY - TR2_KBK',
      Symbol:`TR2_K`
    }
  

]
function Akcesoria() {
  const imgRef = useRef();
  const [mainImgUrl,setMainImgUrl] = useState("") ;
  const router = useRouter();
  const productId = router.query.AkcesoriaId;
  const changeImage = (e,string) => {
    setMainImgUrl(string);
    
    
  };
  useEffect(() => {
    if(mainImgUrl!="")
  imgRef.current.src=mainImgUrl;

  }, [mainImgUrl])
  
  const obecnyAkc = listaAkcesoriow.filter((akc) => {
    if (akc.Symbol == productId) {
      return akc;
    }
  });
  return (
    <div>
      <Nav />
      <div className="w-52 ">
        {" "}
        <Link
          href="/Lista_Akcesoriow"
          className="p-3 font-semibold flex items-center justify-center"
        >
          <AiOutlineLeft /> POZOSTAŁE AKCESORIA
        </Link>
      </div>
      {obecnyAkc.map((item) => {
        console.log(obecnyAkc)
        if (item.Symbol == productId){
          
          return (
            <div key={item.Symbol} className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center">
                <div className='productImageContainer'>
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
                      <div className='miniProductImageContainer'>
                      <Image
                        className="border cursor-pointer"
                        key={index}
                        src={`/AKCESORIA/${item.Symbol}/${img}`}
                        alt={item.Symbol}
                        height={60}
                        width={60}
                        onClick={(e) => {
                          changeImage(e,`/AKCESORIA/${item.Symbol}/${img}`);
                        }}
                        
                      />
                      </div>

                    );
                  })}
                </div>
              </div>
              <div className="flex font-semibold text-lg justify-center items-center">
                <div>
                  <h1 className=" text-3xl py-5">{item.nazwa1} <br></br> {item.nazwa2}</h1>
                  {item.opis1 ? <p>{item.opis1}</p> : null}
                  {item.opis2 ? <p>{item.opis2}</p> : null}
                  {item.opis3 ? <p>{item.opis3}</p> : null}
                  {item.opis4 ? <p>{item.opis4}</p> : null}
                  {item.opis5 ? <p>{item.opis5}</p> : null}
                  <p> {item.Symbole1 ? item.Symbole1 : item.Symbol}</p>
                  <p> {item.Symbole2 ? item.Symbole2 : ""}</p>
                </div>
              </div>
            </div>
          )};
      })}
      <Footer />
    </div>
  )
}

export default Akcesoria