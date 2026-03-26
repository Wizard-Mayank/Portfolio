import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-wrap mt-8 gap-18">
      {/* Visual Verse - In Progress */}
      <ProjectCard
        title="AI Visual Verse"
        link="https://github.com/Wizard-Mayank"
        month="Pending"
        year="In-Progress"
      />

      {/* AI Virtual Paint - Feb 2026 */}
      <ProjectCard
        title="AI Virtual Paint"
        link="https://mp-visual-drawing-board.streamlit.app/"
        month="Feb"
        year="2026"
      />

      {/* Email Spam Classifier - Feb 2026 */}
      <ProjectCard
        title="Spam Classifier"
        link="https://github.com/Wizard-Mayank/Email-Spam-Classifier"
        month="Feb"
        year="2026"
      />

      {/* Face Matcher AI - Jan 2026 */}
      <ProjectCard
        title="Face Matcher AI"
        link="https://bollywood-celeb-matcher-by-mayank-pandey.streamlit.app/"
        month="Jan"
        year="2026"
      />

      {/* Full Stack OTT Platform - July 2025 */}
      <ProjectCard
        title="OTT Platform"
        link="https://jio-cinema-clone-1.vercel.app/"
        month="July"
        year="2025"
      />

      {/* Chat App - Dec 2024 */}
      <ProjectCard
        title="Chat App"
        link="https://github.com/Wizard-Mayank/Chat-App"
        month="Dec"
        year="2024"
      />

      {/* Hand Gesture Image Recognition - July 2024 */}
      <ProjectCard
        title="Gesture Recogni-tion"
        link="https://github.com/Wizard-Mayank/Hand-Gesture-Image-Recognition-System"
        month="July"
        year="2024"
      />

      {/* Video Media Player - Feb 2023 */}
      <ProjectCard
        title="Media Player"
        link="https://github.com/Wizard-Mayank/Frontend-Projects/tree/main/VLC"
        month="Feb"
        year="2023"
      />
    </div>
  );
}

export default Projects;
