import Link from "next/link";
import { Mail, Download, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal leading-normal text-foreground">
          Welcome! My name is Tarun Hariharan
        </h1>

        <p className="text-lg md:text-xl text-foreground/90">
          I'm currently a masters student at Saarland University. I use this website as a portfolio and also to host and test a few of my projects
        </p>

        <div className="flex items-center justify-start space-x-4 md:space-x-6 pt-4">
          <a href="/resume.pdf" download="Tarun_Resume.pdf" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="Download Resume">
            <Download className="h-4 w-4" /> Resume
          </a>
          <Link href="https://github.com/24tarun" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="GitHub Profile">
            <FaGithub className="h-4 w-4" /> GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/tarun2k01/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="LinkedIn Profile">
            <FaLinkedin className="h-4 w-4" /> LinkedIn
          </Link>
          <Link href="mailto:tarun2k01@gmail.com" className="text-sm text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="Send Email">
            <Mail className="h-4 w-4" /> Mail
          </Link>
        </div>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Current Projects</h2>
          <div className="flex items-center justify-start space-x-4 md:space-x-6 text-sm flex-wrap">
            <Link href="https://tarunsbeerreview.tarunh.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1">
              https://tarunsbeerreview.tarunh.com/
            </Link>
            <span className="text-foreground/50 hidden md:inline">|</span>
            <Link href="https://github.com/24tarun/vocabnote" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="VocabNote GitHub Repository">
              <FaGithub className="h-4 w-4" /> vocabnote
            </Link>
            <span className="text-foreground/50 hidden md:inline">|</span>
            <Link href="/vocabnote-docs.pdf" download="VocabNote_Documentation.pdf" className="text-foreground hover:text-accent-foreground transition-colors flex items-center gap-1" aria-label="VocabNote Documentation">
              <FileText className="h-4 w-4" /> Docs
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
