import Head from "next/head";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import image from "./img/glowna-3.jpg";

const Kontakt = () => {
  return (
    <div>
      <Head>
        <title>Katowicka 39 - wykończenia pod klucz</title>
      </Head>
      <Navbar />
      <div
        className="hero"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
      <main className="container about-text">
        <h2>Standard wykończenia MODERN GREY/WOODEN ELEGANCE</h2>
        <p>Lokal składający się z salonu z aneksem kuchennym, łazienki i garderoby.</p>
        <strong>1. Salon</strong>
        <ul>
          <li>
          ściany oraz sufit pokryte dwoma warstwami farby w kolorze białym,
          </li>
          <li>ułożone panele podłogowe o klasie ścieralności AC4 wraz z listwami przypodłogowymi z
PCV w kolorystyce drewnopodobnej/szarości,</li>
          <li>rolety okienne wewnętrzne w kolorze szarym,</li>
          <li>montaż opraw oświetleniowych,</li>
          <li>ażurowy regał z płyty meblowej w kolorze białym/szarym wydzielający salon od części
sypialnej,</li>
        </ul>
        <strong>2. Aneks kuchenny</strong>
        <ul>
          <li>zabudowa meblowa z płyty mdf w kolorze białym,</li>
          <li>blat kuchenny mdf w kolorze szarym/drewnopodobny,</li>
          <li>w zabudowie dolnej dwie szafki kuchenne i szuflada,</li>
          <li>lodówka zamontowana pod blatem kuchennym,</li>
          <li>w balacie kuchennym zamontowany zlewozmywak jednokomorowy, ze stali nierdzewnej z
wylewką oraz dwupolowa płyta indukcyjna,</li>
          <li>w zabudowie górnej trzy wiszące szafki oraz zamontowana kuchenka mikrofalowa.</li>
        </ul>
        <strong>3. Łazienka</strong>
        <ul>
          <li>drzwi mdf, ramowe w kolorze białym z podcięciem,</li>
          <li>ściany wyłożone kaflami w kolorze białym lub szarym/drewnopodobnym, z białą/szarą fugą,</li>
          <li>podłoga wyłożona kaflami o wzorze imitującym drewno/szarymi, z fugą w kolorze
antracyt/szary,</li>
          <li>kabina prysznicowa z liniowym odprowadzeniem wody,</li>
          <li>ściana kabiny prysznicowej szklana typu walk in/drzwi przesuwne,</li>
          <li>armatura prysznicowa chromowana, bateria prysznicowa kolumnowa z deszczownicą,</li>
          <li>meble łazienkowe z płyty mdf w kolorze białym, blat mdf w kolorze szarym/drewnopodobny,</li>
          <li>umywalka ceramiczna nablatowa/wpuszczana z wylewką stojącą,</li>
          <li>pralka automatyczna i szafka zamontowane pod blatem,</li>
          <li>szafka łazienkowa z lustrem zamontowana nad umywalką,</li>
          <li>montaż opraw oświetleniowych w suficie.</li>
        </ul>
        <strong>4. Garderoba</strong>
        <ul>
          <li>szafy wnękowe z płyty mdf w kolorze białym/szarym, z półkami lub wieszakami na odzież,</li>
          <li>montaż opraw oświetleniowych,</li>
          <li>zabudowa pawlacza nad drzwiami wejściowymi do lokalu z płyty mdf w kolorze białym.</li>
        </ul>
        <a href="/katalog.pdf" download className="btn">Pobierz katalog</a>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
