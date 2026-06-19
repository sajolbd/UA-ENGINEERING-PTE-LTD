"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ShieldCheck,
    HardHat,
    MessagesSquare,
    Wrench,
} from "lucide-react";

import Container from "components/shared/Container";

export default function AboutSection() {
    return (
        <section className="overflow-hidden bg-white py-16 lg:py-24">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Side */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src="/images/about/about-main.jpg"
                                alt="UA Engineering"
                                width={700}
                                height={750}
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        {/* Experience Box */}
                        <div className="absolute right-0 top-8 bg-white px-5 py-4 shadow-2xl lg:right-[-30px]">
                            <div className="flex items-center gap-3">
                                <span className="text-5xl font-bold text-primary">
                                    15
                                </span>

                                <span className="text-lg font-semibold text-secondary">
                                    Years
                                    <br />
                                    Experience
                                </span>
                            </div>
                        </div>

                        {/* Floating Image */}
                        <div className="absolute -bottom-10 right-5 hidden bg-white p-3 shadow-2xl md:block">
                            <Image
                                src="/images/about/about-support.jpg"
                                alt="Support Team"
                                width={250}
                                height={250}
                                className="object-cover"
                            />
                        </div>

                        {/* Decoration */}
                        <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full border-[12px] border-primary/10" />
                    </div>

                    {/* Right Side */}
                    <div>
                        {/* Small Title */}
                        <div className="mb-4 flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-primary" />

                            <span className="text-lg font-semibold text-primary">
                                About UA Engineering
                            </span>
                        </div>

                        {/* Main Title */}
                        <h2 className="mb-6 text-3xl font-bold leading-tight text-secondary xl:text-5xl">
                            Your Trusted Partner for High Quality
                            Renovation & Upgrading Services.
                        </h2>

                        {/* Description */}
                        <p className="mb-10 text-base sm:text-lg leading-6 text-slate-950">
                            At UA ENGINEERING PTE. LTD., we deliver reliable
                            Renovation & Upgrading solutions grounded in
                            integrity, expertise, and precision. Our team
                            ensures every project meets high standards of
                            safety, durability, and quality workmanship.
                        </p>

                        {/* Features */}
                        <div className="mb-10 grid gap-4 md:grid-cols-3">
                            {/* Reliability */}
                            <div className="group border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-secondary hover:border-secondary hover:shadow-xl">
                                <ShieldCheck className="mb-3 h-10 w-10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-white" />

                                <h3 className="mb-2 text-lg font-semibold text-secondary transition-colors duration-300 group-hover:text-white">
                                    Reliability & Trust
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/80">
                                    Consistent quality, timely delivery, and service you can rely on.
                                </p>
                            </div>

                            {/* Expertise */}
                            <div className="group border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-secondary hover:border-secondary hover:shadow-xl">
                                <HardHat className="mb-3 h-10 w-10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-white" />

                                <h3 className="mb-2 text-lg font-semibold text-secondary transition-colors duration-300 group-hover:text-white">
                                    Technical Expertise
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/80">
                                    Some of our professionals have over 15 years of experience.
                                </p>
                            </div>

                            {/* Communication */}
                            <div className="group border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-secondary hover:border-secondary hover:shadow-xl">
                                <MessagesSquare className="mb-3 h-10 w-10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-white" />

                                <h3 className="mb-2 text-lg font-semibold text-secondary transition-colors duration-300 group-hover:text-white">
                                    Clear Communication
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/80">
                                    Regular updates and transparent processes from start to finish.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <Link
                            href="/about"
                            className="group relative inline-flex items-center overflow-hidden bg-primary px-8 py-3 font-semibold text-white"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-secondary transition-transform duration-500 ease-in-out group-hover:translate-x-0" />

                            <span className="relative z-10">
                                About More
                            </span>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}