export const metadata = {
  title: 'Avaantage Apps - Portfolio',
  description: 'Portfolio of 120+ apps across iOS, Android, macOS, and visionOS platforms',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', backgroundColor: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
          <a href="/" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            Avaantage Apps
          </a>
        </nav>
        {children}
        <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f3f4f6', marginTop: '4rem' }}>
          <p>&copy; 2026 Avaantage Digital. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
