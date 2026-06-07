"use client";

import React from 'react';
import Image from "next/image";
import { GraduationCap, Table, Palette, Briefcase, CheckCircle2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-xl group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/Judy Profile.jpg"
                  alt="Judy Ann C. Acquiatan"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
                Get to Know Me
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Judy Ann C. Acquiatan, a 4th-year BSIS student with a passion for web design and website development. I enjoy creating user-friendly and visually appealing web pages using modern design principles and basic front-end web technologies.
              </p>
              <p>
                I am also proficient in Microsoft Excel for data entry, organization, and basic data analysis. I have experience in administrative support, including document organization, records management, and assisting with daily office operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { icon: GraduationCap, text: "4th-Year BSIS Student" },
                { icon: Palette, text: "Web Design Interest" },
                { icon: Table, text: "MS Excel Proficiency" },
                { icon: Briefcase, text: "Admin Support" },
                { icon: CheckCircle2, text: "Detail-Oriented" },
                { icon: Search, text: "Organized & Reliable" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={cn(
                    "flex items-center gap-3 p-3.5 rounded-xl",
                    "bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                  )}>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
