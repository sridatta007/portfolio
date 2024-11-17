"use client";

import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
interface Education {
  institution: string;
  logo: string;
  degree: string;
  duration: string;
}

const educationList: Education[] = [
  {
    institution: "Stony Brook University",
    logo: "/buildspace-logo.svg", // Replace with the actual logo path
    degree: "Master's in Data Science",
    duration: "2023 - 2025",
  },
  {
    institution: "Vasavi College of Engineering",
    logo: "/waterloo-logo.svg", // Replace with the actual logo path
    degree: "Bachelor's in Information Technology (IT)",
    duration: "2017 - 2021",
  }
];


export default function EducationSection() {
    return (
      <div className="w-full max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <Accordion type="multiple" className="w-full space-y-4">
          {educationList.map((edu, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg overflow-hidden transition-all"
            >
              <AccordionTrigger
                className="flex items-center gap-4 w-full p-4"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="font-semibold">{edu.institution}</h3>
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
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
                {/* Additional details can be added here if needed */}
                <p className="text-sm text-muted-foreground">
                  This is where you can add more information about each education entry, such as specific courses taken or achievements.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }