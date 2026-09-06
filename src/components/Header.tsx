import { useEffect, useState } from "react";
import { navItems, profile } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = navItems.map((item) => item.id);
const DESKTOP_BREAKPOINT = 820;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // The desktop nav is always visible, so drop the mobile "open" state on resize.
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap header-inner">
        <a className="brand" href="#top" aria-label={`${profile.name} — top of page`}>
          <span className="brand-mark" aria-hidden="true">
            SJ
          </span>
          <span className="brand-text">{profile.name}</span>
        </a>

        <nav
          id="primary-nav"
          className={`nav${open ? " is-open" : ""}`}
          aria-label="Section navigation"
        >
          {navItems.map((item) => {
            const classes = [
              item.id === activeId ? "is-active" : "",
              "cta" in item && item.cta ? "nav-cta" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={classes || undefined}
                aria-current={item.id === activeId ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>
    </header>
  );
}
