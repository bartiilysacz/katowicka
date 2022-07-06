import Head from "next/head";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import image from "./img/image.jpg";

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
      <main className="container about-text inw-columns">
        <h2>O inwestycji</h2>
        <div className="row">
          <div className="col">
            <h3>Prestiżowa lokalizacja</h3>
            <p>
              Twoje nowe miejsce w sercu Opola! Mamy przyjemność zaoferować
              Państwu nowe, komfortowe lokale w budynku przy ul. Katowickiej 39.
              Dla zainteresowanych istnieje szeroki wybór metrażu, ekspozycji na
              strony świata oraz kondygnacji. W najbliższej okolicy znajdują się
              liczne instytucje usługowe i handlowe oraz inne atrakcje miasta.
              Dzięki swojej lokalizacji, Apartamenty K39 są przyjaznym i
              bezpiecznym azylem, z bliskim dostępem do Centrum i wszelkich
              instytucji potrzebnych do codziennego życia.
            </p>
          </div>
          <div className="col">
            <h3>Budynek ma 7 kondygnacji.</h3>
            <p>
              W ofercie są apartamenty o powierzchni od 17m2 do 36m2. . Lokale
              usytuowane na parterze mają również balkony.<br /> W całym budynku
              znajdziemy:
              <ul>
                <li>7 apartamentów - 17 m2</li>
                <li>2 apartamenty - 18,7 m2</li>
                <li>7 apartamentów - 21,5 m2</li>
                <li>21 apartamentów - 25 m2</li>
                <li>28 apartamentów - 26,5 m2</li>
                <li>13 apartamentów - 28,5 m2</li>
                <li>6 apartamentów - 31,6 m2</li>
                <li>7 apartamentów - 34 m2</li>
                <li>7 apartamentów - 36 m2</li>
              </ul>
            </p>
          </div>
          <div className="col">
            <h3>Dodatkowo:</h3>
            <ul>
              <li>wszystkie mieszkania posiadają indywidualną klimatyzację,</li>
              <li>
                lokale zasilane są w media z sieci miejskiej z pełnym
                indywidualnym opomiarowaniem,
              </li>
              <li>w każdym lokalu doprowadzony światłowód,</li>
              <li>
                istnieje możliwość nabycia garażu w budynku oraz oznaczonego
                miejsca parkingowego przy budynku,
              </li>
              <li>
                dla bezpieczeństwa mieszkańców zamontowano pełny monitoring
                wewnętrzny jak i zewnętrzny,
              </li>
              <li>
                dla wygody mieszkańców w budynku są dostępne indywidualne boksy
                piwniczne oraz ogólnodostępne rowerownia i wózkownia.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
