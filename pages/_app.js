import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="pt-[65px]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
