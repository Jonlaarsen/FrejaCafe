import Link from "next/link";
import React from "react";

const Find = () => {
  return (
    <div
      id="find"
      className="grid md:grid-cols-2 items-center justify-center w-full h-full bg-background border-t-4 border-foreground "
    >
      <div className="text-4xl md:text-6xl w-full h-full flex flex-col items-center text-foreground justify-center text-left gap-10 px-10 py-10">
        <h1>
          <Link href="https://www.google.com/maps/dir//Davidshallsgatan+9,+211+45+Malm%C3%B6/@55.5988575,12.9156036,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4653a1416a45b571:0x66d7a10084fc42ba!2m2!1d12.9980036!2d55.5988851?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D">
            Davidshallstorg 9, 211 45 Malmö{" "}
          </Link>
        </h1>
        <h1>
          <Link href="tel:0760234840">Telefon: 0760234840</Link>
        </h1>
        <h1>
          <Link href="mailto:info@frejacafeochvinbar.se">
            Mail: Freja@email.com
          </Link>
        </h1>
        <div className="text-2xl md:text-4xl">
          <button className="border-3 bg-foreground px-4 py-2 rounded-2xl text-background">
            <Link href="https://www.instagram.com/frejacafeochvinbar/">
              Instagram
            </Link>
          </button>
          <button className="border-3 bg-foreground px-4 py-2 rounded-2xl text-background">
            <Link href="https://www.facebook.com/frejacafeochvinbar/">
              Facebook
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full h-full ">
        <img src="/ute.png" className="object-fill w-full h-full" alt="" />
      </div>
    </div>
  );
};

export default Find;
