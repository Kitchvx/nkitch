import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="py-1 md:py-24">
        <span className="font-mono text-sm text-accent">
          guest@nkitch:/var/www/html$
        </span>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl mt-4">
          Systems, security, and the occasional website.
        </h1>
        <p className="text-muted max-w-2xl mt-4">
          I&apos;m a UK-based engineer working across Linux, networking,
          security and the web. I set up and secure servers, domains and
          professional emails for individuals and small businesses.
          {/* (remove this comment when the blog has content) I write up what I learn along the
        way.*/}
        </p>
        <div className="mt-6 flex gap-2 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
          <Link
            href="/services"
            className="bg-accent rounded-md px-4 py-2 font-medium text-bg hover:bg-accent/70"
          >
            My Services
          </Link>
          <Link
            href="/work"
            className="border border-border rounded-md px-4 py-2 hover:border-accent"
          >
            My Work
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl mb-8">
          What I Do
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
