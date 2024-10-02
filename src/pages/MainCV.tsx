import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ComponentProps } from "react";
import { twJoin } from "tailwind-merge";
import { TimeLineGroup } from "../components/ui/timeline/TimeLineGroup";
import { TimeLineItem } from "../components/ui/timeline/TimeLineItem";
import { cvData } from "../cv-data";

const MainCV = () => {
  const { profile } = cvData;
  const githubLink = `https://github.com/${profile.github}`;
  return (
    <div className="mt-0 px-2">
      <div className="mx-auto my-0 grid w-[1200px] grid-cols-[2fr_auto_7fr] items-start gap-4 border-2 border-transparent p-2 font-medium">
        <div className="grid gap-4">
          <div className="justify-self-center">
            <img
              src="./images/avatar.jpg"
              alt="avatar"
              className="mx-auto w-40 rounded-full shadow-md"
            />
          </div>
          <div className="pb-2 pt-5 text-left italic">{cvData.careerObjective}</div>
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
                    <FontAwesomeIcon icon={icon as any} className="ml-2 text-xl" />
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
          <div className="col-span-8 grid gap-3">
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
                    Complete military service<i>(police force)</i>
                  </div>
                }
              />
              <TimeLineItem time={["2/2023", "Now"]} desc="Freelancer Developer">
                {[
                  [
                    "Develop",
                    "Develop tools based on customer requirements",
                    "Develop automation tools for Telegram, Telebot, etc",
                    "Create desktop applications using ElectronJS",
                    "Build web server APIs to support automation tasks",
                    "Write web automation scripts: web requests, interceptors, modifiers, JS injections",
                    "Occasionally work on tools related to game automation, memory",
                    "Create NPM scripts to build end products",
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
                  ["Status", "Uncompleted (Expected completion in 11/2023)"],
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
                    "Develop DLL to enable interaction between AutoIT and QML",
                    "Write API for QML JavaScript to call AutoIT functions",
                  ],
                  ["Status", "In development - Working well"],
                  ["Link", <LinkWithHref href="https://github.com/xtilam/qml-autoit" />],
                  ["Technologies", "QML-Qt, AutoIT, C++, NodeJS"],
                ]}
              </TimeLineItem>
              <TimeLineItem
                time={["2022", "2024"]}
                desc="Write automation code for Cocos2D and ReactJS"
              >
                {[
                  [
                    "Develop",
                    "Inject JS into application interface after page load",
                    "Get component states, navigate, detect render, inject hooks (React)",
                    "Using Babel library to parse code",
                    "Replace XMLHttpRequest and WebSocket (to insert web proxy)",
                    "Block loading of unnecessary assets to increase performance",
                    "Create application interface, manage multiple accounts running at the same time",
                  ],
                ]}
              </TimeLineItem>
              <TimeLineItem time={["2022", "2024"]} desc="Develop Web API for client">
                {[
                  [
                    "Develop",
                    "Develop Web API for existing customer automation tools",
                    "Analyze and modify customer automation tool source code (replace if needed)",
                    "Execute and analyze CLI results",
                    "Create application interface for customer management",
                    "Create RESTful API and documentation",
                  ],
                  ["Technologies", "NodeJS, Webpack, ExpressJS, MySQL, SQLite, MongoDB, etc."],
                ]}
              </TimeLineItem>
              <TimeLineItem time={["2024"]} desc="Develop Telebot and TeleAPI">
                {[
                  [
                    "Develop",
                    "Building Telebot Server",
                    "Writing Tools Related to Automatic Telegram Account update",
                  ],
                  ["Technologies", "NodeJS, Webpack, Python, WebSocket, C++, SQLite, etc."],
                ]}
              </TimeLineItem>
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
