import Navbar from "@/src/components/Header";
import Carousel from "@/src/components/Carousel";
import "./globals.css";
import TopFilter from "@/src/components/TopFilter";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        {/* <Carousel /> */}
      </header>
      <main>
        <TopFilter />
        <Footer />
      </main>
    </>
  );
}
