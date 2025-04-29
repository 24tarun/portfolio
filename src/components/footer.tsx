import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Tarun. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
           <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                 <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
              <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
              <Link href="mailto:your.email@example.com" aria-label="Send Email">
                 <Mail className="h-5 w-5" />
              </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
