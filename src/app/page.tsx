import Link from "next/link";
import { LandingSection } from "@/components/landing-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header Removed */}

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Landing section - typically white background */}
        <LandingSection />

        {/* Projects section - navy background */}
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <ProjectsSection projects={projects} />
          </div>
        </div>

        {/* Contact section - navy background */}
        <div className="bg-primary text-primary-foreground">
           <div className="container mx-auto px-4">
            <ContactSection />
           </div>
        </div>
      </main>

      {/* Footer - typically white or light gray background */}
      <Footer />
    </div>
  );
}
