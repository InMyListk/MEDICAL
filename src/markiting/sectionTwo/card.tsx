import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  footer?: string;
  color: string;
  icon: string;
  iconColor: string;
};

export const Card = ({
  title,
  description,
  footer,
  color,
  icon,
  iconColor,
}: Props) => {
  return (
    <div
      className={cn(
        "w-[200px] h-[200px] rounded-lg flex flex-col justify-between pb-2 relative px-2 shadow-sm",
        color
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 -translate-y-1/2 -translate-x-1/2 p-3 bg-yellow-200 rounded-full shadow-md",
          iconColor
        )}
      >
        <img src={icon} className="w-12 h-12" />
      </div>
      <div className="pt-12">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-3 font-semibold text-sm">{description}</p>
      </div>
      <p className="font-semibold">{footer}</p>
    </div>
  );
};
