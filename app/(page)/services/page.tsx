import React from "react";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import ServiceList from "../../../components/services/ServiceList";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="Services"
        description=""
        bgImage="/images/layout/services-bg.png"
      />
      <ServiceList />
    </div>
  );
}
