export const metadata = {
  title: "Services",
  description: "Overview of the services I offer.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="py-12 md:py-24">
        <span className="font-mono text-sm text-accent">
          guest@nkitch:~$ cat services.txt
        </span>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl mt-4 max-w-2xl">
          Services
        </h1>
        <div className="text-muted max-w-2xl space-y-4 mt-4">
          <p>
            I fix the setup problems that cost small businesses time and trust:
            servers left exposed, emails landing in spam, and sites showing
            &#34;Not secure&#34;. Each job has a clear scope, and you&#39;ll get
            a short report explaining what was wrong and what I changed.
          </p>
          <p>
            All orders go through Fiverr, so your payment is protected and
            everything stays in one place. I&#39;ll ask for delegated or
            temporary access rather than your main passwords, and I remove my
            access / advise on removal as soon as the job is done.
          </p>
        </div>
      </section>
    </div>
  );
}
