import Head from 'next/head';
import Card from '../components/Card';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi! I'm Bilal (A.K.A Wookie)</title>
        <meta property="og:title" content="Hi! I'm Bilal (A.K.A Wookie)" />
      </Head>

      <main className='grid h-screen place-items-center'>
        <Card />
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
