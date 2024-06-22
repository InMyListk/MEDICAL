import { Button } from "@/components/ui/button";

export const Buttons = () => {
  return (
    <div className="flex flex-col max-w-[200px]">
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"ghost"}>Secondary</Button>
    </div>
  );
};
