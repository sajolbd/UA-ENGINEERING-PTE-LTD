"use client";

import React, { useState } from "react";
import Container from "components/shared/Container";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What types of properties have you worked on in your projects?",
    answer: "We have extensive experience working on a wide range of properties across Singapore. This includes residential landed homes, HDB flats, private condominiums, commercial offices, retail outlets, industrial warehouses, and large-scale government facilities. Each project is tailored to comply with the specific building guidelines and standards required for that property type.",
  },
  {
    question: "How do you handle unexpected challenges during a project?",
    answer: "Our project managers are highly experienced in anticipating and managing unforeseen challenges on site, such as sudden tropical weather delays, material logistics bottlenecks, or hidden structural issues. We maintain a proactive communication channel, immediately informing clients of any developments and presenting practical, cost-effective solutions to keep the project timeline on track without compromising structural safety.",
  },
  {
    question: "How do you ensure quality across different project types?",
    answer: "Quality is embedded in our workflow. We achieve this by deploying specialized, certified engineering teams for each discipline, utilizing premium materials certified by Singapore standards (such as BCA-approved waterproofing membranes and weather-shield paints), and conducting strict supervision at every project phase. Every milestone must pass our internal quality assurance checklist before proceeding to the next stage.",
  },
  {
    question: "How do you ensure safety on your project sites?",
    answer: "Safety is our absolute priority and is non-negotiable. We enforce strict WSH (Workplace Safety and Health) protocols on all sites. Our workers are fully equipped with certified Personal Protective Equipment (PPE) and safety harnesses for high-rise works. We conduct mandatory daily toolbox meetings, perform regular risk assessments, and maintain strict compliance with Ministry of Manpower (MOM) safety regulations in Singapore.",
  },
  {
    question: "What sustainability practices do you follow in your projects?",
    answer: "We are committed to eco-friendly construction and renovation practices in alignment with Singapore's Green Building Masterplan. We prioritize the use of sustainable, low-VOC (volatile organic compound) paints, eco-friendly waterproofing membranes, and energy-efficient LED lighting systems. We also implement efficient waste management protocols to maximize recycling and minimize the carbon footprint of our project sites.",
  },
  {
    question: "Can you customize projects to fit unique design requirements?",
    answer: "Yes, customization is one of our core strengths. We collaborate closely with homeowners, business owners, architects, and interior designers to turn bespoke concepts into reality. Whether it is custom structural steel fabrications, specialized glass installations, or intricate ceiling layouts, we engineer solutions tailored to your unique aesthetic tastes, functional requirements, and budget.",
  },
  {
    question: "What is the typical project management process you follow?",
    answer: "We follow a structured 6-step process to ensure project success: 1) Initial Consultation & Site Measurement, 2) Design Verification & Budget Alignment, 3) Permit Application & Material Sourcing, 4) Execution under strict on-site supervision, 5) Quality Control & Testing (e.g., ponding tests for waterproofing), and 6) Final Handover & Cleanup. We keep you updated with regular progress reports throughout.",
  },
  {
    question: "Do you offer maintenance services after project completion?",
    answer: "Yes, we believe in building long-term relationships with our clients. We offer comprehensive after-sales support, including project-specific warranties on workmanship and materials (such as waterproofing membranes). We also provide customized preventative maintenance packages to help keep your roof, paintwork, and structural elements in top condition for years to come.",
  }
];

export default function ProjectsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first item by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-12 bg-slate-50 border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1.5 rounded-full">
            PROJECT FAQ&apos;S
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Looking for Project Related Answers?
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-primary" />
          <p className="mt-4 text-sm md:text-base text-slate-650 max-w-2xl mx-auto">
            Find expert answers to common questions regarding our project execution, safety standards, material quality, and custom engineering services in Singapore.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="mx-auto max-w-4xl">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`mb-4 border rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${isOpen ? "border-primary/20" : "border-slate-200/60"
                  }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left font-bold transition-all duration-300 focus:outline-none select-none ${isOpen
                      ? "text-primary bg-primary/[0.01] border-l-4 border-primary"
                      : "text-slate-850 hover:text-primary border-l-4 border-transparent"
                    }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base pr-4">{faq.question}</span>
                  <span
                    className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${isOpen ? "rotate-180 bg-primary/10 text-primary" : ""
                      }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Accordion Smooth Height Transition (CSS Grid rows trick) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-3 text-xs md:text-sm leading-relaxed text-slate-600 border-t border-slate-100/60 bg-slate-50/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Hook */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            If you have a question that is not answered here, please feel free to{" "}
            <a
              href="/contact"
              className="font-semibold text-primary hover:underline transition-all"
            >
              contact us directly
            </a>
            . Our engineers are happy to help.
          </p>
        </div>
      </Container>
    </section>
  );
}
