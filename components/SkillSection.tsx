/**
 * Skill Section Component
 * 
 * Demonstrates:
 * - Component composition
 * - Props with defaults
 * - Array mapping
 * - Conditional rendering
 */

import React from 'react';
import { Skill } from '@/types';
import clsx from 'clsx';

interface SkillSectionProps {
  skills?: Skill[];
  className?: string;
}

const defaultSkills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web Performance'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'System Design'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'AWS', 'Linux'],
  },
];

export const SkillSection: React.FC<SkillSectionProps> = ({ skills = defaultSkills, className }) => {
  return (
    <div className={clsx('grid grid-cols-1 md:grid-cols-3 gap-8', className)}>
      {skills.map((skill) => (
        <div key={skill.category} className="p-6 bg-dark-secondary rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-accent mb-4">{skill.category}</h3>
          <ul className="space-y-2">
            {skill.items.map((item) => (
              <li key={item} className="text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
