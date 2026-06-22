import React from "react";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import ServiceList from "../../../components/services/ServiceList";
import AboutSection from "components/home/AboutSection";
import CallBackSection from "components/home/CallBackSection";
import ServiceProcess from "../../../components/services/ServiceProcess";
import WhyChoose from "components/home/WhyChoose";
import ServiceAreas from "../../../components/services/ServiceAreas";
import Review from "components/home/Review";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="Services"
        description=""
        bgImage="/images/layout/services-bg.png"
      />
      <AboutSection />
      <CallBackSection />
      <ServiceList />
      <ServiceProcess />
      <WhyChoose />
      <ServiceAreas />
      <Review />
    </div>
  );
}
