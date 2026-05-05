import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypeWriterText() {
  const fullText = "Experience liftoff with the next-gen agent platform";

  const [text, setText] = useState("");
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    const typingSpeed = isReverse ? 35 : 65;
    const pauseTime = 1000;

    const timeout = setTimeout(() => {
      if (!isReverse) {
        setText(fullText.slice(0, text.length + 1));

        if (text.length === fullText.length) {
          setTimeout(() => setIsReverse(true), pauseTime);
        }
      } else {
        setText(fullText.slice(0, text.length - 1));

        if (text.length === 0) {
          setIsReverse(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isReverse]);

  return (
    <h1 className="flex items-center text-4xl font-bold md:text-6xl">
      <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        {text}
      </span>

      <motion.span
        animate={{
          opacity: [1, 0, 1],
          scaleY: [1, 0.85, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ml-2 inline-block h-10 w-[3px] rounded-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 md:h-14"
      />
    </h1>
  );
}