import { Button } from "@/components/ui/button";

export const SectionOne = () => {
  return (
    <div className="w-full mt-10 relative">
      <img
        src="./dna.png"
        alt=""
        className="absolute left-1/2 opacity-15 -translate-x-1/2"
      />
      <div className="flex lg:flex-row-reverse flex-col items-center justify-between relative lg:max-w-screen-lg mx-auto px-5">
        <img
          src="./capsules.png"
          alt=""
          className="absolute w-12 h-12 lg:right-[150px] md:top-[130px] right-[150px] top-[300px] ml-10 md:block hidden"
        />
        <div className="lg:text-right text-center max-w-[500px]">
          <h1 className="lg:text-5xl text-4xl font-semibold">
            افضل رعاية و خدمات صحية
          </h1>
          <p className="font-semibold lg:text-md text-sm text-muted-foreground mt-10">
            مع MEDICAL، ستحصل على أفضل الأدوية والخدمات الصحية الممتازة. إذا كنت
            بحاجة إلى مزيد من المساعدة أو لديك أي استفسارات أخرى، فلا تتردد في
            طرحها!
          </p>
          <div className="flex space-x-5 lg:justify-end justify-center mt-10">
            <Button variant={"ghost"} size={"lg"}>
              اعرف المزيد
            </Button>
            <Button variant={"primary"} size={"lg"}>
              تواصل معنا
            </Button>
          </div>
        </div>
        <div className="w-[300px] relative lg:mt-0 mt-10">
          <div className="absolute w-full h-full bottom-0 opacity-25 rounded-xl bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute w-full h-full bottom-0 rounded-xl top-5 right-5 bg-blue-400 shadow-lg -z-10 opacity-80"></div>
          <p className="absolute bottom-16 text-lg w-full text-right pr-2 font-bold text-white">
            مع افضل الاطباء في كل التخصصات
          </p>
          <img src="/doctor2.jpg" className="rounded-xl shadow-md" />
        </div>
      </div>
    </div>
  );
};
