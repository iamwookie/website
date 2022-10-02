import Head from 'next/head';
import Link from 'next/link';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import Footer from '../components/Footer';

import items from '../.data/portfolio.json';

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <main className='grid min-h-screen place-items-center'>
                <div className='backdrop-blur-xl rounded-lg p-5 text-center text-white font-nunito animate__animated animate__fadeIn'>
                    <h1 className='text-2xl'>Portfolio</h1>
                    <h5 className='text-sm'>(stuff I made)</h5>

                    <Link href='/'>
                        <button className='rounded-lg mt-2 px-2 border-2 hover:bg-white hover:text-black'>Home</button>
                    </Link>

                    <div className='grid gap-5 lg:grid-cols-2 md:grid-cols-1 mt-5'>
                        {items.map(item => {
                            return <PortfolioCard name={item.name} description={item.description} bannerURL={item.bannerURL} link={item.link} key={item} />;
                        })}
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}