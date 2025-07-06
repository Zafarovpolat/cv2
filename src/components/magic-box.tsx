"use client";
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export default function MagicBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    boxRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    boxRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    boxRef.current.style.setProperty('--mouse-x-rel', `${x}`);
    boxRef.current.style.setProperty('--mouse-y-rel', `${y}`);
  };

  const handleMouseLeave = () => {
    if (!boxRef.current) return;
    boxRef.current.style.setProperty('--mouse-x-rel', `0.5`);
    boxRef.current.style.setProperty('--mouse-y-rel', `0.5`);
  };

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("magic-box", className)}
    >
      {children}
    </div>
  );
}
