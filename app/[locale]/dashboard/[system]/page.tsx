import AnatomySidebar from "@/shared/ui/sidebar/AnatomySidebar";
import { TwinModel3D } from "@/widgets/DigitalTwin/3DModel";
import { TwinStatsDesk } from "@/widgets/DigitalTwin/TwinStats/_desk";
// import { GoalsProgressBar } from "@/widgets/Goals";

const SystemOverviewPage = () => {
  return (
    <div className={"w-full h-full flex flex-col lg:flex-row  gap-5 px-5"}>
      <AnatomySidebar position="bottom-right" />
      <TwinStatsDesk />
      <TwinModel3D />
    </div>
  );
};

export default SystemOverviewPage;
