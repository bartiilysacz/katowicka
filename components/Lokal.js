import React from "react";
import ReactMarkdown from "react-markdown";
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
        style={{ backgroundImage: `url(${blok.galeria[0].filename})` }}
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
                    <img src={item.filename} alt="" />
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
