import Link from "next/link";

export default function LinkHub() {
  const links: { label: string; href: string }[] = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/projects" },
    { label: "Projects", href: "/projects" },
    { label: "Energy Calculator", href: "/energy-calculator" },
    { label: "Resources", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-unithiumBlue">
          Explore Unithium
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-unithiumGreen"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
