import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="footer-meta">Hope you liked my profile. Wish to meet you soon.</p>
      </div>
    </footer>
  );
}
