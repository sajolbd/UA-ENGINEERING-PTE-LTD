"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import Container from "../shared/Container";
import { useBlogPosts } from "../../hooks/useBlogPosts";

export default function FeaturedBlog() {
  const { posts: blogPosts } = useBlogPosts();
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Slide through all blog posts in the array
  const sliderPosts = blogPosts;
  const slideCount = sliderPosts.length;

  // Auto-play interval: switch slide every 2 seconds (2000ms), pause on hover
  useEffect(() => {
    if (isHovered || slideCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, slideCount]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    Swal.fire({
      title: "Subscribed Successfully!",
      text: `Thank you for subscribing with ${email}. You will now receive our monthly newsletter updates.`,
      icon: "success",
      confirmButtonColor: "#b91c1c",
    });

    setEmail("");
  };

  return (
    <section className="py-6 lg:py-8 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Left Column: Dynamic Featured Blog Slider (Original Banner style) */}
          <div
            className="lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] shadow-md border border-slate-100/50 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slider track container */}
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${slideCount * 100}%`,
                transform: `translateX(-${(currentSlide * 100) / slideCount}%)`,
              }}
            >
              {sliderPosts.map((post) => (
                <div key={post.slug} style={{ width: `${100 / slideCount}%` }} className="relative h-full shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative w-full h-full block group/slide"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      priority
                      className="object-cover transition-transform duration-700 group-hover/slide:scale-[1.02]"
                    />

                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                    {/* Blog Metadata & Title */}
                    <div className="absolute bottom-6 left-6 right-6 text-white md:bottom-8 md:left-8 md:right-8 z-10">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight max-w-2xl font-serif group-hover/slide:text-red-200 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 font-semibold tracking-wider font-serif">
                        {post.date}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {slideCount > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/45 hover:bg-primary text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg flex items-center justify-center w-10 h-10 border border-white/10 hover:scale-105 active:scale-95"
                  aria-label="Previous Slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/45 hover:bg-primary text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg flex items-center justify-center w-10 h-10 border border-white/10 hover:scale-105 active:scale-95"
                  aria-label="Next Slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Right Column: Newsletter Signup Card */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-sm">
            <h4 className="text-xl sm:text-2xl font-black text-secondary leading-snug max-w-xs font-serif mb-6">
              Sign Up for the Monthly Newsletter
            </h4>

            <form onSubmit={handleSubscribe} className="w-full flex flex-col items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-800 placeholder-slate-400 mb-4 shadow-sm font-medium"
              />

              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg text-center text-sm font-serif"
              >
                Submit
              </button>
            </form>

            <p className="mt-6 text-xs text-slate-400 leading-relaxed font-semibold max-w-[260px] font-serif">
              Receive Admissions, Scholarships &amp; Deadlines Updates from Universities.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

