import { CSSProperties } from "react";

export const customStyle: { [key: string]: CSSProperties } = {
  'code[class*="language-"]': {
    color: "#d4d4d4",
    background: "transparent",
    fontFamily:
      "'Fira Code', 'Fira Mono', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
    fontSize: "1.1rem",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#d4d4d4",
    // background: "transparent",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
  },

  comment: {
    color: "#a89984",
  },
  prolog: {
    color: "#a89984",
  },
  cdata: {
    color: "#a89984",
  },
  delimiter: {
    color: "#fb4934",
  },
  boolean: {
    color: "#fb4934",
  },
  keyword: {
    color: "#9872A2",
  },
  selector: {
    color: "#fb4934",
  },
  important: {
    color: "yellow",
  },
  atrule: {
    color: "#fb4934",
  },

  operator: {
    color: "#9872A2",
  },

  punctuation: {
    color: "#616161",
  },

  tag: {
    color: "#6089B4",
  },
  "tag.punctuation": {
    color: "#6089B4",
  },

  "attr-name": {
    color: "#D0B344",
  },
  "attr-name.punctuation": {
    color: "#616161",
  },
  "attr-value": {
    color: "#9AA83A",
  },
  "attr-value.punctuation": {
    color: "#9AA83A",
  },

  function: {
    color: "#CE6700",
  },

  "class-name": {
    color: "#C7444A",
  },

  builtin: {
    color: "#CC555A",
  },
};
