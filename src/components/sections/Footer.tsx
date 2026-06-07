"use client";

import React from 'react';
import Image from "next/image";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-border">
            <Image
              src="/judy-logo.png"
              alt="Judy Logo"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-lg font-serif font-bold">
            Judy<span className="text-primary">.</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Judy. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="min-h-11 min-w-11 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
