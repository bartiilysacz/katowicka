import Head from "next/head";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import image from "./img/glowna-2.jpg";

const Kontakt = () => {
  return (
    <div>
      <Head>
        <title>Katowicka 39 - o inwestycji</title>
      </Head>
      <Navbar />
      <div
        className="hero"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
      <main className="container about-text">
        <h2>Zwrot VAT</h2>
        <p>
          Zwrot podatku VAT od transakcji zakupu lokalu w Apartamentach K39 bądź
          jego odliczenie możliwe jest dla wszystkich, dla osób fizycznych,
          które nie prowadzą działalności gospodarczej oraz dla osób, które
          prowadzą działalność gospodarczą.
        </p>
        <h2>I. Osoby fizyczne nieprowadzące działalności gospodarczej</h2>
        <ul>
          <li>
            Zgodnie z zasadą wyrażoną w art. 86 ust. 1 ustawy z dnia 11 marca
            2004 r. o podatku od towarów i usług (Dz. U. Nr 54, poz. 535 z późn.
            zm.) – zwaną dalej „ustawą o VAT” w zakresie, w jakim towary i
            usługi są wykorzystywane do wykonywania czynności opodatkowanych,
            podatnikowi przysługuje prawo do obniżenia kwoty podatku należnego o
            kwotę podatku naliczonego.
          </li>
          <li>
            Przez podatnika rozumie się tutaj m.in. osobę fizyczną wykonującą
            samodzielnie działalność gospodarczą (art. 15 ust. 1 ustawy o VAT).
            Przez działalność gospodarczą rozumie się m.in. czynności polegające
            na wykorzystywaniu towarów w sposób ciągły dla celów zarobkowych
            (art. 15 ust. 2 ustawy o VAT), za towar można uznać m.in. budynki
            (art. 2 pkt 6 ustawy o VAT). Działalność gospodarcza w rozumieniu
            ustawy o VAT obejmuje także wykonywanie usług najmu (co nie rodzi
            obowiązku podjęcia działalności gospodarczej.
          </li>
          <li>
            Zwrot podatku VAT z tytułu zakupu lokalu może zostać dokonany na
            podstawie art. 87 ust. 5a ustawy o VAT, w przypadku, gdy podatnik
            nie wykonał w okresie rozliczeniowym czynności opodatkowanych
            (sprzedaży). Na wniosek podatnika złożony wraz z deklaracją
            podatkową, zwrot kwoty podatku naliczonego, jest realizowany w
            terminie 180 dni od dnia złożenia rozliczenia (art. 87 ust. 5a
            ustawy o VAT). Możliwe jest przyspieszenie terminu zwrotu do 60 dni,
            na pisemny wniosek podatnika, jeżeli złoży on w urzędzie skarbowym
            zabezpieczenie majątkowe w wysokości kwoty żądanego zwrotu podatku.
            (87 ust. 5a ustawy o VAT).
          </li>
          <li>
            Aby można było skorzystać z odliczenia i zwrotu podatku VAT z tytułu
            nabycia lokalu należy:
            <ol>
              <li>
                przed nabyciem lokalu lub przed otrzymaniem pierwszej faktury
                zaliczkowej konieczne jest złożenie w urzędzie skarbowym,
                właściwym dla miejsca położenia nieruchomości, zgłoszenia
                rejestracyjnego VAT-R czyli zarejestrować się jako podatnik VAT
                czynny na formularzu VAT-R przed podpisaniem umowy zakupu lokalu
                (najpóźniej przed wpłaceniem zaliczki),
              </li>
              <li>
                po otrzymaniu faktury (po wpłaceniu zaliczki na zakup lokalu i
                każdej następnej raty) od sprzedającego, ujmować ją w ewidencji
                zakupu VAT oraz składać comiesięczne deklaracje VAT-7,
              </li>
              <li>
                wraz z comiesięczną deklaracją podatkową składać wniosek o zwrot
                podatku VAT.
              </li>
            </ol>
          </li>
          <li>
            Zwrot jest dokonywany przez Urząd Skarbowy w terminie 180 dni (60
            dni) od złożenia wniosku, na rachunek bankowy wskazany w zgłoszeniu
            rejestracyjnym (aktualizacyjnym).
          </li>
          <li>
            Zgłoszenie do VAT nie jest równoznaczne ze zgłoszeniem działalności
            gospodarczej.
          </li>
          <li>
            Po zakupie lokalu, jego nabywca powinien wystawiać faktury VAT
            dokumentujące należności z tytułu czynszu najmu i ujmować je w
            rejestrze sprzedaży VAT i deklaracjach.
          </li>
        </ul>
        <h2>II. Osoby fizyczne prowadzące działalność gospodarczą</h2>
        <ul>
          <li>
            Osoby prowadzące działalność gospodarczą mogą rozliczać przychody z
            najmu w ramach prowadzonej działalności gospodarczej ( w rodzaju
            działalności gospodarczej należy wskazać najem).
          </li>
          <li>
            Osoba fizyczna prowadząca działalność gospodarczą powinna posiadać
            status czynnego podatnika VAT (zarejestrowanego we właściwym
            urzędzie skarbowym na formularzu VAT-R). Osoby, które prowadząc
            działalność gospodarczą korzystały ze zwolnienia od opodatkowania
            VAT, w celu uzyskania zwrotu VAT od nabycia lokalu, będą zobowiązane
            do rezygnacji z tego zwolnienia i złożenia zgłoszenia
            aktualizującego VAT-R. Zawiadomienie o rezygnacji ze zwolnienia
            należy złożyć przed początkiem miesiąca, w którym nastąpi wpłata
            pierwszej zaliczki, przed podpisaniem przedwstępnej umowy sprzedaż
            lokalu.
          </li>
          <li>
            Odliczenie podatku naliczonego VAT od zakupu lokalu odbywa się
            poprzez pomniejszenie podatku należnego VAT z tytułu sprzedaży, za
            miesiąc, w którym otrzymano fakturę zakupu lokalu (lub fakturę
            zaliczkową) – (art. 86 ust. 1 ustawy o VAT). W przypadku powstania
            różnicy – nadwyżki podatku naliczonego nad należnym, różnicę tę
            można przenieść do rozliczenia w następnym okresie rozliczeniowym
            lub żądać jej zwrotu (art. 87 ust. 1 ustawy o VAT).
          </li>
        </ul>
        <ul className="bold">
          <li>
            Treść przedstawionych powyżej informacji należy traktować tylko i
            wyłącznie informacyjnie. Przed podjęciem jakichkolwiek decyzji
            podatkowych należy skontaktować się z urzędem skarbowym lub biurem
            rachunkowym.
          </li>
          <li>
            Każdy, kto zamierza odliczyć podatek VAT naliczony od zakupu
            lokalu w Apartamentach K39 lub wystąpić o jego zwrot, powinien
            upewnić się czy spełnia ustawowe warunki do skorzystania z tychże
            uprawnień.
          </li>
          <li>
            Przedstawiona instrukcja jest opisem stanu prawnego obowiązującego
            w dniu 1 marca 2022 roku. Nie ponosimy odpowiedzialności za
            aktualność, kompletność opisanych wyżej przepisów.
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
