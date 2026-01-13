"use client";

import { useEffect } from "react";

export default function TallyEmbed() {
  useEffect(() => {
    const loadTally = () => {
      if (typeof window === "undefined") return;

      if (!window.Tally) {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          window.Tally?.loadEmbeds();
        };
        document.body.appendChild(script);
      } else {
        window.Tally.loadEmbeds();
      }
    };

    loadTally();
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/LZKplO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="400"
      frameBorder="0"
      title="Contact form"
    />
  );
}
