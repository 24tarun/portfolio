import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Home() {
  return (
    // Center content vertically and horizontally, take full screen height
    <main className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-4 md:p-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
        {/* Headline - Ensure foreground color (white) is applied */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
          Hello, I am Tarun
        </h1>

        {/* Paragraph 1 - Use text-foreground/90 for slightly less bright white */}
        <p className="text-lg md:text-xl text-foreground/90">
          I'm currently a masters student at Saarland University. I use this website as a portfolio and also to host and test a few of my projects
        </p>

        {/* Links - Ensure links are white and hover state uses accent color */}
        <div className="flex items-center justify-center space-x-4 md:space-x-6 pt-4">
          <Link href="/resume.pdf" download="Tarun_Resume.pdf" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="Download Resume">
             <Download className="h-4 w-4" /> Resume
          </Link>
          <Link href="https://github.com/24tarun" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="GitHub Profile">
             <Github className="h-4 w-4" /> GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/tarun2k01/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="LinkedIn Profile">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </Link>
          <Link href="mailto:tarun2k01@gmail.com" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="Send Email">
             <Mail className="h-4 w-4" /> Mail
          </Link>
        </div>
      </div>
    </main>
  );
}
