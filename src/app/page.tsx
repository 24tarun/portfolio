import { LandingSection } from "@/components/landing-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
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
