import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faDotCircle,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ComponentProps } from "react";
import { twJoin } from "tailwind-merge";
import { cvData } from "../cv-data";

const MainCV = () => {
  const { profile } = cvData;
  const githubLink = `https://github.com/${profile.github}`;
  return (
    <div className="px-2">
      <div className="mx-auto my-4 grid w-[1200px] grid-cols-[2fr_auto_7fr] items-start gap-4 border-2 border-transparent p-4 font-medium">
        <div className="grid gap-4">
          <div className="justify-self-center">
            <img
              src="./images/avatar.jpg"
              alt="avatar"
              className="mx-auto w-40 rounded-full shadow-md"
            />
          </div>
          <SectionGroup title="Profile">
            <ul className="grid gap-1">
              {[
                [faEnvelope, <a href={`mailto:${profile.mail}`}>{profile.mail}</a>],
                [faGithub, <a href={githubLink}>{githubLink}</a>],
                [faPhone, <a href={`tel:${profile.phone}`}>{profile.phone}</a>],
                [faLocationDot, profile.address],
              ].map(([icon, jsx], idx) => {
                return (
                  <li key={idx} className="flex items-end gap-2">
                    <FontAwesomeIcon icon={icon as any} className="ml-2 text-2xl" />
                    <span className="leading-[1em]">{jsx as any}</span>
                  </li>
                );
              })}
            </ul>
          </SectionGroup>
          <SectionGroup title="Skills">
            <div className="grid grid-cols-[auto_auto]">
              <SkillList type="Languages">
                {[
                  ["JavaScript", "Advanced"],
                  ["TypeScript", "Advanced"],
                  ["HTML/CSS3/SCSS", "Advanced"],
                  ["Java", "Intermediate"],
                  ["PHP", "Intermediate"],
                ]}
              </SkillList>
              <SkillList type="Databases">{[["MongoDB/MySQL", "Intermediate"]]}</SkillList>
              <SkillList type="Frameworks">
                {[
                  ["ReactJS", "Advanced"],
                  ["ExpressJS", "Advanced"],
                  ["ElectronJS", "Advanced"],
                  ["TailwindCSS", "Advanced"],
                  ["Laravel", "Advanced"],
                ]}
              </SkillList>
              <SkillList type="WEB TECHNOLOGIES">
                {[["RESTful API, JQuery, Bootstrap, WebSocket"]]}
              </SkillList>
              <SkillList type="Other">{[["GitHub, Linux, Webpack, Figma"]]}</SkillList>
            </div>
          </SectionGroup>
        </div>
        <div className="h-full border-l-2 border-success" />
        <div>
          <div className="col-span-8 mb-4 grid gap-3">
            <h1 className="w-fit border-b-4 border-success py-2 text-3xl font-bold">
              {profile.name}
            </h1>
            <h2 className="text-xl"> ({cvData.jobApply})</h2>
          </div>
          <div className="grid gap-2">
            <div className="section-title">Work experience</div>
            <TimeLineGroup className="pl-3">
              <TimeLineItem
                time={["2/2021", "2/2023"]}
                desc={
                  <div>
                    Completed military service <i>(police force)</i>
                  </div>
                }
              />
              <TimeLineItem time={["2/2023", "Now"]} desc="Freelancer Developer">
                {[
                  [
                    "Develop",
                    "Developed tools based on client requirements",
                    "Developed automation tools for Telegram, Telebot, etc.",
                    "Created desktop apps using ElectronJS with front-end built in SolidJS, ReactJS, etc.",
                    "Built web server APIs to support automation tasks",
                    "Wrote web automation scripts: web requests, blocking, modifying, injecting JS code",
                    "Occasionally worked on tools related to game automation, memory, and CE tools",
                    "Created NPM scripts for building end products",
                  ],
                  [
                    "Technologies",
                    "NodeJS, Qt, Laravel, ExpressJS, WebSocket, Webpack, HTML/CSS/JS, Electron, etc.",
                    "",
                  ],
                ]}
              </TimeLineItem>
            </TimeLineGroup>
          </div>
          <div className="grid gap-2">
            <div className="section-title">Education</div>
            <TimeLineGroup className="pl-3">
              <TimeLineItem
                time={["09/2019", "02/2021"]}
                desc={<div>Studied at iSpace College</div>}
              >
                {[
                  ["Major", "Web Development"],
                  ["Status", "Paused studies to complete military service"],
                  ["Knowledge", "Java, PHP, SpringBoot, Laravel"],
                ]}
              </TimeLineItem>
              <TimeLineItem time={["08/2023", "Now"]} desc={<div>Funix online course</div>}>
                {[
                  ["Major", "Web Development with NodeJS"],
                  [
                    "Knowledge",
                    "HTML5/CSS (Advanced)",
                    "ReactJS (Basic to advanced)",
                    "NodeJS (Basic to advanced - ongoing)",
                  ],
                  ["Status", "Uncompleted (Expected completion in 10/2023)"],
                ]}
              </TimeLineItem>
            </TimeLineGroup>
          </div>
          <div className="grid gap-2">
            <div className="section-title">Project</div>
            <TimeLineGroup className="pl-3">
              <TimeLineItem time={["2022"]} desc="GUI for AutoIT application (Using QML-Qt)">
                {[
                  [
                    "Develop",
                    "Developed a DLL to enable interaction between AutoIT and QML",
                    "Created an API for QML JavaScript to call AutoIT functions",
                  ],
                  ["Status", "In development - Working well"],
                  ["Link", <LinkWithHref href="https://github.com/xtilam/qml-autoit" />],
                  ["Technologies", "QML-Qt, AutoIT, C++, NodeJS"],
                ]}
              </TimeLineItem>
              <TimeLineItem
                time={["2022", "2024"]}
                desc="Developed automation tool for Cocos2D and ReactJS"
              >
                {[
                  [
                    "Develop",
                    "Injected JS into the app frontend after page load (for automation)",
                    "Get component states, navigate, detect render, inject hooks (React)",
                    "Used Babel for code parsing",
                    "Replaced XMLHttpRequest and WebSocket (Insert web proxy)",
                    "Blocked unnecessary asset loading to boost performance",
                    "Built a management interface to automate multiple accounts simultaneously",
                  ],
                ]}
              </TimeLineItem>
              <TimeLineItem
                time={["2022", "2024"]}
                desc="Developed web APIs for client's existing automation tools"
              >
                {[
                  [
                    "Develop",
                    "Developed web APIs for client's existing automation tools",
                    "Analyzed and modified the client's automation tool source code (replaced if necessary)",
                    "Executed and analyzed CLI results (if necessary)",
                    "Developed a management interface for the client (if necessary)",
                    "Created RESTful APIs and provided documentation upon completion",
                  ],
                  ["Technologies", "NodeJS, Webpack, ExpressJS, MySQL, SQLite, MongoDB, etc."],
                ]}
              </TimeLineItem>
              <TimeLineItem time={["2024"]} desc="Developed Telebot and TeleAPI for clients">
                {[
                  [
                    "Develop",
                    "Built a Telebot server",
                    "Created a tool for managing large-scale Telegram account updates",
                    "write tool related to auto telegram account update",
                  ],
                  ["Technologies", "NodeJS, Webpack, Python, WebSocket, C++, SQLite, etc."],
                ]}
              </TimeLineItem>
              <TimeLineItem
                time={["Some other interesting stuff"]}
                desc={<LinkWithHref />}
              ></TimeLineItem>
            </TimeLineGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillList = ({ children, type }: { children: [any, any?][]; type: string }) => {
  return (
    <>
      <h3 className="col-span-full mt-1 font-bold text-danger-dark underline">{type}:</h3>
      {children.map(([skill, level]) =>
        level ? (
          <>
            <div className="pl-3">{skill}</div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowRight} />
              <span>{level}</span>
            </div>
          </>
        ) : (
          <div className="col-span-full pl-3">{skill}</div>
        ),
      )}
    </>
  );
};

const LinkWithHref = ({ href, ...otherProps }: ComponentProps<"a">) => (
  <a href={href} {...otherProps}>
    {href}
  </a>
);
const TimeLineItem = ({
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
const TimeLineGroup = (props: ComponentProps<"div">) => {
  return <div {...props} className={twJoin(props.className, "grid gap-2")} />;
};
const SectionGroup = ({
  title,
  className,
  ...divProps
}: React.ComponentProps<"div"> & { title: string }) => {
  return (
    <div className={twJoin("grid gap-3", className)}>
      <div className="section-title">{title}</div>
      <div {...divProps} />
    </div>
  );
};

export default MainCV;
