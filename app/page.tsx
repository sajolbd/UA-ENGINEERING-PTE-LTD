import AboutSection from "components/home/AboutSection";
import CallBackSection from "components/home/CallBackSection";
import Hero from "components/home/Hero";
import Services from "components/home/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CallBackSection />
      <AboutSection />
    </div>
  );
};

export default page;