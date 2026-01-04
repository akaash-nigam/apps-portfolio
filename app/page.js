'use client';

import { useState, useMemo } from 'react';
import appsData from '../app-data.json';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  // Platform counts
  const platformCounts = useMemo(() => {
    const counts = appsData.reduce((acc, app) => {
      acc[app.platform] = (acc[app.platform] || 0) + 1;
      return acc;
    }, {});
    return counts;
  }, []);

  // Filtered apps
  const filteredApps = useMemo(() => {
    return appsData.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlatform = selectedPlatform === 'all' || app.platform === selectedPlatform;
      return matchesSearch && matchesPlatform;
    });
  }, [searchTerm, selectedPlatform]);

  const platformColors = {
    ios: '#007AFF',
    android: '#3DDC84',
    macos: '#000000',
    visionos: '#8B5CF6'
  };

  const platformLabels = {
    ios: 'iOS',
    android: 'Android',
    macos: 'macOS',
    visionos: 'visionOS'
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
      {/* Header */}
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a1a1a' }}>
          Avaantage Apps Portfolio
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
          {appsData.length} apps across iOS, Android, macOS, and visionOS platforms
        </p>

        {/* Platform Stats */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {Object.entries(platformCounts).map(([platform, count]) => (
            <div
              key={platform}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: platformColors[platform],
                color: platform === 'macos' ? '#fff' : '#fff',
                borderRadius: '9999px',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
            >
              {platformLabels[platform]}: {count}
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '0.75rem 1.5rem',
              border: '2px solid #e5e7eb',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              minWidth: '300px',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            style={{
              padding: '0.75rem 1.5rem',
              border: '2px solid #e5e7eb',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              backgroundColor: '#fff',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="all">All Platforms</option>
            <option value="ios">iOS ({platformCounts.ios})</option>
            <option value="android">Android ({platformCounts.android})</option>
            <option value="macos">macOS ({platformCounts.macos})</option>
            <option value="visionos">visionOS ({platformCounts.visionos})</option>
          </select>
        </div>

        {/* Results count */}
        <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.875rem' }}>
          Showing {filteredApps.length} of {appsData.length} apps
        </p>
      </header>

      {/* Apps Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredApps.map((app) => (
          <a
            key={app.url}
            href={app.url}
            style={{
              display: 'block',
              padding: '1.5rem',
              backgroundColor: '#fff',
              border: '2px solid #e5e7eb',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = platformColors[app.platform];
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ marginBottom: '0.75rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: platformColors[app.platform],
                  color: '#fff',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}
              >
                {platformLabels[app.platform]}
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1a1a1a' }}>
              {app.name}
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.5' }}>
              {app.description}
            </p>
            <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#999' }}>
              apps.avaantage.digital{app.url}
            </div>
          </a>
        ))}
      </div>

      {/* Empty state */}
      {filteredApps.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <p style={{ fontSize: '1.25rem', color: '#666' }}>
            No apps found matching "{searchTerm}"
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedPlatform('all');
            }}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer */}
      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>
          Avaantage Apps Portfolio &bull; Powered by Next.js & Cloud Run
        </p>
        <p style={{ color: '#999', fontSize: '0.75rem', marginTop: '0.5rem' }}>
          All apps are hosted on GitHub Pages and proxied through this subdomain
        </p>
      </footer>
    </div>
  );
}
