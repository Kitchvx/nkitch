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
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card
              key={study.slug}
              title={study.title}
              summary={study.summary}
              href={`/work/${study.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
