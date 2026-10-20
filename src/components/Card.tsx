import Link from "next/link";

export default function Card({
  title,
  summary,
  href,
}: {
  title: string;
  summary: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-border p-6 hover:border-accent transition-colors h-full block focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      <article>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted">{summary}</p>
      </article>
    </Link>
  );
}
