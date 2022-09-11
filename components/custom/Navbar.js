import React, { useState, useEffect } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

const Navbar = () => {
  const { width } = useWindowSize();
  const isHamburgerMenu = width < 991;

  return (
    isHamburgerMenu ?
      <Menu isOpen={false}>
        <Link href="/wybor-lokalu">
          <a>Wybór lokalu</a>
        </Link>
        <Link href="/o-inwestycji">
          <a>O inwestycji</a>
        </Link>
        <p>Oferta</p>
        <Link href="/lokale">
          <a>Lokale</a>
        </Link>
        <Link href="/wykonczenie">
          <a>Wykończenie pod klucz</a>
        </Link>
        <p>Dla inwestora</p>
        <Link href="/inwestycje">
          <a>Inwestycje</a>
        </Link>
        <Link href="/vat">
          <a>Zwrot VAT</a>
        </Link>
        <Link href="/lokalizacja">
          <a>Lokalizacja</a>
        </Link>
        <Link href="/kontakt">
          <a>Kontakt</a>
        </Link>
      </Menu> : (
    <div className="navbar">
      <div className="navbar-container">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Katowicka 39 logo" />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/wybor-lokalu">
              <a>Wybór lokalu</a>
            </Link>
          </li>
          <li>
            <Link href="/o-inwestycji">
              <a>O inwestycji</a>
            </Link>
          </li>
          <li className="dropdown">
            <Link href="#">
              <a>Oferta</a>
            </Link>
            <div className="dropdown-content">
              <Link href="/lokale">
                <a>Lokale</a>
              </Link>
              <Link href="/wykonczenie">
                <a>Wykończenie pod klucz</a>
              </Link>
            </div>
          </li>
          <li className="dropdown">
            <Link href="#">
              <a>Dla inwestora</a>
            </Link>
            <div className="dropdown-content">
              <Link href="/inwestycje">
                <a>Inwestycje</a>
              </Link>
              <Link href="/vat">
                <a>Zwrot VAT</a>
              </Link>
            </div>
          </li>
          <li>
            <Link href="/lokalizacja">
              <a>Lokalizacja</a>
            </Link>
          </li>
          <li>
            <Link href="/kontakt">
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  ));
};

export default Navbar;
