import { useRouter } from "next/router";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";

const Floor = () => {
  const router = useRouter();
  const currentFloor = router.query.slug.toString();

  const handleButtonClick = (room) => {
    router.push(`/lokal/lokal-${room}`);
  };

  const handleChangeFloor = (direction) => {
    const floor = Number(currentFloor.replace("pietro-", ""));
    if (direction === "up") {
      router.push(`/pietro-${floor + 1}`);
    }
    if (direction === "down") {
      router.push(`/pietro-${floor - 1}`);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="floor-main">
        <div className="floor-main-wrapper">
          {currentFloor === "pietro-0" && (
            <>
              <img src="/floor-0.png" alt="" />
              <div
                className="floor-main-area a1"
                onClick={() => handleButtonClick(1)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a2"
                onClick={() => handleButtonClick(2)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a3"
                onClick={() => handleButtonClick(3)}
              >
                <div>
                  <div />
                </div>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a4"
                onClick={() => handleButtonClick(4)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a5"
                onClick={() => handleButtonClick(5)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a6"
                onClick={() => handleButtonClick(6)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a7"
                onClick={() => handleButtonClick(7)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a8"
                onClick={() => handleButtonClick(8)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a9"
                onClick={() => handleButtonClick(9)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a10"
                onClick={() => handleButtonClick(10)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a11"
                onClick={() => handleButtonClick(11)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a12"
                onClick={() => handleButtonClick(12)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a13"
                onClick={() => handleButtonClick(13)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area a14"
                onClick={() => handleButtonClick(14)}
              >
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
                className="floor-main-area b1"
                onClick={() => handleButtonClick(101)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b2"
                onClick={() => handleButtonClick(102)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b3"
                onClick={() => handleButtonClick(103)}
              >
                <div>
                  <div />
                </div>
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b4"
                onClick={() => handleButtonClick(104)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b5"
                onClick={() => handleButtonClick(105)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b6"
                onClick={() => handleButtonClick(106)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b7"
                onClick={() => handleButtonClick(107)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b8"
                onClick={() => handleButtonClick(108)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b9"
                onClick={() => handleButtonClick(109)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b10"
                onClick={() => handleButtonClick(110)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b11"
                onClick={() => handleButtonClick(111)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b12"
                onClick={() => handleButtonClick(112)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b13"
                onClick={() => handleButtonClick(113)}
              >
                <span>
                  Zobacz <br />
                  szczegóły
                </span>
              </div>
              <div
                className="floor-main-area b14"
                onClick={() => handleButtonClick(114)}
              >
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
                className="floor-main-area c1"
                onClick={() => handleButtonClick(201)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c2"
                onClick={() => handleButtonClick(202)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c3"
                onClick={() => handleButtonClick(203)}
              >
                <div>
                  <div />
                </div>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c4"
                onClick={() => handleButtonClick(204)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c5"
                onClick={() => handleButtonClick(205)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c6"
                onClick={() => handleButtonClick(206)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c7"
                onClick={() => handleButtonClick(207)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c8"
                onClick={() => handleButtonClick(208)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c9"
                onClick={() => handleButtonClick(209)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c10"
                onClick={() => handleButtonClick(210)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c11"
                onClick={() => handleButtonClick(211)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c12"
                onClick={() => handleButtonClick(212)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c13"
                onClick={() => handleButtonClick(213)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area c14"
                onClick={() => handleButtonClick(214)}
              >
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-3" && (
            <>
              <img src="/floor-3.png" alt="" />
              <div
                className="floor-main-area d1"
                onClick={() => handleButtonClick(301)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d2"
                onClick={() => handleButtonClick(302)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d3"
                onClick={() => handleButtonClick(303)}
              >
                <div>
                  <div />
                </div>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d4"
                onClick={() => handleButtonClick(304)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d5"
                onClick={() => handleButtonClick(305)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d6"
                onClick={() => handleButtonClick(306)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d7"
                onClick={() => handleButtonClick(307)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d8"
                onClick={() => handleButtonClick(308)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d9"
                onClick={() => handleButtonClick(309)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d10"
                onClick={() => handleButtonClick(310)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d11"
                onClick={() => handleButtonClick(311)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d12"
                onClick={() => handleButtonClick(312)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d13"
                onClick={() => handleButtonClick(313)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area d14"
                onClick={() => handleButtonClick(314)}
              >
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-4" && (
            <>
              <img src="/floor-4.png" alt="" />
              <div
                className="floor-main-area e1"
                onClick={() => handleButtonClick(401)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e2"
                onClick={() => handleButtonClick(402)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e3"
                onClick={() => handleButtonClick(403)}
              >
                <div>
                  <div />
                </div>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e4"
                onClick={() => handleButtonClick(404)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e5"
                onClick={() => handleButtonClick(405)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e6"
                onClick={() => handleButtonClick(406)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e7"
                onClick={() => handleButtonClick(407)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e8"
                onClick={() => handleButtonClick(408)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e9"
                onClick={() => handleButtonClick(409)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e10"
                onClick={() => handleButtonClick(410)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e11"
                onClick={() => handleButtonClick(411)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e12"
                onClick={() => handleButtonClick(412)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e13"
                onClick={() => handleButtonClick(413)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area e14"
                onClick={() => handleButtonClick(414)}
              >
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-5" && (
            <>
              <img src="/floor.png" alt="" />
              <div
                className="floor-main-area f1"
                onClick={() => handleButtonClick(501)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f2"
                onClick={() => handleButtonClick(502)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f3"
                onClick={() => handleButtonClick(503)}
              >
                <div>
                  <div />
                </div>
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f4"
                onClick={() => handleButtonClick(504)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f5"
                onClick={() => handleButtonClick(505)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f6"
                onClick={() => handleButtonClick(506)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f7"
                onClick={() => handleButtonClick(507)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f8"
                onClick={() => handleButtonClick(508)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f9"
                onClick={() => handleButtonClick(509)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f10"
                onClick={() => handleButtonClick(510)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f11"
                onClick={() => handleButtonClick(511)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f12"
                onClick={() => handleButtonClick(512)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f13"
                onClick={() => handleButtonClick(513)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area f14"
                onClick={() => handleButtonClick(514)}
              >
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
          {currentFloor === "pietro-6" && (
            <>
              <img src="/floor-6.png" alt="" />
              <div
                className="floor-main-area g1"
                onClick={() => handleButtonClick(601)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g2"
                onClick={() => handleButtonClick(602)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g3"
                onClick={() => handleButtonClick(603)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g4"
                onClick={() => handleButtonClick(604)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g5"
                onClick={() => handleButtonClick(605)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g6"
                onClick={() => handleButtonClick(606)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g7"
                onClick={() => handleButtonClick(607)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g8"
                onClick={() => handleButtonClick(608)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g9"
                onClick={() => handleButtonClick(609)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g10"
                onClick={() => handleButtonClick(610)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g11"
                onClick={() => handleButtonClick(611)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g12"
                onClick={() => handleButtonClick(612)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g13"
                onClick={() => handleButtonClick(613)}
              >
                <span>Zobacz szczegóły</span>
              </div>
              <div
                className="floor-main-area g14"
                onClick={() => handleButtonClick(614)}
              >
                <span>Zobacz szczegóły</span>
              </div>
            </>
          )}
        </div>
      </main>
      <div className="floor-up-down">
        {currentFloor !== "pietro-6" && (
          <div className="indicator indicator-top">
            <span>Piętro wyżej</span>
            <div
              className="icon icon-up"
              onClick={() => handleChangeFloor("up")}
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
