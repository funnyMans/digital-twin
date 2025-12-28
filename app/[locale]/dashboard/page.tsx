import AnatomySidebar from "@/shared/ui/sidebar/AnatomySidebar";
import { TwinModel3D } from "@/widgets/DigitalTwin/3DModel";
import { TwinStatsDesk } from "@/widgets/DigitalTwin/TwinStats/_desk";

const DashboardPage = () => {
  return (
    <div className={"w-full h-full flex flex-col lg:flex-row  gap-5 px-5"}>
      <AnatomySidebar position="bottom-left" />
      <TwinModel3D />
      <TwinStatsDesk />
    </div>
  );
};

export default DashboardPage;
