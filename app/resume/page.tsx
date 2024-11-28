import React from 'react';
import FullResume from '@/components/full-resume';
import PrintProvider from '@/components/contexts/PrintProvider';
import PDFResumeContainer from '@/components/pdf-resume-container';

export default function ResumePage() {
  return (
    <div className="mt-12">
      <PrintProvider>
        <div className="hidden">
          <PDFResumeContainer>
            <FullResume usage="pdf" />
          </PDFResumeContainer>
        </div>
        <FullResume usage="live" />
      </PrintProvider>
    </div>
  );
}
