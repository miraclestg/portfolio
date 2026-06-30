// Projects data - migrated from data/projects.json
export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'ai' | 'web' | 'extension' | 'system' | 'desktop' | 'mobile';
    technologies: string[];
    github?: string;
    demo?: string;
    image: string;
    featured: boolean;
    highlights?: string[];
}

export const projects: Project[] = [
    ];

// Limit to 6 featured projects on homepage
export const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
export const allProjects = projects;
