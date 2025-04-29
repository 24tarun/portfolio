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
    <section id="projects" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-accent">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground pt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-start space-x-4 pt-4">
              {project.liveLink && (
                <Button variant="outline" size="sm" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubLink && (
                <Button variant="outline" size="sm" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
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
