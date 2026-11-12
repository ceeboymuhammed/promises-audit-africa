
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Awards", href: "/awards" },
  { label: "Documentary", href: "/documentary" },
  { label: "Promises Audit", href: "/promises" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          href="/"
          className="site-brand"
          aria-label="Clint Multicom Services home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.jpg"
            alt="Clint Multicom Services logo"
            width={48}
            height={48}
            className="site-brand-logo"
            priority
          />

          <span className="site-brand-text">
            <strong>CLINT MULTICOM</strong>
            <small>MEDIA & INVESTIGATIONS</small>
          </span>
        </Link>

        <button
          type="button"
          className="site-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "CLOSE" : "MENU"}</span>

          <span className="site-menu-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <nav
          className={`site-nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/submit"
            className="site-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Submit a Promise <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
