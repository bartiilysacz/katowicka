import SimpleReactLightbox from "simple-react-lightbox";
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/900.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <SimpleReactLightbox><Component {...pageProps} /></SimpleReactLightbox>
}

export default MyApp
