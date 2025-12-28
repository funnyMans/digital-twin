import {
  TrackerHeading,
  TrackerProgress,
  TrackerTiming,
} from "@/entities/stats/tracker";

const Tracker = () => {
  return (
    <div className="flex justify-between h-20">
      <TrackerHeading />
      <TrackerProgress />
      <TrackerTiming daysCount={3} />
    </div>
  );
};

export default Tracker;
