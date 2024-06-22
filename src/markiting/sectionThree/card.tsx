import { Check, CircleCheckBig } from "lucide-react";

type Props = {
  description: string;
};

export const Card = ({ description }: Props) => {
  return (
    <div className="w-fit h-10 bg-green-300 flex flex-row-reverse gap-x-2 justify-center items-center px-3">
      <CircleCheckBig />
      <p className="font-bold">{description}</p>
    </div>
  );
};
