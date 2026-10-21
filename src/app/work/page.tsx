import Card from "@/components/Card";
import { caseStudies } from "@/data/work";

export const metadata = {
  title: "Work",
  description: "Overview of my work and projects.",
};

export default function WorkPage() {
  return (
    <div>
      <section className="py-12 md:py-24">
        <span className="font-mono text-sm text-accent">
          guest@nkitch:~$ cat work.txt
        </span>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl mt-4 max-w-2xl">
          Case Studies
        </h1>
        <p className="text-muted max-w-2xl mt-4">
          Write-ups of real infrastructure work: what was wrong, what I changed,
          and how I verified it, with the actual records included. Some start on
          my own systems, because I&#39;d rather show the whole process than
          describe it.
        </p>
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {caseStudies.map((CaseStudy) => (
            <Card
              key={CaseStudy.slug}
              title={CaseStudy.title}
              summary={CaseStudy.summary}
              tags={CaseStudy.tags}
              href={`/work/${CaseStudy.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
