/**
 * GitHub Repo List Component
 * 
 * Demonstrates:
 * - Data fetching with custom hooks
 * - Loading and error states
 * - List rendering
 * - External API integration
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GithubRepo } from '@/types';
import clsx from 'clsx';

interface GithubRepoListProps {
  limit?: number;
  className?: string;
}

export const GithubRepoList: React.FC<GithubRepoListProps> = ({ limit = 6, className }) => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/github');
        setRepos(response.data.slice(0, limit));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repos');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [limit]);

  if (loading) {
    return (
      <div className={className}>
        <div className="animate-pulse space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-32 bg-gray-700 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={className}>
        <div className="p-4 bg-red-900 text-red-200 rounded-lg">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className={clsx('grid grid-cols-1 md:grid-cols-2 gap-4', className)}>
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-dark-secondary border border-gray-700 rounded-lg hover:border-accent hover:bg-gray-900 transition"
        >
          <h3 className="text-lg font-bold mb-1 text-accent">{repo.name}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{repo.description || 'No description'}</p>
          <div className="flex justify-between text-xs text-gray-500">
            <span>⭐ {repo.stars}</span>
            <span>🔀 {repo.forks}</span>
            {repo.language && <span>🔧 {repo.language}</span>}
          </div>
        </a>
      ))}
    </div>
  );
};
