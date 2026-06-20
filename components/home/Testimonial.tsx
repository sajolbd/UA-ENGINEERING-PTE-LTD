"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Star } from "lucide-react";
import Container from "components/shared/Container";

const testimonials = [
  {
    id: 1,
    name: "Marcus Tan",
    role: "Property Manager, CapitaLand",
    project: "Commercial Waterproofing",
    quote: "UA Engineering did an outstanding job waterproofing our commercial facade and basement. Excellent workmanship, clean execution, and no water leaks since completion!",
    thumbnail: "/images/home/projects/project-waterproofing.png",
    videoId: "A2y8jK-iGSw", // Active Waterproofing testimonial video
  },
  {
    id: 2,
    name: "Sarah Lim",
    role: "Homeowner, Sentosa Cove",
    project: "Premium Renovation & Fit-out",
    quote: "Their attention to detail during our home renovation was exceptional. From hacking to false ceiling installation, they delivered premium quality on schedule.",
    thumbnail: "/images/home/projects/project-drywall.png",
    videoId: "G5-o475Xz1Y", // Active Renovation/Waterproofing testimonial video
  },
  {
    id: 3,
    name: "David Hendricks",
    role: "Facilities Director, Jurong Hub",
    project: "Industrial Electrical Upgrade",
    quote: "Superb coordination and safety protocol adherence during our substation electrical works. The project was completed efficiently and complied with all regulations.",
    thumbnail: "/images/home/projects/project-electrical.png",
    videoId: "yY19i3889p4", // Active Construction/Waterproofing review
  },
];

export default function Testimonial() {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setActiveVideoId(id);
  };

  const handleClose = () => {
    setActiveVideoId(null);
  };

  return (
    <section id="testimonials" className="bg-white py-16 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            TESTIMONIALS
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
            Hear out From our clients
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-primary" />
          <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
            See what our clients has to say about our services and experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => {
            const isPlaying = activeVideoId === t.id;

            return (
              <div
                key={t.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Media Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  {isPlaying ? (
                    <>
                      <iframe
                        src={`https://www.youtube.com/embed/${t.videoId}?autoplay=1&rel=0&showinfo=0`}
                        title={`Testimonial from ${t.name}`}
                        className="absolute inset-0 h-full w-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      {/* Close button overlay */}
                      <button
                        onClick={handleClose}
                        className="absolute top-3 right-3 z-25 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors duration-300 hover:bg-primary"
                        aria-label="Stop video"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Thumbnail Image */}
                      <Image
                        src={t.thumbnail}
                        alt={`UA Engineering project for ${t.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/25" />

                      {/* Play Button Overlay */}
                      <button
                        onClick={() => handlePlay(t.id)}
                        className="absolute inset-0 flex items-center justify-center group/btn"
                        aria-label="Play video testimonial"
                      >
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 group-hover/btn:bg-secondary group-hover/btn:scale-110">
                          {/* Pulse Wave Effects */}
                          <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping opacity-75 group-hover/btn:bg-secondary/40" />
                          <Play size={20} fill="currentColor" className="relative z-10 translate-x-0.5" />
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Content Box */}
                <div className="flex flex-grow flex-col p-6">
                  {/* Rating Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="flex-grow text-sm italic leading-relaxed text-slate-600 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <h4 className="text-base font-bold text-secondary">
                      {t.name}
                    </h4>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">
                      {t.role}
                    </p>
                    <span className="inline-block text-[10px] font-medium text-slate-400 mt-0.5">
                      Project: {t.project}
                    </span>
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
