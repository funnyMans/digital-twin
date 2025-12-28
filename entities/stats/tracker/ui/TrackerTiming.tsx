const TrackerTiming = ({ daysCount }: { daysCount: number }) => {
  return (
    <div>
      <span>results expected in</span>
      <span className="text-bold">{daysCount}days </span>
    </div>
  );
};

export { TrackerTiming };
