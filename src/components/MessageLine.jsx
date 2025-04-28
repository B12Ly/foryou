import React, { useEffect, useState } from "react";

function MessageLine({ text, delay = 0, tag = "p", style = {} }) {
  const [reveal, setReveal] = useState(false);
  const Tag = tag;

  useEffect(() => {
    const timer = setTimeout(() => {
      setReveal(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Tag
      style={{
        overflow: "hidden",
        display: "inline-block",
        background: "linear-gradient(to right, #000 50%, transparent 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: reveal ? "left bottom" : "right bottom",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        transition: "background-position 2s ease",
        
        ...style,
      }}
    >
      {text}
    </Tag>
  );
}

export default MessageLine;
