"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-30 hidden size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E]/10 blur-3xl lg:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
