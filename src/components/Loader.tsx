"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Loader() {
  const [state, setState] = useState<"loading" | "fading" | "done">("loading");

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setState("done");
      return;
    }

    const handleLoad = () => {
      setState("fading");
      setTimeout(() => setState("done"), 400);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(() => {
        setState("fading");
        setTimeout(() => setState("done"), 400);
      }, 800);
      return () => clearTimeout(timer);
    }

    window.addEventListener("load", handleLoad);
    const fallback = setTimeout(() => {
      setState("fading");
      setTimeout(() => setState("done"), 400);
    }, 1500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  if (state === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      style={{
        transition: "opacity 0.4s ease-out",
        opacity: state === "fading" ? 0 : 1,
      }}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6">
        <Image
          src="/judy-logo.png"
          alt="Loading"
          fill
          className="object-contain animate-pulse-glow rounded-2xl"
          priority
        />
      </div>

      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}
