"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Resources", href: "/blog" },
    { label: "Energy Calculator", href: "/energy-calculator" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-unithiumBlue">
          Unithium
        </Link>

        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-700 hover:text-unithiumGreen">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-unithiumGreen"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
