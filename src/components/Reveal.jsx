"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={clsx("reveal", shown && "is-revealed", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
