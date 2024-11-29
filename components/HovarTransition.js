import React from "react";
import Link from "next/link";

const HoverTransition = ({ href, className, as, children }) => {
  const Element = as || (href ? Link : "div"); // Use Link if href is provided, otherwise default to 'div'
  const linkProps = Element === Link ? { href } : {}; // Provide href only if Element is Link

  return (
    <Element
      {...linkProps}
      className={`relative group overflow-hidden inline-block ${className}`}
    >
      <div className="relative transition-transform group-hover:-translate-y-full">
        {children}
      </div>
      <div className="absolute transition-transform w-full group-hover:-translate-y-full">
        {children}
      </div>
    </Element>
  );
};

export default HoverTransition;
