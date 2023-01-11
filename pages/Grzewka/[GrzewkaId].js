import React, { useEffect, useRef, useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
const grzewka = [
    {
        nazwa:`REDUKTOR CIŚNIENIA WODY 1/2”
        z MANOMETREM 6 Bar`,
        mainUrl:`/GRZEWKA/H1012/H1012.jpg`,
        images:[`H1012.jpg`,`H1012_wym.jpg`],
        opis1:`ochrona elementów instalacji wodociągowej przed nadmiernym ciśnieniem wejściowym`,
        opis2:`stabilizacja ciśnienia wyjściowego`,
        opis3:`redukcja szumów w instalacji - dzięki stabilizacji i obniżeniu ciśnienia zostają zmniejszone szumy przepływu w instalacji`,
        opis4:`ZASTOSOWANIE
        instalacje domowe - mieszkania, domy jednorodzinne
        instalacje przemysłowe - hotele, budynki biurowe, budynki handlowo-usługowe, budynki magazynowe`,
        opis5:`ciśnienie maksymalne - wlot - 16 bar
        `,
        opis6:`maksymalna temperatura pracy - 65°C
        `,
        opis7:`przyłącza - 1/2" GW
        `,
        opis8:`zastosowanie (medium) - woda
        `,
        opis9:`materiał - mosiądz
        `,
        opis10:`powłoka zewnętrzna - niklowana
        `,
        opis11:`manometr - 1 ÷ 6 bar
        `,
        Symbol:"H1012"
    },
    {
        nazwa:`REDUKTOR CIŚNIENIA WODY 3/4”
        z MANOMETREM 6 Bar`,
        mainUrl:`/GRZEWKA/H1034/H1034.jpg`,
        images:[`H1034.jpg`,`H1034_wym.jpg`],
        opis1:`ochrona elementów instalacji wodociągowej przed nadmiernym ciśnieniem wejściowym`,
        opis2:`stabilizacja ciśnienia wyjściowego`,
        opis3:`redukcja szumów w instalacji - dzięki stabilizacji i obniżeniu ciśnienia zostają zmniejszone szumy przepływu w instalacji`,
        opis4:`ZASTOSOWANIE
        instalacje domowe - mieszkania, domy jednorodzinne
        instalacje przemysłowe - hotele, budynki biurowe, budynki handlowo-usługowe, budynki magazynowe`,
        opis5:`ciśnienie maksymalne - wlot - 16 bar 
        zakres regulacji - wylot - 1 ÷ 6 bar
        `,
        opis6:`maksymalna temperatura pracy - 65°C
        `,
        opis7:`przyłącza - 3/4" GW
        `,
        opis8:`zastosowanie (medium) - woda
        `,
        opis9:`materiał - mosiądz
        `,
        opis10:`powłoka zewnętrzna - niklowana
        `,
        opis11:`manometr - 1 ÷ 6 bar
        `,
        Symbol:"H1034"
    },
    {
        nazwa:`PODTYNKOWY - KASETOWY 
        OGRANICZNIK TEMPERATURY - RTL 3/4" - KĄTOWY`,
        mainUrl:`/GRZEWKA/H1069/H1069_RTL_K_0.jpg`,
        images:[`H1069_RTL_K_0.jpg`,`H1069_RTL_K_1.jpg`,`H1069_RTL_K_6.jpg`,`H1069_RTL_K_7.jpg`,`H1069_RTL_K_8B.jpg`,`H1069_RTL_K_8W.jpg`,`H1069_RTL_K_9.jpg`,`H1069_RTL_K_10.jpg`,`H1069_RTL_K_10W.jpg`,`H1069_RTL_K_10WR.jpg`,`H1069_RTL_K_11.jpg`,],
        opis1:`materiał – mosiądz`,
        opis2:`ciśnienie robocze - 10bar`,
        opis3:`powierzchnia grzewcza – do 20 m2`,
        opis4:`medium – woda
        `,
        opis5:`przyłącza - 3/4"
        (do złączek PEX 16,0 mm lub miedź 15,0 mm)`,
        opis6:`głowica termostatyczna - M30x1,5
        `,
        opis7:`zakres nastawy - 1 ÷ 5
        `,
        opis8:`odpowietrznik`,
        opis9:`skrzynka podtynkowa - tworzywo sztuczne PP (polipropylen)`,
        opis10:`wymiar maskownicy zewnętrznej - 155 x 205 mm
        wymiar skrzynki podtynkowej - 130 x 185 mm`,
        opis11:`głębokość montażu - 60 ÷ 80 mm`,
        Symbol:"H1069"
    },
    {
        nazwa:`PODTYNKOWY - KASETOWY 
        OGRANICZNIK TEMPERATURY - RTL 3/4" - PROSTY
        `,
        mainUrl:`/GRZEWKA/H1070/H1070_RTL_P_0.jpg`,
        images:[`H1070_RTL_P_0.jpg`,`H1070_RTL_P_1.jpg`,`H1070_RTL_P_6B.jpg`,`H1070_RTL_P_7.jpg`,`H1070_RTL_P_8B.jpg`,`H1070_RTL_P_8W.jpg`,`H1070_RTL_P_10WR2.jpg`,`H1070_RTL_P_10.jpg`,`H1070_RTL_P_10W.jpg`,`H1070_RTL_P_11.jpg`,],
        opis1:`materiał – mosiądz`,
        opis2:`ciśnienie robocze - 10bar`,
        opis3:`powierzchnia grzewcza – do 20 m2`,
        opis4:`medium – woda
        `,
        opis5:`przyłącza - 3/4"
        (do złączek PEX 16,0 mm lub miedź 15,0 mm)`,
        opis6:`głowica termostatyczna - M30x1,5
        `,
        opis7:`zakres nastawy - 10 ÷ 50°C
        `,
        opis8:`odpowietrznik`,
        opis9:`skrzynka podtynkowa - tworzywo sztuczne PP (polipropylen)`,
        opis10:`wymiar maskownicy zewnętrznej - 155 x 205 mm
        wymiar skrzynki podtynkowej - 130 x 185 mm`,
        opis11:`głębokość montażu - 60 ÷ 80 mm`,
        Symbol:"H1070"
    },
    {
        nazwa:`MIARKOWNIK CIĄGU 
        POWIETRZA PIECA / KOTŁA - 3/4”`,
        mainUrl:`/GRZEWKA/H1091/Miarkownik_1.jpg`,
        images:[`Miarkownik_1.jpg`,`Miarkownik_2.jpg`,`Miarkownik_3.jpg`,`Miarkownik_4.jpg`,`Miarkownik_5.jpg`],
        opis1:`Miarkownik ciągu powietrza, to regulator termostatyczny, sterujący temperaturą wody w piecu / kotle, poprzez zwiększanie lub zmniejszanie ilości powietrza potrzebnego do spalenia paliwa.`,
        opis2:`Pod wpływem zmian temperatury wody w piecu / kotle, głowica termostatyczna regulatora (miarkownika), przy pomocy dźwigni i łańcuszka uchyla lub przymyka klapę pieca, zwiększając lub zmniejszając dopływ powietrza (ciągu) do paleniska.`,
        opis3:`ZASTOSOWANIE
        piece / kotły opalane paliwami stałymi takimi jak np: węgiel, koks, miał, drewno`,
        opis4:`przyłącze - 3/4" GW`,
        opis5:`regulacja temperatury wody - 30 ÷ 90°C`,
        opis6:`montaż - pionowy lub poziomy`,
        opis7:`długość łańcuszka - 130 cm`,
        Symbol:"H1091"
    },
    {
        nazwa:`SPRZĘGŁO HYDRAULICZNE
        4x1”  --  2x1/2”
        z ODPOWIETRZNIKIEM i ZAWOREM SPUSTOWYM`,
        mainUrl:`/GRZEWKA/H1141/H1141.jpg`,
        images:[`H1141.jpg`,`H1141_2.jpg`,`H1141_3.jpg`,`H1141_4.jpg`],
        opis1:`W średnich i dużych instalacjach składających się z kilku obiektów grzewczych. 
        Przez rozdzielenie hydrauliczne obiegów kotłowego i grzewczego uzyskuje się zmniejszenie wielkości zasilania, poprawę pracy, równomierność zasilenia pionów i łatwiejsze sterowanie systemem. Sprzęgło zmniejsza również straty energii i zakłócenia akustyczne.`,
        opis2:`Funkcje:
        ⦁	Hydraulicznego odprężenia obwodów kotła (kotłów) i instalacji grzewczej
        ⦁	Separatora powietrza`,
        opis3:`Sprzęgło hydrauliczne zamontowane w system grzewczy powoduje odprężenie hydrauliczne obiegów zasilających jednego lub wielokotłowych od obiegów grzewczych, co ułatwia regulację systemu i zmniejsza straty energetyczne.`,
        opis4:`Sprzęgło zamontowane w układzie grzewczym powoduje odmulanie i odpowietrzanie układu.`,
        opis5:`Zalety:
        ⦁	Brak oddziaływania hydraulicznego pomiędzy zasileniem, a obiegami grzewczymi
        ⦁	Zastosowanie w instalacjach jedno i wielokotłowych
        ⦁	Dowolność stosowania systemów regulacyjnych
        ⦁	Łatwiejsze zwymiarowanie pompy w obiegu kotłowym
        ⦁	Łatwiejszy dobór zaworów regulacyjnych
        ⦁	Chroni przed korozją niskotemperaturową
        `,
        opis6:`Charakterystyka:
        ⦁	Króćce przyłączeniowe :  4x1"
        ⦁	Średnica: 76mm
        ⦁	Przepływ: max 4800 l/h
        ⦁	Pojemność: 1400 ml
        ⦁	Ciśnienie nominalne: 10bar
        ⦁	Temperatura pracy: max 90°C
        ⦁	Waga: 2180g
        ⦁	Ocieplenie: twarda pianka polietylenowa (XLPE)`,
        Symbol:"H1141"
    },
    {
        nazwa:`SPRZĘGŁO HYDRAULICZNE
        6x1”  --  2x1/2”
        z ODPOWIETRZNIKIEM i ZAWOREM SPUSTOWYM
        `,
        mainUrl:`/GRZEWKA/H1143/H1143.jpg`,
        images:[`H1143.jpg`,`H1143_2.jpg`,`H1143_2B.jpg`,`H1143_3.jpg`],
        opis1:`W średnich i dużych instalacjach składających się z kilku obiektów grzewczych. 
        Przez rozdzielenie hydrauliczne obiegów kotłowego i grzewczego uzyskuje się zmniejszenie wielkości zasilania, poprawę pracy, równomierność zasilenia pionów i łatwiejsze sterowanie systemem. Sprzęgło zmniejsza również straty energii i zakłócenia akustyczne.`,
        opis2:`Funkcje:
        ⦁	Hydraulicznego odprężenia obwodów kotła (kotłów) i instalacji grzewczej
        ⦁	Separatora powietrza`,
        opis3:`Sprzęgło hydrauliczne zamontowane w system grzewczy powoduje odprężenie hydrauliczne obiegów zasilających jednego lub wielokotłowych od obiegów grzewczych, co ułatwia regulację systemu i zmniejsza straty energetyczne.`,
        opis4:`Sprzęgło zamontowane w układzie grzewczym powoduje odmulanie i odpowietrzanie układu.`,
        opis5:`Zalety:
        ⦁	Brak oddziaływania hydraulicznego pomiędzy zasileniem, a obiegami grzewczymi
        ⦁	Zastosowanie w instalacjach jedno i wielokotłowych
        ⦁	Dowolność stosowania systemów regulacyjnych
        ⦁	Łatwiejsze zwymiarowanie pompy w obiegu kotłowym
        ⦁	Łatwiejszy dobór zaworów regulacyjnych
        ⦁	Chroni przed korozją niskotemperaturową
        `,
        opis6:`Charakterystyka:
        ⦁	Króćce przyłączeniowe :  6x1"
        ⦁	Średnica: 76mm
        ⦁	Przepływ: max 6600 l/h
        ⦁	Pojemność: 1900 ml
        ⦁	Ciśnienie nominalne: 10bar
        ⦁	Temperatura pracy: max 90°C
        ⦁	Waga: 2180g
        ⦁	Ocieplenie: twarda pianka polietylenowa (XLPE)`,
        Symbol:"H1143"
    },
    {
        nazwa:`ZAWÓR GRZEJNIKOWY TERMOSTATYCZNY 
        UNICO -- JEDNOOTWOROWY UNIWERSALNY
        KĄTOWO - PROSTY / LEWO- PRAWY
        CZARNY`,
        mainUrl:`/GRZEWKA/H2006BK/H2006BK_0C.jpg`,
        images:[`H2006BK_0C.jpg`,`H2006BK_1C.jpg`,`H2006BK_2C.jpg`,`H2006BK_3C.jpg`,`H2006BK_4C.jpg`,`H2006BK_5C.jpg`,`H2006BK_15.jpg`],
        opis1:`Rodzaj przyłącza : UNIWERSALNY (kątowy lub prosty / lewy lub prawy)`,
        opis2:`Maksymalna temperatura pracy : 120°C`,
        opis3:`Maksymalne ciśnienie pracy : 10 bar`,
        opis4:`Regulacja temperatury grzejnika : ręczna`,
        opis5:`Głowica termostatyczna : M30x1,5`,
        opis6:`Rozstaw przyłącza : 50mm`,
        opis7:`Złączki przyłączeniowe : PEX 16mm lub Miedź 15mm`,
        opis8:`Kolor : CZARNY`,
        opis9:`ZESTAW
        ⦁	zawór termostatyczny jednootworowy - 1szt
        ⦁	głowica termostatyczna - 1szt
        ⦁	złączki - PEX 16mm - 1 para
        ⦁	złączki - Miedź 15mm - 1 para
        `,
        opis10:`przyłącza - grzejniki łazienkowe (drabinki)`,
        Symbol:"H2006BK"
    },
    {
        nazwa:`ZAWÓR GRZEJNIKOWY TERMOSTATYCZNY 
        UNICO -- JEDNOOTWOROWY UNIWERSALNY
        KĄTOWO - PROSTY / LEWO- PRAWY
        CHROM POŁYSK`,
        mainUrl:`/GRZEWKA/H2006CH/ZGJO-CH_0B.jpg`,
        images:[`ZGJO-CH_0B.jpg`,`ZGJO-CH_1B.jpg`,`ZGJO-CH_2B.jpg`,`ZGJO-CH_3B.jpg`,`ZGJO-CH_4B.jpg`,`ZGJO-CH_5X.jpg`,`ZGJO-CH_7.jpg`],
        opis1:`Rodzaj przyłącza : UNIWERSALNY (kątowy lub prosty / lewy lub prawy)`,
        opis2:`Maksymalna temperatura pracy : 120°C`,
        opis3:`Maksymalne ciśnienie pracy : 10 bar`,
        opis4:`Regulacja temperatury grzejnika : ręczna`,
        opis5:`Głowica termostatyczna : M30x1,5`,
        opis6:`Rozstaw przyłącza : 50mm`,
        opis7:`Złączki przyłączeniowe : PEX 16mm lub Miedź 15mm`,
        opis8:`Kolor : CHROM POŁYSK`,
        opis9:`ZESTAW
        ⦁	zawór termostatyczny jednootworowy - 1szt
        ⦁	głowica termostatyczna - 1szt
        ⦁	złączki - PEX 16mm - 1 para
        ⦁	złączki - Miedź 15mm - 1 para
        `,
        opis10:`przyłącza - grzejniki łazienkowe (drabinki)`,
        Symbol:"H2006CH"
    },
    {
        nazwa:`ZAWÓR GRZEJNIKOWY TERMOSTATYCZNY 
        UNICO -- JEDNOOTWOROWY UNIWERSALNY
        KĄTOWO - PROSTY / LEWO- PRAWY
        GRAFIT -- ANTRACYT`,
        mainUrl:`/GRZEWKA/H2006GR/ZGJO-GR_0.jpg`,
        images:[`ZGJO-GR_0.jpg`,`ZGJO-GR_1.jpg`,`ZGJO-GR_2.jpg`,`ZGJO-GR_3.jpg`,`ZGJO-GR_4.jpg`,`ZGJO-GR_6B.jpg`,`ZGJO-GR_7B.jpg`],
        opis1:`Rodzaj przyłącza : UNIWERSALNY (kątowy lub prosty / lewy lub prawy)`,
        opis2:`Maksymalna temperatura pracy : 120°C`,
        opis3:`Maksymalne ciśnienie pracy : 10 bar`,
        opis4:`Regulacja temperatury grzejnika : ręczna`,
        opis5:`Głowica termostatyczna : M30x1,5`,
        opis6:`Rozstaw przyłącza : 50mm`,
        opis7:`Złączki przyłączeniowe : PEX 16mm lub Miedź 15mm`,
        opis8:`Kolor : GRAFIT  --  ANTRACYT`,
        opis9:`ZESTAW
        ⦁	zawór termostatyczny jednootworowy - 1szt
        ⦁	głowica termostatyczna - 1szt
        ⦁	złączki - PEX 16mm - 1 para
        ⦁	złączki - Miedź 15mm - 1 para
        `,
        opis10:`przyłącza - grzejniki łazienkowe (drabinki)`,
        Symbol:"H2006GR"
    },
    {
        nazwa:`ZAWÓR GRZEJNIKOWY TERMOSTATYCZNY 
        UNICO -- JEDNOOTWOROWY UNIWERSALNY
        KĄTOWO - PROSTY / LEWO- PRAWY
        BIAŁY`,
        mainUrl:`/GRZEWKA/H2006WH/ZGJO-WH_0.jpg`,
        images:[`ZGJO-WH_0.jpg`,`ZGJO-WH_1.jpg`,`ZGJO-WH_2B.jpg`,`ZGJO-WH_3.jpg`,`ZGJO-WH_4B.jpg`,`ZGJO-WH_7.jpg`,`ZGJO-WH_7B.jpg`],
        opis1:`Rodzaj przyłącza : UNIWERSALNY (kątowy lub prosty / lewy lub prawy)`,
        opis2:`Maksymalna temperatura pracy : 120°C`,
        opis3:`Maksymalne ciśnienie pracy : 10 bar`,
        opis4:`Regulacja temperatury grzejnika : ręczna`,
        opis5:`Głowica termostatyczna : M30x1,5`,
        opis6:`Rozstaw przyłącza : 50mm`,
        opis7:`Złączki przyłączeniowe : PEX 16mm lub Miedź 15mm`,
        opis8:`Kolor : BIAŁY`,
        opis9:`ZESTAW
        ⦁	zawór termostatyczny jednootworowy - 1szt
        ⦁	głowica termostatyczna - 1szt
        ⦁	złączki - PEX 16mm - 1 para
        ⦁	złączki - Miedź 15mm - 1 para
        `,
        opis10:`przyłącza - grzejniki łazienkowe (drabinki)`,
        Symbol:"H2006WH"
    },
    {
        nazwa:`REDUKTOR CIŚNIENIA WODY 1”
        z FILTREM SIATKOWYM`,
        mainUrl:`/GRZEWKA/H3010/H3010_1.jpg`,
        images:[`H3010_1.jpg`,`H3010_2.jpg`,`H3010_3.jpg`],
        opis1:`DZIAŁANIE
        ⦁	Praca zaworu w czasie przepływu
W przypadku otwarcia punktu czerpalnego w instalacji siła nacisku sprężyny przeważa nad przeciwstawną siłą nacisku membrany, grzybek zaworu przesuwa się ku dołowi, pozwalając na przepływ wody. Im wyższe jest zapotrzebowanie wody tym mniejsze jest ciśnienie działające na membranę co pozwala na większy przepływ wody przez urządzenie.
⦁	Praca zaworu bez przepływu
W przypadku zamknięcia punktów czerpalnych w instalacji, ciśnienie wyjściowe rośnie i wypycha membranę ku górze. Grzybek zaworu jest zamknięty uniemożliwiając przepływ przez urządzenie jednocześnie utrzymując ciśnienie na poziomie zgodnym z nastawą. Różnica siły wytwarzanej przez membranę w odniesieniu do siły wytwarzanej przez sprężynę powoduję zamknięcie zaworu.
⦁	Filtrowanie (oczyszczanie wody)
Woda wpływając do filtra, dostaje się do komory filtracyjnej, od zewnętrznej strony przepływa przez sito filtracyjne, na powierzchni którego zatrzymują się zanieczyszczenia.
`,
        opis2:`materiał (korpus) - mosiądz `,
        opis3:`medium - woda`,
        opis4:`przyłącza - 1" (z półśrubunkami)`,
        opis5:`max. ciśnienie wejściowe - 16 bar`,
        opis6:`zakres ciśnienia wyjściowego - 1 ÷ 6 bar`,
        opis7:`max. temperatura medium - 40°C`,
        opis8:`manometr - 10 bar`,
        opis9:`filtr siatkowy - stal nierdzewna`,
        opis10:`montaż - poziomy`,
        Symbol:"H3010"
    },
    {
        nazwa:`REDUKTOR CIŚNIENIA WODY 3/4”
        z FILTREM SIATKOWYM`,
        mainUrl:`/GRZEWKA/H3034/H3034_1.jpg`,
        images:[`H3034_1.jpg`,`H3034_2.jpg`,`H3034_3.jpg`],
        opis1:`DZIAŁANIE
        ⦁	Praca zaworu w czasie przepływu
W przypadku otwarcia punktu czerpalnego w instalacji siła nacisku sprężyny przeważa nad przeciwstawną siłą nacisku membrany, grzybek zaworu przesuwa się ku dołowi, pozwalając na przepływ wody. Im wyższe jest zapotrzebowanie wody tym mniejsze jest ciśnienie działające na membranę co pozwala na większy przepływ wody przez urządzenie.
⦁	Praca zaworu bez przepływu
W przypadku zamknięcia punktów czerpalnych w instalacji, ciśnienie wyjściowe rośnie i wypycha membranę ku górze. Grzybek zaworu jest zamknięty uniemożliwiając przepływ przez urządzenie jednocześnie utrzymując ciśnienie na poziomie zgodnym z nastawą. Różnica siły wytwarzanej przez membranę w odniesieniu do siły wytwarzanej przez sprężynę powoduję zamknięcie zaworu.
⦁	Filtrowanie (oczyszczanie wody)
Woda wpływając do filtra, dostaje się do komory filtracyjnej, od zewnętrznej strony przepływa przez sito filtracyjne, na powierzchni którego zatrzymują się zanieczyszczenia.
`,
        opis2:`materiał (korpus) - mosiądz `,
        opis3:`medium - woda`,
        opis4:`przyłącza - 3/4" (z półśrubunkami)`,
        opis5:`max. ciśnienie wejściowe - 16 bar`,
        opis6:`zakres ciśnienia wyjściowego - 1 ÷ 6 bar`,
        opis7:`max. temperatura medium - 40°C`,
        opis8:`manometr - 10 bar`,
        opis9:`filtr siatkowy - stal nierdzewna`,
        opis10:`montaż - poziomy`,
        Symbol:"H3034"
    },
    {
        nazwa:`REDUKTOR CIŚNIENIA WODY 1”
        z FILTREM SIATKOWYM SAMOCZYSZCZĄCYM`,
        mainUrl:`/GRZEWKA/H3210/H3210_1.jpg`,
        images:[`H3210_1.jpg`,`H3210_2.jpg`,`H3210_3.jpg`],
        opis1:`DZIAŁANIE
        ⦁	Praca zaworu w czasie przepływu
W przypadku otwarcia punktu czerpalnego w instalacji siła nacisku sprężyny przeważa nad przeciwstawną siłą nacisku membrany, grzybek zaworu przesuwa się ku dołowi, pozwalając na przepływ wody. Im wyższe jest zapotrzebowanie wody tym mniejsze jest ciśnienie działające na membranę co pozwala na większy przepływ wody przez urządzenie.
⦁	Praca zaworu bez przepływu
W przypadku zamknięcia punktów czerpalnych w instalacji, ciśnienie wyjściowe rośnie i wypycha membranę ku górze. Grzybek zaworu jest zamknięty uniemożliwiając przepływ przez urządzenie jednocześnie utrzymując ciśnienie na poziomie zgodnym z nastawą. Różnica siły wytwarzanej przez membranę w odniesieniu do siły wytwarzanej przez sprężynę powoduję zamknięcie zaworu.
⦁	Filtrowanie (oczyszczanie wody)
Woda wpływając do filtra, dostaje się do komory filtracyjnej, od zewnętrznej strony przepływa przez sito filtracyjne, na powierzchni którego zatrzymują się zanieczyszczenia.
`,
        opis2:`materiał (korpus) - mosiądz `,
        opis3:`medium - woda`,
        opis4:`przyłącza - 1" (z półśrubunkami)`,
        opis5:`max. ciśnienie wejściowe - 16 bar`,
        opis6:`zakres ciśnienia wyjściowego - 1 ÷ 6 bar`,
        opis7:`max. temperatura medium - 40°C`,
        opis8:`manometr - 10 bar`,
        opis9:`filtr siatkowy - stal nierdzewna`,
        opis10:`montaż - poziomy`,
        Symbol:"H3210"
    },
    {
        nazwa:`REDUKTOR CIŚNIENIA WODY 3/4”
        z FILTREM SIATKOWYM SAMOCZYSZCZĄCYM`,
        mainUrl:`/GRZEWKA/H3234/H3234_1.jpg`,
        images:[`H3234_1.jpg`,`H3234_2.jpg`,`H3234_3.jpg`],
        opis1:`DZIAŁANIE
        ⦁	Praca zaworu w czasie przepływu
W przypadku otwarcia punktu czerpalnego w instalacji siła nacisku sprężyny przeważa nad przeciwstawną siłą nacisku membrany, grzybek zaworu przesuwa się ku dołowi, pozwalając na przepływ wody. Im wyższe jest zapotrzebowanie wody tym mniejsze jest ciśnienie działające na membranę co pozwala na większy przepływ wody przez urządzenie.
⦁	Praca zaworu bez przepływu
W przypadku zamknięcia punktów czerpalnych w instalacji, ciśnienie wyjściowe rośnie i wypycha membranę ku górze. Grzybek zaworu jest zamknięty uniemożliwiając przepływ przez urządzenie jednocześnie utrzymując ciśnienie na poziomie zgodnym z nastawą. Różnica siły wytwarzanej przez membranę w odniesieniu do siły wytwarzanej przez sprężynę powoduję zamknięcie zaworu.
⦁	Filtrowanie (oczyszczanie wody)
Woda wpływając do filtra, dostaje się do komory filtracyjnej, od zewnętrznej strony przepływa przez sito filtracyjne, na powierzchni którego zatrzymują się zanieczyszczenia.
`,
        opis2:`materiał (korpus) - mosiądz `,
        opis3:`medium - woda`,
        opis4:`przyłącza - 3/4" (z półśrubunkami)`,
        opis5:`max. ciśnienie wejściowe - 16 bar`,
        opis6:`zakres ciśnienia wyjściowego - 1 ÷ 6 bar`,
        opis7:`max. temperatura medium - 40°C`,
        opis8:`manometr - 10 bar`,
        opis9:`filtr siatkowy - stal nierdzewna`,
        opis10:`montaż - poziomy`,
        Symbol:"H3234"
    },
]
function Grzewka() {
    const imgRef = useRef();
    const [mainImgUrl,setMainImgUrl] = useState("") ;
    const router = useRouter();
    const productId = router.query.GrzewkaId;
    const changeImage = (e,string) => {
      setMainImgUrl(string);
      
      
    };
    useEffect(() => {
      if(mainImgUrl!="")
    imgRef.current.src=mainImgUrl;
  
    }, [mainImgUrl])
    
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
        console.log(obecnyGrze)
        if (item.Symbol == productId){
          
          return (
            <div key={item.Symbol} className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  ref={imgRef}
                  className="p-3"
                  src={item.mainUrl}
                  width={500}
                  height={500}
                  alt={item.Symbol}
                  priority
                />
                <div className="grid grid-rows-2 grid-cols-5 gap-2">
                  {item.images.map((img, index) => {
                    
                    return (
                      <Image
                        className="border cursor-pointer"
                        key={index}
                        src={`/GRZEWKA/${item.Symbol}/${img}`}
                        alt={item.Symbol}
                        height={33}
                        width={60}
                        onClick={(e) => {
                          changeImage(e,`/GRZEWKA/${item.Symbol}/${img}`);
                        }}
                        
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex font-semibold text-lg justify-center items-center">
                <div>
                  <h1 className=" text-3xl py-5">- {item.nazwa}</h1>
                  <p>- {item?.opis1}</p>
                  <p>- {item?.opis2}</p>
                  <p>- {item?.opis3}</p>
                  <p>- {item?.opis4}</p>
                  <p>- {item?.opis5}</p>
                  <p>- {item?.opis6}</p>
                  <p>- {item?.opis7}</p>
                  <p>- {item?.opis8}</p>
                  <p>- {item?.opis9}</p>
                  <p>- {item?.opis10}</p>
                  <p>- {item?.opis11}</p>
                  <p>- Symbol: {item.Symbol}</p>
                </div>
              </div>
            </div>
          )};
      })}
      <Footer />
    </div>
  )
}

export default Grzewka