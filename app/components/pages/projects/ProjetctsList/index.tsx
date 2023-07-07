import { Link } from "@/app/components/Link";
import { Project } from "@/app/types/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project.title}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  );
};
