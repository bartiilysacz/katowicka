import Head from 'next/head';
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import hero from "./img/home.jpg";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Katowicka 39 - apartamenty | strona główna</title>
      </Head>
      <Navbar />
      <main>
        <div className="header-wrapper" style={{ backgroundImage: `url(${hero.src})` }}>
          <h2>Apartamenty Katowicka 39</h2>
        </div>
      </main>
      <Footer fixed />
    </div>
  );
};

export default Home;
