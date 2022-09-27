import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import Page from "./Page";
import Home from "./Home";
import Floor from "./Floor";
import Lokal from "./Lokal";
import Kontakt from "./Kontakt";
import Inwestycja from "./Inwestycja";
import Wybor from "./Wybor";
import Lokalizacja from "./Lokalizacja";
import Lokale from "./Lokale";
import Wykonczenie from "./Wykonczenie";
import Vat from "./Vat";
import Inwestycje from "./Inwestycje";

// resolve Storyblok components to Next.js components
const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  page: Page,
  home: Home,
  floor: Floor,
  lokal: Lokal,
  kontakt: Kontakt,
  inwestycja: Inwestycja,
  wyborlokalu: Wybor,
  lokalizacja: Lokalizacja,
  lokale: Lokale,
  wykonczenie: Wykonczenie,
  vat: Vat,
  inwestycje: Inwestycje
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];

    return <Component blok={blok} key={blok._uid} />;
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
