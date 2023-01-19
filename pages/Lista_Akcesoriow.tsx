import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
const listaAkcesoriow = [
  {
    nazwa1:`SYFON z REWIZJĄ`,
    nazwa2:`SZARY / CZARNY`,
    mainUrl:`/AKCESORIA/SYFONY_Rewizja.jpg`,
    images:[`/AKCESORIA/TR1_R/SRP_1.jpg`,`/AKCESORIA/TR1_R/SRP_1A.jpg`,`/AKCESORIA/TR1_R/SRP_1B.jpg`,`/AKCESORIA/TR1_R/SRP_2.jpg`,`/AKCESORIA/TR1_R/SRP_3.jpg`,`/AKCESORIA/TR1_R/SRP_4.jpg`,`/AKCESORIA/TR1_R/SRP_5.jpg`,`/AKCESORIA/TR1_R/SRP_6.jpg`,],
    opis1:`UNIWERSALNY - zastosowanie do większości odpływów dostępnych na rynku
    -  do odpływów podłogowych
    -  do odpływów ściennych / bocznych`,
    opis2:`Nieprzyjemne zapachy zatrzymywane są przez spiętrzony poziom wody w syfonie co zapobiega przedostawaniu się nieprzyjemnych zapachów.
    Sitko/kratka z podłużnymi przegrodami. Zatrzymuje nieczystości, a jednocześnie zapewnia doskonały przepływ wody.`,
    opis3:`materiał - tworzywo sztuczne (polipropylen)
    - uszczelnienie - dwuwargowa uszczelka (NBR zapewniająca lepszą szczelność
    `,
    opis4:`otwierana górna pokrywa - łatwość czyszczenia
    - uszczelka dwuwargowa - podwójna szczelność połączenia`,
    Symbol:`TR1_R`
  },
    {
      nazwa1:`SYFON KULKOWY `,
      nazwa2:`SZARY / CZARNY`,
      mainUrl:`/AKCESORIA/SYFONY_Kulka.jpg`,
      images:[`/AKCESORIA/TR2_K/TR2G_1A2.jpg`,`/AKCESORIA/TR2_K/TR2G_1B.jpg`,`/AKCESORIA/TR2_K/TR2G_1C.jpg`,`/AKCESORIA/TR2_K/TR2G_2A.jpg`,`/AKCESORIA/TR2_K/TR2G_3A.jpg`,`/AKCESORIA/TR2_K/TR2G_4A.jpg`,`/AKCESORIA/TR2_K/TR2G_5A.jpg`,`/AKCESORIA/TR2_K/TR2G_5B.jpg`,`/AKCESORIA/TR2_K/TR2G_6B.jpg`,],
      opis1:`UNIWERSALNY - zastosowanie do większości odpływów dostępnych na rynku
      -  do odpływów podłogowych
      -  do odpływów ściennych / bocznych`,
      opis2:`Nieprzyjemne zapachy zatrzymywane są przez spiętrzony poziom wody w syfonie lub kiedy woda wyschnie w syfonie opadają wewnętrzne kulki zapobiegając przedostawaniu się nieprzyjemnych zapachów.
      Sitko/kratka z podłużnymi przegrodami. Zatrzymuje nieczystości, a jednocześnie zapewnia doskonały przepływ wody.`,
      opis3:`- materiał - tworzywo sztuczne (polipropylen)
      - uszczelnienie - dwuwargowa uszczelka (NBR zapewniająca lepszą szczelność
      `,
      opis4:`- otwierana górna pokrywa - łatwość czyszczenia
      - uszczelka dwuwargowa - podwójna szczelność połączenia
      - syfon - mokro / suchy`,
      Symbol:`TR2_K`
    },
    {
      nazwa1:`WSPORNIKI / DYSTANSE`,
      nazwa2:`DO RUSZTÓW / MASKOWNIC ODPŁYWÓW`,
      mainUrl:`/AKCESORIA/WSPORNIKI/WS_1.jpg`,
      images:[`/AKCESORIA/WSPORNIKI/WS_1.jpg`,`/AKCESORIA/WSPORNIKI/WS_2.jpg`,`/AKCESORIA/WSPORNIKI/WS_3.jpg`,`/AKCESORIA/WSPORNIKI/WS_4.jpg`],
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
      images:[`/AKCESORIA/HACZYK/haczyk.jpg`,`/AKCESORIA/HACZYK/G_22.jpg`],
      Symbol:`HACZYK`
  
    },
    {
      nazwa1:`MATA USZCZELNIAJĄCA`,
       nazwa2:`HYDROIZOLACYJNA`,
      mainUrl:`/AKCESORIA/MATY/M_01.jpg`,
      images:[`/AKCESORIA/MATY/M_01.jpg`,`/AKCESORIA/MATY/M_1.jpg`,`/AKCESORIA/MATY/M_02.jpg`,`/AKCESORIA/MATY/M_03.jpg`,`/AKCESORIA/MATY/M_04.jpg`,`/AKCESORIA/MATY/M_05.jpg`,`/AKCESORIA/MATY/Wymiar1.jpg`],
      opis1:`Mata wykonany ze specjalnego tworzywa hydroizolacyjnego / wodoszczelnego.`,
      opis2:`Poprawia szczelność połączenia odwodnienia liniowego z podłożem.`,
      opis3:`Zabezpiecza przed przeciekaniem i przesiąkaniem odprowadzanej wody.`,
      opis4:`Zapewnia długie i bezproblemowe użytkowanie odpływu.`,
        Symbol:`MATY`
    },
    {
      nazwa1:`NÓŻKI STABILIZACYJNE`,
       nazwa2:`DO ODPŁYWÓW LINIOWYCH`,
      mainUrl:`/AKCESORIA/NOZKI/Nogi1.jpg`,
      images:[`/AKCESORIA/NOZKI/Nogi1.jpg`,`/AKCESORIA/NOZKI/Nogi2.jpg`,`/AKCESORIA/NOZKI/Nogi3.jpg`],
      opis1:`Nóżki do odpływów liniowych znacznie ułatwiają montaż i odpowiednie wypoziomowanie odpływu w przestrzeni prysznicowej.`,
      opis2:`Szeroka podstawa nóżek zapewnia stabilność odpływu w trakcie zalewania go betonem.`,
      opis3:`średnica nóżki: 57 mm`,
      opis4:`minimalna wysokość: 42 mm`,
      opis5:`maksymalna wysokość: 54 mm`,
      Symbol:`NOZKI`
    },

    

  ]
function Lista_Akcesoriow() {
  return (
    <div>
<Nav/>
<div className='grid md:grid-cols-3 grid-cols-2 text-center p-5'>
        {listaAkcesoriow.map(item=>(
<Link className="m-5 md:hover:scale-105 md:transition-all" href={`/Akcesoria/${item.Symbol}`} key={item.Symbol}>
          <div  className="border m-2 flex flex-col items-center justify-center">
            <Image priority src={item.mainUrl} width={200} height={200} alt={item.Symbol}/>
<div className=' flex flex-col justify-around'>
<h3 className='sm:text-base md:text-lg'>{item.nazwa1}</h3>
<h3 className='sm:text-sm md:text-lg pb-2'>{item.nazwa2}</h3>
</div>

          </div>
          </Link>
          ))}
        </div>
<Footer/>
    </div>
  )
}

export default Lista_Akcesoriow