import Head from "next/head";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import image from "./img/glowna-3.jpg";

const Kontakt = () => {
  return (
    <div>
      <Head>
        <title>Katowicka 39 - lokale</title>
      </Head>
      <Navbar />
      <div
        className="hero"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
      <main className="container about-text table-dots">
        <h2>Lokale</h2>
        <table>
          <tr>
            <td>1. drzwi wejściowe</td>
            <td>
              <p>
                drzwi wejściowe antywłamaniowe, ognioodporne w klasie EI30,
                antracytowe
              </p>
            </td>
          </tr>
          <tr>
            <td>2. stolarka okienna</td>
            <td>
              <p>
                stolarka okienna PCV biała, używana po kompleksowym serwisie,
                obejmującym niezbędną wymianę uszczelek, regulację okuć, wymianę
                klamek oraz osłon zawiasów
              </p>
            </td>
          </tr>
          <tr>
            <td>3. posadzki</td>
            <td>
              <p>szlichta cementowa</p>
            </td>
          </tr>
          <tr>
            <td>4. ściany wewnętrzne</td>
            <td>
              <p>
                ściany między-lokalowe wykonane w technologii lekkiej
                gipsowo-kartonowej z dwukrotnym poszyciem płytami GKB o grub.
                12,5 mm, na konstrukcji z profili stalowych CW i UW 100, z
                wypełnieniem wełną mineralną o podwyższonej izolacyjności
                akustycznej,
              </p>
              <p>
                ściany działowe gipsowo-kartonowe z pojedynczym poszyciem
                płytami GKB o grub. 12,5 mm, na konstrukcji z profili stalowych
                CW i UW 100, z wypełnieniem wełną mineralną o podwyższonej
                izolacyjności akustycznej
              </p>
              <p>
                wszystkie ściany wykończone gładzią gipsową, szlifowane,
                malowane pojedynczą warstwą gruntującą
              </p>
            </td>
          </tr>
          <tr>
            <td>5.sufity</td>
            <td>
              <p>
                sufity podwieszane g-k, wykończone gładzią, szlifowane, w
                pomieszczeniach dziennych malowane pojedynczą warstwą gruntującą
              </p>
            </td>
          </tr>
          <tr>
            <td>6. instalacja wodociągowa</td>
            <td>
              <p>
                instalacja wody zimnej i ciepłej prowadzona pod stropem
                międzykondygnacyjnym bez rozdzielaczy w lokalu; w łazience i
                aneksie kuchennym prowadzona w warstwie ścian oraz częściowo
                natynkowo
              </p>
              <p>instalacja wykonana z rur pert</p>
              <p>
                podejścia pod standardowe punkty czerpalne zakończone korkami
              </p>
              <p>
                liczniki zużycia wody zimnej i ciepłej usytuowane w skrzyniach
                rozdzielaczy ulokowanych na korytarzu
              </p>
            </td>
          </tr>
          <tr>
            <td>7. instalacja kanalizacyjna sanitarna </td>
            <td>
              <p>
                instalacja kanalizacyjna sanitarna wykonana z rur i kształtek z
                tworzyw sztucznych, doprowadzona do urządzeń w warstwie ścian
                lub w posadzce
              </p>
              <p>
                pionowe podejścia wykonano w zabudowanych szachtach wewnątrz
                łazienek
              </p>
            </td>
          </tr>
          <tr>
            <td>8. instalacja C.O. </td>
            <td>
              <p>
                instalacja centralnego ogrzewania prowadzona pod stropem
                międzykondygnacyjnym bez rozdzielaczy w lokalu; w łazience
                prowadzona w warstwie ścian
              </p>
              <p>
                liczniki zużycia ciepła usytuowane w skrzyniach rozdzielaczy
                ulokowanych na korytarzu
              </p>
              <p>
                grzejniki płytowe, wyposażone w zawory i głowice termostatyczne
              </p>
              <p>grzejniki łazienkowe – drabinkowe z głowicą termostatyczną</p>
            </td>
          </tr>
          <tr>
            <td>9. instalacja klimatyzacji </td>
            <td>
              każdy lokal wyposażony w jednostkę wewnętrzną typu multisplit
              podłączoną do jednostki zewnętrznej typu RVF
            </td>
          </tr>
          <tr>
            <td>10. instalacja wentylacyjna</td>
            <td>
              <p>
                instalacja wentylacji mechanicznej wywiewnej (dwa układy
                wywiewne, osobno dla pomieszczeń dziennych i łazienek)
              </p>
              <p>nawiew kompensacyjny poprzez nawiewniki okienne</p>
            </td>
          </tr>
          <tr>
            <td>11. instalacja elektryczna</td>
            <td>
              <p>
                tablica lokalowa natynkowa, zlokalizowana nad drzwiami
                wejściowymi,
              </p>
              <p>gniazda, kontakty i wypusty oświetleniowe wewnętrzne</p>
            </td>
          </tr>
          <tr>
            <td>12. instalacja niskoprądowa</td>
            <td>
              <p>
                system domofonowy – unifon montowany w okolicy drzwi wejściowych
              </p>
              <p>
                1 x gniazdo światłowodowe (w tym do obsługi urządzeń RTV/SAT)
              </p>
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
