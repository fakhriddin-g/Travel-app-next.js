import Navbar from "@/components/Header";
import Carousel from "@/components/Carousel";
import "./globals.css";
import TopFilter from "@/components/TopFilter";
import FilterTabs from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        {/* <Carousel /> */}
      </header>
      <main>
        <TopFilter />
      </main>
    </>
  );
}
