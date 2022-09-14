import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";

const Floor = ({ blok }) => {
  const [loading, setLoading] = useState(false);
  const [presentedFloor, setPresentedFloor] = useState(null);
  const router = useRouter();
  const currentFloor = router.query.slug.toString();

  const handleButtonClick = (room) => {
    router.push(`/lokal/lokal-${room}`);
  };

  const timeout = (delay) => {
    return new Promise( res => setTimeout(res, delay) );
  }

  const handleChangeFloor = async (direction) => {
    setLoading(true);
    const floor = Number(currentFloor.replace("pietro-", ""));
    if (direction === "up") {
      setPresentedFloor(floor + 1);
      await timeout(1000);
      router.push(`/pietro-${floor + 1}`);
    }
    if (direction === "down") {
      setPresentedFloor(floor - 1);
      await timeout(1000);
      router.push(`/pietro-${floor - 1}`);
    }
  };

  useEffect(() => {
    const wait = async () => {
      await timeout(1000);
    }

    wait();
    setLoading(false);
  }, []);

  return (
    <div>
      <Head>
        <title>Katowicka 39 - piętro {Number(currentFloor.replace("pietro-", ""))}</title>
      </Head>
      <Navbar />
      {!loading ? (
      <main className="floor-main">
        <div className="floor-main-wrapper">
          {currentFloor === "pietro-0" && (
            <>
              <img src="/floor-0.png" alt="" />
              <div
                className={`floor-main-area a1 ${blok.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(1)}
              >
                <p style={{ display: blok.status1 === 'Dostępne' && 'none' }}>
                  {blok.status1}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a2 ${blok.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(2)}
              >
                <p style={{ display: blok.status2 === 'Dostępne' && 'none' }}>
                  {blok.status2}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a3 ${blok.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(3)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: blok.status3 === 'Dostępne' && 'none' }}>
                  {blok.status3}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a4 ${blok.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(4)}
              >
                <p style={{ display: blok.status4 === 'Dostępne' && 'none' }}>
                  {blok.status4}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a5 ${blok.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(5)}
              >
                <p style={{ display: blok.status5 === 'Dostępne' && 'none' }}>
                  {blok.status5}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a6 ${blok.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(6)}
              >
                <p style={{ display: blok.status6 === 'Dostępne' && 'none' }}>
                  {blok.status6}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a7 ${blok.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(7)}
              >
                <p style={{ display: blok.status7 === 'Dostępne' && 'none' }}>
                  {blok.status7}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a8 ${blok.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(8)}
              >
                <p style={{ display: blok.status8 === 'Dostępne' && 'none' }}>
                  {blok.status8}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a9 ${blok.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(9)}
              >
                <p style={{ display: blok.status9 === 'Dostępne' && 'none' }}>
                  {blok.status9}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a10 ${blok.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(10)}
              >
                <p style={{ display: blok.status10 === 'Dostępne' && 'none' }}>
                  {blok.status10}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a11 ${blok.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(11)}
              >
                <p style={{ display: blok.status11 === 'Dostępne' && 'none' }}>
                  {blok.status11}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a12 ${blok.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(12)}
              >
                <p style={{ display: blok.status12 === 'Dostępne' && 'none' }}>
                  {blok.status12}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a13 ${blok.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(13)}
              >
                <p style={{ display: blok.status13 === 'Dostępne' && 'none' }}>
                  {blok.status13}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a14 ${blok.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(14)}
              >
                <p style={{ display: blok.status14 === 'Dostępne' && 'none' }}>
                  {blok.status14}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
            </>
          )}
          {currentFloor === "pietro-1" && (
            <>
              <img src="/floor-1.png" alt="" />
              <div
                className={`floor-main-area b1 ${blok.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(101)}
              >
                <p style={{ display: blok.status1 === 'Dostępne' && 'none' }}>
                  {blok.status1}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b2 ${blok.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(102)}
              >
                <p style={{ display: blok.status2 === 'Dostępne' && 'none' }}>
                  {blok.status2}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b3 ${blok.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(103)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: blok.status3 === 'Dostępne' && 'none' }}>
                  {blok.status3}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b4 ${blok.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(104)}
              >
                <p style={{ display: blok.status4 === 'Dostępne' && 'none' }}>
                  {blok.status4}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b5 ${blok.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(105)}
              >
                <p style={{ display: blok.status5 === 'Dostępne' && 'none' }}>
                  {blok.status5}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b6 ${blok.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(106)}
              >
                <p style={{ display: blok.status6 === 'Dostępne' && 'none' }}>
                  {blok.status6}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b7 ${blok.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(107)}
              >
                <p style={{ display: blok.status7 === 'Dostępne' && 'none' }}>
                  {blok.status7}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b8 ${blok.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(108)}
              >
                <p style={{ display: blok.status8 === 'Dostępne' && 'none' }}>
                  {blok.status8}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b9 ${blok.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(109)}
              >
                <p style={{ display: blok.status9 === 'Dostępne' && 'none' }}>
                  {blok.status9}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b10 ${blok.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(110)}
              >
                <p style={{ display: blok.status10 === 'Dostępne' && 'none' }}>
                  {blok.status10}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b11 ${blok.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(111)}
              >
                <p style={{ display: blok.status11 === 'Dostępne' && 'none' }}>
                  {blok.status11}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b12 ${blok.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(112)}
              >
                <p style={{ display: blok.status12 === 'Dostępne' && 'none' }}>
                  {blok.status12}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b13 ${blok.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(113)}
              >
                <p style={{ display: blok.status13 === 'Dostępne' && 'none' }}>
                  {blok.status13}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b14 ${blok.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(114)}
              >
                <p style={{ display: blok.status14 === 'Dostępne' && 'none' }}>
                  {blok.status14}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
            </>
          )}
          {currentFloor === "pietro-2" && (
            <>
              <img src="/floor-2.png" alt="" />
              <div
                className={`floor-main-area c1 ${blok.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(201)}
              >
                <p style={{ display: blok.status1 === 'Dostępne' && 'none' }}>
                  {blok.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c2 ${blok.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(202)}
              >
                <p style={{ display: blok.status2 === 'Dostępne' && 'none' }}>
                  {blok.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c3 ${blok.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(203)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: blok.status3 === 'Dostępne' && 'none' }}>
                  {blok.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c4 ${blok.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(204)}
              >
                <p style={{ display: blok.status4 === 'Dostępne' && 'none' }}>
                  {blok.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c5 ${blok.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(205)}
              >
                <p style={{ display: blok.status5 === 'Dostępne' && 'none' }}>
                  {blok.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c6 ${blok.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(206)}
              >
                <p style={{ display: blok.status6 === 'Dostępne' && 'none' }}>
                  {blok.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c7 ${blok.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(207)}
              >
                <p style={{ display: blok.status7 === 'Dostępne' && 'none' }}>
                  {blok.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c8 ${blok.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(208)}
              >
                <p style={{ display: blok.status8 === 'Dostępne' && 'none' }}>
                  {blok.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c9 ${blok.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(209)}
              >
                <p style={{ display: blok.status9 === 'Dostępne' && 'none' }}>
                  {blok.status9}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c10 ${blok.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(210)}
              >
                <p style={{ display: blok.status10 === 'Dostępne' && 'none' }}>
                  {blok.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c11 ${blok.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(211)}
              >
                <p style={{ display: blok.status11 === 'Dostępne' && 'none' }}>
                  {blok.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c12 ${blok.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(212)}
              >
                <p style={{ display: blok.status12 === 'Dostępne' && 'none' }}>
                  {blok.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c13 ${blok.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(213)}
              >
                <p style={{ display: blok.status13 === 'Dostępne' && 'none' }}>
                  {blok.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c14 ${blok.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(214)}
              >
                <p style={{ display: blok.status14 === 'Dostępne' && 'none' }}>
                  {blok.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-3" && (
            <>
              <img src="/floor-3.png" alt="" />
              <div
                className={`floor-main-area d1 ${blok.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(301)}
              >
                <p style={{ display: blok.status1 === 'Dostępne' && 'none' }}>
                  {blok.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d2 ${blok.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(302)}
              >
                <p style={{ display: blok.status2 === 'Dostępne' && 'none' }}>
                  {blok.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d3 ${blok.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(303)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: blok.status3 === 'Dostępne' && 'none' }}>
                  {blok.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d4 ${blok.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(304)}
              >
                <p style={{ display: blok.status4 === 'Dostępne' && 'none' }}>
                  {blok.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d5 ${blok.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(305)}
              >
                <p style={{ display: blok.status5 === 'Dostępne' && 'none' }}>
                  {blok.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d6 ${blok.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(306)}
              >
                <p style={{ display: blok.status6 === 'Dostępne' && 'none' }}>
                  {blok.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d7 ${blok.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(307)}
              >
                <p style={{ display: blok.status7 === 'Dostępne' && 'none' }}>
                  {blok.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d8 ${blok.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(308)}
              >
                <p style={{ display: blok.status8 === 'Dostępne' && 'none' }}>
                  {blok.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d9 ${blok.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(309)}
              >
                <p style={{ display: blok.status9 === 'Dostępne' && 'none' }}>
                  {blok.status9}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d10 ${blok.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(310)}
              >
                <p style={{ display: blok.status10 === 'Dostępne' && 'none' }}>
                  {blok.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d11 ${blok.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(311)}
              >
                <p style={{ display: blok.status11 === 'Dostępne' && 'none' }}>
                  {blok.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d12 ${blok.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(312)}
              >
                <p style={{ display: blok.status12 === 'Dostępne' && 'none' }}>
                  {blok.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d13 ${blok.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(313)}
              >
                <p style={{ display: blok.status13 === 'Dostępne' && 'none' }}>
                  {blok.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d14 ${blok.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(314)}
              >
                <p style={{ display: blok.status14 === 'Dostępne' && 'none' }}>
                  {blok.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-4" && (
            <>
              <img src="/floor-4.png" alt="" />
              <div
                className={`floor-main-area e1 ${blok.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(401)}
              >
                <p style={{ display: blok.status1 === 'Dostępne' && 'none' }}>
                  {blok.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e2 ${blok.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(402)}
              >
                <p style={{ display: blok.status2 === 'Dostępne' && 'none' }}>
                  {blok.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e3 ${blok.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(403)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: blok.status3 === 'Dostępne' && 'none' }}>
                  {blok.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e4 ${blok.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(404)}
              >
                <p style={{ display: blok.status4 === 'Dostępne' && 'none' }}>
                  {blok.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e5 ${blok.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(405)}
              >
                <p style={{ display: blok.status5 === 'Dostępne' && 'none' }}>
                  {blok.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e6 ${blok.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(406)}
              >
                <p style={{ display: blok.status6 === 'Dostępne' && 'none' }}>
                  {blok.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e7 ${blok.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(407)}
              >
                <p style={{ display: blok.status7 === 'Dostępne' && 'none' }}>
                  {blok.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e8 ${blok.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(408)}
              >
                <p style={{ display: blok.status8 === 'Dostępne' && 'none' }}>
                  {blok.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e9 ${blok.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(409)}
              >
                <p style={{ display: blok.status9 === 'Dostępne' && 'none' }}>
                  {blok.status9}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e10 ${blok.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(410)}
              >
                <p style={{ display: blok.status10 === 'Dostępne' && 'none' }}>
                  {blok.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e11 ${blok.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(411)}
              >
                <p style={{ display: blok.status11 === 'Dostępne' && 'none' }}>
                  {blok.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e12 ${blok.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(412)}
              >
                <p style={{ display: blok.status12 === 'Dostępne' && 'none' }}>
                  {blok.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e13 ${blok.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(413)}
              >
                <p style={{ display: blok.status13 === 'Dostępne' && 'none' }}>
                  {blok.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e14 ${blok.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(414)}
              >
                <p style={{ display: blok.status14 === 'Dostępne' && 'none' }}>
                  {blok.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-5" && (
            <>
              <img src="/floor.png" alt="" />
              <div
                className={`floor-main-area f1 ${blok.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(501)}
              >
                <p style={{ display: blok.status1 === 'Dostępne' && 'none' }}>
                  {blok.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f2 ${blok.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(502)}
              >
                <p style={{ display: blok.status2 === 'Dostępne' && 'none' }}>
                  {blok.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f3 ${blok.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(503)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: blok.status3 === 'Dostępne' && 'none' }}>
                  {blok.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f4 ${blok.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(504)}
              >
                <p style={{ display: blok.status4 === 'Dostępne' && 'none' }}>
                  {blok.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f5 ${blok.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(505)}
              >
                <p style={{ display: blok.status5 === 'Dostępne' && 'none' }}>
                  {blok.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f6 ${blok.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(506)}
              >
                <p style={{ display: blok.status6 === 'Dostępne' && 'none' }}>
                  {blok.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f7 ${blok.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(507)}
              >
                <p style={{ display: blok.status7 === 'Dostępne' && 'none' }}>
                  {blok.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f8 ${blok.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(508)}
              >
                <p style={{ display: blok.status8 === 'Dostępne' && 'none' }}>
                  {blok.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f9 ${blok.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(509)}
              >
                <p style={{ display: blok.status9 === 'Dostępne' && 'none' }}>
                  {blok.status9}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f10 ${blok.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(510)}
              >
                <p style={{ display: blok.status10 === 'Dostępne' && 'none' }}>
                  {blok.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f11 ${blok.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(511)}
              >
                <p style={{ display: blok.status11 === 'Dostępne' && 'none' }}>
                  {blok.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f12 ${blok.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(512)}
              >
                <p style={{ display: blok.status12 === 'Dostępne' && 'none' }}>
                  {blok.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f13 ${blok.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(513)}
              >
                <p style={{ display: blok.status13 === 'Dostępne' && 'none' }}>
                  {blok.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f14 ${blok.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(514)}
              >
                <p style={{ display: blok.status14 === 'Dostępne' && 'none' }}>
                  {blok.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-6" && (
            <>
              <img src="/floor-6.png" alt="" />
              <div
                className={`floor-main-area g1 ${blok.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(601)}
              >
                <p style={{ display: blok.status1 === 'Dostępne' && 'none' }}>
                  {blok.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g2 ${blok.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(602)}
              >
                <p style={{ display: blok.status2 === 'Dostępne' && 'none' }}>
                  {blok.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g3 ${blok.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(603)}
              >
                <p style={{ display: blok.status3 === 'Dostępne' && 'none' }}>
                  {blok.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g4 ${blok.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(604)}
              >
                <p style={{ display: blok.status4 === 'Dostępne' && 'none' }}>
                  {blok.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g5 ${blok.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(605)}
              >
                <p style={{ display: blok.status5 === 'Dostępne' && 'none' }}>
                  {blok.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g6 ${blok.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(606)}
              >
                <p style={{ display: blok.status6 === 'Dostępne' && 'none' }}>
                  {blok.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g7 ${blok.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(607)}
              >
                <p style={{ display: blok.status7 === 'Dostępne' && 'none' }}>
                  {blok.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g8 ${blok.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(608)}
              >
                <p style={{ display: blok.status8 === 'Dostępne' && 'none' }}>
                  {blok.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g9 ${blok.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(609)}
              >
                <p style={{ display: blok.status10 === 'Dostępne' && 'none' }}>
                  {blok.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g10 ${blok.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(610)}
              >
                <p style={{ display: blok.status10 === 'Dostępne' && 'none' }}>
                  {blok.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g11 ${blok.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(611)}
              >
                <p style={{ display: blok.status11 === 'Dostępne' && 'none' }}>
                  {blok.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g12 ${blok.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(612)}
              >
                <p style={{ display: blok.status12 === 'Dostępne' && 'none' }}>
                  {blok.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g13 ${blok.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(613)}
              >
                <p style={{ display: blok.status13 === 'Dostępne' && 'none' }}>
                  {blok.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g14 ${blok.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(614)}
              >
                <p style={{ display: blok.status14 === 'Dostępne' && 'none' }}>
                  {blok.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
        </div>
      </main>
      ) : <div className="floor-indicator">{presentedFloor === 0 ? 'Parter' : `Piętro ${presentedFloor}`}</div>}
      <div className="floor-up-down">
        {currentFloor !== "pietro-6" && (
          <div className="indicator indicator-top">
            <span>Piętro wyżej</span>
            <div
              className="icon icon-up"
              onClick={async () => handleChangeFloor("up")}
            >
              <img src="/icon-up.png" alt="" />
            </div>
          </div>
        )}
        {currentFloor !== "pietro-0" && (
          <div className="indicator">
            <span>Piętro niżej</span>
            <div
              className="icon icon-down"
              onClick={() => handleChangeFloor("down")}
            >
              <img
                src="/icon-up.png"
                alt=""
                style={{ transform: "rotate(-180deg)" }}
              />
            </div>
          </div>
        )}
      </div>
      <Footer fixed gradient />
    </div>
  );
};

export default Floor;
