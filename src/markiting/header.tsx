import { HeaderContent } from "@/components/header-content";
import { cn } from "@/lib/utils";
import { MobileHeader } from "./mobile-header";

type Props = {
  className?: string;
};

export const Header = ({ className }: Props) => {
  return (
    <header className="h-20 w-full px-10">
      <div
        className={cn(
          "flex justify-between items-center w-full lg:max-w-screen-xl mx-auto h-full",
          className
        )}
      >
        <div className="flex items-center cursor-pointer">
          <h1 className="text-2xl font-bold flex-1 text-blue-400 tracking-wide">
            MEDICAL
          </h1>
        </div>
        <div className="md:flex hidden justify-between items-center w-full">
          <div />
          <HeaderContent />
        </div>
        <div className="lg:hidden block">
          <MobileHeader />
        </div>
      </div>
    </header>
  );
};
