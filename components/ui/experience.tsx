"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Experience {
  company: string;
  logo: string;
  role: string;
  duration: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    company: "Suny RF, Department of Biomedical Informatics",
    logo: "/placeholder.svg",
    role: "Data Engineer, Senior Research Aide",
    duration: "Jan 2024 - Present",
    details: [
      "Developed PySpark pipelines on Palantir Foundry, processing 150,000+ records for migraine identification, reducing data processing time by 20% and significantly enhancing insights into diagnosis patterns, boosting healthcare decision-making.",
      "Analyzed 100,000+ patient records post-COVID-19, improving trend analysis accuracy by 30% and streamlining data workflows by 15% through efficient use of Palantir’s data integration, leading to faster decision-making and improved patient outcomes.",
      "Created and optimized cohorts for 200,000+ records using ICD-10/SNOMED codes, improving data pipeline efficiency by 40% through enhanced automation, advanced data processing, and collaboration with data scientists and healthcare professionals.",
      "Constructed scalable data pipelines for 50,000+ Long-COVID patients, reducing latency by 20% and enabling faster, real-time data processing and advanced analytics for critical healthcare research studies, leading to more accurate predictive insights.",
    ],
  },
  {
    company: "Invesco India Private Limited",
    logo: "/placeholder.svg",
    role: "Senior Software Engineer",
    duration: "Aug 2021 - Jul 2023",
    details: [
      "Enhanced portfolio management website by resolving bugs, developing new features, and deploying updates through Bitbucket. Optimized YAML and Docker configurations, ensuring smooth integration and deployment, improving efficiency by 30%.",
      "Monitored and managed Airflow tasks, scheduling jobs; led ETL migration from Autosys to Airflow, boosting automation reliability by 35%. Collaborated with cross-functional Agile teams across time zones to improve data processing efficiency.",
      "Automated Fortify scans for the entire codebase, scheduling them to run at specific, predetermined times; implemented automatic email notifications for scan failures, effectively increasing code security and team response time by 25%.",
      "Streamlined report generation by automating data collection and web scraping, creating tables, and sending reports daily; automated weekly database refreshes and built scripts linking UAT, PROD, and DEV, improving testing efficiency by 40%.",
      "Collaborated with three diverse teams, quickly learned React, and successfully migrated to a page of the portfolio management site, avoiding the need for a Plotly subscription and saving nearly $100k and received rewards and recognition award.",
      "Constructed a holiday calendar using Airflow for the engineering services team to prevent processes from running on holidays when no data is available, optimizing system efficiency and reducing unnecessary resource usage by 20%.",
      "Developed a PowerBI dashboard across the firm to monitor and manage all incidents, requests, and enhancements, significantly reducing manual work from 9 hours to 1 hour and enhancing operational efficiency.",
    ],
  },
  {
    company: "Saix Inc",
    logo: "/placeholder.svg",
    role: "Big Data Intern",
    duration: "May 2021 - Jul 2021",
    details: [
      "Engineered an advanced Risk Pipeline for efficient log collection and secure transmission to HDFS and HBase; reduced data security threats by 60-70% using Big Data tools like HDFS, Hive, HBase, SparkSQL, PySpark, and Python for data processing.",
      "Designed a streamlined data movement flow using Apache Nifi, integrated with an intuitive website; applied Big Data principles to enhance processing efficiency and ensure seamless transfer, improving system performance by 25%.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <div className="w-full max-w-[800px] mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">Work Experience</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {experiences.map((exp, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg overflow-hidden transition-all w-full pl-32 pr-32"
            style={{ width: "100%", boxSizing: "border-box" }}
          >
            <AccordionTrigger
              className="flex items-center gap-4 p-4 w-full hover:no-underline [&[data-state=open]>div>svg]:rotate-180 transition-all"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between gap-4 w-full">
                    <h3 className="font-semibold text-white">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className="px-4 pb-4 w-full"
              style={{
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div className="space-y-2 pl-16">
                {exp.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    • {detail}
                  </p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
