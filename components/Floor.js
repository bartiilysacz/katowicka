import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import Storyblok from "../lib/storyblok";

const Floor = ({ blok }) => {
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState([]);
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
    const getData = async () => {
      let sbParams = {
        // change to `published` to load the published version
        version: "draft", // or published
      };
      let { data } = await Storyblok.get(`cdn/stories/${currentFloor}`, sbParams);
      setStory(data.story.content.body);
    }

    getData();
  }, [currentFloor]);

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
                className={`floor-main-area a1 ${story[0]?.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(1)}
              >
                <p style={{ display: story[0]?.status1 === 'Dostępne' && 'none' }}>
                  {story[0]?.status1}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a2 ${story[0]?.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(2)}
              >
                <p style={{ display: story[0]?.status2 === 'Dostępne' && 'none' }}>
                  {story[0]?.status2}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a3 ${story[0]?.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(3)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: story[0]?.status3 === 'Dostępne' && 'none' }}>
                  {story[0]?.status3}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a4 ${story[0]?.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(4)}
              >
                <p style={{ display: story[0]?.status4 === 'Dostępne' && 'none' }}>
                  {story[0]?.status4}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a5 ${story[0]?.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(5)}
              >
                <p style={{ display: story[0]?.status5 === 'Dostępne' && 'none' }}>
                  {story[0]?.status5}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a6 ${story[0]?.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(6)}
              >
                <p style={{ display: story[0]?.status6 === 'Dostępne' && 'none' }}>
                  {story[0]?.status6}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a7 ${story[0]?.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(7)}
              >
                <p style={{ display: story[0]?.status7 === 'Dostępne' && 'none' }}>
                  {story[0]?.status7}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a8 ${story[0]?.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(8)}
              >
                <p style={{ display: story[0]?.status8 === 'Dostępne' && 'none' }}>
                  {story[0]?.status8}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a9 ${story[0]?.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(9)}
              >
                <p style={{ display: story[0]?.status9 === 'Dostępne' && 'none' }}>
                  {story[0]?.status9}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a10 ${story[0]?.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(10)}
              >
                <p style={{ display: story[0]?.status10 === 'Dostępne' && 'none' }}>
                  {story[0]?.status10}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a11 ${story[0]?.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(11)}
              >
                <p style={{ display: story[0]?.status11 === 'Dostępne' && 'none' }}>
                  {story[0]?.status11}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a12 ${story[0]?.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(12)}
              >
                <p style={{ display: story[0]?.status12 === 'Dostępne' && 'none' }}>
                  {story[0]?.status12}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a13 ${story[0]?.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(13)}
              >
                <p style={{ display: story[0]?.status13 === 'Dostępne' && 'none' }}>
                  {story[0]?.status13}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area a14 ${story[0]?.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(14)}
              >
                <p style={{ display: story[0]?.status14 === 'Dostępne' && 'none' }}>
                  {story[0]?.status14}
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
                className={`floor-main-area b1 ${story[0]?.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(101)}
              >
                <p style={{ display: story[0]?.status1 === 'Dostępne' && 'none' }}>
                  {story[0]?.status1}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b2 ${story[0]?.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(102)}
              >
                <p style={{ display: story[0]?.status2 === 'Dostępne' && 'none' }}>
                  {story[0]?.status2}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b3 ${story[0]?.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(103)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: story[0]?.status3 === 'Dostępne' && 'none' }}>
                  {story[0]?.status3}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b4 ${story[0]?.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(104)}
              >
                <p style={{ display: story[0]?.status4 === 'Dostępne' && 'none' }}>
                  {story[0]?.status4}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b5 ${story[0]?.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(105)}
              >
                <p style={{ display: story[0]?.status5 === 'Dostępne' && 'none' }}>
                  {story[0]?.status5}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b6 ${story[0]?.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(106)}
              >
                <p style={{ display: story[0]?.status6 === 'Dostępne' && 'none' }}>
                  {story[0]?.status6}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b7 ${story[0]?.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(107)}
              >
                <p style={{ display: story[0]?.status7 === 'Dostępne' && 'none' }}>
                  {story[0]?.status7}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b8 ${story[0]?.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(108)}
              >
                <p style={{ display: story[0]?.status8 === 'Dostępne' && 'none' }}>
                  {story[0]?.status8}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b9 ${story[0]?.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(109)}
              >
                <p style={{ display: story[0]?.status9 === 'Dostępne' && 'none' }}>
                  {story[0]?.status9}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b10 ${story[0]?.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(110)}
              >
                <p style={{ display: story[0]?.status10 === 'Dostępne' && 'none' }}>
                  {story[0]?.status10}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b11 ${story[0]?.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(111)}
              >
                <p style={{ display: story[0]?.status11 === 'Dostępne' && 'none' }}>
                  {story[0]?.status11}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b12 ${story[0]?.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(112)}
              >
                <p style={{ display: story[0]?.status12 === 'Dostępne' && 'none' }}>
                  {story[0]?.status12}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b13 ${story[0]?.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(113)}
              >
                <p style={{ display: story[0]?.status13 === 'Dostępne' && 'none' }}>
                  {story[0]?.status13}
                </p>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className={`floor-main-area b14 ${story[0]?.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(114)}
              >
                <p style={{ display: story[0]?.status14 === 'Dostępne' && 'none' }}>
                  {story[0]?.status14}
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
                className={`floor-main-area c1 ${story[0]?.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(201)}
              >
                <p style={{ display: story[0]?.status1 === 'Dostępne' && 'none' }}>
                  {story[0]?.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c2 ${story[0]?.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(202)}
              >
                <p style={{ display: story[0]?.status2 === 'Dostępne' && 'none' }}>
                  {story[0]?.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c3 ${story[0]?.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(203)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: story[0]?.status3 === 'Dostępne' && 'none' }}>
                  {story[0]?.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c4 ${story[0]?.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(204)}
              >
                <p style={{ display: story[0]?.status4 === 'Dostępne' && 'none' }}>
                  {story[0]?.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c5 ${story[0]?.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(205)}
              >
                <p style={{ display: story[0]?.status5 === 'Dostępne' && 'none' }}>
                  {story[0]?.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c6 ${story[0]?.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(206)}
              >
                <p style={{ display: story[0]?.status6 === 'Dostępne' && 'none' }}>
                  {story[0]?.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c7 ${story[0]?.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(207)}
              >
                <p style={{ display: story[0]?.status7 === 'Dostępne' && 'none' }}>
                  {story[0]?.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c8 ${story[0]?.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(208)}
              >
                <p style={{ display: story[0]?.status8 === 'Dostępne' && 'none' }}>
                  {story[0]?.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c9 ${story[0]?.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(209)}
              >
                <p style={{ display: story[0]?.status9 === 'Dostępne' && 'none' }}>
                  {story[0]?.status9}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c10 ${story[0]?.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(210)}
              >
                <p style={{ display: story[0]?.status10 === 'Dostępne' && 'none' }}>
                  {story[0]?.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c11 ${story[0]?.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(211)}
              >
                <p style={{ display: story[0]?.status11 === 'Dostępne' && 'none' }}>
                  {story[0]?.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c12 ${story[0]?.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(212)}
              >
                <p style={{ display: story[0]?.status12 === 'Dostępne' && 'none' }}>
                  {story[0]?.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c13 ${story[0]?.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(213)}
              >
                <p style={{ display: story[0]?.status13 === 'Dostępne' && 'none' }}>
                  {story[0]?.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area c14 ${story[0]?.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(214)}
              >
                <p style={{ display: story[0]?.status14 === 'Dostępne' && 'none' }}>
                  {story[0]?.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-3" && (
            <>
              <img src="/floor-3.png" alt="" />
              <div
                className={`floor-main-area d1 ${story[0]?.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(301)}
              >
                <p style={{ display: story[0]?.status1 === 'Dostępne' && 'none' }}>
                  {story[0]?.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d2 ${story[0]?.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(302)}
              >
                <p style={{ display: story[0]?.status2 === 'Dostępne' && 'none' }}>
                  {story[0]?.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d3 ${story[0]?.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(303)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: story[0]?.status3 === 'Dostępne' && 'none' }}>
                  {story[0]?.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d4 ${story[0]?.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(304)}
              >
                <p style={{ display: story[0]?.status4 === 'Dostępne' && 'none' }}>
                  {story[0]?.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d5 ${story[0]?.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(305)}
              >
                <p style={{ display: story[0]?.status5 === 'Dostępne' && 'none' }}>
                  {story[0]?.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d6 ${story[0]?.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(306)}
              >
                <p style={{ display: story[0]?.status6 === 'Dostępne' && 'none' }}>
                  {story[0]?.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d7 ${story[0]?.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(307)}
              >
                <p style={{ display: story[0]?.status7 === 'Dostępne' && 'none' }}>
                  {story[0]?.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d8 ${story[0]?.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(308)}
              >
                <p style={{ display: story[0]?.status8 === 'Dostępne' && 'none' }}>
                  {story[0]?.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d9 ${story[0]?.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(309)}
              >
                <p style={{ display: story[0]?.status9 === 'Dostępne' && 'none' }}>
                  {story[0]?.status9}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d10 ${story[0]?.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(310)}
              >
                <p style={{ display: story[0]?.status10 === 'Dostępne' && 'none' }}>
                  {story[0]?.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d11 ${story[0]?.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(311)}
              >
                <p style={{ display: story[0]?.status11 === 'Dostępne' && 'none' }}>
                  {story[0]?.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d12 ${story[0]?.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(312)}
              >
                <p style={{ display: story[0]?.status12 === 'Dostępne' && 'none' }}>
                  {story[0]?.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d13 ${story[0]?.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(313)}
              >
                <p style={{ display: story[0]?.status13 === 'Dostępne' && 'none' }}>
                  {story[0]?.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area d14 ${story[0]?.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(314)}
              >
                <p style={{ display: story[0]?.status14 === 'Dostępne' && 'none' }}>
                  {story[0]?.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-4" && (
            <>
              <img src="/floor-4.png" alt="" />
              <div
                className={`floor-main-area e1 ${story[0]?.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(401)}
              >
                <p style={{ display: story[0]?.status1 === 'Dostępne' && 'none' }}>
                  {story[0]?.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e2 ${story[0]?.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(402)}
              >
                <p style={{ display: story[0]?.status2 === 'Dostępne' && 'none' }}>
                  {story[0]?.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e3 ${story[0]?.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(403)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: story[0]?.status3 === 'Dostępne' && 'none' }}>
                  {story[0]?.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e4 ${story[0]?.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(404)}
              >
                <p style={{ display: story[0]?.status4 === 'Dostępne' && 'none' }}>
                  {story[0]?.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e5 ${story[0]?.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(405)}
              >
                <p style={{ display: story[0]?.status5 === 'Dostępne' && 'none' }}>
                  {story[0]?.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e6 ${story[0]?.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(406)}
              >
                <p style={{ display: story[0]?.status6 === 'Dostępne' && 'none' }}>
                  {story[0]?.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e7 ${story[0]?.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(407)}
              >
                <p style={{ display: story[0]?.status7 === 'Dostępne' && 'none' }}>
                  {story[0]?.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e8 ${story[0]?.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(408)}
              >
                <p style={{ display: story[0]?.status8 === 'Dostępne' && 'none' }}>
                  {story[0]?.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e9 ${story[0]?.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(409)}
              >
                <p style={{ display: story[0]?.status9 === 'Dostępne' && 'none' }}>
                  {story[0]?.status9}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e10 ${story[0]?.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(410)}
              >
                <p style={{ display: story[0]?.status10 === 'Dostępne' && 'none' }}>
                  {story[0]?.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e11 ${story[0]?.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(411)}
              >
                <p style={{ display: story[0]?.status11 === 'Dostępne' && 'none' }}>
                  {story[0]?.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e12 ${story[0]?.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(412)}
              >
                <p style={{ display: story[0]?.status12 === 'Dostępne' && 'none' }}>
                  {story[0]?.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e13 ${story[0]?.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(413)}
              >
                <p style={{ display: story[0]?.status13 === 'Dostępne' && 'none' }}>
                  {story[0]?.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area e14 ${story[0]?.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(414)}
              >
                <p style={{ display: story[0]?.status14 === 'Dostępne' && 'none' }}>
                  {story[0]?.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-5" && (
            <>
              <img src="/floor.png" alt="" />
              <div
                className={`floor-main-area f1 ${story[0]?.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(501)}
              >
                <p style={{ display: story[0]?.status1 === 'Dostępne' && 'none' }}>
                  {story[0]?.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f2 ${story[0]?.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(502)}
              >
                <p style={{ display: story[0]?.status2 === 'Dostępne' && 'none' }}>
                  {story[0]?.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f3 ${story[0]?.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(503)}
              >
                <div>
                  <div />
                </div>
                <p style={{ display: story[0]?.status3 === 'Dostępne' && 'none' }}>
                  {story[0]?.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f4 ${story[0]?.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(504)}
              >
                <p style={{ display: story[0]?.status4 === 'Dostępne' && 'none' }}>
                  {story[0]?.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f5 ${story[0]?.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(505)}
              >
                <p style={{ display: story[0]?.status5 === 'Dostępne' && 'none' }}>
                  {story[0]?.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f6 ${story[0]?.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(506)}
              >
                <p style={{ display: story[0]?.status6 === 'Dostępne' && 'none' }}>
                  {story[0]?.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f7 ${story[0]?.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(507)}
              >
                <p style={{ display: story[0]?.status7 === 'Dostępne' && 'none' }}>
                  {story[0]?.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f8 ${story[0]?.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(508)}
              >
                <p style={{ display: story[0]?.status8 === 'Dostępne' && 'none' }}>
                  {story[0]?.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f9 ${story[0]?.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(509)}
              >
                <p style={{ display: story[0]?.status9 === 'Dostępne' && 'none' }}>
                  {story[0]?.status9}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f10 ${story[0]?.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(510)}
              >
                <p style={{ display: story[0]?.status10 === 'Dostępne' && 'none' }}>
                  {story[0]?.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f11 ${story[0]?.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(511)}
              >
                <p style={{ display: story[0]?.status11 === 'Dostępne' && 'none' }}>
                  {story[0]?.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f12 ${story[0]?.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(512)}
              >
                <p style={{ display: story[0]?.status12 === 'Dostępne' && 'none' }}>
                  {story[0]?.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f13 ${story[0]?.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(513)}
              >
                <p style={{ display: story[0]?.status13 === 'Dostępne' && 'none' }}>
                  {story[0]?.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area f14 ${story[0]?.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(514)}
              >
                <p style={{ display: story[0]?.status14 === 'Dostępne' && 'none' }}>
                  {story[0]?.status14}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-6" && (
            <>
              <img src="/floor-6.png" alt="" />
              <div
                className={`floor-main-area g1 ${story[0]?.status1 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(601)}
              >
                <p style={{ display: story[0]?.status1 === 'Dostępne' && 'none' }}>
                  {story[0]?.status1}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g2 ${story[0]?.status2 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(602)}
              >
                <p style={{ display: story[0]?.status2 === 'Dostępne' && 'none' }}>
                  {story[0]?.status2}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g3 ${story[0]?.status3 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(603)}
              >
                <p style={{ display: story[0]?.status3 === 'Dostępne' && 'none' }}>
                  {story[0]?.status3}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g4 ${story[0]?.status4 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(604)}
              >
                <p style={{ display: story[0]?.status4 === 'Dostępne' && 'none' }}>
                  {story[0]?.status4}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g5 ${story[0]?.status5 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(605)}
              >
                <p style={{ display: story[0]?.status5 === 'Dostępne' && 'none' }}>
                  {story[0]?.status5}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g6 ${story[0]?.status6 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(606)}
              >
                <p style={{ display: story[0]?.status6 === 'Dostępne' && 'none' }}>
                  {story[0]?.status6}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g7 ${story[0]?.status7 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(607)}
              >
                <p style={{ display: story[0]?.status7 === 'Dostępne' && 'none' }}>
                  {story[0]?.status7}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g8 ${story[0]?.status8 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(608)}
              >
                <p style={{ display: story[0]?.status8 === 'Dostępne' && 'none' }}>
                  {story[0]?.status8}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g9 ${story[0]?.status9 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(609)}
              >
                <p style={{ display: story[0]?.status10 === 'Dostępne' && 'none' }}>
                  {story[0]?.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g10 ${story[0]?.status10 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(610)}
              >
                <p style={{ display: story[0]?.status10 === 'Dostępne' && 'none' }}>
                  {story[0]?.status10}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g11 ${story[0]?.status11 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(611)}
              >
                <p style={{ display: story[0]?.status11 === 'Dostępne' && 'none' }}>
                  {story[0]?.status11}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g12 ${story[0]?.status12 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(612)}
              >
                <p style={{ display: story[0]?.status12 === 'Dostępne' && 'none' }}>
                  {story[0]?.status12}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g13 ${story[0]?.status13 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(613)}
              >
                <p style={{ display: story[0]?.status13 === 'Dostępne' && 'none' }}>
                  {story[0]?.status13}
                </p>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className={`floor-main-area g14 ${story[0]?.status14 !== 'Dostępne' ? 'unavailable' : 'available'}`}
                onClick={() => handleButtonClick(614)}
              >
                <p style={{ display: story[0]?.status14 === 'Dostępne' && 'none' }}>
                  {story[0]?.status14}
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
