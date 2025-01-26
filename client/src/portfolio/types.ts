export type Project = {
  id: string;
  title: string;
  subtitle_objective: string;
  subtitle_date: string;
  body: string;
  techused: string[];
  url?: string;
  localUrl?: boolean;
};

export type Job = {
  company: string;
  date: string;
  location: string;
  title: string;
  body: string[];
};

export type Role = {};

export type ProjectBody = {
  title: string;
  sections?: ProjectParagraph[];
};

export type ProjectParagraph = {
  title?: string;
  body?: string;
  imageURL?: string;
  imageFirst?: boolean;
};
