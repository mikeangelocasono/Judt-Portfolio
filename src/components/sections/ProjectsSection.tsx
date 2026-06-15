"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

const ProjectsSection = () => {
  const project = {
    title: "IGPIMS \u2014 Davao del Norte State College Federal Student Government System",
    description: "A system project created for the Davao del Norte State College Federal Student Government. The system includes a home page/sign-in page and a dashboard for managing and monitoring income-generating project records.",
    tags: ["Web Design", "System Project", "Dashboard", "Record Management"],
    link: "https://fsg-igpims.vercel.app/sign-in",
    image1: "/Home Page  Sign-In Page.png",
    image2: "/Dashboard for Records.png"
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-8 lg:mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Project Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 text-foreground">
            Featured Project
          </h2>
        </Reveal>

        <Reveal className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 sm:p-6 lg:p-8 shadow-sm">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl font-serif text-foreground">
              {project.title}
            </h3>
            
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3.5 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block group/btn">
                <Button className="rounded-full px-8 h-12 text-base font-medium shadow-md shadow-primary/20 group-hover/btn:shadow-primary/40 transition-all">
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          <RevealStagger className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            <RevealItem>
              <div className="group overflow-hidden rounded-2xl border border-border bg-background/60 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
                <div className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden rounded-xl bg-black/5 dark:bg-white/5 border border-border/50">
                  <Image
                    src={project.image1}
                    alt="IGPIMS home page and sign-in page"
                    fill
                    className="object-contain object-top group-hover:scale-[1.02] transition-transform duration-500 p-1"
                  />
                </div>
                <div className="p-3 text-center mt-2">
                  <p className="text-sm font-medium text-muted-foreground">Home Page / Sign-In Page</p>
                </div>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="group overflow-hidden rounded-2xl border border-border bg-background/60 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
                <div className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden rounded-xl bg-black/5 dark:bg-white/5 border border-border/50">
                  <Image
                    src={project.image2}
                    alt="IGPIMS dashboard for records"
                    fill
                    className="object-contain object-top group-hover:scale-[1.02] transition-transform duration-500 p-1"
                  />
                </div>
                <div className="p-3 text-center mt-2">
                  <p className="text-sm font-medium text-muted-foreground">Dashboard for Records</p>
                </div>
              </div>
            </RevealItem>
          </RevealStagger>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
