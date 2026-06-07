"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, Github, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={cn(
          "rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden",
          "flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto",
          "bg-card border border-border shadow-xl"
        )}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <Sparkles className="absolute top-10 right-1/3 text-primary/20 w-5 h-5" />

          <Reveal className="lg:w-1/2 space-y-6 relative z-10 w-full text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Let&apos;s Work<br className="hidden md:block" /> Together!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
              I&apos;m always open to new opportunities, collaborations, and learning experiences.
            </p>
            <div className="pt-2">
              <Button className="rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-primary/20">
                Get In Touch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className={cn(
            "lg:w-5/12 p-8 md:p-10 rounded-[2rem] border relative z-10 w-full max-w-md mx-auto lg:mx-0",
            "bg-card/80 backdrop-blur-sm border-border shadow-lg"
          )}>
            <ul className="space-y-7">
              {[
                { icon: Mail, label: "Email", value: "judyannacquiatan15@gmail.com", href: "mailto:judyannacquiatan15@gmail.com" },
                { icon: MapPin, label: "Location", value: "Panabo City, Philippines", href: null },
                { icon: Facebook, label: "Facebook", value: "facebook.com/judyann.acquiatan", href: "https://www.facebook.com/judyann.acquiatan" },
                { icon: Github, label: "GitHub", value: "github.com/dashboard", href: "https://github.com/dashboard" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
