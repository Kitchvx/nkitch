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
            I offer a range of services to help individuals and small businesses
            set up and secure their online presence. From server configuration
            to domain management, I provide tailored solutions to meet your
            needs.
          </p>
          <p>
            Whether you&apos;re looking to establish a new website, enhance your
            security, or streamline your email communications, I can assist you
            every step of the way.
          </p>
        </div>
      </section>
    </div>
  );
}
