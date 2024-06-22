import { List } from "./list";

export const SectionTwo = () => {
  return (
    <div className="w-full lg:mt-28 mt-16">
      <div className="lg:max-w-screen-lg mx-auto text-center relative">
        <img
          src="./antibiotics.png"
          alt=""
          className="absolute w-16 h-16 lg:right-[300px] right-[50px] md:top-[50px] z-50  ml-10 sm:block hidden"
        />
        <div>
          <h3 className="text-blue-500 font-bold text-lg">تخصصاتنا</h3>
          <h1 className="font-bold text-3xl pt-3">تخصصاتنا الاستشارية</h1>
        </div>
        <div className="flex justify-center mt-20">
          <List />
        </div>
      </div>
    </div>
  );
};
