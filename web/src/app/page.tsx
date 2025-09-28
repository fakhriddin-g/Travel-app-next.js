import Navbar from "@/src/components/Header";
import Carousel from "@/src/components/Carousel";
import "./globals.css";
import TopFilter from "@/src/components/TopFilter";
import SidebarFilter from "@/src/components/ToursSidebarFilter";
import TourCard from "../components/TourCard";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        {/* <Carousel /> */}
      </header>
      <main>
        <TopFilter />
        {/* <SidebarFilter /> */}
      </main>
    </>
  );
}
