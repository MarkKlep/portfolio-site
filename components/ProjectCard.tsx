/**
 * Project Card Component
 * 
 * Demonstrates:
 * - Functional component with TypeScript
 * - Props interface
 * - Tailwind CSS styling
 * - Responsive design
 */

import React from 'react';
import { Project } from '@/types';
import clsx from 'clsx';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'p-6 rounded-lg border transition transform hover:scale-105 hover:-translate-y-1',
        featured ? 'bg-gradient-accent text-dark border-accent' : 'bg-dark-secondary border-gray-700 hover:border-accent'
      )}
    >
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className={clsx('mb-4 line-clamp-2', featured ? 'text-dark-secondary' : 'text-gray-400')}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className={clsx(
              'text-xs px-2 py-1 rounded',
              featured ? 'bg-dark text-accent' : 'bg-gray-700 text-gray-300'
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'text-sm font-medium hover:opacity-80',
              featured ? 'text-dark' : 'text-accent'
            )}
          >
            Demo →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'text-sm font-medium hover:opacity-80',
              featured ? 'text-dark' : 'text-accent'
            )}
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
};
