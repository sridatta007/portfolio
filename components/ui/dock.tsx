"use client";

import React, { PropsWithChildren, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

// Default magnification and distance values
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

// Dock styling using class-variance-authority
const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md",
);

// Dock component props
export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

// Dock component
const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      ...props
    },
    ref,
  ) => {
    // Motion value for mouse position
    const mouseX = useMotionValue(Infinity);

    // Render Dock children with props injection
    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX, // Pass mouseX to child
            magnification,
            distance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

// DockIcon component props
export interface DockIconProps {
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
}

// DockIcon component
const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX = useMotionValue(Infinity), // Ensure mouseX always has a value
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate distance between mouseX and element center
  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transform width based on distance
  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  // Smooth spring animation for width
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

// Export Dock and DockIcon
export { Dock, DockIcon, dockVariants };
