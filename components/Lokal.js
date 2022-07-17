import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { sbEditable } from "@storyblok/storyblok-editable";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import Link from "next/link";

const Lokal = ({ blok }) => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    window && window.addEventListener('resize', ()=> {
      setWidth(window.innerWidth)
    })
  }, [])

  console.log(blok);
  return (
    <div className="lokal" {...sbEditable(blok)}>
      <Navbar />
      <div
        className="hero"
        style={{ backgroundImage: `url(${blok.zdj_w_tle.filename}/m/${width}x0)` }}
      >
        <div className="lokal-wrapper">
          <div className="left">
            <h2>{blok.nazwa}</h2>
            <p>Powierzchnia: {blok.powierzchnia} ㎡</p>
            <button>
              <Link href="/kontakt">Kontakt</Link>
            </button>
          </div>
          <div className="right">
            <SRLWrapper>
              {blok.galeria.map((item, index) => (
                <div className="image-wrapper">
                  <a href={item.filename} key={index}>
                    <img src={`${item.filename}/m/120x120`} alt="" />
                  </a>
                </div>
              ))}
            </SRLWrapper>
          </div>
        </div>
      </div>
      <Footer hidden />
    </div>
  );
};

export default Lokal;
