import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { HeaderContent } from "@/components/header-content";

export const MobileHeader = () => {
  return (
    <div className="md:hidden block">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent>
          <div className="flex items-center justify-center cursor-pointer">
            <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
              MEDICAL
            </h1>
          </div>
          <HeaderContent className="flex-col space-y-5" />
        </SheetContent>
      </Sheet>
    </div>
  );
};
