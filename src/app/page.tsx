import Image from "next/image";
import Head from 'next/head';
import Header from "../../components/Header"
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="This is Medium 2.0 Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
