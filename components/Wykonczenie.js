import Head from "next/head";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import image from "./img/glowna-3.jpg";

const Kontakt = () => {
  return (
    <div>
      <Head>
        <title>Katowicka 39 - o inwestycji</title>
      </Head>
      <Navbar />
      <div
        className="hero"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
      <main className="container about-text">
        <h2>Wykończenie pod klucz</h2>
        <ul>
          <li>
            wykończona łazienka - kafle położone na ścianach i podłodze,
            zamontowana kabina prysznicowa z baterią, osadzony kompakt wc,
            zamontowany blat, oraz szafki, założona umywalka z baterią,
            zawieszony grzejnik, założone drzwi do łazienki
          </li>
          <li>wykonane zabudowy szaf wnękowych oraz półki podręczne</li>
          <li>wykonana zabudowa kuchenna z montażem 2-palnikowej kuchenki oraz zlewozmywaka</li>
          <li>dwukrotnie pomalowany lokal</li>
          <li>położone panele podłogowewraz z listwami przypodłogowymi</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
