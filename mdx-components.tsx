import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mt-14 mb-5"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="font-serif text-xl font-semibold tracking-tight mt-10 mb-4"
        {...props}
      />
    ),
    p: (props) => (
      <p className="text-text-muted leading-relaxed mb-6" {...props} />
    ),
    strong: (props) => <strong className="text-text font-semibold" {...props} />,
    em: (props) => <em className="italic" {...props} />,
    a: (props) => (
      <a
        className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-colors"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="list-disc pl-5 text-text-muted leading-relaxed mb-6 space-y-2"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal pl-5 text-text-muted leading-relaxed mb-6 space-y-2"
        {...props}
      />
    ),
    li: (props) => <li {...props} />,
    hr: () => <hr className="border-border my-14" />,
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-primary/40 pl-5 py-1 my-8 text-sm text-text-muted italic"
        {...props}
      />
    ),
    ...components,
  };
}
