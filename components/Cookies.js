import React, { useRef,useEffect } from "react";

function Cookies() {
  const popUpRef = useRef();
  const handleClick = () => {
    document.cookie = "CookieBy=123123; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
      popUpRef.current.classList.add("hidden");
    } else {
    }
};
  useEffect(() => {

    if(document.cookie){
      popUpRef.current.classList.add("hidden")
      console.log("jest cookie")
    } else {
      popUpRef.current.classList.remove("hidden");
      console.log("nie ma cookie")
    }
  }, [])
  
  return (
    <div
      ref={popUpRef}
      className="fixed bottom-0 bg-white  mx-auto text-center opacity-90"
    >
      <div>
        <header className="text-lg">Pliki Cookies</header>
        <p className="pb-2">
          Aqua Heating korzysta z plików cookies i innych podobnych technologii.
          Cookies i inne podobne technologie, to małe pliki zapisywane na Twoim
          urządzeniu (np. na komputerze, smartfonie) przez strony internetowe,
          które odwiedzasz. Używamy cookies podstawowych (w ich ramach są
          cookies techniczne i analityczne) zgodnie z naszą
          <a
            href="/AH-ppc-22-12.pdf"
            target="_blank"
            className="text-aquaBlue font-semibold"
          >
            {" "}
            Polityką cookies
          </a>
          , opisującą ich rodzaje, sposoby korzystania i ich usuwania oraz
          naszych zaufanych partnerów.
        </p>
        <button
          onClick={() => {
            handleClick();
          }}
          className="mb-3 px-2 py-2 bg-aquaBlue text-white rounded-sm md:hover:scale-105 md:transition-all"
        >
          ROZUMIEM
        </button>
      </div>
    </div>
  );
}

export default Cookies;
