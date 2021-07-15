import Head from 'next/head';
import Navigation from '../components/navigation';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Gmail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
