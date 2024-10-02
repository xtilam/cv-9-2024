import { faArrowRight, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twJoin } from "tailwind-merge";

export const TimeLineItem = ({
  desc,
  time: [startTime, endTime],
  children,
}: {
  desc: any;
  time: [startTime: string, endTime?: string];
  children?: [title: any, ...content: any][];
}) => {
  const getTimeLineChild = (content: any[]) => {
    if (!content?.length) return {};
    if (content.length === 1) return { inline: content[0] };
    return {
      list: (
        <div className="ml-5 grid grid-cols-[auto_1fr] gap-x-2">
          {content.map(
            (v) =>
              v && (
                <>
                  <FontAwesomeIcon icon={faArrowRight} className="mt-1 text-danger-dark" />
                  <div>{v}</div>
                </>
              ),
          )}
        </div>
      ),
    };
  };
  return (
    <div>
      <div className="flex items-start gap-2">
        <div className="whitespace-nowrap font-bold text-danger-dark">
          <FontAwesomeIcon icon={faDotCircle} className="mr-1 text-danger-dark" />
          {startTime}
          {endTime ? `- ${endTime}` : ""}:
        </div>
        <div className="font-bold">{desc}</div>
      </div>
      {children?.map(([title, ...content]) => {
        const { list, inline } = getTimeLineChild(content);
        return (
          <div className={twJoin("ml-5", inline && "grid grid-cols-[auto_1fr] gap-2")}>
            <div className="font-bold underline">{title}:</div>
            {inline}
            {list}
          </div>
        );
      })}
    </div>
  );
};
