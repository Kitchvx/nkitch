export type CaseStudy = {
  title: string;
  summary: string;
  slug: string;
  date: string;
  tags: string[];
};

export const casestudy: CaseStudy[] = [
  {
    title: "Email Authentication",
    summary:
      "Taking nkitch.com from no DMARC policy to enforcement: SPF, DKIM and DMARC on Zoho Mail.",
    slug: "email-authentication",
    date: "2026-10-08",
    tags: ["Email", "DNS", "SPF", "DKIM", "DMARC"],
  },
];
