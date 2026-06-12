"use client";

import React from 'react';
import { Palette, Code, Search, Table, Briefcase, FileText, Database, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";

const SkillsSection = () => {
  const skills = [
    { name: "Canva", icon: Palette },
    { name: "HTML & CSS", icon: Code },
    { name: "Market Scoping", icon: Search },
    { name: "MS Excel", icon: Table },
    { name: "Admin Support", icon: Briefcase },
    { name: "Filing Skills", icon: FileText },
    { name: "Data Entry", icon: Database },
    { name: "Web Design", icon: MousePointer2 }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl text-center">
        <Reveal className="mb-8 lg:mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            My Expertise
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2">
            Skills &amp; Tools
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <RevealItem key={index} className={cn(
                "flex flex-col items-center p-3 sm:p-5 rounded-2xl border transition-all duration-300",
                "bg-card border-border shadow-sm",
                "hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
              )}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-bold text-sm">
                  {skill.name}
                </span>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};

export default SkillsSection;
