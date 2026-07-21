export type Status = "Published" | "Corrected" | "Forthcoming" | "Draft" | "Under Review" | "Withdrawn";
export type ResearchNote = {
  issue: number; slug: string; title: string; subtitle: string; abstract: string;
  status: Status; published: string; checked?: string; court?: string; decisionYear?: number;
  labels: string[]; topics: string[]; cases: string[]; citations: string[]; pdf?: string;
};

export const notes: ResearchNote[] = [
  { issue: 1, slug: "possession-without-title", title: "Possession Without Title", subtitle: "What the Supreme Court Actually Decided in Oluwi v Eniola and Nwosu v Otunola", abstract: "Can a claimant who fails to obtain a declaration of title nevertheless succeed in trespass? The answer lies in the distinction between ownership and possession.", status: "Published", published: "20 July 2026", checked: "20 July 2026", court: "Supreme Court of Nigeria", decisionYear: 1974, labels: ["Citation Check", "Ratio and Limit", "Drafting Use"], topics: ["Land & Property", "Evidence", "Civil Procedure"], cases: ["Oluwi v Eniola", "Nwosu v Otunola", "Echere v Ezirike"], citations: ["(1967) NMLR 339 at 340", "(1974) 4 SC 21", "(1974) 1 All NLR (Pt. 1) 533", "(2006) 12 NWLR (Pt. 994) 386"], pdf: "/downloads/magaji-law-research-note-001-possession-without-title.pdf" },
  { issue: 2, slug: "declaration-fails-trespass-survives", title: "When Declaration Fails but Trespass Survives", subtitle: "The independence of possessory relief from proof of absolute title", abstract: "A forthcoming examination of the evidential conditions under which trespass may survive a failed declaration claim.", status: "Forthcoming", published: "Forthcoming", labels: ["Ratio and Limit"], topics: ["Land & Property", "Civil Procedure"], cases: [], citations: [] },
  { issue: 3, slug: "identity-of-land-and-injunction", title: "Why Uncertainty About the Identity of Land Can Defeat an Injunction", subtitle: "Certainty, enforceability and the territorial limits of relief", abstract: "A forthcoming note on why proof of possession may still be insufficient for an enforceable injunction.", status: "Forthcoming", published: "Forthcoming", labels: ["Evidence Gap", "Procedural Consequences"], topics: ["Land & Property", "Evidence"], cases: [], citations: [] },
];

export const topics = [
  ["Land & Property", "Possession, title, trespass, boundaries and injunctive relief", "3"],
  ["Civil Procedure", "Jurisdiction, pleadings, process and remedies", "2"],
  ["Evidence", "Proof, admissibility, weight and evidential consequences", "2"],
  ["Appellate Practice", "Grounds, issues, findings and appellate intervention", "0"],
  ["Constitutional Law", "Rights, powers and institutional limits", "0"],
  ["Commercial Law", "Transactions, obligations and corporate disputes", "0"],
];

export const nav = [
  ["Research Notes", "/research-notes"], ["Research Index", "/research-index"],
  ["Citation Check", "/citation-check"], ["Doctrinal Trails", "/doctrinal-trails"],
  ["Topics", "/topics"], ["Methodology", "/methodology"],
];
