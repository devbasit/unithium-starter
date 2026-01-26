import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export const metadata = {
  title: 'Unithium Energy Systems LTD',
  description: 'Engineering reliable and sustainable energy systems.',
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: 'Unithium Energy Systems LTD',
    description: 'Engineering reliable and sustainable energy systems.',
    images: [
      {
        url: `${siteUrl}/unithium-logo-wt-rc.png`,
        width: 1200,
        height: 630,
        alt: "Unithium Energy Systems",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unithium Energy Systems LTD',
    description: 'Engineering reliable and sustainable energy systems.',
    images: [`${siteUrl}/unithium-logo-wt-rc.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}