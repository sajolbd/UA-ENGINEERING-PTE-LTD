import React from "react";
import Breadcrumb from "components/layout/Breadcrumb";
import ContactFormSection from "components/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="Contact Us"
        description="Get in touch with our team today to get a free site assessment and quote."
        bgImage="/images/layout/contact-bg.png"
      />
      <ContactFormSection />
    </div>
  );
}

