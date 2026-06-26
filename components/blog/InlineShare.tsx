"use client";

import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface InlineShareProps {
  postTitle: string;
  postUrl?: string;
}

export default function InlineShare({ postTitle, postUrl }: InlineShareProps) {
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(postUrl || window.location.href);
    }
  }, [postUrl]);

  const shareButtons = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      hoverStyles: "hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/5",
    },
    {
      name: "Twitter / X",
      icon: FaTwitter,
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(postTitle)}`,
      hoverStyles: "hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/5",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      hoverStyles: "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/5",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      link: `https://api.whatsapp.com/send?text=${encodeURIComponent(postTitle + ' ' + fullUrl)}`,
      hoverStyles: "hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/5",
    },
  ];

  return (
    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
      <span className="text-xs font-black tracking-wider uppercase text-slate-400">Share:</span>
      <div className="flex items-center gap-2">
        {shareButtons.map((btn) => {
          const Icon = btn.icon;
          return (
            <a
              key={btn.name}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${btn.name}`}
              className={`flex h-8.5 w-8.5 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:scale-105 ${btn.hoverStyles}`}
              style={{ width: "34px", height: "34px" }}
            >
              <Icon size={13} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
