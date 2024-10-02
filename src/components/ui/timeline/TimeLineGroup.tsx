import { ComponentProps } from "react";
import { twJoin } from "tailwind-merge";

export const TimeLineGroup = (props: ComponentProps<"div">) => {
  return <div {...props} className={twJoin(props.className, "grid gap-1")} />;
};
