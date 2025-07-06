"use client";

import { useEffect, useRef, type ReactNode } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const viewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewRef.current) {
      const scrollbar: any = Scrollbar.init(viewRef.current, {
        damping: 0.07,
        delegateTo: document,
      });

      return () => {
        if (scrollbar) {
          scrollbar.destroy();
        }
      };
    }
  }, []);

  return (
    <div ref={viewRef} style={{ height: '100vh' }}>
      {children}
    </div>
  );
};
export default SmoothScroll;
