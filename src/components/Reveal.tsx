import { createElement, useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  /** Stagger within a group, in ms. */
  delay?: number;
  children?: ReactNode;
} & Record<string, unknown>;

/**
 * Fades content in the first time it scrolls into view.
 * Honours prefers-reduced-motion by showing everything immediately.
 */
export function Reveal({ as = "div", className = "", delay = 0, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: ["reveal", shown ? "is-visible" : "", className].filter(Boolean).join(" "),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
