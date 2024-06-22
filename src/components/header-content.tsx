import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

export const HeaderContent = ({ className }: Props) => {
  return (
    <>
      <ul className={cn("flex space-x-2", className && "flex-col mt-5")}>
        <Button variant={"ghost"} size={"lg"} className="text-md">
          الرئسية
        </Button>
        <Button variant={"ghost"} size={"lg"} className="text-md">
          خدماتنا
        </Button>
        <Button variant={"ghost"} size={"lg"} className="text-md">
          من نحن
        </Button>
      </ul>
      <div className="flex justify-center">
        <Button
          variant={"primary"}
          size={"lg"}
          className={cn("w-[150px] text-md", className && "mt-5")}
        >
          تواصل معنا
        </Button>
      </div>
    </>
  );
};
