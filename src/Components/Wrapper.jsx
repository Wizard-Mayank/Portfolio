import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import ProfileBio from "./ProfileBio";
import Progress from "./Progress";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

// Animation variants for a consistent "Fade & Slide Up" feel
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

function Wrapper(props) {
  const renderRightSection = () => {
    switch (props.page) {
      case "projects":
        return <Projects />;
      case "progress":
        return <Progress />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <ProfileBio />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-black overflow-hidden">
      {/* LEFT SECTION: Fixed Profile Card */}
      <div className="shrink-0 h-full">
        <ProfileCard />
      </div>

      {/* RIGHT SECTION: Animated Scrollable Content */}
      <div className="grow h-full overflow-y-auto custom-scrollbar">
        <motion.div
          key={props.page || "home"} // Key is essential for Framer Motion to detect changes
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="w-full min-h-full"
        >
          {renderRightSection()}
        </motion.div>
      </div>
    </div>
  );
}

export default Wrapper;
