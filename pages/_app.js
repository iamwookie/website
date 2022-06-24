import Head from 'next/head';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Wookie" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="description" content="Hi, I'm Bilal (A.K.A Wookie), a Semi Full Stack Developer." />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Hi, I'm Bilal (A.K.A Wookie), a Semi Full Stack Developer." />
        <meta property="og:url" content="https://wookie.info" />
        <meta property="og:image" content="/assets/favicon.png" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
