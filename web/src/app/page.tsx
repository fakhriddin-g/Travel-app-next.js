import Carousel from "@/src/components/Carousel";
import "./globals.css";
import TopFilter from "@/src/components/TopFilter";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TopFilter />
        <Footer />
      </main>
    </div>
  );
}
