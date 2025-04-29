import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
          Tarun's Trove
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#home" className="text-primary hover:text-primary/80 transition-colors">
            Home
          </Link>
          <Link href="#projects" className="text-primary hover:text-primary/80 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-primary hover:text-primary/80 transition-colors">
            Contact
          </Link>
          <a
            href="/resume.pdf" // Make sure resume.pdf is in the public folder
            download="Tarun_Resume.pdf"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
            aria-label="Download Resume"
           >
             <Download className="mr-2 h-4 w-4" /> Resume
          </a>
        </nav>
         <div className="flex items-center space-x-3 md:hidden">
           {/* Mobile menu could be added here if needed */}
           <a
            href="/resume.pdf" // Make sure resume.pdf is in the public folder
            download="Tarun_Resume.pdf"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0" // Icon style for mobile
            aria-label="Download Resume"
           >
             <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
