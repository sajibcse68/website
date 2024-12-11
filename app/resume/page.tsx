import React from 'react';
import { Roboto, Roboto_Condensed } from 'next/font/google';
import FullResume from '@/components/full-resume';
import PrintProvider from '@/components/contexts/PrintProvider';
import PDFResumeContainer from '@/components/pdf-resume-container';

// utils
import { cn } from '@/utils/common';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const robotoCondensed = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'],
});

export async function generateMetadata() {
  return {
    title: 'Resume | Sajib Khan',
    description: 'Sajib Khan - Frontend Developer',
  };
}

export default function ResumePage() {
  return (
    <div className="flex justify-center sm:px-8">
      <div className="flex w-full max-w-7xl lg:px-8">
        <div
          className={cn(
            'w-full bg-zinc-50/90 ring-1 ring-zinc-100 dark:bg-zinc-900/80 dark:ring-zinc-400/20',
            roboto.className
          )}
        >
          <PrintProvider>
            <div className="hidden">
              <PDFResumeContainer>
                <FullResume usage="pdf" />
              </PDFResumeContainer>
            </div>
            <FullResume usage="live" />
          </PrintProvider>
        </div>
      </div>
    </div>
  );
}
