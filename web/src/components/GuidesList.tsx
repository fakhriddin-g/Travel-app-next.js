import GuideCard from "./GuideCard";
import SidebarFilter from "./ToursSidebarFilter";

const GuidesList = () => {
  return (
    <div className="flex">
      <SidebarFilter />
      <GuideCard />
    </div>
  );
};

export default GuidesList;
