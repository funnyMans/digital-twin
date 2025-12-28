import { AgeRange, AgeSlide } from "@/entities/stats/age";

const AgeMetrics = () => {
  return (
    <div className="flex gap-4 ">
      <AgeRange ageData={{ biologicalAge: 45, chronoAge: 50 }} />
      <AgeSlide ageData={{ biologicalAge: 45, chronoAge: 50 }} />
    </div>
  );
};

export default AgeMetrics;
