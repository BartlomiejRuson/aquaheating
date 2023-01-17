import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Image from "next/image";
import Link from "next/link";

const zlewy = [
  {
    nazwa1:
      `ZLEW / KOMORA GOSPODARCZA`,
      nazwa2:
      `SATYNOWA MATOWA - 55 x 45 x 21 cm`,
    Symbol: `K9145TB`,
    mainUrl: `/ZLEWY/K9145TB/K9145TB_1.jpg`,
    images:[`K9145TB_1.jpg`,`K9145TB_2.jpg`,`K9145TB_3.jpg`,`K9145TB_4.jpg`,`K9145TB_5.jpg`,`K9145TB_6.jpg`,`K9145TB_7.jpg`,`K9145TB_8.jpg`,`K9145TB_9.jpg`],
    wymiaryUrl:`K9145TB_Size_1.jpg`,
    aranzacjaUrl:`K9145TB_Aranz.jpg`,
    opis1:`materiał - stal nierdzewna satynowa/szczotkowana/czesana bardzo łatwy w utrzymaniu czystości`,
    opis2:`grubość stali - 1 mm`,
    opis3:`wymiar - dł x szer x gł 550 x 450 x 210 mm`,
    opis4:`montaż - do ściany lub wpuszczany w blat w komplecie zestaw do montażu do ściany`,
    opis5:`odpływ - Ø 70 w komplecie syfon butelkowy 70x40`,
    opis6:`zaokrąglone krawędzie poprawiające bezpieczeństwo użytkowania komory`,
    EAN:`5904806581754`
  },
  {
    nazwa1:
      `ZLEW / KOMORA GOSPODARCZA`,
      nazwa2:
      `CHROM POŁYSK - 55 x 45 x 21 cm`,  
    Symbol: `K9145TP`,
    mainUrl: `/ZLEWY/K9145TP/K9145TP_1.jpg`,
    images:[`K9145TP_1.jpg`,`K9145TP_2.jpg`,`K9145TP_3.jpg`,`K9145TP_4.jpg`,`K9145TP_5.jpg`,`K9145TP_6.jpg`,`K9145TP_7.jpg`,`K9145TP_8.jpg`,`K9145TP_9.jpg`],
    wymiaryUrl:`K9145TP_Size_1.jpg`,
    aranzacjaUrl:`K9145TP_Aranz.jpg`,
    opis1:`materiał - stal nierdzewna 
    wykończenie - stal - CHROM POŁYSK`,
    opis2:`grubość stali - 1 mm`,
    opis3:`wymiar - dł x szer x gł 550 x 450 x 210 mm`,
    opis4:`montaż - do ściany lub wpuszczany w blat w komplecie zestaw do montażu do ściany`,
    opis5:`odpływ - Ø 70 w komplecie syfon butelkowy 70x40`,
    opis6:`zaokrąglone krawędzie poprawiające bezpieczeństwo użytkowania komory`,
    EAN:`5904806581761`
  },
  {
    nazwa1:
      `ZLEW / KOMORA GOSPODARCZA`,
      nazwa2:
      `SATYNOWA MATOWA Z PÓŁKĄ - 55 x 50 x 21 cm`,
    Symbol: `K9146TB`,
    mainUrl: `/ZLEWY/K9146TB/K9146TB_1.jpg`,
    images:[`K9146TB_1.jpg`,`K9146TB_2.jpg`,`K9146TB_3.jpg`,`K9146TB_4.jpg`,`K9146TB_5.jpg`,`K9146TB_6.jpg`,`K9146TB_7.jpg`,`K9146TB_8.jpg`,`K9146TB_9.jpg`,`K9146TB_10.jpg`,`K9146TB_11.jpg`],
    wymiaryUrl:`K9146TB_Size_1.jpg`,
    aranzacjaUrl:`K9146TB_Aranz.jpg`,
    opis1:`materiał - stal nierdzewna 
    wykończenie - stal - satynowa/szczotkowana/czesana`,
    opis2:`półka - szerokość 50 mm`,
    opis3:`otwór (z zaślepką) do montażu baterii stojącej`,
    opis4:`grubość stali - 1 mm`,
    opis5:`wymiar - dł x szer x gł 550 x 500 x 210 mm`,
    opis6:`montaż - do ściany lub wpuszczany w blat w komplecie zestaw do montażu do ściany`,
    opis7:`odpływ - Ø 70 w komplecie syfon butelkowy 70x40`,
    opis8:`zaokrąglone krawędzie poprawiające bezpieczeństwo użytkowania komory`,
    EAN:`5904806581778`
  },
  {
    nazwa1:
      `ZLEW / KOMORA GOSPODARCZA`,
      nazwa2:
      `CHROM POŁYSK  Z PÓŁKĄ - 55 x 50 x 21 cm`,
    Symbol: `K9146TP`,
    mainUrl: `/ZLEWY/K9146TP/K9146TP_1.jpg`,
    images:[`K9146TP_1.jpg`,`K9146TP_2.jpg`,`K9146TP_3.jpg`,`K9146TP_4.jpg`,`K9146TP_5.jpg`,`K9146TP_6.jpg`,`K9146TP_7.jpg`,`K9146TP_8.jpg`,`K9146TP_9.jpg`,`K9146TP_10.jpg`,`K9146TP_11.jpg`],
    wymiaryUrl:`K9146TP_Size_1.jpg`,
    aranzacjaUrl:`K9146TP_Aranz.jpg`,
    opis1:`materiał - stal nierdzewna 
    wykończenie - stal - satynowa/szczotkowana/czesana`,
    opis2:`półka - szerokość 50 mm`,
    opis3:`otwór (z zaślepką) do montażu baterii stojącej`,
    opis4:`grubość stali - 1 mm`,
    opis5:`wymiar - dł x szer x gł 550 x 500 x 210 mm`,
    opis6:`montaż - do ściany lub wpuszczany w blat w komplecie zestaw do montażu do ściany`,
    opis7:`odpływ - Ø 70 w komplecie syfon butelkowy 70x40`,
    opis8:`zaokrąglone krawędzie poprawiające bezpieczeństwo użytkowania komory`,
    EAN:`5904806581785`
  },
  {
    nazwa1:
      `ZLEW / KOMORA GOSPODARCZA`,
      nazwa2:
      `SATYNOWA MATOWA - 45 x 45 x 21 cm`,
    Symbol: `K9155TB`,
    mainUrl: `/ZLEWY/K9155TB/K9155TB_1.jpg`,
    images:[`K9155TB_1.jpg`,`K9155TB_2.jpg`,`K9155TB_3.jpg`,`K9155TB_4.jpg`,`K9155TB_5.jpg`,`K9155TB_6.jpg`,`K9155TB_7.jpg`,`K9155TB_8.jpg`,`K9155TB_9.jpg`],
    wymiaryUrl:`K9155TB_Size_1.jpg`,
    aranzacjaUrl:`K9155TB_Aranz.jpg`,
    opis1:`materiał - stal nierdzewna 
    wykończenie - stal - satynowa/szczotkowana/czesana`,
    opis4:`grubość stali - 1 mm`,
    opis5:`wymiar - dł x szer x gł 450 x 450 x 210 mm`,
    opis6:`montaż - do ściany lub wpuszczany w blat w komplecie zestaw do montażu do ściany`,
    opis7:`odpływ - Ø 70 w komplecie syfon butelkowy 70x40`,
    opis8:`zaokrąglone krawędzie poprawiające bezpieczeństwo użytkowania komory`,
    EAN:`5904806581792`
  },
  {
    nazwa1:
      `ZLEW / KOMORA GOSPODARCZA`,
      nazwa2:
      `SATYNOWA MATOWA Z PÓŁKĄ - 45 x 50 x 21 cm`,
    Symbol: `K9156TB`,
    mainUrl: `/ZLEWY/K9156TB/K9156TB_1.jpg`,
    images:[`K9156TB_1.jpg`,`K9156TB_2.jpg`,`K9156TB_3.jpg`,`K9156TB_4.jpg`,`K9156TB_5.jpg`,`K9156TB_6.jpg`,`K9156TB_7.jpg`,`K9156TB_8.jpg`,`K9156TB_9.jpg`,`K9156TB_10.jpg`,`K9156TB_11.jpg`],
    wymiaryUrl:`K9156TB_Size_1.jpg`,
    aranzacjaUrl:`K9156TB_Aranz.jpg`,
    opis1:`materiał - stal nierdzewna 
    wykończenie - stal - satynowa/szczotkowana/czesana`,
    opis2:`półka - szerokość 50 mm`,
    opis3:`otwór (z zaślepką) do montażu baterii stojącej`,
    opis4:`grubość stali - 1 mm`,
    opis5:`wymiar - dł x szer x gł 450 x 500 x 210 mm`,
    opis6:`montaż - do ściany lub wpuszczany w blat w komplecie zestaw do montażu do ściany`,
    opis7:`odpływ - Ø 70 w komplecie syfon butelkowy 70x40`,
    opis8:`zaokrąglone krawędzie poprawiające bezpieczeństwo użytkowania komory`,
    EAN:`5904806581808`
  },
];
function Lista_zlewow() {
  return (
    <div>
      <Nav />
      <div className='grid md:grid-cols-3 grid-cols-2 text-center p-5'>
        {zlewy.map(item=>(
<Link className="m-2" href={`/Armatura_sanitarna/Zlewy/${item.Symbol}`} key={item.Symbol}>
          <div  className="border m-2 flex flex-col items-center justify-center">
            <Image priority src={item.mainUrl} width={200} height={200} alt={item.Symbol}/>
            <h3>{item.nazwa1}</h3>
            <h3>{item.nazwa2}</h3>
          </div>
          </Link>
          ))}
        </div>
      <Footer />
    </div>
  );
}

export default Lista_zlewow;
