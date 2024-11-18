import Meteors from "@/components/ui/meteors";
import BoxReveal from "@/components/ui/box-reveal"; // Adjust the import path as necessary
import React from "react";
import { CalendarIcon, HomeIcon, MailIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/mode-toggle";
import SparklesText from "@/components/ui/sparkles-text";
import WorkExperience from "@/components/ui/experience";
import EducationSection from "@/components/ui/education";
import IconCloud from "@/components/ui/icon-cloud";
import { FaCode, FaTools, FaDatabase, FaCloud } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};

const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sridatta007",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/datta7/",
        icon: Icons.linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/Dat123__",
        icon: Icons.x,
      },
      email: {
        name: "Send Email",
        url: "sridattayaddanapudi@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "express",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "python",
  "solidity",
  "postman",
  "c"
];

const IndexPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Meteors Background */}
      <div className="fixed inset-0 -z-10 w-full h-full min-h-screen">
  <Meteors number={50} />
</div>

      {/* Content Below Navbar */}
      <div className="relative flex flex-col items-center justify-start pt-32 px-6 min-h-screen">
        <div className="w-full max-w-[60%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[60%] mx-auto space-y-12">
          {/* Introduction Section */}
          <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
            <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-white">
              <SparklesText text="Sri Datta Y" />
            </h1>
          </BoxReveal>

          <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
            <p className="text-white text-lg leading-relaxed">
              Hello! I&apos;m Sri Datta Y, currently pursuing a Master&apos;s in
              Data Science at Stony Brook University. My expertise spans Data
              Engineering, Full Stack Development, and Data Science. I&apos;ve
              built scalable data pipelines using PySpark and Apache NiFi, and
              crafted interactive user interfaces with React and Node.js. During
              my time at Invesco, I led ETL migrations, automated workflows, and
              tackled full-stack challenges to drive tech innovation. With a
              strong foundation in data analysis and a passion for solving
              intricate problems, I strive to create efficient, data-driven
              solutions that enhance workflows and support impactful
              decision-making.
            </p>
          </BoxReveal>

          {/* Work Experience Section */}
          <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
            <WorkExperience />
          </BoxReveal>

          {/* Education Section */}
          <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
            <EducationSection />
          </BoxReveal>

          {/* Skills Icon Cloud Section */}
          <div className="flex flex-wrap gap-6 justify-center py-12">
            <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
              <div className="flex items-start gap-12 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg">
                <div className="relative flex w-[300px] h-[300px] items-center justify-center overflow-hidden rounded-full border-4 border-white bg-background px-8 py-8 transition-transform transform hover:scale-105">
                  <IconCloud iconSlugs={slugs} />
                </div>
                <ul className="text-white list-none space-y-4 max-w-lg">
                  <li className="flex items-center gap-3">
                    <FaCode className="text-xl text-blue-400" />
                    <span>
                      <strong>Programming Languages:</strong> Python,
                      JavaScript, R, Solidity, C, Java
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MdWeb className="text-xl text-green-400" />
                    <span>
                      <strong>Web Technologies:</strong> HTML, CSS, Bootstrap,
                      React, NodeJS, TypeScript
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaTools className="text-xl text-yellow-400" />
                    <span>
                      <strong>Software & Tools:</strong> Git, Jira, Docker,
                      Postman, AWS S3, Lambda, CloudWatch, MWAA (Airflow)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaDatabase className="text-xl text-red-400" />
                    <span>
                      <strong>Databases:</strong> MySQL, MongoDB, NoSQL,
                      Firebase
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCloud className="text-xl text-purple-400" />
                    <span>
                      <strong>Big Data Tools:</strong> PySpark, SparkSQL, HDFS,
                      HBase, Apache Nifi
                    </span>
                  </li>
                </ul>
              </div>
            </BoxReveal>
          </div>

          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/70 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
  <TooltipProvider>
    <div className="flex items-center space-x-6">
      {/* Navbar Icons */}
      {DATA.navbar.map((item) => (
        <DockIcon key={item.label}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                aria-label={item.label}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition"
              >
                <item.icon className="w-6 h-6 text-white" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}

      {/* Divider */}
      <Separator orientation="vertical" className="h-6 bg-white/20" />

      {/* Social Icons */}
      {Object.entries(DATA.contact.social).map(([name, social]) => (
        <DockIcon key={name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={social.url}
                aria-label={social.name}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition"
              >
                <social.icon className="w-6 h-6 text-white" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}

      {/* Theme Toggle */}
      <Separator orientation="vertical" className="h-6 bg-white/20" />
      <DockIcon>
        <Tooltip>
          <TooltipTrigger asChild>
            <ModeToggle className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>
    </div>
  </TooltipProvider>
</div>

        </div>
      </div>
    </div>
  );
};

export default IndexPage;


