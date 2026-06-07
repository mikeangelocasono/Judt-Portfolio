"use client";

import React from 'react';
import Image from "next/image";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "ASEAN AI Hackathon 2026",
      issuer: "ASEAN-China",
      date: "2026",
      image: "/ASEAN AI HACKATHON.png",
    },
    {
      title: "CISCO Networking Academy 2025",
      issuer: "CISCO Networking Academy",
      date: "2025",
      image: "/Ethical Hacker.jpg",
    }
  ];

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Accomplishments
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className={cn(
              "group bg-card rounded-3xl border border-border overflow-hidden",
              "shadow-sm hover:shadow-xl transition-all duration-300",
              "hover:-translate-y-1"
            )}>
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
