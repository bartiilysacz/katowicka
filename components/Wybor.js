import { useRouter } from "next/router";
import Head from 'next/head';
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";

const Wybor = () => {
  const router = useRouter();

  const handleAreaClick = (id) => {
    router.push(`/pietro-${id}`);
  };

  return (
    <div>
      <Head>
        <title>Katowicka 39 - wybór lokalu</title>
      </Head>
      <Navbar />
      <main>
        <div className="hero-wrapper">
          <img src="https://i.ibb.co/Fh78HLS/katowicka-39-Photo-9.jpg" alt="" />
          <div className="floor-6" onClick={() => handleAreaClick(6)}>
            <div>
              <p>Piętro 6</p>
            </div>
          </div>
          <div className="floor-5" onClick={() => handleAreaClick(5)}>
            <div>
              <p>Piętro 5</p>
            </div>
          </div>
          <div className="floor-4" onClick={() => handleAreaClick(4)}>
            <div>
              <p>Piętro 4</p>
            </div>
          </div>
          <div className="floor-3" onClick={() => handleAreaClick(3)}>
            <div>
              <p>Piętro 3</p>
            </div>
          </div>
          <div className="floor-2" onClick={() => handleAreaClick(2)}>
            <div>
              <p>Piętro 2</p>
            </div>
          </div>
          <div className="floor-1" onClick={() => handleAreaClick(1)}>
            <div>
              <p>Piętro 1</p>
            </div>
          </div>
          <div className="floor-0" onClick={() => handleAreaClick(0)}>
            <div>
              <p>Parter</p>
            </div>
          </div>
          <div className="floor-info">
            <h2>Wybór lokalu</h2>
            <p>Kliknij na piętro by zobaczyć rzut.</p>
          </div>
        </div>
      </main>
      <Footer fixed />
    </div>
  );
};

export default Wybor;
