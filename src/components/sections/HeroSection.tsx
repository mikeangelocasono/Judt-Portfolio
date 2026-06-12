"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Mail, Facebook, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 xl:px-24 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <Reveal className="space-y-8 order-2 lg:order-1">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                BS Information Systems Student
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-serif font-bold tracking-tight leading-[1.05]">
              Hello, I am{" "}
              <span className="text-primary">Judy Ann!</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Web Designer and Webpage Developer who builds meaningful brands and websites for small business owners and partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-primary/20"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-base font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.facebook.com/judyann.acquiatan" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile">
                <Button variant="outline" size="icon" className="rounded-full min-h-11 min-w-11 hover:text-primary hover:border-primary/30 transition-colors">
                  <Facebook className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <Button variant="outline" size="icon" className="rounded-full min-h-11 min-w-11 hover:text-primary hover:border-primary/30 transition-colors">
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <a href="mailto:judyannacquiatan15@gmail.com" aria-label="Send email">
                <Button variant="outline" size="icon" className="rounded-full min-h-11 min-w-11 hover:text-primary hover:border-primary/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="absolute w-[90%] aspect-square bg-primary/5 rounded-full blur-3xl" />
            <div className="animate-float">
              <div className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-square">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 animate-pulse-glow" />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-[3px] ring-primary/20 ring-offset-[3px] ring-offset-background shadow-2xl">
                  <Image
                    src="/Judy Profile.jpg"
                    alt="Judy Ann C. Acquiatan"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative pb-8 lg:pb-12">
        <div className="container mx-auto px-6 lg:px-12 xl:px-24">
          <Reveal delay={0.3} className={cn(
            "rounded-[2rem] p-6 lg:p-8 border",
            "bg-card/80 backdrop-blur-sm border-border shadow-lg"
          )}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
              {[
                { label: "Business Analysis", desc: "Understanding business needs and translating them into effective solutions." },
                { label: "Accounting & Finance", desc: "Applying financial knowledge to support data-driven decision making." },
                { label: "Market Scoping", desc: "Gathering insights and analyzing data to identify opportunities." },
                { label: "System & Process", desc: "Designing and improving processes to create efficient and user-friendly systems." },
              ].map((item, i) => (
                <div key={i} className={cn(
                  "px-4 sm:px-6 py-4",
                  "sm:border-r last:border-r-0 border-border/50"
                )}>
                  <h3 className="font-serif font-bold text-lg mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <ChevronDown className="text-primary/40 w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
