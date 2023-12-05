export interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    tags: string[];
    community: string;
    website: string;
    details: {
      latitude: number;
      longitude: number;
      contact: string;
      images: string[];
    };
  }