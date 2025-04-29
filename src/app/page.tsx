import Link from "next/link";
import { LandingSection } from "@/components/landing-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Integrated Header Elements */}
      <header className="container mx-auto px-4 pt-6 pb-4 md:pt-8 md:pb-6 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
          Tarun's Trove
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-6 text-sm font-medium">
          <Link href="#home" className="text-primary hover:text-primary/80 transition-colors">
            Home
          </Link>
          <Link href="#projects" className="text-primary hover:text-primary/80 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-primary hover:text-primary/80 transition-colors">
            Contact
          </Link>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="ml-2"
            aria-label="Download Resume"
           >
             <a
               href="/resume.pdf" // Make sure resume.pdf is in the public folder
               download="Tarun_Resume.pdf"
             >
               <Download className="mr-1.5 h-4 w-4" /> Resume
             </a>
          </Button>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 md:pt-10 md:pb-16">
        <LandingSection />
        <Separator className="my-12 md:my-20 bg-primary/20" />
        <ProjectsSection projects={projects} />
        <Separator className="my-12 md:my-20 bg-primary/20" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
