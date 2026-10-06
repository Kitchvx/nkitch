export type Service = {
  title: string;
  summary: string;
  slug: string;
  included: string[];
  notIncluded: string;
  fiverrUrl?: string; // optional for now
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
      "Hosting, debugging application code, or ongoing server management.",
    slug: "server-setup-security",
  },
  {
    title: "Email Deliverability",
    summary:
      "Emails going to spam? I'll fix your SPF, DKIM and DMARC records and verify they pass.",
    included: [
      "Audit of existing email setup",
      "SPF, DKIM and DMARC records",
      "DKIM signing enabled in Google Workspace or Microsoft 365",
      "A plan for safely tightening DMARC to quarantine or reject",
      "Email deliverability testing",
    ],
    notIncluded:
      "Removing you from blacklists, or spam caused by email content.",
    slug: "email-deliverability",
  },
  {
    title: "Domain, DNS & SSL Fixes",
    summary:
      "Site showing 'Not secure', or a domain that won't point where it should? I'll find the fault and fix it.",
    included: [
      "DNS record updates and troubleshooting",
      "SSL certificate installation and configuration",
      "Pointing domains to the correct server or service",
      "HTTPS and www redirection",
      "Mixed content warnings fixes",
      "Cloudflare setup",
    ],
    notIncluded: "Website redesigns or code development.",
    slug: "domain-fault-finding",
  },
];
