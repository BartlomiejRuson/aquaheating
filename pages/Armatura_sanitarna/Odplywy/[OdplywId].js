import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
const odplywy = [
  {
    nazwa: `Odpływ liniowy
        prysznicowy / podłogowy
        WZÓR - FALA / WAVE
        `,
    mainUrl: "/ODPLYWY/A01/A01_0.jpg",
    images: [
      "A01_0.jpg",
      "A01_2.jpg",
      "A01_3.jpg",
      "A01_4.jpg",
      "A01_5.jpg",
      "A01_6.jpg",
      "A01_Wym.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 50, 60, 70, 80, 90, 100 cm`,
    Symbol: `A01`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - FALA / WAVE
    CZARNY Matowy
    `,
    mainUrl: "/ODPLYWY/A01BK/A01BK_0.jpg",
    images: [
      "A01BK_0.jpg",
      "A01BK_1.jpg",
      "A01BK_2.jpg",
      "A01BK_3.jpg",
      "A01BK_4.jpg",
      "A01BK_5.jpg",
      "A01BK_7.jpg",
      "A01BK_Wym.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100 cm`,
    Symbol: `A01BK`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - BĄBLE / KROPLE    
    `,
    mainUrl: "/ODPLYWY/A02/A02_0.jpg",
    images: [
      "A02_0.jpg",
      "A02_1.jpg",
      "A02_2.jpg",
      "A02_3.jpg",
      "A02_4.jpg",
      "A02_5.jpg",
      "A02_Wym.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 50, 60, 70, 80, 90, 100 cm`,
    Symbol: `A02`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - BĄBLE / KROPLE
    CZARNY Matowy`,
    mainUrl: "/ODPLYWY/A02BK/A02BK_0.jpg",
    images: [
      "A02BK_0.jpg",
      "A02BK_1.jpg",
      "A02BK_2.jpg",
      "A02BK_3.jpg",
      "A02BK_4.jpg",
      "A02BK_5.jpg",
      "A02BK_7.jpg",
      "A02BK_Wym.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100 cm`,
    Symbol: `A02BK`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - GRECKI / CUBE
    `,
    mainUrl: "/ODPLYWY/A03/A03_0.jpg",
    images: [
      "A03_0.jpg",
      "A03_1.jpg",
      "A03_2.jpg",
      "A03_3.jpg",
      "A03_4.jpg",
      "A03_5.jpg",
      "A03_Wym.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 50, 60, 70, 80, 90, 100 cm`,
    Symbol: `A03`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - GRECKI / CUBE
    CZARNY Matowy`,
    mainUrl: "/ODPLYWY/A03BK/A03BK_0.jpg",
    images: [
      "A03BK_0.jpg",
      "A03BK_1.jpg",
      "A03BK_2.jpg",
      "A03BK_3.jpg",
      "A03BK_4.jpg",
      "A03BK_5.jpg",
      "A03BK_7.jpg",
      "A03BK_Wym.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100 cm`,
    Symbol: `A03BK`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - 2w1 - pod płytkę
    `,
    mainUrl: "/ODPLYWY/A04/A04_0.jpg",
    images: [
      "A04_0.jpg",
      "A04_1.jpg",
      "A04_2.jpg",
      "A04_3.jpg",
      "A04_4.jpg",
      "A04_5.jpg",
      "A04_6.jpg",
      "A04_10.jpg",
      "A04_Wym.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 50, 60, 70, 80, 90, 100,
    110, 120, 140, 150, 200 cm`,
    Symbol: `A04`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - 2w1 - pod płytkę
    CZARNY Matowy`,
    mainUrl: "/ODPLYWY/A04BK/A04BK_0.jpg",
    images: [
      "A04BK_0.jpg",
      "A04BK_1.jpg",
      "A04BK_2.jpg",
      "A04BK_3.jpg",
      "A04BK_4.jpg",
      "A04BK_5.jpg",
      "A04BK_6.jpg",
      "A04BK_10.jpg",
      "A04BK_Wym.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 50, 60, 70, 80, 90, 100, 120  cm`,
    Symbol: `A04BK`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - 2w1 - pod płytkę
    ZŁOTY Matowy
    `,
    mainUrl: "/ODPLYWY/A04GL/A04GL_0.jpg",
    images: [
      "A04GL_0.jpg",
      "A04GL_1.jpg",
      "A04GL_2.jpg",
      "A04GL_3.jpg",
      "A04GL_4.jpg",
      "A04GL_6.jpg",
      "A04GL_8.jpg",
      "A04GL_Wym.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100 cm`,
    Symbol: `A04GL`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - SLIM Kwadrat
    Obrotowy syfon - 360°
    `,
    mainUrl: "/ODPLYWY/FSK01/FSK01_0.jpg",
    images: [
      "FSK01_0.jpg",
      "FSK01_1.jpg",
      "FSK01_3.jpg",
      "FSK01_4.jpg",
      "FSK01_5.jpg",
      "FSK01_6.jpg",
      "FSK01_8.jpg",
      "Wym_FSK01.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Wysokość montażu - tylko 74 mm`,
    opis3: `Szerokość rusztu - tylko 12 mm
    Odpływy Ø40 lub Ø50 mm
    `,
    opis4: `Przepływ - aż 0,5 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `"Syfon obrotowy 360° z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100, 120 cm`,
    Symbol: `FSK01`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - SLIM Kwadrat
    Obrotowy syfon - 360°
    CZARNY Matowy
    `,
    mainUrl: "/ODPLYWY/FSK01BK/FSK01BK_0.jpg",
    images: [
      "FSK01BK_0.jpg",
      "FSK01BK_1.jpg",
      "FSK01BK_3.jpg",
      "FSK01BK_4.jpg",
      "FSK01BK_5.jpg",
      "FSK01BK_6.jpg",
      "FSK01BK_7.jpg",
      "Wym_FSK01BK.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Szerokość odpływu - tylko 25 mm`,
    opis3: `Szerokość rusztu - tylko 12 mm
    Odpływy Ø40 lub Ø50 mm
    `,
    opis4: `Przepływ - aż 0,5 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `"Syfon obrotowy 360° z osadnikiem zanieczyszczeń - CZARNY`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100, 120 cm`,
    Symbol: `FSK01BK`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    WZÓR - SLIM Kwadrat
    Obrotowy syfon - 360°
    ZŁOTY Matowy    
    `,
    mainUrl: "/ODPLYWY/FSK01GL/FSK01GL_0A.jpg",
    images: [
      "FSK01GL_0A.jpg",
      "FSK01GL_1A.jpg",
      "FSK01GL_3.jpg",
      "FSK01GL_4.jpg",
      "FSK01GL_5.jpg",
      "FSK01GL_6.jpg",
      "FSK01GL_8.jpg",
      "FSK01GL_10.jpg",
    ],
    opis1: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)`,
    opis2: `Wysokość montażu - tylko 74 mm
    Szerokość odpływu - tylko 25 mm`,
    opis3: `Szerokość rusztu - tylko 12 mm
    Odpływy Ø40 lub Ø50 mm
    `,
    opis4: `Przepływ - aż 0,5 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `"Syfon obrotowy 360° z osadnikiem zanieczyszczeń - CZARNY`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100, 120 cm`,
    Symbol: `FSK01GL`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    SZKŁO Hartowane - CZARNE
    `,
    mainUrl: "/ODPLYWY/G10BK/G10BK_0.jpg",
    images: [
      "G10BK_0.jpg",
      "G10BK_1.jpg",
      "G10BK_2.jpg",
      "G10BK_3.jpg",
      "G10BK_4.jpg",
      "G10BK_5.jpg",
      "G10BK_6.jpg",
      "G10BK_7.jpg",
      "G10BK_9.jpg",
      "G10BK_Wym.jpg",
    ],
    opis1: `Ruszt - SZKŁO Hartowane - CZARNE`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100 cm`,
    Symbol: `G10BK`,
  },
  {
    nazwa: `Odpływ liniowy 
    prysznicowy / podłogowy
    CZARNY Matowy
    SZKŁO Hartowane - CZARNE`,
    mainUrl: "/ODPLYWY/G12BK/G12BK_0.jpg",
    images: [
      "G12BK_0.jpg",
      "G12BK_1.jpg",
      "G12BK_2.jpg",
      "G12BK_3.jpg",
      "G12BK_4.jpg",
      "G12BK_5.jpg",
      "G12BK_6.jpg",
      "G12BK_7.jpg",
      "G12BK_Wym2.jpg",
    ],
    opis1: `Ruszt - SZKŁO Hartowane - CZARNE`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne długości - 60, 70, 80, 90, 100 cm`,
    Symbol: `G12BK`,
  },
  {
    nazwa: `Odpływ liniowy - KWADRAT
    prysznicowy / podłogowy
    WZÓR - 2w1 - pod płytkę
    `,
    mainUrl: "/ODPLYWY/P04/P04_0.jpg",
    images: [
      "P04_0.jpg",
      "P04_1.jpg",
      "P04_2.jpg",
      "P04_3.jpg",
      "P04_4.jpg",
      "P04_6.jpg",
      "P04_8.jpg",
      "P04_10.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne wymiary - 15x15, 20x20 cm`,
    Symbol: `P04`,
  },
  {
    nazwa: `Odpływ liniowy - KWADRAT
    prysznicowy / podłogowy
    WZÓR - 2w1 - pod płytkę
    CZARNY Matowy`,
    mainUrl: "/ODPLYWY/P04BK/P04BK_0.jpg",
    images: [
      "P04BK_0.jpg",
      "P04BK_1.jpg",
      "P04BK_2.jpg",
      "P04BK_3.jpg",
      "P04BK_4.jpg",
      "P04BK_5.jpg",
      "P04BK_7.jpg",
      "P04BK_8.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Niski montaż  tylko 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń - CZARNY`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne wymiary - 15x15, 20x20 cm`,
    Symbol: `P04BK`,
  },
  {
    nazwa: `Odpływ liniowy
    prysznicowy / podłogowy
    Obrotowy syfon - 360°
    WZÓR - 2w1 - pod płytkę`,
    mainUrl: "/ODPLYWY/R04/R04_0.jpg",
    images: [
      "R04_0.jpg",
      "R04_1.jpg",
      "R04_2.jpg",
      "R04_3.jpg",
      "R04_4.jpg",
      "R04_5.jpg",
      "R04_6.jpg",
      "R04_8.jpg",
      "R04_9.jpg",
      "R04_10.jpg",
      "R04_Wym.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Wysokość montażu - tylko 74 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,5 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon obrotowy 360° z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne wymiary - 50, 60, 70, 80, 90, 100, 120 cm`,
    Symbol: `R04`,
  },
  {
    nazwa: `Odpływ liniowy
    prysznicowy / podłogowy
    Obrotowy syfon - 360°
    WZÓR - 2w1 - pod płytkę CZARNY Matowy`,
    mainUrl: "/ODPLYWY/R04BK/R04BK_0.jpg",
    images: [
      "R04BK_0.jpg",
      "R04BK_1.jpg",
      "R04BK_2.jpg",
      "R04BK_3.jpg",
      "R04BK_4.jpg",
      "R04BK_5.jpg",
      "R04BK_6.jpg",
      "R04BK_7.jpg",
      "R04BK_8.jpg",
      "R04BK_9.jpg",
      "R04BK_Wym.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Wysokość montażu - tylko 74 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,5 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon obrotowy 360° z osadnikiem zanieczyszczeń - CZARNY`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne wymiary - 50, 60, 70, 80, 90, 100, 120 cm`,
    Symbol: `R04BK`,
  },
  {
    nazwa: `Odpływ liniowy
    prysznicowy / ścienny
    WZÓR - 2w1 - pod płytkę
    `,
    mainUrl: "/ODPLYWY/W04/W04N_0.jpg",
    images: [
      "W04N_0.jpg",
      "W04N_1.jpg",
      "W04N_1B.jpg",
      "W04N_2.jpg",
      "W04N_4.jpg",
      "W04N_6.jpg",
      "W04N_7.jpg",
      "W04N_9.jpg",
      "W04N_10.jpg",
      "W04N_Wym1.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Głębokość montażu w ścianie - TYLKO 35 mm
    Wysokość montażu w podłodze - TYLKO 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne wymiary - 50, 60, 70, 80, 90, 100, 120 cm`,
    Symbol: `W04`,
  },
  {
    nazwa: `Odpływ liniowy
    prysznicowy / ścienny
    WZÓR - 2w1 - pod płytkę
    CZARNY Matowy
    `,
    mainUrl: "/ODPLYWY/W04BK/W04BK_N_0.jpg",
    images: [
      "W04BK_N_0.jpg",
      "W04BK_N_1.jpg",
      "W04BK_N_1B.jpg",
      "W04BK_N_2.jpg",
      "W04BK_N_3.jpg",
      "W04BK_N_4.jpg",
      "W04BK_N_5.jpg",
      "W04BK_N_6.jpg",
      "W04BK_N_7.jpg",
      "W04BK_N_8.jpg",
      "W04BK_N_9.jpg",
      "W04BK_N_Wym1.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Głębokość montażu w ścianie - TYLKO 35 mm
    Wysokość montażu w podłodze - TYLKO 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń - CZARNY`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne wymiary - 60, 70, 80, 90, 100, 120 cm`,
    Symbol: `W04BK`,
  },
  {
    nazwa: `Odpływ liniowy
    prysznicowy / ścienny
    WZÓR - 2w1 - pod płytkę
    ZŁOTY Matowy
    `,
    mainUrl: "/ODPLYWY/W04GL/W04GL_0.jpg",
    images: [
      "W04GL_0.jpg",
      "W04GL_1.jpg",
      "W04GL_2.jpg",
      "W04GL_3.jpg",
      "W04GL_4.jpg",
      "W04GL_5.jpg",
      "W04GL_6.jpg",
      "W04GL_7.jpg",
      "W04GL_8.jpg",
      "W04GL_N_Wym1.jpg",
    ],
    opis1: `Dwustronny ruszt`,
    opis2: `Koryto odpływowe oraz ruszt (maskownica) wykonane ze stali nierdzewnej (AISI 304)
    Głębokość montażu w ścianie - TYLKO 35 mm
    Wysokość montażu w podłodze - TYLKO 54 mm`,
    opis3: `Odpływy Ø40 lub Ø50 mm`,
    opis4: `Przepływ - aż 0,6 l/s`,
    opis5: `Mata uszczelniająca ze specjalnej flizeliny hydroizolacyjnej szczelność - 1,5 bar`,
    opis6: `Szerokie nóżki ułatwiające poziomowanie`,
    opis7: `Syfon z osadnikiem zanieczyszczeń`,
    opis8: `Łatwość czyszczenia - od góry`,
    opis9: `Dostępne wymiary - 60, 70, 80, 90, 100 cm`,
    Symbol: `W04GL`,
  },
];

function Odplyw() {
  const imgRef = useRef();
  const [mainImgUrl,setMainImgUrl] = useState("") ;
  const router = useRouter();
  const productId = router.query.OdplywId;
  const changeImage = (e,string) => {
    setMainImgUrl(string);
    
    
  };
  useEffect(() => {
    if(mainImgUrl!="")
  imgRef.current.src=mainImgUrl;

  }, [mainImgUrl])
  
  const obecnyOdplyw = odplywy.filter((odplyw) => {
    if (odplyw.Symbol == productId) {
      return odplyw;
    }
  });

  return (
    <div>
      <Nav />
      <div className="w-52 ">
        {" "}
        <Link
          href="/Armatura_sanitarna/Lista_odplywow"
          className="p-3 font-semibold flex items-center justify-center"
        >
          <AiOutlineLeft /> POZOSTAŁE ODPŁYWY
        </Link>
      </div>
      {obecnyOdplyw.map((item) => {
        console.log(obecnyOdplyw)
        if (item.Symbol == productId){
          
          return (
            <div key={item.Symbol} className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center">
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
                        src={`/ODPLYWY/${item.Symbol}/${img}`}
                        alt={item.Symbol}
                        height={33}
                        width={60}
                        onClick={(e) => {
                          changeImage(e,`/ODPLYWY/${item.Symbol}/${img}`);
                        }}
                        
                      />
                      </div>

                    );
                  })}
                </div>
              </div>
              <div className="flex font-semibold text-lg justify-center items-center">
                <div>
                  <h1 className=" text-3xl py-5">- {item.nazwa}</h1>
                  {item.opis1 ? <p>{item.opis1}</p> : null}
                  {item.opis2 ? <p>{item.opis2}</p> : null}
                  {item.opis3 ? <p>{item.opis3}</p> : null}
                  {item.opis4 ? <p>{item.opis4}</p> : null}
                  {item.opis5 ? <p>{item.opis5}</p> : null}
                  {item.opis6 ? <p>{item.opis6}</p> : null}
                  {item.opis7 ? <p>{item.opis7}</p> : null}
                  {item.opis8 ? <p>{item.opis8}</p> : null}
                  {item.opis9 ? <p>{item.opis9}</p> : null}
                  <p>- Symbol: {item.Symbol}</p>
                </div>
              </div>
            </div>
          )};
      })}
      <Footer />
    </div>
  );
}

export default Odplyw;
