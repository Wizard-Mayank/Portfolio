// import React from "react";
// import ChatButton from "./ChatButton.jsx";

// function ProfileCard() {
//   return (
//     <div className="h-screen w-[40vw] flex flex-col items-center justify-center">
//       <div className="flex flex-col items-center justify-center rounded-4xl w-[65%] h-[88%] bg-[oklch(0.18_0.02_220.86)]">
//         <img
//           className="w-60 rounded-2xl ring-1 ring-[oklch(0.81_0.13_221.95)]"
//           src="Mayank_Portfolio_Image.png"
//           alt="Mayank's pic"
//         />
//         <h2 className=" text-white font-bold mt-5 font-['IM_Fell_French_Canon_SC',serif] text-4xl">
//           Mayank Pandey
//         </h2>
//         <h3 className="text-2xl text-white">
//           Full Stack Developer | AIML Engineer
//         </h3>
//         <h3 className="text-2xl text-white">Uttar Pradesh, India</h3>
//         <div className="flex justify-between w-32 mt-2 mb-10">
//           <a
//             href="https://www.linkedin.com/in/pandeymayank369"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 transition-colors duration-300 hover:bg-[oklch(0.81_0.13_221.95)] rounded-md"
//           >
//             <img className="w-7" src="linkedin.png" alt="linkedin logo" />
//           </a>

//           <a
//             href="https://www.github.com/Wizard-Mayank"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 transition-colors duration-300 hover:bg-[oklch(0.81_0.13_221.95)] rounded-md"
//           >
//             <img className="w-7" src="github.png" alt="github logo" />
//           </a>

//           <a
//             href="https://mail.google.com/mail/?view=cm&to=mayankit369@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 transition-colors duration-300 hover:bg-[oklch(0.81_0.13_221.95)] rounded-md"
//           >
//             <img className="w-7" src="mail.png" alt="gmail logo" />
//           </a>
//         </div>

//         <ChatButton></ChatButton>
//       </div>
//     </div>
//   );
// }

// export default ProfileCard;

import React from "react";
import ChatButton from "./ChatButton.jsx";
import { motion } from "framer-motion";

function ProfileCard() {
  return (
    <div className="h-screen w-[40vw] flex flex-col items-center justify-center relative">
      {/* Background ambient glow for the sidebar */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#48d3fd]/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center rounded-[2rem] w-[65%] h-[88%] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden"
      >
        {/* Subtle top border highlight */}
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#48d3fd]/50 to-transparent" />

        <div className="relative group">
          <div className="absolute -inset-1 bg-[#48d3fd]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            className="w-56 rounded-2xl ring-1 ring-white/20 relative z-10 object-cover"
            src="Mayank_Portfolio_Image.png"
            alt="Mayank Pandey"
          />
        </div>

        <h2 className="text-white font-bold mt-6 font-['IM_Fell_French_Canon_SC',serif] text-4xl tracking-wider drop-shadow-md">
          Mayank Pandey
        </h2>

        <div className="flex flex-col items-center mt-2 space-y-1">
          <h3 className="text-lg text-zinc-300 font-medium tracking-wide">
            Full Stack Developer | AI/ML Engineer
          </h3>
          <h3 className="text-sm text-zinc-500 font-light flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#48d3fd] animate-pulse" />
            Uttar Pradesh, India
          </h3>
        </div>

        <div className="flex justify-between w-40 mt-6 mb-10 border-t border-white/10 pt-6">
          <a
            href="https://www.linkedin.com/in/pandeymayank369"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 transition-all duration-300 hover:bg-[#48d3fd]/10 hover:shadow-[0_0_15px_rgba(72,211,253,0.3)] rounded-xl border border-transparent hover:border-[#48d3fd]/30"
          >
            <img
              className="w-6 opacity-80 hover:opacity-100"
              src="linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.github.com/Wizard-Mayank"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 transition-all duration-300 hover:bg-[#48d3fd]/10 hover:shadow-[0_0_15px_rgba(72,211,253,0.3)] rounded-xl border border-transparent hover:border-[#48d3fd]/30"
          >
            <img
              className="w-6 opacity-80 hover:opacity-100"
              src="github.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=mayankit369@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 transition-all duration-300 hover:bg-[#48d3fd]/10 hover:shadow-[0_0_15px_rgba(72,211,253,0.3)] rounded-xl border border-transparent hover:border-[#48d3fd]/30"
          >
            <img
              className="w-6 opacity-80 hover:opacity-100"
              src="mail.png"
              alt="Email"
            />
          </a>
        </div>

        <ChatButton />
      </motion.div>
    </div>
  );
}

export default ProfileCard;