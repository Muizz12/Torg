import Head from 'next/head'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from "../components/Footer"
import Banner from '../components/Banner';
import Wave2 from '../components/Wave2';
import Services from '../components/Services';
import Wave3 from '../components/Wave3'
export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Torg</title>
      </Head>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Header />
        <Banner />
        <div className="mt-24">
          <Wave2 />
        </div>
        <div className="mt-10">
          <Services />

        </div>

      </main>

    </div>
  );
}
