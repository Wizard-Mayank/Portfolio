import React from "react";
import { Link } from "react-router";

const RedirectButton3D = () => {
  return (
    /* Wrapper div */
    <div className="flex items-center justify-center bg-black">
      <button
        type="button"
        className="group relative min-w-[10em] cursor-pointer bg-transparent p-0 px-2 pb-3 font-inherit appearance-none border-none box-border"
      >
        {/* BUTTON TOP (The part that moves) */}
        <div className="relative z-10 flex items-center justify-center px-4 py-2 text-center text-white transition-transform duration-200 ease-in-out transform select-none group-active:translate-y-1.5">
          <Link
            to="/projects"
            className="relative z-10 drop-shadow-[0_-1px_rgba(0,0,0,0.25)]"
          >
            My Work
          </Link>

          {/* THE BACKGROUND (Pseudo-element replacement) */}
          <div className="absolute inset-0 z-[-1] rounded bg-linear-to-b from-[#000000] to-[#000000] shadow-[inset_0_0_0px_1px_rgba(255,255,255,0.2),0_1px_2px_1px_rgba(255,255,255,0.2)] transition-all duration-200 group-active:rounded-md group-active:px-0.5"></div>
        </div>

        {/* BUTTON BOTTOM (The depth/shading) */}
        <div className="absolute bottom-1 left-1 z-[-1] h-[calc(100%-10px)] w-[calc(100%-8px)] rounded-[16px_16px_8px_8px/8px_8px_8px_8px] bg-black pt-1.5 shadow-[0px_2px_3px_0px_black,inset_0_-1px_3px_3px_black] transition-all duration-200 group-active:rounded-[10px_10px_8px_8px/8px] group-active:pt-0">
          {/* Gradients are complex in utility classes, so we use an inline style for the radial-gradients */}
          <div
            className="absolute inset-0 rounded-inherit opacity-25"
            style={{
              backgroundImage: `
                radial-gradient(4px 8px at 4px calc(100% - 8px), black, transparent),
                radial-gradient(4px 8px at calc(100% - 4px) calc(100% - 8px), black, transparent),
                radial-gradient(16px at -4px 0, black, transparent),
                radial-gradient(16px at calc(100% + 4px) 0, black, transparent)
              `,
            }}
          />
        </div>

        {/* BUTTON BASE (The black shadow foundation) */}
        <div className="absolute top-1 left-0 z-[-2] h-[calc(100%-4px)] w-full rounded-xl bg-black shadow-[0_1px_1px_0_rgba(0,0,0,0),inset_0_2px_2px_rgba(0,0,0,0)]"></div>
      </button>
    </div>
  );
};

export default RedirectButton3D;
