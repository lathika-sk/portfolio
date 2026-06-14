/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  delay?: number;
  period?: number;
}

export default function Typewriter({ texts, delay = 100, period = 2000 }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (texts.length === 0) return;

    if (subIndex === texts[index].length + 1 && !isDeleting) {
      const timer = setTimeout(() => setIsDeleting(true), period);
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(texts[index].substring(0, isDeleting ? subIndex - 1 : subIndex + 1));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, index, texts, delay, period]);

  return (
    <span className="text-primary font-bold border-r-2 border-primary/80 pr-1 animate-pulse" id="typewriter-text">
      {text}
    </span>
  );
}
