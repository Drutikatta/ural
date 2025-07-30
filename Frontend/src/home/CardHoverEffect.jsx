import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Optional class merging utility
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Main Component
export function CardHoverEffect() {
  const projects = [
    {
      title: "Medical",
      description: "Medical isotopes used for imaging and treatment in nuclear medicine.",
      link: "/card/medical",
    },
    {
      title: "Education",
      description: "Educational uses of isotopes in research and learning environments.",
      link: "/card/education",
    },
    {
      title: "Agriculture",
      description: "Isotopes help in crop mutation and soil analysis.",
      link: "/card/agriculture",
    },
    {
      title: "Space",
      description: "Radioisotope thermoelectric generators power spacecraft.",
      link: "/card/space",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          <span className="text-[#2176FF]">Methods of</span> Isotopes
        </h2>
      </div>

      <HoverEffect items={projects} />
    </div>
  );
}

// Hover Effect Grid
export function HoverEffect({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#2176FF]/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
}

// Card Component
export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#b8d6f7] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 p-4">{children}</div>
    </div>
  );
}

// Card Title
export function CardTitle({ className, children }) {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
}

// Card Description
export function CardDescription({ className, children }) {
  return (
    <p
      className={cn(
        "mt-4 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
}

export default CardHoverEffect;