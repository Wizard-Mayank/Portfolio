// import React from "react";
// import NumberCard from "./NumberCard";
// import ChatButton from "./ChatButton";
// import RedirectButton3D from "./RedirectButton3D";

// function ProfileBio() {
//   return (
//     <div className="flex-col items-center h-screen rounded-2xl p-5 text-white">
//       <div className="flex flex-col justify-center rounded-4xl w-[90%] h-[90%]">
//         <div className="text-7xl font-bold">
//           Transforming My Ideas into{" "}
//           <span className="text-[oklch(0.81_0.13_221.95)]">Reality</span>.
//         </div>
//         <div className="text-2xl mt-4">
//           <div>Full Stack Developer and AIML Engineer.</div>
//           <div>
//             Focused on building scalable web applications with integrated
//             intelligence.
//           </div>
//         </div>
//         <div className="flex mt-10">
//           <NumberCard number="7" text="YEARS OF EXPERIENCE"></NumberCard>
//           <NumberCard number="38" text="PROJECTS COMPLETED"></NumberCard>
//         </div>

//         <div className="flex">
//           <div className="w-max h-max ml-4 mt-18">
//             <ChatButton></ChatButton>
//           </div>
//           <div className="ml-4 mt-19">
//             <RedirectButton3D></RedirectButton3D>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileBio;

import React from "react";
import { motion } from "framer-motion";
import NumberCard from "./NumberCard";
import ChatButton from "./ChatButton";
import RedirectButton3D from "./RedirectButton3D";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ProfileBio() {
  return (
    <div className="flex flex-col justify-center h-screen p-10 text-white relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-[90%] max-w-4xl relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="text-7xl font-bold tracking-tighter leading-[1.1]"
        >
          Transforming My Ideas into{" "}
          <span className="text-[#48d3fd] relative inline-block">
            Reality.
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#48d3fd]/20 -z-10 blur-sm" />
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 space-y-2 border-l-2 border-[#48d3fd]/50 pl-6 py-2"
        >
          <div className="text-2xl font-light text-zinc-200">
            <span className="font-semibold text-white">
              Full Stack Developer
            </span>{" "}
            and <span className="font-semibold text-white">AI/ML Engineer</span>
            .
          </div>
          <div className="text-xl text-zinc-400 font-light">
            Focused on building scalable web applications with integrated
            intelligence.
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-16 mt-16">
          <NumberCard number="7" text="YEARS CODING" />
          <NumberCard number="38" text="PROJECTS BUILT" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 mt-16"
        >
          <ChatButton />
          <RedirectButton3D />
        </motion.div>
      </motion.div>

      {/* Decorative ambient background elements */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-[#48d3fd]/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}

export default ProfileBio;