import { Button } from "@/components/ui/button";

export const SectionFour = () => {
  return (
    <div className="w-full sm:mt-[300px] mt-[20px] pb-20 px-10">
      <div className="lg:max-w-screen-lg mx-auto">
        <div className="w-full flex md:flex-row flex-col-reverse gap-y-14 justify-between">
          <div className="sm:w-[400px] w-[300px] sm:h-[400px] h-[300px] rounded-r-full rounded-b-full bg-blue-300 overflow-hidden relative lg:mx-0 mx-auto">
            <img
              src="./doctor5.png"
              alt=""
              className="absolute top-5 left-1/2 -translate-x-1/2 sm:max-w-[300px] max-w-[210px]"
            />
          </div>
          <div className="lg:max-w-[400px] lg:text-end text-center">
            <h1 className="lg:text-2xl text-xl font-bold pt-10 text lg:text-end text-center">
              مع افضل و اكفاء الاطباء في كل التخصصات
            </h1>
            <p className="font-bold text-sm text-muted-foreground mt-5">
              نقدم لكم افضل الاطباء الاستشاريين في كل التخصصات واكافاءهم
            </p>
            <Button variant={"ghost"} className="mt-10">
              اعرف المزيد
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
