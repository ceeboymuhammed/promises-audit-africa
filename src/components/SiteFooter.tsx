
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link href="/" className="site-footer-logo">
            CLINT MULTICOM SERVICES
          </Link>

          <p>
            We document promises, investigate delivery and celebrate
            those who keep their word.
          </p>

          <span className="site-footer-tagline">
            WE TRACK. WE VERIFY. WE CELEBRATE.
          </span>
        </div>

        <div className="site-footer-column">
          <h3>Explore</h3>
          <Link href="/about">About us</Link>
          <Link href="/Documentaries">Documentaries</Link>
          <Link href="/watch">Watch</Link>
          <Link href="/promises">Promises Audit Africa</Link>
          <Link href="/submit">Submit a Promise</Link>
        </div>

        <div className="site-footer-column">
          <h3>Get in touch</h3>
          <a href="tel:+2348069666634">+234 806 966 6634</a>
          <a href="https://wa.me/2348069666634" target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>
          <a href="mailto:hello@clintmulticomservices.com">
            hello@clintmulticomservices.com
          </a>
          <span className="site-footer-social">
            Social media: @clintmuticom
          </span>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 Clint Multicom Services. All rights reserved.</p>
        <p>Independent media. Evidence-led storytelling.</p>
      </div>
    </footer>
  );
}
