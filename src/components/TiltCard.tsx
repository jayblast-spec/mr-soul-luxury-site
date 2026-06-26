import { type ReactNode } from "react";

export function TiltCard({ children }: { children: ReactNode }) {
  return (
    <div className="tilt-parent h-full">
      <div className="tilt-child h-full">{children}</div>
    </div>
  );
}
