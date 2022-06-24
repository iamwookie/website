import { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../components/Card';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [musicData, setMusic] = useState(null);

  useEffect(() => {
    async function fetchPlaying() {
      const data = await fetch('/api/spotify/playing');
      const json = await data.json();
      setMusic(json);
    }

    fetchPlaying();

    let interval = setInterval(() => fetchPlaying(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>{"Hello!"}</title>
        <meta property="og:title" content="Hello!" />
      </Head>

      <main className='grid h-screen place-items-center'>
        <Card musicData={musicData} />
      </main>

      <ToastContainer
        limit={3}
        theme='colored'
        transition={Flip}
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}