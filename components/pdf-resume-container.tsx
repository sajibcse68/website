"use client";

import usePrint from "@/components/hooks/usePrint";

export default function PDFResumeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { componentRef } = usePrint();

  return <div ref={componentRef}>{children}</div>;
}
