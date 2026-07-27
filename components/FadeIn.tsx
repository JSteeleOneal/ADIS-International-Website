import { ReactNode } from "react";

export default function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <div
      className="animate-fade-in"
      style={{
        animation: `fadeIn 0.6s ease-out forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
}
