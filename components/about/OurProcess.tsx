"use client";

import React from "react";
import {
  PhoneCall,
  FileText,
  Wrench,
  Sparkles,
  Check,
} from "lucide-react";
import Container from "components/shared/Container";

const steps = [
  {
    id: 1,
    tag: "STEP 01",
    title: "Scheduling",
    description:
      "Understand your renovation or upgrading requirements through detailed discussion and a thorough technical evaluation. Our expert team evaluates structural needs, takes precise measurements, and aligns with your preferences.",
    icon: PhoneCall,
    milestones: [
      "Easy booking via phone or WhatsApp",
      "Punctual, uniformed team arrival",
      "Detailed measurements & technical scoping",
    ],
  },
  {
    id: 2,
    tag: "STEP 02",
    title: "Arrival",
    description:
      "We provide a clear, itemized quotation with transparent pricing and no hidden fees. Once approved, we establish a structured project plan, material selection lists, and a realistic progress timeline.",
    icon: FileText,
    milestones: [
      "Detailed estimations & budget scoping",
      "Itemized pricing sheets with zero surprises",
      "Milestone timelines & material selection",
    ],
  },
  {
    id: 3,
    tag: "STEP 03",
    title: "The Work",
    description:
      "Our certified workers execute all works safely and efficiently. Directly supervised by experienced project managers, we adhere to Singapore building codes (BCA & HDB), ensuring quality craftsmanship.",
    icon: Wrench,
    milestones: [
      "On-site supervisor and manager control",
      "BCA & HDB regulation compliance",
      "Premium, certified materials & safety protocols",
    ],
  },
  {
    id: 4,
    tag: "STEP 04",
    title: "Payment for Completed Work",
    description:
      "We conduct a thorough walk-through of the finished project with you, verifying every detail against our quality assurance checklist. We carry out meticulous clean-up of the work site and handover warranties.",
    icon: Sparkles,
    milestones: [
      "Rigorous walk-through checklist verification",
      "Complete post-project cleanup & debris clearing",
      "Warranty handover & post-completion support",
    ],
  },
];

export default function OurProcess() {
  return (
    <section className="bg-slate-50 py-8 lg:py-12 border-t border-slate-100 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            HOW WE WORK
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Our Process
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-primary" />
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            You deserve to have a beautiful space and a team of professionals you can trust to properly care for it. We strive to deliver high-quality results by following an efficient, straightforward process.
          </p>
        </div>

        {/* Process Cards 2-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between p-8 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(100,18,21,0.08)] hover:border-primary/10"
              >
                <div>
                  {/* Card Header (Icon & Tag) */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      <Icon className="h-5.5 w-5.5 transition-transform duration-300 group-hover:rotate-12" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black tracking-widest text-primary uppercase bg-primary/5 px-3.5 py-1.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary tracking-tight leading-snug mb-3 transition-colors duration-200 group-hover:text-primary">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-500 font-medium mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Milestones list */}
                <ul className="space-y-3 border-t border-slate-150 pt-5 mt-auto">
                  {item.milestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 group/item">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform duration-200 group-hover/item:scale-115 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 transition-colors duration-250 group-hover/item:text-primary">
                        {milestone}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
