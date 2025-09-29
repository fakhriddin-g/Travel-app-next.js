import GuideCard from "./GuideCard";
import GuideSidebarFilter from "./GuideSidebarFilter";

const GuidesList = () => {
  return (
    <div className="flex">
      <GuideSidebarFilter />
      <GuideCard />
    </div>
  );
};

export default GuidesList;
