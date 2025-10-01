import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Vaibhav Gupta - Full-Stack Developer',
  description: 'Innovative full-stack developer specializing in modern web applications and cutting-edge solutions.',
  keywords: ['Vaibhav Gupta', 'Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Web Development'],
  authors: [{ name: 'Vaibhav Gupta' }],
  creator: 'Vaibhav Gupta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaibhav.dev',
    title: 'Vaibhav Gupta - Full-Stack Developer',
    description: 'Innovative full-stack developer specializing in modern web applications.',
    siteName: 'Vaibhav Gupta Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Gupta - Full-Stack Developer',
    description: 'Innovative full-stack developer specializing in modern web applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-black text-white`}>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}