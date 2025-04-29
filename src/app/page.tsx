import Link from "next/link";
import { Github, Linkedin, Mail, Download, Link as LinkIcon } from "lucide-react"; // Keep existing imports and add LinkIcon if needed

export default function Home() {
  return (
    // Center content vertically, allow block to center horizontally via mx-auto
    <main className="flex flex-col justify-center min-h-screen bg-background text-foreground p-4 md:p-8">
      {/* Centered content block with max-width, text defaults to left-aligned */}
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 w-full">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
          Welcome, My name is Tarun
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-foreground/90">
          I'm currently a masters student at Saarland University. I use this website as a portfolio and also to host and test a few of my projects
        </p>

        {/* Social/Contact Links - Justify Start */}
        <div className="flex items-center justify-start space-x-4 md:space-x-6 pt-4">
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

        {/* Current Projects Section - Left Aligned */}
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Current Projects</h2>
          {/* Project 1: VocabNote - Justify Start */}
          <div className="flex items-center justify-start space-x-4 md:space-x-6 text-sm">
            {/* Project Name/Link - Changed text to URL */}
            <Link href="https://vocabnote.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1">
               {/* Optionally add an icon like LinkIcon */}
               {/* <LinkIcon className="h-4 w-4" /> */}
               https://vocabnote.onrender.com/
            </Link>
            <span className="text-foreground/50">|</span> {/* Separator */}
            {/* GitHub Link */}
            <Link href="https://github.com/24tarun/vocabnote" /* Ensure this is the correct repo URL */ target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="VocabNote GitHub Repository">
              <Github className="h-4 w-4" /> GitHub Repo
            </Link>
            {/* Documentation Link (Optional) - Kept commented */}
            {/*
            <span className="text-foreground/50">|</span> // Separator
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="VocabNote Documentation">
               <FileText className="h-4 w-4" /> Documentation
            </Link>
            */}
          </div>
          {/* Add more project rows here following the same structure */}
          {/* Example of a second project:
          <div className="flex items-center justify-start space-x-4 md:space-x-6 text-sm">
            <Link href="[Project Link]" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1">
              [Project URL]
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
