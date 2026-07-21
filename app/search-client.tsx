"use client";
import { useMemo, useState } from "react";
import { notes } from "./data";

export function ResearchSearch() {
  const [q, setQ] = useState(""); const [status, setStatus] = useState("All");
  const result = useMemo(() => notes.filter(n => {
    const haystack = [n.title,n.subtitle,n.abstract,...n.labels,...n.topics,...n.cases,...n.citations].join(" ").toLowerCase();
    return haystack.includes(q.toLowerCase()) && (status === "All" || n.status === status);
  }), [q,status]);
  return <div>
    <div className="searchbar"><label><span>Search cases, citations or issues</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="e.g. possession, Oluwi, 4 SC 21" /></label><label><span>Status</span><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option><option>Published</option><option>Forthcoming</option></select></label></div>
    <p className="result-count">{result.length} result{result.length===1?"":"s"}</p>
    <div className="note-list">{result.map(n=><a className="note-row" href={`/research-notes/${n.slug}`} key={n.issue}><div className="issue">{String(n.issue).padStart(3,"0")}</div><div><div className="tagline">{n.labels.join(" · ")}</div><h3>{n.title}</h3><p>{n.subtitle}</p></div><span className={`status ${n.status.toLowerCase()}`}>{n.status}</span></a>)}</div>
  </div>
}
