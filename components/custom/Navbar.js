import React from "react";
import Link from "next/link";

const Navbar = () => (
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
          <Link href="/dla-inwestora">
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
);

export default Navbar;
