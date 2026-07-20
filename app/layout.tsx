import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nguyễn Thị Khánh Ly | Portfolio Game',
  description: 'An interactive pixel-art farming game portfolio showcasing my journey as an International Economics student.',
  openGraph: {
    title: 'Nguyễn Thị Khánh Ly | Portfolio Game',
    description: 'Explore my journey through an interactive pixel-art farming world.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-sky-bright overflow-x-auto overflow-y-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}