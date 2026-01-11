'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface LatexContentProps {
  content: string[];
}

export default function LatexContent({ content }: LatexContentProps) {
  const parseAndRender = (text: string) => {
    // Split by block math first ($$...$$)
    const blockParts = text.split(/(\$\$[^$]+\$\$)/);
    
    return blockParts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        // Block math
        const math = part.slice(2, -2);
        return <BlockMath key={index}>{math}</BlockMath>;
      }
      
      // Now handle inline math ($...$)
      const inlineParts = part.split(/(\$[^$]+\$)/);
      return (
        <span key={index}>
          {inlineParts.map((subPart, subIndex) => {
            if (subPart.startsWith('$') && subPart.endsWith('$') && subPart.length > 1) {
              // Inline math
              const math = subPart.slice(1, -1);
              return <InlineMath key={subIndex}>{math}</InlineMath>;
            }
            return <span key={subIndex}>{subPart}</span>;
          })}
        </span>
      );
    });
  };

  return (
    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
      {content.map((paragraph, index) => (
        <p key={index} className="block">
          {parseAndRender(paragraph)}
        </p>
      ))}
    </div>
  );
}
