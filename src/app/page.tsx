import { LandingSection } from "@/components/landing-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    // Use h-screen and overflow-hidden to contain everything within the viewport
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Main Content takes up available space, flex used to position sections */}
      <main className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Landing Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-4 md:p-8 bg-background text-foreground overflow-y-auto">
           <LandingSection />
        </div>

        {/* Right Side: Projects and Contact/Footer */}
        <div className="w-full md:w-2/3 flex flex-col bg-primary text-primary-foreground overflow-y-auto">
           {/* Projects section */}
           <div className="flex-grow p-4 md:p-8">
            <ProjectsSection projects={projects} />
           </div>

           {/* Contact section - integrated below projects */}
           <div className="p-4 md:p-8 border-t border-primary-foreground/20">
            <ContactSection />
           </div>

           {/* Footer at the bottom of the right section */}
           <div className="mt-auto bg-primary text-primary-foreground"> {/* Ensure footer stays within navy */}
             <Footer />
           </div>
        </div>
      </main>
    </div>
  );
}
