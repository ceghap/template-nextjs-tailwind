import Head from 'next/head';

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Next.JS + TS + tailwindCSS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-3xl mt-4 font-semibold">Next.JS + TS + tailwindCSS</h1>
            <p className="text-base font-thin">included with eslint + prettier config</p>
        </>
    );
}
