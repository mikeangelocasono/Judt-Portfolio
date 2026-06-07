"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Project Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
            Featured Project
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold">
              IGPIMS &mdash; Davao del Norte State College Federal Student Government System
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A system project created for the Davao del Norte State College Federal Student Government. The system includes a home page/sign-in page and a dashboard for managing and monitoring income-generating project records.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Web Design", "System Project", "Dashboard", "Record Management"].map(tag => (
                <span key={tag} className="px-3.5 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>

            <a href="https://fsg-igpims.vercel.app/sign-in" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-primary/20">
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="group relative">
              <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/Home Page  Sign-In Page.png"
                    alt="Home Page Sign-In Page"
                    fill
                    className="object-contain object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground">Home Page / Sign-In Page</p>
                </div>
              </div>
            </div>

            <div className="group relative lg:translate-x-8">
              <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/Dashboard for Records.png"
                    alt="Dashboard for Records"
                    fill
                    className="object-contain object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground">Dashboard for Records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
