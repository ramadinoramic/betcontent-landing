"use client";
import { useScrollAnimate } from "@/lib/useScrollAnimate";

export default function ScrollSection({ id, children, className = "" }) {
  const { ref, visible } = useScrollAnimate();

  return (
    <section id={id} ref={ref} className={className}>
      <div className={`scroll-animate ${visible ? "visible" : ""}`}>
        {children}
      </div>
    </section>
  );
}
