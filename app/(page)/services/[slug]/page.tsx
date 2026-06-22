import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Phone, Calendar, ArrowRight } from "lucide-react";
import Container from "../../../../components/shared/Container";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import { servicesData } from "../../../../data/servicesData";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for Next.js build optimization
export async function generateStaticParams() {
  return servicesData.map((category) => ({
    slug: category.slug,
  }));
}

export default function ServiceCategoryPage({ params }: PageProps) {
  const category = servicesData.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-slate-50/30 min-h-screen">
      {/* Dynamic Breadcrumb with category background image */}
      <Breadcrumb
        title={category.title}
        description={category.shortDescription}
        bgImage={category.bgImage}
      />

      <section className="py-2 lg:py-4">
        <Container>
          {/* Back button */}
          <div className="mb-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors duration-300"
            >
              <ArrowLeft size={14} />
              <span>Back to all categories</span>
            </Link>
          </div>

          {/* Intro Section with Category Featured Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center mb-6">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                UA Engineering Pte Ltd
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-secondary tracking-tight sm:text-4xl lg:text-5xl leading-tight">
                Professional {category.title}
              </h2>
              <div className="mt-4 h-1 w-20 bg-primary rounded" />
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                {category.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/uaengineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20"
                >
                  <Calendar size={16} />
                  <span>Get Free Quote</span>
                </a>
                <a
                  href="#services-list"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/50">
                <Image
                  src={category.featuredImage}
                  alt={category.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary-200 mb-1">
                    Featured Project Area
                  </div>
                  <h4 className="text-lg font-bold leading-snug">
                    {category.title} Solutions
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-services Grid List */}
          <div id="services-list" className="scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h3 className="text-2xl font-extrabold text-secondary sm:text-3xl">
                What We Offer Under {category.title}
              </h3>
              <p className="mt-3 text-slate-500 text-sm sm:text-base">
                Discover our specific range of professional contracting services designed to meet Singapore regulatory standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {category.services.map((service, index) => (
                <Link
                  key={service.title}
                  href={`/services/${category.slug}/${service.slug}`}
                  className="group relative flex flex-col transition-all duration-500 ease-in-out hover:-translate-y-2 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] hover:drop-shadow-[0_25px_50px_rgba(100,18,21,0.24)]"
                >
                  <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden">
                    <div
                      className="w-full h-full flex flex-col bg-[#FDFDFD] group-hover:bg-primary transition-all duration-500 ease-in-out"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)" }}
                    >
                      {/* Card Image */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-b border-slate-100/50">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-350" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary shadow-sm">
                            Service {index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-secondary transition-colors duration-500 group-hover:text-white mb-3">
                          {service.title}
                        </h4>
                        
                        <p className="text-sm leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-white/80 mb-4 flex-grow">
                          {service.description}
                        </p>

                        {service.features && service.features.length > 0 && (
                          <div className="mb-4">
                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 transition-colors duration-500 group-hover:text-white/60">
                              Key Specifications:
                            </h5>
                            <ul className="grid grid-cols-1 gap-1.5">
                              {service.features.slice(0, 3).map((feat) => (
                                <li key={feat} className="flex items-start gap-2 text-xs text-slate-600 font-semibold transition-colors duration-500 group-hover:text-white/90">
                                  <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5 transition-colors duration-500 group-hover:text-white" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-500 group-hover:text-white">
                          <span>Learn More & Specifications</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quote Banner */}
          <div className="mt-8 sm:mt-12 rounded-3xl bg-secondary p-5 sm:p-6 lg:p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-secondary to-secondary opacity-70" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Need a Professional Assessment?
                </h3>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Contact UA Engineering today. Our qualified construction engineers and specialists will assess your site requirements and provide an accurate, obligation-free quotation.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-secondary hover:translate-y-[-2px] text-center"
                >
                  <Calendar size={16} />
                  <span>Request Site Visit</span>
                </Link>
                <a
                  href="tel:+6588888888" // Replace with real company number or fallback
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/20 hover:translate-y-[-2px] text-center"
                >
                  <Phone size={16} />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
