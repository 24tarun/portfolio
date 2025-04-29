import type { Project } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    // Section now assumes a navy background from parent
    <section id="projects" className="py-16 md:py-24 lg:py-32">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary-foreground mb-12 md:mb-16">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            // Card styling for Navy background: White card, Navy text
            className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground border-transparent" // Use card styles, remove explicit accent border
           >
             <CardHeader>
               {/* Card title needs to be readable on white card */}
               <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
               {/* Description text needs to be readable on white card */}
               <CardDescription className="text-muted-foreground pt-2">
                 {project.description}
               </CardDescription>
             </CardHeader>
             <CardFooter className="flex justify-start space-x-4 pt-4 mt-auto">
               {project.liveLink && (
                 <Button
                   variant="outline"
                   size="sm"
                   asChild
                   // Button styling for white card: Navy outline/text
                   className="text-primary border-primary hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                  >
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
               )}
               {project.githubLink && (
                 <Button
                   variant="outline"
                   size="sm"
                   asChild
                   // Button styling for white card: Navy outline/text
                   className="text-primary border-primary hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                  >
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
               )}
             </CardFooter>
           </Card>
        ))}
      </div>
    </section>
  );
}
