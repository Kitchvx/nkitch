import NavLink from "@/components/NavLink";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-6 max-w-5xl mx-auto py-6 border-b border-border">
      <Link href="/" className="text-fg text-sm md:text-lg font-bold font-mono">
        Nathan Kitching
      </Link>
      <nav>
        <ul className="flex gap-6 text-sm md:text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
