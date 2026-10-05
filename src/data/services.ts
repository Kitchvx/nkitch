export type Service = {
  title: string;
  summary: string;
  slug: string;
};

export const services: Service[] = [
  {
    title: "Server Setup & Security",
    summary:
      "Spun up a new VPS? I'll lock it down with SSH keys, a firewall and brute-force protection, then get your site live with SSL.",
    slug: "server-setup-security",
  },
  {
    title: "Email Deliverability",
    summary:
      "Emails going to spam? I'll fix your SPF, DKIM and DMARC records and verify they pass.",
    slug: "email-deliver",
  },
  {
    title: "Domain, DNS & SSL Fault Finding",
    summary:
      "Site showing 'Not secure', or a domain that won't point where it should? I'll find the fault and fix it.",
    slug: "domain-fault-finding",
  },
];
