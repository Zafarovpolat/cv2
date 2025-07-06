"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
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
  const [scrollbar, setScrollbar] = useState<ScrollbarType | null>(null);

  useEffect(() => {
    if (viewRef.current) {
      const scrollbarInstance = Scrollbar.init(viewRef.current, {
        damping: 0.07,
        delegateTo: document,
      });
      setScrollbar(scrollbarInstance);

      const resizeObserver = new ResizeObserver(() => {
        scrollbarInstance.update();
      });
      resizeObserver.observe(document.body);

      return () => {
        resizeObserver.disconnect();
        if (scrollbarInstance) {
          scrollbarInstance.destroy();
        }
        setScrollbar(null);
      };
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollbar }}>
      <div ref={viewRef} style={{ height: '100vh' }}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
