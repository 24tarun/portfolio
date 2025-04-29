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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto h-14 flex items-center px-4">
          {/* Logo/Name */}
          <div className="mr-auto flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-primary hover:opacity-80 transition-opacity sm:inline-block">
                Tarun's Trove
              </span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className="flex-1 flex justify-center items-center gap-6 text-sm">
             <Link
               href="#home"
               className="text-foreground/60 transition-colors hover:text-foreground/80"
             >
               Home
             </Link>
             <Link
               href="#projects"
               className="text-foreground/60 transition-colors hover:text-foreground/80"
             >
               Projects
             </Link>
             <Link
               href="#contact"
               className="text-foreground/60 transition-colors hover:text-foreground/80"
             >
               Contact
             </Link>
          </nav>

          {/* Right Aligned Button */}
          <div className="ml-auto flex items-center">
            <Button
              asChild
              variant="outline" // Use outline or another variant that fits
              size="sm"
              className="text-primary border-primary hover:bg-primary/5" // Style the resume button
              aria-label="Download Resume"
             >
               <a
                 href="/resume.pdf" // Make sure resume.pdf is in the public folder
                 download="Tarun_Resume.pdf"
               >
                 <Download className="mr-1.5 h-4 w-4" /> Resume
               </a>
            </Button>
          </div>
        </div>
      </header>

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
