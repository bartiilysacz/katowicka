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
    const floor = Number(currentFloor.replace('pietro-',''));
    if (direction === 'up') {
      router.push(`/pietro-${floor+1}`);
    }
    if (direction === 'down') {
      router.push(`/pietro-${floor-1}`);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="floor-main">
        <div className="floor-main-wrapper">
          {currentFloor === "pietro-0" && (
            <>
            <img
              src="/floor-0.png"
              alt=""
            />
            <div className="floor-main-area a1" onClick={() => handleButtonClick(1)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a2" onClick={() => handleButtonClick(2)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a3" onClick={() => handleButtonClick(3)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a4" onClick={() => handleButtonClick(4)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a5" onClick={() => handleButtonClick(5)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a6" onClick={() => handleButtonClick(6)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a7" onClick={() => handleButtonClick(7)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a8" onClick={() => handleButtonClick(8)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a9" onClick={() => handleButtonClick(9)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a10" onClick={() => handleButtonClick(110)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a11" onClick={() => handleButtonClick(111)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a12" onClick={() => handleButtonClick(112)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a13" onClick={() => handleButtonClick(113)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area a14" onClick={() => handleButtonClick(114)}><span>Zobacz <br/>szczegóły</span></div>
            </>
          )}
          {currentFloor === "pietro-1" && (
            <>
            <img
              src="/floor-1.png"
              alt=""
            />
            <div className="floor-main-area b1" onClick={() => handleButtonClick(1)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b2" onClick={() => handleButtonClick(2)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b3" onClick={() => handleButtonClick(3)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b4" onClick={() => handleButtonClick(4)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b5" onClick={() => handleButtonClick(5)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b6" onClick={() => handleButtonClick(6)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b7" onClick={() => handleButtonClick(7)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b8" onClick={() => handleButtonClick(8)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b9" onClick={() => handleButtonClick(9)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b10" onClick={() => handleButtonClick(10)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b11" onClick={() => handleButtonClick(11)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b12" onClick={() => handleButtonClick(12)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b13" onClick={() => handleButtonClick(13)}><span>Zobacz <br/>szczegóły</span></div>
            <div className="floor-main-area b14" onClick={() => handleButtonClick(14)}><span>Zobacz <br/>szczegóły</span></div>
            </>
          )}
          {currentFloor === "pietro-2" && (
            <>
            <img
              src="/floor-2.png"
              alt=""
            />
            <div className="floor-main-area c1" onClick={() => handleButtonClick(1)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c2" onClick={() => handleButtonClick(2)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c3" onClick={() => handleButtonClick(3)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c4" onClick={() => handleButtonClick(4)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c5" onClick={() => handleButtonClick(5)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c6" onClick={() => handleButtonClick(6)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c7" onClick={() => handleButtonClick(7)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c8" onClick={() => handleButtonClick(8)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c9" onClick={() => handleButtonClick(9)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c10" onClick={() => handleButtonClick(10)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c11" onClick={() => handleButtonClick(11)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c12" onClick={() => handleButtonClick(12)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c13" onClick={() => handleButtonClick(13)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area c14" onClick={() => handleButtonClick(14)}><span>Zobacz szczegóły</span></div>
            </>
          )}
          {currentFloor === "pietro-3" && (
            <>
            <img
              src="/floor-3.png"
              alt=""
            />
            <div className="floor-main-area d1" onClick={() => handleButtonClick(1)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d2" onClick={() => handleButtonClick(2)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d3" onClick={() => handleButtonClick(3)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d4" onClick={() => handleButtonClick(4)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d5" onClick={() => handleButtonClick(5)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d6" onClick={() => handleButtonClick(6)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d7" onClick={() => handleButtonClick(7)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d8" onClick={() => handleButtonClick(8)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d9" onClick={() => handleButtonClick(9)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d10" onClick={() => handleButtonClick(10)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d11" onClick={() => handleButtonClick(11)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d12" onClick={() => handleButtonClick(12)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d13" onClick={() => handleButtonClick(13)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area d14" onClick={() => handleButtonClick(14)}><span>Zobacz szczegóły</span></div>
            </>
          )}
          {currentFloor === "pietro-4" && (
            <>
            <img
              src="/floor-4.png"
              alt=""
            />
            <div className="floor-main-area e1" onClick={() => handleButtonClick(1)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e2" onClick={() => handleButtonClick(2)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e3" onClick={() => handleButtonClick(3)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e4" onClick={() => handleButtonClick(4)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e5" onClick={() => handleButtonClick(5)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e6" onClick={() => handleButtonClick(6)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e7" onClick={() => handleButtonClick(7)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e8" onClick={() => handleButtonClick(8)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e9" onClick={() => handleButtonClick(9)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e10" onClick={() => handleButtonClick(10)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e11" onClick={() => handleButtonClick(11)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e12" onClick={() => handleButtonClick(12)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e13" onClick={() => handleButtonClick(13)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area e14" onClick={() => handleButtonClick(14)}><span>Zobacz szczegóły</span></div>
            </>
          )}
          {currentFloor === "pietro-5" && (
            <>
            <img
              src="/floor.png"
              alt=""
            />
            <div className="floor-main-area f1" onClick={() => handleButtonClick(1)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f2" onClick={() => handleButtonClick(2)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f3" onClick={() => handleButtonClick(3)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f4" onClick={() => handleButtonClick(4)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f5" onClick={() => handleButtonClick(5)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f6" onClick={() => handleButtonClick(6)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f7" onClick={() => handleButtonClick(7)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f8" onClick={() => handleButtonClick(8)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f9" onClick={() => handleButtonClick(9)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f10" onClick={() => handleButtonClick(10)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f11" onClick={() => handleButtonClick(11)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f12" onClick={() => handleButtonClick(12)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f13" onClick={() => handleButtonClick(13)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area f14" onClick={() => handleButtonClick(14)}><span>Zobacz szczegóły</span></div>
            </>
          )}
          {currentFloor === "pietro-6" && (
            <>
            <img
              src="/floor-6.png"
              alt=""
            />
            <div className="floor-main-area g1" onClick={() => handleButtonClick(1)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g2" onClick={() => handleButtonClick(2)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g3" onClick={() => handleButtonClick(603)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g4" onClick={() => handleButtonClick(4)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g5" onClick={() => handleButtonClick(5)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g6" onClick={() => handleButtonClick(6)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g7" onClick={() => handleButtonClick(7)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g8" onClick={() => handleButtonClick(8)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g9" onClick={() => handleButtonClick(9)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g10" onClick={() => handleButtonClick(10)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g11" onClick={() => handleButtonClick(11)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g12" onClick={() => handleButtonClick(12)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g13" onClick={() => handleButtonClick(13)}><span>Zobacz szczegóły</span></div>
            <div className="floor-main-area g14" onClick={() => handleButtonClick(14)}><span>Zobacz szczegóły</span></div>
            </>
          )}
        </div>
      </main>
      <div className="floor-up-down">
        {currentFloor !== "pietro-6" && (
          <div className="icon icon-up" onClick={() => handleChangeFloor('up')}>
            <img src="/icon-up.png" alt="" />
          </div>
        )}
        {currentFloor !== "pietro-0" && (
          <div className="icon icon-down" onClick={() => handleChangeFloor('down')}>
            <img src="/icon-up.png" alt="" style={{ transform: 'rotate(-180deg)' }}/>
          </div>
        )}
      </div>
      <Footer fixed gradient />
    </div>
  );
};

export default Floor;
