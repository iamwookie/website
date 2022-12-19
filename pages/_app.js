import { Analytics } from '@vercel/analytics/react';

import Head from 'next/head';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="author" content="Bilal" />
                <meta name="theme-color" content="#FFFFFF" />
                <meta name="description" content="A person on this planet." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="( ͡° ͜ʖ ͡°)" key='title' />
                <meta property="og:description" content="A person on this planet." key='desc' />
                <meta property="og:url" content="https://bil.al" />
                <meta property="og:image" content="/assets/favicon.png" />
                <link rel="icon" href="/assets/favicon.png" />
            </Head>

            <Component {...pageProps} />

            <Analytics />
        </>
    );
}

export default MyApp;
