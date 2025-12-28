import { FollowUpBatch } from "@/entities/rehab/follow-up";

const RehabFollowUp = () => {
  return (
    <div>
      <FollowUpBatch
        careTypes={[
          {
            id: "1",
            title: "Physical Therapy",
            description:
              "Personalized exercises to improve mobility and strength.",
            meta: "Recommended 3 times a week",
          },
          {
            id: "2",
            title: "Occupational Therapy",
            description:
              "Assistance with daily activities and adaptive techniques.",
            meta: "Recommended 2 times a week",
          },
          {
            id: "3",
            title: "Nutritional Counseling",
            description: "Diet plans to support recovery and overall health.",
            meta: "One session per month",
          },
        ]}
      />
    </div>
  );
};

export { RehabFollowUp };
