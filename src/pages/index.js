import Head from 'next/head'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from "../components/Footer"
import Banner from '../components/Banner';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Torg</title>
      </Head>
      <main className=" mx-auto  ">
        <Header />
        <Banner />


      </main>

    </div>
  );
}
