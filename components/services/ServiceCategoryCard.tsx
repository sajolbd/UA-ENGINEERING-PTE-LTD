import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function ServiceCategoryCard({
  title,
  description,
  image,
  slug,
}: ServiceCategoryCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      {/* Image Container with Zoom effect */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Sleek Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
        
        {/* Category Tag Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            UA Engineering
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-6 sm:p-8">
        <h3 className="text-xl font-extrabold tracking-tight text-secondary transition-colors duration-300 group-hover:text-primary sm:text-2xl">
          {title}
        </h3>
        
        <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <Link
            href={`/services/${slug}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20"
          >
            <span>Explore Services</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </div>

      {/* Hover bottom border indicator */}
      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
    </div>
  );
}
