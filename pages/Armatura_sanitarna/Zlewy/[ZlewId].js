import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
const zlewy = [
    {
      nazwa:
        `ZLEW / KOMORA GOSPODARCZA SATYNOWA MATOWA`,
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
      nazwa:
        `ZLEW / KOMORA GOSPODARCZA CHROM POŁYSK`,
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
      nazwa:
        `ZLEW / KOMORA GOSPODARCZA SATYNOWA MATOWA Z PÓŁKĄ`,
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
      nazwa:
        `ZLEW / KOMORA GOSPODARCZA CHROM POŁYSK  Z PÓŁKĄ`,
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
      nazwa:
        `ZLEW / KOMORA GOSPODARCZA SATYNOWA MATOWA`,
      Symbol: `K9155TB`,
      mainUrl: `/ZLEWY/K9155TB/K9155TB_1.jpg`,
      images:[`K9155TB_1.jpg`,`K9155TB_2.jpg`,`K9155TB_3.jpg`,`K9155TB_4.jpg`,`K9155TB_5.jpg`,`K9155TB_6.jpg`,`K9155TB_7.jpg`,`K9155TB_8.jpg`,`K9155TB_9.jpg`],
      wymiaryUrl:`K9155TB_Size_1.jpg`,
      aranzacjaUrl:`K9155TB_Aranz.jpg`,
      opis1:`materiał - stal nierdzewna 
      wykończenie - stal - satynowa/szczotkowana/czesana`,
      opis2:`grubość stali - 1 mm`,
      opis3:`wymiar - dł x szer x gł 450 x 450 x 210 mm`,
      opis4:`montaż - do ściany lub wpuszczany w blat w komplecie zestaw do montażu do ściany`,
      opis5:`odpływ - Ø 70 w komplecie syfon butelkowy 70x40`,
      opis6:`zaokrąglone krawędzie poprawiające bezpieczeństwo użytkowania komory`,
      EAN:`5904806581792`
    },
    {
      nazwa:
        `ZLEW / KOMORA GOSPODARCZA SATYNOWA MATOWA Z PÓŁKĄ`,
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
function Zlew() {
  
    const imgRef = useRef();
  const [mainImgUrl,setMainImgUrl] = useState("") ;
  const router = useRouter();
  const productId = router.query.ZlewId;
  const changeImage = (e,string) => {
    setMainImgUrl(string);
    
    
  };
  useEffect(() => {
    if(mainImgUrl!="")
  imgRef.current.src=mainImgUrl;

  }, [mainImgUrl])
  
  const obecnyZlew = zlewy.filter((zlew) => {
    if (zlew.Symbol == productId) {
      return zlew;
    }
  });
  return (
    <div>
      <Nav />
      <div className="w-52 ">
        {" "}
        <Link
          href="/Armatura_sanitarna/Lista_zlewow"
          className="p-3 font-semibold flex items-center justify-center"
        >
          <AiOutlineLeft /> POZOSTAŁE ZLEWY
        </Link>
      </div>
      {obecnyZlew.map((item) => {
        console.log(obecnyZlew)
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
                        src={`/ZLEWY/${item.Symbol}/${img}`}
                        alt={item.Symbol}
                        height={33}
                        width={60}
                        onClick={(e) => {
                          changeImage(e,`/ZLEWY/${item.Symbol}/${img}`);
                        }}
                        
                      />
                      </div>

                    );
                  })}
                </div>
              </div>
              <div className="flex font-semibold text-lg justify-center items-center">
                <div>
                  <h1 className=" text-3xl py-5">{item.nazwa}</h1>

                  {item.opis1 ? <p>{item.opis1}</p> : null}
                  {item.opis2 ? <p>{item.opis2}</p> : null}
                  {item.opis3 ? <p>{item.opis3}</p> : null}
                  {item.opis4 ? <p>{item.opis4}</p> : null}
                  {item.opis5 ? <p>{item.opis5}</p> : null}
                  {item.opis6 ? <p>{item.opis6}</p> : null}
                  {item.opis7 ? <p>{item.opis7}</p> : null}
                  {item.opis8 ? <p>{item.opis8}</p> : null}
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

export default Zlew