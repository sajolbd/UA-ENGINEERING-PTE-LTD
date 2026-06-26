"use client";

import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import Container from "../shared/Container";

export default function FeaturedBlog() {
  const [email, setEmail] = useState("");

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

          {/* Left Column: Featured Blog Banner */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] shadow-md border border-slate-100/50 group">
            <Image
              src="/images/blog/featured-blog.png"
              alt="How the Student Recruitment Model is Transforming"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

            {/* Blog Metadata & Title */}
            <div className="absolute bottom-6 left-6 right-6 text-white md:bottom-8 md:left-8 md:right-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight max-w-2xl font-serif">
                How the Student Recruitment Model is Transforming
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 font-semibold tracking-wider font-serif">
                March 24, 2026
              </p>
            </div>
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
