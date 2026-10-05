"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={isActive ? "text-accent" : "text-muted hover:text-fg"}
      href={href}
    >
      {children}
    </Link>
  );
}
