export interface Project {
  _id?: string;
  title: string;
  description: string;
  longDescription?: string;
  link: string;
  github: string;
  image?: string;
  tags: string[];
  featured: boolean;
  live?: string;
  startDate: Date;
  endDate?: Date;
  metrics?: {
    users?: number;
    performance?: string;
    downloads?: number;
  };
}

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  views: number;
  likes: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Visitor {
  _id?: string;
  ip: string;
  userAgent: string;
  page: string;
  timestamp: Date;
  referer?: string;
}

export interface Contact {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt?: Date;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updated_at: string;
}

export interface Skill {
  category: string;
  items: string[];
}
