"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const projects = [
    {
      title: "IGPIMS \u2014 Davao del Norte State College Federal Student Government System",
      description: "A system project created for the Davao del Norte State College Federal Student Government. The system includes a home page/sign-in page and a dashboard for managing and monitoring income-generating project records.",
      tags: ["Web Design", "System Project", "Dashboard", "Record Management"],
      link: "https://fsg-igpims.vercel.app/sign-in",
      image1: "/Dashboard for Records.png",
      image2: "/Home Page  Sign-In Page.png"
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <Reveal className="mb-8 lg:mb-12 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Project Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 text-foreground">
            Featured Project
          </h2>
        </Reveal>

        <RevealStagger className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Left Side: Images */}
                <Reveal 
                  className={cn(
                    "relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[480px] flex items-center justify-center",
                    "rounded-[2.5rem] bg-card/60 backdrop-blur-sm border border-border/60 p-4 sm:p-8 overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500",
                    !isEven ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-50" />
                  
                  {/* Dashboard Image - Base */}
                  <div className="relative w-full max-w-[90%] aspect-video rounded-xl overflow-hidden border border-border shadow-2xl group-hover:scale-[1.03] transition-transform duration-700 z-10 lg:translate-x-4 lg:-translate-y-4">
                    <Image
                      src={project.image1}
                      alt={project.title + " Dashboard"}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Home Page Image - Overlaid */}
                  <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-[55%] sm:w-[50%] aspect-video rounded-xl overflow-hidden border border-border shadow-2xl group-hover:-translate-y-3 group-hover:translate-x-3 transition-transform duration-700 z-20">
                    <Image
                      src={project.image2}
                      alt={project.title + " Home Page"}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </Reveal>

                {/* Right Side: Content */}
                <Reveal 
                  className={cn(
                    "flex flex-col justify-center h-full space-y-6 pt-4 lg:pt-0",
                    !isEven ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-primary/15 text-primary text-xs sm:text-sm font-bold rounded-full border border-primary/20 hover:bg-primary/25 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block group/btn">
                      <Button size="lg" className="rounded-full px-8 h-12 md:h-14 text-base font-medium shadow-lg shadow-primary/20 group-hover/btn:shadow-primary/40 transition-all">
                        View Project
                        <ExternalLink className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};

export default ProjectsSection;
