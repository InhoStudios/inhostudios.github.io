import { Bullet } from "./projects/bullet";
import { ILDSGallery } from "./projects/ildsgallery";
import { ProjectBody } from "./types";

export const ProjectPages: { [key: string]: ProjectBody } = {
  gallery: ILDSGallery,
  bullet: Bullet,
};
