import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/lib/shadCN/components/ui/card";
import { Checkbox } from "@/shared/lib/shadCN/components/ui/checkbox";

import { IConcern } from "../type/concern";
import LiveButton from "@/shared/lib/shadCN/components/ui/live-button";
import { Badge } from "@/shared/lib/shadCN/components/ui/badge";
import { CircleAlert } from "lucide-react";

const alertIcons = {
  low: <CircleAlert className="text-green-500" />,
  medium: <CircleAlert className="text-yellow-500" />,
  high: <CircleAlert className="text-red-500" />,
};

const ConcernCard = ({ concern }: { concern: IConcern }) => {
  const { title, description, severity } = concern;
  return (
    <Card>
      <CardHeader>
        <Badge className="w-fit gap-1">
          <span>{alertIcons[severity]}</span>
          <h3>{severity}</h3>
        </Badge>

        <Checkbox />
      </CardHeader>
      <CardContent className="card-body">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <LiveButton className="btn btn-primary" text="Resolve" url="#" />
        <div className="hidden group-hover:block mt-2 text-blue-500">
          This content shows on hover
        </div>
      </CardFooter>
    </Card>
  );
};

export { ConcernCard };
