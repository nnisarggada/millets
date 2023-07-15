import React, { useEffect, useRef } from "react";

const TypeformWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/embed.js";
    script.async = true;

    script.onload = () => {
      if (containerRef.current) {
        window.typeformEmbed.makeWidget(
          containerRef.current,
          "https://form.typeform.com/to/lugb8OJ4",
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="form"
      className="absolute hidden left-0 top-20 z-20 bg-cover w-full h-screen flex-col gap-6 bg-primary text-accent text-lg font-medium p-4"
    >
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </section>
  );
};

export default TypeformWidget;
