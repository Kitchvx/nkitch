import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <article className="prose dark:prose-invert py-12">{children}</article>
    ),
  };
}
