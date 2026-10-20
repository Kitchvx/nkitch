import Link from "next/link";

export default function Card({
  title,
  summary,
  tags,
  href,
}: {
  title: string;
  summary: string;
  tags?: string[];
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-border p-6 hover:border-accent transition-colors h-full block focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      <article>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted mt-2">{summary}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs border border-border rounded px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
