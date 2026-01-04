'use client';

export default function HomePage() {
  const apps = [
    {
      name: 'CreatorSuite',
      platform: 'macOS',
      url: '/creatorsuite',
      description: 'Professional content creation suite for macOS',
    },
    // We'll add more apps here as we scale
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Avaantage Apps Portfolio
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '3rem' }}>
        Explore our collection of 120+ apps across iOS, Android, macOS, and visionOS platforms
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {apps.map((app) => (
          <a
            key={app.url}
            href={app.url}
            style={{
              display: 'block',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ fontSize: '0.875rem', color: '#6366f1', fontWeight: '600', marginBottom: '0.5rem' }}>
              {app.platform}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {app.name}
            </h3>
            <p style={{ color: '#6b7280' }}>{app.description}</p>
          </a>
        ))}
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Test the Routing
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Click on CreatorSuite above to test the routing. The URL will be <code>apps.avaantage.digital/creatorsuite</code>
          but the content will be proxied from GitHub Pages.
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          GitHub Pages URL: https://akaash-nigam.github.io/mac_CreatorSuite/
        </p>
      </div>
    </div>
  );
}
