import { AUTH_LEVELS } from "./enums";
import { ICD_Entity } from "./icd";

export type IcdEntityQueryResult = {
  id: string;
  title: string;
  score: number;
  descendants: IcdEntityQueryResult[];
};

export type UploadedImage = {
  image: File;
  url: string;
  case_id: string;
  image_id: string;
  modality?: string;
  location?: string;
  date_of_capture?: Date;
  magnification?: string;
};

export type Case_Data = {
  case_id: string;
  contributor_id: number;
  primary_dx?: string;
  dx_title?: string;
  age_months?: number;
  sex?: string;
  skin_type?: number;
  ethnicity?: string;
  lesion_type: number;
  lesion_configuration: number;
  lesion_shape: number;
  lesion_colour: number;
  publication_date?: Date;
  published: boolean;
  additional_comments?: string;
};

export type Image = {
  case_id: string;
  filename: string;
  url?: string;
  num_images?: number;
  version_number?: number;
  version_type?: string;
  entity_title: string;
  primary_dx?: string;
  parents?: ICD_Entity[];
  modality?: string;
  date_of_capture?: Date;
  magnification?: string;
  location?: string;
  sex: string;
  skin_type?: string;
  ethnicity?: string;
  publication_date: Date;
  published: boolean;
  age_months: number;
  lesion_type: number;
  lesion_configuration: number;
  lesion_shape: number;
  lesion_colour: number;
  additional_comments: string;
  attendant: string;
  user_auth_level?: AUTH_LEVELS;
  visible?: boolean;
  [key: string]: any | undefined;
};

export type ImageVersion = {
  url: string;
  version_number: number;
  version_type: string;
  filepath: string;
  visible: boolean;
  index: number;
  case_id: string;
  image_id: string;

  modality?: string;
  date_of_capture?: string;
  magnification?: string;
  location?: string;
};

export type UploadedVersion = {
  image: File;
  url: string;
  image_id: string;
  index: number;
};

export type VersionFile = {
  url: string;
  version_number: number;
  version_type: string;
  filepath: string;
  visible: boolean;
  index: number;

  view_id: string;
  measurement_id: string;
};

export type NewFile = {
  image: File;
  url: string;
  view_id: string;
};
