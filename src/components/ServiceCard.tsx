import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-lg border border-border p-6 hover:border-accent transition-colors h-full">
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="text-muted">{service.summary}</p>
    </article>
  );
}
