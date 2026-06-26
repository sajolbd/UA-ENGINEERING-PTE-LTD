"use client";

import React, { useState } from "react";
import Breadcrumb from "components/layout/Breadcrumb";
import Container from "components/shared/Container";
import BlogCard from "components/blog/BlogCard";
import BigBlogCard from "components/blog/BigBlogCard";
import BlogSidebar from "components/blog/BlogSidebar";
import { blogPosts } from "data/blogData";
import FeaturedBlog from "components/blog/FeaturedBlog";

const categories = [
  "All",
  "Renovation & Upgrading",
  "Structural & Exterior Works",
  "Painting & Waterproofing",
  "Aluminium & Glazing Works",
  "Electrical, Plumbing & Aircon",
  "Solar Panel Installation",
  "Others",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on category (used when activeCategory !== "All")
  const filteredPosts = blogPosts.filter((post) => {
    return post.category === activeCategory;
  });

  const categoriesToDisplay = categories.filter((c) => c !== "All");

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <Breadcrumb
        title="Blog & Articles"
        description="Stay updated with the latest construction insights, renovation guides, and engineering standards in Singapore."
        bgImage="/images/layout/blog-bg.png"
      />
      <FeaturedBlog />
      {/* Main Blog Section */}
      <section className="py-10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Left Column: Categories Navigation (Desktop only) */}
            <div className="lg:w-[240px] shrink-0 sticky top-24 self-start lg:block hidden">
              <div className="bg-slate-50/60 border border-slate-100 p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <h4 className="text-xs font-black tracking-wider uppercase text-slate-800 mb-5 pb-2 border-b border-slate-200/50">
                  Navigation
                </h4>
                <div className="flex flex-col gap-1.5">
                  {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-left w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${isActive
                            ? "bg-secondary/5 text-secondary"
                            : "text-slate-500 hover:bg-secondary/5 hover:text-secondary"
                          }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Middle Column: Blog Feed */}
            <div className="flex-1 min-w-0 w-full">
              {/* Mobile-only category navigation bar */}
              <div className="lg:hidden block sticky top-[64px] z-20 bg-slate-50/95 backdrop-blur-sm py-3 mb-6 -mx-4 px-4 border-b border-slate-200/50">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none whitespace-nowrap">
                  {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${isActive
                            ? "bg-secondary/5 text-secondary border border-secondary/15"
                            : "bg-white border border-slate-100 hover:bg-secondary/5 hover:text-secondary"
                          }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>

              {activeCategory === "All" ? (
                // 1. Grouped Categories View (When 'All' is active)
                <div className="space-y-6">
                  {categoriesToDisplay.map((category) => {
                    const postsInCat = blogPosts.filter((p) => p.category === category);
                    if (postsInCat.length === 0) return null;

                    return (
                      <div
                        key={category}
                        className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                      >
                        {/* Category Heading */}
                        <h3 className="text-[11px] font-black tracking-wider uppercase text-slate-800 border-b border-slate-100 pb-3 mb-4">
                          {category}
                        </h3>

                        {/* 2-column grid of small horizontal cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {postsInCat.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // 2. Single Category View (Hybrid layout: highlighted selected category + remaining categories)
                <div className="space-y-8">
                  {/* Active Category Section */}
                  <div>
                    {/* Centered Heading */}
                    <h3 className="text-xs font-black tracking-wider uppercase text-secondary text-center mb-6 pb-2 border-b border-slate-100/50">
                      {activeCategory}
                    </h3>

                    {filteredPosts.length > 0 ? (
                      <div>
                        {/* Big vertical cards (first 4 posts) in 2-column grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                          {filteredPosts.slice(0, 4).map((post) => (
                            <BigBlogCard key={post.slug} post={post} />
                          ))}
                        </div>

                        {/* Small horizontal cards (remaining posts) in 2-column grid */}
                        {filteredPosts.length > 4 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {filteredPosts.slice(4).map((post) => (
                              <BlogCard key={post.slug} post={post} />
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-16 bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                        <p className="text-slate-500 font-bold text-sm">
                          No articles found in this category.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Remaining Categories Sections (styled like 'All' view) */}
                  <div className="space-y-6 pt-4 border-t border-slate-200/40">
                    <h4 className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4 text-center">
                      Other Categories
                    </h4>
                    {categoriesToDisplay
                      .filter((c) => c !== activeCategory)
                      .map((category) => {
                        const postsInCat = blogPosts.filter((p) => p.category === category);
                        if (postsInCat.length === 0) return null;

                        return (
                          <div
                            key={category}
                            className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                          >
                            {/* Category Heading */}
                            <h3 className="text-[11px] font-black tracking-wider uppercase text-slate-800 border-b border-slate-100 pb-3 mb-4">
                              {category}
                            </h3>

                            {/* 2-column grid of small horizontal cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {postsInCat.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar (Popular Articles) (Desktop only) */}
            <div className="lg:w-[280px] shrink-0 sticky top-24 self-start lg:block hidden">
              <BlogSidebar mode="popular" posts={blogPosts} />
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
