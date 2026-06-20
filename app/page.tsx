import AboutSection from "components/home/AboutSection";
import CallBackSection from "components/home/CallBackSection";
import Hero from "components/home/Hero";
import Service from "components/home/Service";
import CompletedProjects from "components/home/CompletedProjects";
import WorkingProcess from "components/home/WorkingProcess";
import React from "react";
import Services from "components/home/Services";
import WhyRely from "components/home/WhyRely";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CallBackSection />
      <AboutSection />
      <Service />
      <CompletedProjects />
      <WorkingProcess />
      <WhyRely />
    </div>
  );
};

export default page;