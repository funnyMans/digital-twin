import {
  Card,
  CardContent,
  CardTitle,
} from "@/shared/lib/shadCN/components/ui/card";

interface AgeMetricsProps {
  ageData: {
    biologicalAge: number;
    chronoAge: number;
  };
}

export const AgeRange: React.FC<AgeMetricsProps> = ({ ageData }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Biological Age */}
      <Card className="relative w-32 h-32 flex items-center justify-center animate-ageFlow">
        {/* <Shape className="absolute w-full h-full" /> */}
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-0 pt-2">
          <CardTitle className="text-sm font-normal text-gray-900">
            Biological age
          </CardTitle>
          <div className="flex items-center text-2xl font-normal text-green-400 border-l-2 border-teal-400 pl-2">
            {ageData.biologicalAge}
            <span className="ml-1 text-sm text-gray-500/60">yrs</span>
          </div>
        </CardContent>
      </Card>

      {/* Center Arrows */}
      <div className="flex items-center justify-center w-6 h-6 rounded-full">
        {/* <Arrows className="w-6 h-6" /> */}
      </div>

      {/* Chronological Age */}
      <Card className="relative w-32 h-32 flex items-center justify-center animate-ageFlow">
        {/* <Shape className="absolute w-full h-full rotate-180" /> */}
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-0 pt-2">
          <CardTitle className="text-sm font-normal text-gray-900">
            Chronological age
          </CardTitle>
          <div className="flex items-center text-2xl font-normal text-blue-500 border-l-2 border-blue-500 pl-2">
            {ageData.chronoAge}
            <span className="ml-1 text-sm text-gray-500/60">yrs</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
