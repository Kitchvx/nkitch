export type CaseStudy = {
  title: string;
  summary: string;
  slug: string;
  date: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Email Authentication",
    summary:
      "Took nkitch.com from no DMARC record to p=reject, with a 2048-bit DKIM key and SPF hard fail, verified in Gmail and Microsoft 365.",
    slug: "email-authentication",
    date: "2026-10-08",
    tags: ["Email", "DNS", "SPF", "DKIM", "DMARC"],
  },
];
