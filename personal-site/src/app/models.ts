export interface Experience {
  company: string;
  title: string;
  start: string;
  end: string;
  imgReference: string;
  url: string;
  tags: string[];
  summary: string;
  experienceContent: string[];
}

export interface Link {
  description: string;
  link: string;
}

export interface Contact {
  description: string;
  link: string;
  imgRef: string;
}

export interface Quote {
  id: number;
  quote: string;
  author: string;
  numWords: number;
  numCharacters: number;
}

export interface Tag {
  name: string;
  color: string;
}

export interface ElementDimension {
  width: number;
  height: number; 
}
