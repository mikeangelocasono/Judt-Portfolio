"use client";

import React from 'react';
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const timeline = [
  {
    type: "education",
    items: [
      {
        title: "BS Information Systems",
        institution: "Davao del Norte State College",
        period: "2022 - Present",
        description: "4th-year student focused on web design, business analysis, and information systems management.",
      },
    ],
  },
  {
    type: "experience",
    items: [
      {
        title: "Web Designer & Webpage Developer",
        institution: "Freelance / Self-Employed",
        period: "Present",
        description: "Building meaningful brands and websites for small business owners and partnerships using modern design principles.",
      },
      {
        title: "Administrative Support",
        institution: "Various Organizations",
        period: "Present",
        description: "Document organization, records management, data entry, and assisting with daily office operations.",
      },
    ],
  },
];

const EducationExperienceSection = () => {
  return (
    <section id="education-experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
            Education &amp; Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {timeline.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {section.type === "education" ? (
                    <GraduationCap className="w-5 h-5 text-primary" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-primary" />
                  )}
                </div>
                <h3 className="text-xl font-serif font-bold">
                  {section.type === "education" ? "Education" : "Experience"}
                </h3>
              </div>

              <div className="relative space-y-6">
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

                {section.items.map((item, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-[13px] top-[6px] w-3 h-3 rounded-full border-2 border-primary bg-background" />

                    <div className={cn(
                      "p-5 rounded-2xl border transition-all duration-300",
                      "bg-card border-border shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                    )}>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>
                      <h4 className="text-base font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{item.institution}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;
