import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react"; // Added Download icon

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Reduced padding, ensure background matches parent (primary)
    <footer className="bg-primary py-3 md:py-4 border-t border-primary-foreground/20"> {/* Added border */}
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 px-4 text-xs md:text-sm">
        {/* Copyright text: Ensure it's visible */}
        <p className="text-primary-foreground/70">
          &copy; {currentYear} Tarun.
        </p>
        {/* Social & Resume Links */}
        <div className="flex items-center space-x-2 md:space-x-3">
           {/* Resume Button */}
           <Button
             variant="outline"
             size="sm" // Use small size for footer
             asChild
             // Styling for button on navy background: White border/text
             className="text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors duration-200 text-xs px-2 py-1 h-auto"
            >
              {/* Link points to the resume PDF in the public folder */}
              <Link href="/resume.pdf" download="Tarun_Resume.pdf" aria-label="Download Resume">
                <Download className="mr-1 h-3 w-3" /> {/* Smaller icon */}
                Resume
              </Link>
            </Button>

           {/* Social Icons - Ensure visibility */}
           <Button variant="ghost" size="icon" asChild className="text-primary-foreground/70 hover:text-primary-foreground transition-colors h-6 w-6 md:h-7 md:w-7">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                 <Github className="h-4 w-4" /> {/* Adjusted size */}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground/70 hover:text-primary-foreground transition-colors h-6 w-6 md:h-7 md:w-7">
              <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-4 w-4" /> {/* Adjusted size */}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground/70 hover:text-primary-foreground transition-colors h-6 w-6 md:h-7 md:w-7">
              <Link href="mailto:your.email@example.com" aria-label="Send Email">
                 <Mail className="h-4 w-4" /> {/* Adjusted size */}
              </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
