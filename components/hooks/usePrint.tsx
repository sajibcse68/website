import { useContext } from 'react';
import { PrintContext } from '@/components/contexts/PrintProvider';

const usePrint = () => {
  const { componentRef, handlePrint } = useContext(PrintContext);

  if (!componentRef) {
    throw new Error('usePrint must be used within a PrintProvider');
  }

  if (!handlePrint) {
    throw new Error('usePrint must be used within a PrintProvider');
  }

  return { componentRef, handlePrint };
};

export default usePrint;
