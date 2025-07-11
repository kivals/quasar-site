import { SVGElementAttributes } from "@/lib/types";
import { forwardRef } from "react";

export const MenuIcon = forwardRef<SVGSVGElement, SVGElementAttributes>(
  function MenuIcon(props, ref) {
    return (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <path
          d="M3.5 12H21.5M3.5 6H21.5M3.5 18H15.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
