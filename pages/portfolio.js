import Head from 'next/head';
import Link from 'next/link';

import Button from '../components/Button';
import PortfolioCard from '../components/portfolio/PortfolioCard';

export default function Portfolio({ items, }) {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <main className='grid min-h-screen place-items-center'>
                <div className='backdrop-blur-xl rounded-lg p-5 text-center text-white font-nunito animate__animated animate__fadeIn'>
                    <h1 className='text-2xl'>Portfolio</h1>
                    <h5 className='text-sm'>(stuff i've achieved)</h5>

                    <div className='mt-2'>
                        <Link href='/'>
                            <Button>Home</Button>
                        </Link>
                    </div>

                    <div className='grid gap-5 lg:grid-cols-2 md:grid-cols-1 mt-5'>
                        {items.map(item => {
                            return <PortfolioCard name={item.name} description={item.description} bannerURL={item.bannerURL} link={item.link} key={item} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const data = await import('../.data/portfolio.json');

    return {
        props: { items: data.default }
    };
}