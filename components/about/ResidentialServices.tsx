"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  LayoutGrid,
  Paintbrush,
  Zap,
  Hammer,
  Sun,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Container from "components/shared/Container";

const iconMap = {
  Home,
  LayoutGrid,
  Paintbrush,
  Zap,
  Hammer,
  Sun,
};

const residentialServicesData = [
  {
    category: "Full Renovation & Upgrading",
    slug: "renovation-upgrading",
    icon: "Home",
    description: "Complete turnkey structural and aesthetic upgrades for Singapore homes.",
    services: [
      "HDB & BTO Full Flat Renovations",
      "Condominium Modernization & Space Saving Layouts",
      "Landed House Addition & Alteration (A&A)",
      "Kitchen & Bathroom Complete Upgrades",
      "Custom Carpentry (Wardrobes, Cabinets, TV Consoles)",
      "HDB Hack & Demolition Clearance",
    ],
  },
  {
    category: "Partition, Ceiling & Tiling",
    slug: "structural-exterior-works",
    icon: "LayoutGrid",
    description: "Expert division, ceiling suspensions, and surface masonry.",
    services: [
      "High-Grade Drywall Partition & Room Dividers",
      "Acoustic Suspended Grid Ceilings",
      "Custom L-Box & Light Cove Installations",
      "Kitchen & Bathroom Wall Tile Installations",
      "Marble, Homogeneous, & Ceramic Floor Tiling",
      "Skim Coating & Wall Plastering",
    ],
  },
  {
    category: "Painting & Waterproofing",
    slug: "painting-waterproofing",
    icon: "Paintbrush",
    description: "Long-lasting surface finishes and premium leak preventions.",
    services: [
      "Eco-Friendly Low-VOC Interior Painting",
      "Weather-Shield Protective Exterior Painting",
      "Bathroom, Balcony, & Grout Waterproofing",
      "Inter-floor Roof Leak Detection & Repair",
      "Anti-Mold Wall Treatment & Repainting",
      "Wood & Deck Staining & Polishing",
    ],
  },
  {
    category: "Electrical, Plumbing & Aircon",
    slug: "electrical-plumbing-aircon",
    icon: "Zap",
    description: "EMA-certified wiring, piping, and climate cooling setups.",
    services: [
      "EMA Certified Full Home Rewiring & Power Trips Fixes",
      "LED Light Fixtures, Chandelier & Dimmer Setups",
      "Ceiling Fan Installation & Relocation",
      "Sanitary Ware Fittings & Tap/Pipe Leak Repair",
      "Instant & Storage Water Heater Installations",
      "Aircon Multi-split System Installation & Servicing",
    ],
  },
  {
    category: "Flooring & Handyman Tasks",
    slug: "flooring-handyman",
    icon: "Hammer",
    description: "Quick surface replacements, fixture fits, and assembly.",
    services: [
      "Waterproof & Scratch-Resistant Vinyl Flooring (LVP)",
      "Parquet Wood Sanding & Varnishing",
      "TV Wall Mount & Heavy Mirror Installation",
      "Solid Timber & Sliding Door Lock Repairs",
      "Doorway Widening & Safety Grab Bar Placement",
      "Flat-Pack Furniture & Shelving Assembly",
    ],
  },
  {
    category: "Aluminium, Glazing & Solar",
    slug: "aluminium-glazing-works",
    icon: "Sun",
    description: "Metal structures, modern glass designs, and solar energy installations.",
    services: [
      "Aluminium Window Grills & Window Frame Fittings",
      "Tempered Glass Shower Screen Installations",
      "Glass Sliding Doors & Storefront Partitions",
      "Solar Panel Roof Framing & Modules Setup",
      "Rain Gutter Repair & Gutter Guard Setup",
      "Heavy Duty Metal Gate Repair & Installation",
    ],
  },
];

export default function ResidentialServices() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  return (
    <section className="bg-white py-8 lg:py-12 border-t border-slate-105">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            WHAT WE DO
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Residential Renovation & Handyman Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-primary" />
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            From minor repairs and EMA-certified electrical wiring to full HDB, condo, and landed structural makeovers, we provide professional execution backed by Singapore standards.
          </p>
        </div>

        {/* Layout Grid (Left: Accordion Categories, Right: Service list preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
          {/* Left: Accordion Selection */}
          <div className="lg:col-span-5 space-y-3">
            {residentialServicesData.map((item, idx) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Home;
              const isActive = activeCategory === idx;

              return (
                <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => setActiveCategory(isActive ? null : idx)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-all duration-200 ${
                      isActive ? "bg-primary text-white" : "hover:bg-slate-50 text-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="h-5.5 w-5.5" />
                      <span className="font-bold text-base sm:text-lg">{item.category}</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                  </button>

                  {/* Mobile Dropdown View */}
                  {isActive && (
                    <div className="block lg:hidden p-5 bg-slate-50 border-t border-slate-100">
                      <p className="text-sm text-slate-500 font-semibold mb-4">{item.description}</p>
                      <ul className="space-y-3 mb-5">
                        {item.services.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm font-bold text-slate-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                      >
                        <span>Explore All Services</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Desktop Detail Preview Box */}
          <div className="hidden lg:block lg:col-span-7 bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm">
            {activeCategory !== null ? (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black tracking-widest text-primary uppercase bg-primary/5 px-3 py-1.5 rounded-full">
                    {residentialServicesData[activeCategory].category}
                  </span>
                  <p className="mt-4 text-slate-500 font-semibold text-base leading-relaxed">
                    {residentialServicesData[activeCategory].description}
                  </p>
                  
                  {/* Grid of task links */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {residentialServicesData[activeCategory].services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3 group">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                        <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors duration-150">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200/60 pt-6 mt-8">
                  <Link
                    href={`/services/${residentialServicesData[activeCategory].slug}`}
                    className="group inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center text-slate-400 font-semibold">
                Select a category on the left to view specific residential services.
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
