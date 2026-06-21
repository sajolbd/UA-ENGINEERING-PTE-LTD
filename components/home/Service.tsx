"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "components/shared/Container";

const services = [
  {
    title: "Full Renovation",
    image: "/images/home/services/full-renovation.jpg",
    alt: "Full renovation service",
    description:
      "Comprehensive structural and aesthetic renovation solutions for residential, commercial, and industrial spaces across Singapore. From meticulous space planning to premium custom finishes, we deliver turnkey excellence.",
  },
  {
    title: "Dry Wall Partition",
    image: "/images/home/services/dry-wall-partition.jpg",
    alt: "Drywall partition service",
    description:
      "High-grade drywall partition and gypsum wall systems designed for efficient space utilization, acoustical isolation, and fire rating compliance. Perfect for modern office layouts and room dividing.",
  },
  {
    title: "Hacking & Demolition",
    image: "/images/home/services/hacking-demolition.jpg",
    alt: "Hacking and demolition service",
    description:
      "Safe, regulated, and precise hacking and structural demolition services. Executed by trained professionals following strict HDB, BCA, and safety standards, ensuring complete debris clearance.",
  },
  {
    title: "False Ceiling",
    image: "/images/home/services/false-ceiling.jpg",
    alt: "False ceiling installation",
    description:
      "Aesthetic and functional false ceilings, suspended grid systems, and custom light-cove detailing. Engineered to conceal building services while enhancing acoustic and thermal performance.",
  },
  {
    title: "Painting & Plastering",
    image: "/images/home/services/painting-plastering.jpg",
    alt: "Painting and plastering service",
    description:
      "Premium interior and exterior plastering, skim coating, and painting. We utilize premium, durable, and low-VOC paint formulations for a flawless, long-lasting, and environmentally safe finish.",
  },
  {
    title: "Vinyl Flooring",
    image: "/images/home/services/vinyl-flooring.jpg",
    alt: "Vinyl flooring installation",
    description:
      "Heavy-duty, high-performance waterproof and scratch-resistant vinyl flooring solutions. Available in a wide range of realistic wood and stone patterns suitable for high-traffic environments.",
  },
  {
    title: "Electrical",
    image: "/images/home/services/electrical.jpg",
    alt: "Electrical installation service",
    description:
      "Full-scale electrical installation, wiring, testing, and distribution boards setup. Managed by certified, licensed EMA electricians to guarantee building safety, reliability, and code compliance.",
  },
  {
    title: "Plumbing",
    image: "/images/home/services/plumbing.jpg",
    alt: "Plumbing services",
    description:
      "Complete residential and commercial sanitary engineering and plumbing solutions. Covers high-pressure pipe installations, leak detection, drainage, and plumbing system maintenance.",
  },
  {
    title: "Tiles Installation",
    image: "/images/home/services/tiles-installation.jpg",
    alt: "Tile installation service",
    description:
      "Precision tiling for kitchens, bathrooms, feature walls, and commercial floors. We handle porcelain, ceramic, marble, and homogeneous tiles with impeccable alignment and grout styling.",
  },
  {
    title: "Fiber Optic Internet",
    image: "/images/home/services/fiber-optic.jpg",
    alt: "Fiber optic installation service",
    description:
      "Structured network cabling, fiber optic path routing, and high-speed data point installations. Engineered to support seamless, reliable connectivity for modern smart environments.",
  },
];

export default function Service() {
  return (
    <section id="services" className="bg-[#f8fafc] py-8 lg:py-12">
      <Container>
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            WHAT WE DO
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-primary" />
          <p className="mt-6 text-base text-slate-600 lg:text-lg">
            UA Engineering provides end-to-end design, construction, and architectural renovation services in Singapore. We turn vision into structural reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            return (
              <div
                key={service.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:bg-primary hover:shadow-2xl hover:border-transparent ${isLast ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                  }`}
              >
                {/* Image Wrapper */}
                <div className="relative mb-6 h-[220px] w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col">
                  <h3 className="text-xl font-bold tracking-tight text-secondary transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-white/80 flex-grow">
                    {service.description}
                  </p>

                  {/* Read More / Call to action link */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-500 group-hover:text-white">
                    <span>Learn More</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1.5"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
