import Head from "next/head";
import styles from "../styles/Home.module.css";

// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";

export default function Home({ story, preview }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode

  story = useStoryblok(story, enableBridge);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>

      <DynamicComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  // load the published content outside of the preview mode
  let sbParams = {
    version: "draft", // or 'published'
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}
