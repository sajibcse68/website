import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import ThemeProvider from '@/components/theme/ThemeProvider';
import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer';

// utils
import { getSiteMetaData } from '@/utils/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = getSiteMetaData({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="m-0 h-full p-0 antialiased"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <div className="flex h-full flex-col bg-white transition dark:bg-gray-900 px-6 sm:px-6">
            <Navbar />

            <div className="relative text-zinc-800 dark:text-zinc-200">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>

      {/* google analytics */}
      <GoogleAnalytics gaId="G-KKZM2V2M6V" />

      {/* vercel analytics */}
      <Analytics />
    </html>
  );
}
