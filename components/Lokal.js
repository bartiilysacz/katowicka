import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { sbEditable } from "@storyblok/storyblok-editable";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import Link from "next/link";

const Lokal = ({ blok }) => {
  console.log(blok);
  return (
    <div className="lokal" {...sbEditable(blok)}>
      <Navbar />
      <div
        className="hero"
        style={{
          backgroundImage: `url(${
            blok.zdj_w_tle?.filename
              ? blok.zdj_w_tle.filename
              : blok.galeria[0].filename
          }/m/1920x0)`,
        }}
      >
        <h2>{blok.nazwa}</h2>
      </div>
      <div className="lokal-wrapper">
        <div className="left">
          <h2>Karta lokalu</h2>
          <img src={blok?.karta?.filename} alt="karta lokalu" />
        </div>
        <div className="right">
          <h2>Galeria</h2>
          <SRLWrapper>
            {blok.galeria.map((item, index) => (
              <div className="image-wrapper">
                <a href={item.filename} key={index}>
                  <img src={`${item.filename}/m/120x120`} alt="" />
                </a>
              </div>
            ))}
          </SRLWrapper>
          <button>
            <a>
              <Link href="/kontakt">Skontaktuj się z nami</Link>
            </a>
          </button>
        </div>
      </div>
      <Footer hidden />
    </div>
  );
};

export default Lokal;
