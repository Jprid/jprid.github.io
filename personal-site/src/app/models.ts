export interface Experience {
  company: string;
  title: string;
  start: string;
  end: string;
  img_reference: string;
  url: string;
  tags: string[];
  summary: string;
  experience_content: string[];
}

export interface Link {
  description: string;
  link: string;
}

export interface Contact {
  description: string;
  link: string;
  img_ref: string;
}

export interface Quote {
  id: number;
  quote: string;
  author: string;
  numWords: number;
  numCharacters: number;
  citation?: string;
  tags?: string[];
  cellsTakenUp?: number;
  class?: string;
}

export interface Tag {
  name: string;
  color: string;
}

export interface ElementDimension {
  width: number;
  height: number;
}

export interface ContactInfo {
  first_name: string;
  middle_name: string;
  last_name: string;
  contact: Contact[];
  phone_number: string;
}

export interface PersonalInfo {
  contact_info: ContactInfo;
  experience: Experience[];
}

export enum QueryType {
  AUTHOR='author',
  TEXT='text',
  TAG='tag'
}

export interface IQueryParam {
  type: QueryType;
  param: string;
}

export class QueryParam implements IQueryParam {
  constructor(public type: QueryType, public param: string) {}
  toString(): string {
    return JSON.stringify(this);
  }
}
