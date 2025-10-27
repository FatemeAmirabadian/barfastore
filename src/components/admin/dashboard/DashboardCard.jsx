import { cn } from "../../../../lib/utils";

const DashboardCard = ({
  children,
  variant = "gray",
  title,
  icon: Icon,
  className,
}) => {
  const bgClasses = {
    gray: "bg-gray-100",
    orange: "bg-orange-100",
    purple: "bg-purple-100",
  };

  const classes = cn(
    "rounded-md p-2 shadow-sm transition-shadow hover:shadow-md text-[10px] leading-tight",
    bgClasses[variant],
    className
  );

  return (
    <div className={classes}>
      <span
        className={cn(
          Icon
            ? "flex justify-between items-center text-xs"
            : "text-xs font-semibold"
        )}
      >
        {Icon && <Icon className="text-orange-500" />}
        <p className={cn(Icon ? "text-right" : "text-center")}>{title}</p>
      </span>
      {children}
    </div>
  );
};

export default DashboardCard;
