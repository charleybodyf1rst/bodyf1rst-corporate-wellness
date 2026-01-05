"use client";

import { ReactNode } from "react";

interface LayeredBackgroundProps {
  children: ReactNode;
  variant?: "hero" | "section" | "page";
  imageUrl?: string;
  imagePosition?: "center" | "left" | "right";
  className?: string;
  showGlows?: boolean;
}

export function LayeredBackground({
  children,
  variant = "section",
  imageUrl,
  imagePosition = "center",
  className = "",
  showGlows = true,
}: LayeredBackgroundProps) {
  const isHero = variant === "hero";
  
  // Gradient patterns based on image position
  const gradientMap = {
    center: "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.95) 100%)",
    left: "linear-gradient(to right, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.98) 60%)",
    right: "linear-gradient(to left, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.98) 60%)",
  };

  const bgPositionMap = {
    center: "center",
    left: "left center",
    right: "right center",
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Layer 1: Base image with optional parallax */}
      {imageUrl && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `${gradientMap[imagePosition]}, url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: bgPositionMap[imagePosition],
            backgroundAttachment: isHero ? "fixed" : "scroll",
          }}
        />
      )}

      {/* Layer 2: Dark gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/90" />

      {/* Layer 3: Brand color gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5" />

      {/* Layer 4: Animated glow blobs */}
      {showGlows && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse-glow z-[3]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] animate-pulse-glow z-[3]" style={{ animationDelay: "1s" }} />
          {isHero && (
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] animate-pulse-glow z-[3]" style={{ animationDelay: "2s" }} />
          )}
        </>
      )}

      {/* Layer 5: Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-[4] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(234,88,12,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Simple section background without image
export function SectionBackground({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "darker" | "card";
}) {
  const bgClasses = {
    default: "bg-[#0a0a0a]",
    darker: "bg-[#050505]",
    card: "bg-[#141414]",
  };

  return (
    <div className={`relative overflow-hidden ${bgClasses[variant]} ${className}`}>
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.05)_0%,transparent_70%)]" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
