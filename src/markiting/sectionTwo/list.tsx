import { Card } from "./card";
export const List = () => {
  return (
    <div
      className="flex flex-wrap justify-center gap-x-8
     gap-y-14"
    >
        <Card
          title="امراض عصبية"
          color={"bg-green-100"}
          description="تقدم الخدمات الطبية المتطورة المبتكرة"
          footer="10+ طبيب"
          icon="./brain.png"
          iconColor="bg-yellow-100"
        />
        <Card
          title="امراض جلدية"
          color={"bg-red-100"}
          description="تقدم الخدمات الطبية المتطورة المبتكرة"
          footer="30+ طبيب"
          icon="./hand.png"
          iconColor="bg-green-100"
        />
        <Card
          title="امراض بطنية"
          color={"bg-blue-100"}
          description="تقدم الخدمات الطبية المتطورة المبتكرة"
          footer="20+ طبيب"
          icon="./human.png"
          iconColor="bg-red-100"
        />
        <Card
          title="امراض انف و اذن و حنجرة"
          color={"bg-yellow-100"}
          description="تقدم الخدمات الطبية المتطورة المبتكرة"
          footer="30+ طبيب"
          icon="./otoscope.png"
          iconColor="bg-blue-100"
        />
    </div>
  );
};
