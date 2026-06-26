import React from "react";
import Image from "next/image";
import Container from "../shared/Container";

const focusServices = [
  {
    title: "Paint Factory",
    image: "/images/services/paint-factory.png",
  },
  {
    title: "Paint Hospital",
    image: "/images/services/paint-hospital.png",
  },
  {
    title: "Paint School",
    image: "/images/services/paint-school.png",
  },
  {
    title: "Paint Shop",
    image: "/images/services/paint-shop.png",
  },
];

export default function PaintingFocus() {
  return (
    <section className="bg-secondary py-8 lg:py-12 text-white">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight font-serif">
            Painting Services In Singapore We Focus Too !!
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium font-serif">
            From HDBs to High-Rises, We Paint It All
          </p>
        </div>

        {/* Grid of Focus Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {focusServices.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-xl shadow-slate-950/40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg sm:text-xl font-bold tracking-tight text-white font-serif transition-colors duration-300 group-hover:text-primary-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
