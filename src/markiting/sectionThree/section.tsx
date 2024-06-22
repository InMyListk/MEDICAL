import { Button } from "@/components/ui/button";
import { Card } from "./card";

export const SectionThree = () => {
  return (
    <div className="lg:mt-36 mt-20 relative">
      <div className="lg:max-w-screen-lg mx-auto px-7">
        <div className="lg:flex justify-end relative hidden">
          <img
            src="./nurse1.jpg"
            alt=""
            className="w-[250px] absolute rounded-xl shadow-lg"
          />
          <img
            src="./nurse2.jpg"
            alt=""
            className="w-[250px] absolute top-32 right-44 rounded-xl shadow-lg"
          />
        </div>
        <div className="lg:max-w-[400px] lg:text-end text-center">
          <h1 className="lg:text-2xl text-xl font-bold pt-10 text lg:text-end text-center">
            الرعاية الافضل فللرعاية الطبية في المستشفي
          </h1>
          <p className="font-bold text-sm text-muted-foreground mt-5">
            نحن نقدم نصائح وإرشادات خاصة للعلاج بالرعاية الصحية ومستوى عالٍ من
            أفضل التقنيات المستخدمة في مستشفانا
          </p>
        </div>
        <div className="flex flex-col lg:justify-end lg:items-end items-center lg:max-w-[400px] justify-center">
          <div className="mt-10 flex flex-wrap gap-5 lg:justify-end justify-center">
            <Card description="مساعدات طارئة" />
            <Card description="رعاية طبية" />
            <Card description="جميع انواع الادوية" />
            <Card description="معامل متخصصة" />
          </div>
          <Button
            variant={"ghost"}
            size={"lg"}
            className="mt-8 lg:mx-0 mx-auto"
          >
            اعرف المزيد
          </Button>
        </div>
      </div>
    </div>
  );
};
