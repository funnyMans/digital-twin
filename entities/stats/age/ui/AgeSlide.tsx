import {
  Card,
  CardContent,
  CardTitle,
} from "@/shared/lib/shadCN/components/ui/card";

interface AgeSliderProps {
  ageData: {
    biologicalAge: number;
    chronoAge: number;
  };
}

export const AgeSlide: React.FC<AgeSliderProps> = ({ ageData }) => {
  const minAge = Math.min(ageData.biologicalAge, ageData.chronoAge);
  const maxAge = Math.max(ageData.biologicalAge, ageData.chronoAge);
  const rangeStart = minAge - 1;
  const range = 16;

  // const bioAgePercentage = ((minAge - rangeStart) * 100) / range + 1;
  const chronoAgePercentage = ((maxAge - rangeStart) * 100) / range;

  const axisLabels = Array.from(
    { length: range + 2 },
    (_, i) => rangeStart + i
  );

  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-center gap-2 p-4 w-80 md:w-full">
        <CardTitle className="text-sm font-medium w-full text-left md:text-center mb-2">
          You
        </CardTitle>

        {/* Slider Bar */}
        <div className="relative w-full h-6 flex items-center">
          {/* Background line */}
          <div className="absolute left-3 right-3 top-1/2 h-1  rounded" />

          {/* Gradient fill */}
          <div
            className="absolute left-3 top-1/2 h-1 rounded-l-full animate-barFill"
            style={{
              width: `${chronoAgePercentage}%`,
              background: "linear-gradient(270deg, #0974fb 0%, #5ccdff 100%)",
            }}
          />
        </div>

        {/* Axis Labels */}
        <div className="flex justify-between w-full mt-3 text-xs text-gray-900">
          {axisLabels.map((label, index) => (
            <div
              key={index}
              className={`text-center w-6 ${
                index === Math.floor(range / 2)
                  ? "opacity-100 font-medium"
                  : index === 0 || index >= axisLabels.length - 2
                  ? "opacity-60"
                  : "opacity-40"
              } ${index % 2 === 1 ? "hidden" : ""}`}
            >
              {label}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
