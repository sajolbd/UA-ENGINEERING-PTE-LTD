import React from "react";
import Container from "../shared/Container";
import { Check, ChevronRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    color: "text-sky-500",
    bgColor: "bg-sky-500",
    hoverColor: "group-hover:text-sky-600",
  },
  {
    number: 2,
    title: "Scoping and Feasibility",
    color: "text-amber-500",
    bgColor: "bg-amber-500",
    hoverColor: "group-hover:text-amber-600",
  },
  {
    number: 3,
    title: "Detailed Planning and Costing",
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    hoverColor: "group-hover:text-purple-700",
  },
  {
    number: 4,
    title: "Build Stage",
    color: "text-blue-800",
    bgColor: "bg-blue-800",
    hoverColor: "group-hover:text-blue-900",
  },
  {
    number: 5,
    title: "Project Completion",
    color: "text-green-600",
    bgColor: "bg-green-600",
    hoverColor: "group-hover:text-green-700",
    isLast: true,
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-slate-50">
      <Container className="max-w-5xl lg:max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Descriptive Text & Bold Header */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left max-w-xl mx-auto lg:mx-0 lg:pr-4">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
              UA Engineering&apos;s process supports a bespoke design and build: a renovation tailored to your lifestyle requirements and taste. Our project managers and engineering consultants will manage every aspect for you - working diligently to keep everything on track.
            </p>
            <h2 className="mt-8 text-4xl sm:text-5xl font-black text-secondary leading-[1.15] tracking-tight">
              Your Style,<br />
              Your Budget,<br />
              Our Expertise
            </h2>
          </div>

          {/* Right Column: Timeline & Step Content */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start w-full">
            <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-none">

              {/* The Vertical Track Line */}
              <div className="absolute left-6 sm:left-8 -translate-x-1/2 top-6 bottom-16 w-8 bg-slate-100 rounded-full z-0" />

              {/* Steps Container */}
              <div className="space-y-10 sm:space-y-12 w-full relative z-10">
                {steps.map((step) => {
                  const isStep5 = step.number === 5;

                  return (
                    <div key={step.number} className="group flex items-center gap-6 sm:gap-8 lg:gap-12 w-full">

                      {/* Circle Icon container aligned over the vertical track */}
                      <div className="flex items-center justify-center w-12 sm:w-16 shrink-0">
                        {isStep5 ? (
                          /* Step 5: Larger Glowing Green Circle */
                          <div className="relative flex h-14 w-14 items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" />
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 border-4 border-green-150 transition-all duration-300 group-hover:scale-110">
                              <Check size={28} strokeWidth={3} />
                            </div>
                          </div>
                        ) : (
                          /* Steps 1-4: Standard colored check circle */
                          <div className="relative flex h-7 w-7 items-center justify-center">
                            <div className={`absolute inset-0 rounded-full ${step.bgColor} opacity-40 animate-ping`} />
                            <div className={`relative flex h-7 w-7 items-center justify-center rounded-full ${step.bgColor} text-white shadow-sm transition-all duration-300 group-hover:scale-110`}>
                              <Check size={14} strokeWidth={3.5} />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Step Text Details */}
                      <div className="flex flex-col text-left">
                        <span className={`text-[11px] sm:text-xs font-extrabold uppercase tracking-wider ${step.color} opacity-90 mb-1`}>
                          Step 0{step.number}
                        </span>
                        <a
                          href="#contact"
                          className={`flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight ${step.color} ${step.hoverColor} transition-colors duration-300`}
                        >
                          <span>{step.title}</span>
                          <ChevronRight size={18} className="translate-y-[1px] transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
