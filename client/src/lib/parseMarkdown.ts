/**
 * parseMarkdown.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Parses raw Markdown files with YAML frontmatter (--- ... ---) and returns
 * structured NewsPost objects. No external dependencies — pure regex/string
 * operations so it works in the Vite browser bundle without Node polyfills.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  category: "Events" | "Achievements" | "Publications" | "Lab News";
  cover?: string;
  summary: string;
  body: string;
}

/**
 * Parse a single raw Markdown file string into a NewsPost.
 */
export function parseMarkdownPost(raw: string, slug: string): NewsPost {
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!fmMatch) {
    return { slug, title: slug, date: "1970-01-01", category: "Events", summary: "", body: raw };
  }

  const [, frontmatterStr, body] = fmMatch;

  const fm: Record<string, string> = {};
  for (const line of frontmatterStr.split(/\r?\n/)) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    fm[key] = value;
  }

  return {
    slug,
    title:    fm.title    ?? slug,
    date:     fm.date     ?? "1970-01-01",
    category: (fm.category as NewsPost["category"]) ?? "Events",
    cover:    fm.cover    || undefined,
    summary:  fm.summary  ?? "",
    body:     body.trim(),
  };
}

/**
 * Load all Markdown news posts using Vite's import.meta.glob, sorted newest first.
 */
export function loadAllNewsPosts(): NewsPost[] {
  const modules = import.meta.glob("../content/news/*.md", {
    as: "raw",
    eager: true,
  }) as Record<string, string>;

  const posts: NewsPost[] = Object.entries(modules).map(([filePath, raw]) => {
    const filename = filePath.split("/").pop() ?? filePath;
    const slug = filename.replace(/\.md$/, "");
    return parseMarkdownPost(raw, slug);
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
