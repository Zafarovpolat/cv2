"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from 'react';
import Scrollbar from 'smooth-scrollbar';
import type { Scrollbar as ScrollbarType } from 'smooth-scrollbar/scrollbar';

interface ScrollContextType {
  scrollbar: ScrollbarType | null;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollbar: null,
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<ScrollbarType | null>(null);

  useEffect(() => {
    if (viewRef.current) {
      const scrollbarInstance = Scrollbar.init(viewRef.current, {
        damping: 0.07,
        delegateTo: document,
      });
      scrollbarRef.current = scrollbarInstance;

      // This handles resize events
      const resizeObserver = new ResizeObserver(() => {
        if (viewRef.current) {
            scrollbarInstance.update();
        }
      });
      resizeObserver.observe(viewRef.current);

      return () => {
        resizeObserver.disconnect();
        if (scrollbarInstance) {
          scrollbarInstance.destroy();
        }
      };
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollbar: scrollbarRef.current }}>
      <div ref={viewRef} style={{ height: '100vh' }}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
