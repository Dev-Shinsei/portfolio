import type { RichTextContent } from "@graphcms/rich-text-types";
import { KnownTech, Project } from "./projects";
import { WorkExperience } from "./work-experience";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  logoPicture: {
    url: string;
  };
  socials: Social[];
  knownTechs: KnownTech[];
  highlightProjects: Project[];
};

export type ProjectsPageData = {
  projects: Project[];
};

export type HomePageData = {
  page: HomePageInfo;
  workExperiences: WorkExperience[];
};
