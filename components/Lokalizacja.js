import Head from 'next/head';
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import MapboxMap from "./custom/MapboxMap";

const Kontakt = () => {
  return (
    <div>
      <Head>
        <title>Katowicka 39 - lokalizacja</title>
      </Head>
      <Navbar />
      <main>
        <div className="contact-wrapper">
          <div className="column">
            <div>
              <p><strong>Oto kilka przykładów odległości dla idących pieszo:</strong></p>
              <p>· Biedronka 3 min</p>
              <p>· Uniwersytet Opolski - 10 min</p>
              <p>· Politechnika Opolska Wydział Budownictwa – 1 min</p>
              <p>· Solaris Center - 13min</p>
              <p>· Liceum Ogólnokształcące nr III - 5 min (500m)</p>
              <p>· Szkoła Podstawowa nr 2 - 2 min (100 m)</p>
              <p>· Przedszkole nr 14 - 4 min</p>
              <p>· Szkoła Języków Obcych - 4 min</p>
              <p>· Rynek - 16 min</p>
              <p>· Poliklinika Medrem - 2 min</p>
              <p>· Przystanek autobusowy - to tylko 20 metrów</p>
              <p>· Park im. A. Mickiewicza - 160 m</p>
              <p>W pobliżu znajduje się pływalnia oraz klub fitness.</p>    
            </div>
          </div>
          <MapboxMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
