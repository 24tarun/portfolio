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
    // Reduced vertical padding
    <section id="projects" className="py-8 md:py-12">
      {/* Reduced heading size and margin */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary-foreground mb-6 md:mb-8">
        My Projects
      </h2>
      {/* Adjust grid columns for smaller screens if needed, reduced gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(0, 2).map((project, index) => ( // Display fewer projects or handle overflow
          <Card
            key={index}
            className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground border-transparent h-full" // Ensure card takes full height of grid cell
           >
             <CardHeader className="pb-2"> {/* Reduced padding */}
               <CardTitle className="text-lg font-semibold text-primary">{project.title}</CardTitle>
               <CardDescription className="text-sm text-muted-foreground pt-1 line-clamp-3"> {/* Limit description lines */}
                 {project.description}
               </CardDescription>
             </CardHeader>
             <CardFooter className="flex justify-start space-x-2 pt-2 mt-auto"> {/* Reduced spacing/padding */}
               {project.liveLink && (
                 <Button
                   variant="outline"
                   size="sm"
                   asChild
                   className="text-primary border-primary hover:bg-primary/5 hover:text-primary transition-colors duration-200 text-xs" // Smaller text
                  >
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" /> {/* Smaller icon */}
                      Live
                    </Link>
                  </Button>
               )}
               {project.githubLink && (
                 <Button
                   variant="outline"
                   size="sm"
                   asChild
                   className="text-primary border-primary hover:bg-primary/5 hover:text-primary transition-colors duration-200 text-xs" // Smaller text
                  >
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" /> {/* Smaller icon */}
                      Code
                    </Link>
                  </Button>
               )}
             </CardFooter>
           </Card>
        ))}
      </div>
       {/* Consider adding a "View More" link if not all projects fit */}
       {projects.length > 2 && (
        <div className="text-center mt-6">
            <Link href="#projects" className="text-sm text-primary-foreground/80 hover:underline">
                {/* This link won't work without scroll, maybe change to a modal later */}
                {/* View More Projects */}
            </Link>
        </div>
       )}
    </section>
  );
}
