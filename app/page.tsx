import AboutSection from "components/home/AboutSection";
import CallBackSection from "components/home/CallBackSection";
import Hero from "components/home/Hero";
import Service from "components/home/Service";
import CompletedProjects from "components/home/CompletedProjects";
import WorkingProcess from "components/home/WorkingProcess";
import React from "react";
import Services from "components/home/Services";
import WhyRely from "components/home/WhyRely";
import WhyChoose from "components/home/WhyChoose";
import Testimonial from "components/home/Testimonial";

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
      <WhyChoose />
      <Testimonial />
    </div>
  );
};

export default page;