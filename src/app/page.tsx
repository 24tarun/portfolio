import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react"; // Keep existing imports
// Import FileText if adding documentation link in the future
// import { Github, Linkedin, Mail, Download, FileText } from "lucide-react";

export default function Home() {
  return (
    // Center content vertically and horizontally, take full screen height
    <main className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-4 md:p-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
          Welcome, My name is Tarun
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-foreground/90">
          I'm currently a masters student at Saarland University. I use this website as a portfolio and also to host and test a few of my projects
        </p>

        {/* Social/Contact Links */}
        <div className="flex items-center justify-center space-x-4 md:space-x-6 pt-4">
          <a href="/resume.pdf" download="Tarun_Resume.pdf" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="Download Resume">
             <Download className="h-4 w-4" /> Resume
          </a>
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

        {/* Current Projects Section */}
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Current Projects</h2>
          {/* Project 1: VocabNote */}
          <div className="flex items-center justify-center space-x-4 md:space-x-6 text-sm">
            {/* Project Name/Link */}
            <Link href="https://vocabnote.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1">
              {/* Icon suggestion: <LinkIcon className="h-4 w-4" /> or <Globe className="h-4 w-4" /> */}
              VocabNote
            </Link>
            <span className="text-foreground/50">|</span> {/* Separator */}
            {/* GitHub Link */}
            <Link href="https://github.com/24tarun/vocabnote" /* Ensure this is the correct repo URL */ target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="VocabNote GitHub Repository">
              <Github className="h-4 w-4" /> GitHub Repo
            </Link>
            {/* Documentation Link (Optional) - Uncomment and add URL if needed */}
            {/*
            <span className="text-foreground/50">|</span> // Separator
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="VocabNote Documentation">
               <FileText className="h-4 w-4" /> Documentation
            </Link>
            */}
          </div>
          {/* Add more project rows here following the same structure */}
          {/* Example of a second project:
          <div className="flex items-center justify-center space-x-4 md:space-x-6 text-sm">
            <Link href="[Project Link]" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1">
              Project Name 2
            </Link>
            <span className="text-foreground/50">|</span>
            <Link href="[GitHub Repo Link]" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="Project 2 GitHub Repository">
              <Github className="h-4 w-4" /> GitHub Repo
            </Link>
          </div>
          */}
        </section>
      </div>
    </main>
  );
}
