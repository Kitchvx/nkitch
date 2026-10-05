export type Service = {
  title: string;
  summary: string;
  slug: string;
  included?: string[];
  notIncluded?: string;
  FiverrURL?: string;
};

export const services: Service[] = [
  {
    title: "Server Setup & Security",
    summary:
      "Spun up a new VPS? I'll lock it down with SSH keys, a firewall and brute-force protection, then get your site live with SSL.",
    included: [
      "Locked-down SSH with key-only login",
      "UFW firewall and fail2ban",
      "Nginx with auto-renewing Let's Encrypt SSL",
    ],
    notIncluded:
      "I don't provide hosting, I won't debug application code or ongoing server management.",
    slug: "server-setup-security",
  },
  {
    title: "Email Deliverability",
    summary:
      "Emails going to spam? I'll fix your SPF, DKIM and DMARC records and verify they pass.",
    included: [
      "Audit of existing email setup",
      "SPF, DKIM and DMARC records",
      "Google Workspace or Microsoft 365 setup",
      "DMARC reporting & analysis",
      "Email deliverability testing",
    ],
    notIncluded:
      "Removing you from blacklists, or spam caused by email content.",
    slug: "email-deliver",
  },
  {
    title: "Domain, DNS & SSL Fixes",
    summary:
      "Site showing 'Not secure', or a domain that won't point where it should? I'll find the fault and fix it.",
    included: [
      "Domain registration and management",
      "DNS record updates and troubleshooting",
      "SSL certificate installation and configuration",
    ],
    notIncluded: "Website redesigns or code development",
    slug: "domain-fault-finding",
  },
];
