import TourCard from "./TourCard";
import SidebarFilter from "./ToursSidebarFilter";

const ToursList = () => {
  return (
    <div className="flex">
      <SidebarFilter />
      <TourCard />
    </div>
  );
};

export default ToursList;
