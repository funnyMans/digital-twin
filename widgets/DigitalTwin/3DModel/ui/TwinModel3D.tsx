import { Globe } from "@/shared/ui/globe/Globe";

const TwinModel3D = () => {
  return (
    <div className={"flex flex-4  h-screen justify-center items-center"}>
      <div className="w-screen h-screen lg:hidden"></div>
      <div className=" h-full flex items-center z-1 overflow-hidden rounded-lg border  lg:h-150 w-full lg:w-100 xl:w-140  fixed">
        <Globe />
      </div>
    </div>
  );
};

export default TwinModel3D;
