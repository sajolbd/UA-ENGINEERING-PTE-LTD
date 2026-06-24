import React from "react";
import Breadcrumb from "components/layout/Breadcrumb";
import ProjectsSection from "components/projects/ProjectsSection";
import CallBackSection from "components/home/CallBackSection";
import ProjectsFAQ from "components/projects/ProjectsFAQ";

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Breadcrumb
        title="Our Projects"
        description="A showcase of our successfully delivered engineering and renovation projects across Singapore, reflecting our commitment to structural precision, safety, and architectural elegance."
        bgImage="/images/layout/projects-bg.png"
      />
      <ProjectsSection />
      <CallBackSection />
      <ProjectsFAQ />

    </div>
  );
}
