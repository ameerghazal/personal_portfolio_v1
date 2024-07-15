"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { customStyle } from "@/data/highlighter";

const CodeBlock: React.FC = () => {
  const codeString = `
  export default AG = (name: string) => {
    return(
      <section className="flex justify-center items-center">
        <h1>Hello, my name is Ameer Ghazal.</h1>
        <span>I program ... or so I was thought.</span>
        <Image src="/headshot.svg" alt="cool guy!" />
        <Media />
        <CodeBlock language="tsx" />
      </section>
    );
  };
    
    `;

  return (
    <div>
      <SyntaxHighlighter
        language="tsx"
        style={customStyle}
        // customStyle={{
        //   background: "transparent",
        // }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
