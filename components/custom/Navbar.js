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

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.9)'
  },
  bmMenu: {
    background: 'rgba(0, 0, 0, 0.9)'
  }
}

const Navbar = () => {
  const { width } = useWindowSize();
  const isHamburgerMenu = width < 991;

  return (
    isHamburgerMenu ?
      <Menu isOpen={false} styles={ styles }>
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
