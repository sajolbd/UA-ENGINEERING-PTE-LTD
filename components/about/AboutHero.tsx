"use client";

import React from "react";
import Image from "next/image";
import {
  Wrench,
  Clock,
  Award,
  DollarSign,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
import Container from "components/shared/Container";

export default function AboutHero() {
  const highlights = [
    { text: "Skill Worker", icon: Wrench },
    { text: "15+ Years Experienced Worker", icon: Clock },
    { text: "Certified Worker", icon: Award },
    { text: "Affordable Price", icon: DollarSign },
    { text: "Quality Ensured", icon: ShieldCheck },
    { text: "100% Client Satisfaction", icon: ThumbsUp },
  ];

  return (
    <section className="bg-white py-8 lg:py-12 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Side - Image Container */}
          <div className="relative lg:col-span-5">
            {/* Background Decorative Accent */}
            <div className="absolute -bottom-6 -left-6 h-full w-full rounded-2xl border-2 border-primary/20 -z-10 hidden sm:block" />
            
            {/* Main Image Wrapper */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/about/about-hero.png"
                alt="UA Engineering Renovation Specialist"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                  15+
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm sm:text-base">Years of Excellence</h4>
                  <p className="text-xs text-slate-600 font-medium">Renovation & Upgrading Services</p>
                </div>
              </div>
            </div>

            {/* Circular Decorative Element */}
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-primary/5 -z-10 animate-pulse" />
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <span className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
              About Our Company
            </span>

            {/* Main Title */}
            <h2 className="text-3xl font-bold leading-tight text-secondary mb-6">
              Why Choose UA Engineering For Renovation & Upgrading Services in Singapore
            </h2>

            {/* Description */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-600 font-medium mb-8">
              <p>
                Looking for a reliable renovation and upgrading contractor in Singapore? 
                <strong className="text-secondary"> UA Engineering</strong> provides professional renovation services 
                for HDB, BTO, Condominiums, Landed properties, and commercial projects.
              </p>
              <p className="text-base font-normal">
                With a strong dedication to safety, quality craftsmanship, and client satisfaction, we bring over 15 years of industry experience. Our transparent pricing structure and rapid response ensure a seamless, stress-free experience from planning to completion.
              </p>
            </div>

            {/* Grid of Highlights/Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-slate-100 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3.5 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm border border-primary/10">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" strokeWidth={2.5} />
                    </div>
                    <span className="text-base font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
