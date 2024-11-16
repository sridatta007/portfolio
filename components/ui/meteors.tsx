"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  const generateMeteorStyles = () => {
    return [...new Array(number)].map(() => ({
      top: Math.random() * window.innerHeight + "px", // Randomize top position
      left: Math.random() * window.innerWidth + "px", // Randomize left position
      animationDelay: Math.random() * 1 + 0.2 + "s", // Add some variation in delay
      animationDuration: Math.floor(Math.random() * 8 + 5) + "s", // Randomize fall duration
    }));
  };

  useEffect(() => {
    // Generate initial meteor styles
    setMeteorStyles(generateMeteorStyles());

    // Recalculate meteor styles on window resize
    const handleResize = () => {
      setMeteorStyles(generateMeteorStyles());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [number]);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute size-0.5 rotate-[215deg] animate-meteor rounded-full bg-white shadow-[0_0_10px_2px_#ffffff80]",
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
