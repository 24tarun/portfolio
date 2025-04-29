import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Footer styling: White background, potential top border
    <footer className="border-t border-border bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        {/* Copyright text: Use foreground/muted foreground for readability */}
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Tarun. All rights reserved.
        </p>
        {/* Social Links: Icons should be navy (primary or foreground) */}
        <div className="flex items-center space-x-4">
           <Button variant="ghost" size="icon" asChild className="text-foreground/70 hover:text-foreground transition-colors">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                 <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-foreground/70 hover:text-foreground transition-colors">
              <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-foreground/70 hover:text-foreground transition-colors">
              <Link href="mailto:your.email@example.com" aria-label="Send Email">
                 <Mail className="h-5 w-5" />
              </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
