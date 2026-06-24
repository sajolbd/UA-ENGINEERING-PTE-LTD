import React from "react";
import Breadcrumb from "components/layout/Breadcrumb";
import AboutHero from "components/about/AboutHero";
import OurProcess from "components/about/OurProcess";
import ResidentialServices from "components/about/ResidentialServices";
import ServiceAreas from "components/services/ServiceAreas";
import ContactFormSection from "components/contact/ContactFormSection";
import AboutFAQ from "components/about/AboutFAQ";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="About Us"
        description=""
        bgImage="/images/layout/about-bg.png"
      />
      <AboutHero />
      <OurProcess />
      <ResidentialServices />
      <ServiceAreas />
      <ContactFormSection />
      <AboutFAQ />
    </div>
  );
}




