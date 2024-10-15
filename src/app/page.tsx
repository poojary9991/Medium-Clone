import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="This is Medium 2.0 Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is medium 2.O</h1>
    </div>
  );
}
