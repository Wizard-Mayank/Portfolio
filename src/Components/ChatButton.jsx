import React from "react";
import { Link } from "react-router";

const ChatButton = () => {
  return (
    <button className="group relative z-10 overflow-hidden rounded-[15px] bg-[#e8e8e8] px-6.25 py-2.75 text-[17px] font-[1000] text-[#212121] shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] transition-all duration-250">
      <Link to="/contact" className="relative z-10">
        Let's talk!
      </Link>

      <div className="absolute inset-0 z-[-1] w-0 bg-[oklch(0.81_0.13_221.95)] transition-all duration-250 group-hover:w-full" />

      <style jsx>{`
        button:hover {
          color: #e8e8e8;
        }
      `}</style>
    </button>
  );
};

export default ChatButton;
