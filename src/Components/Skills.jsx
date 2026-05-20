import React from "react";
import { motion } from "framer-motion";

// Extracted and categorized skills from the master resume
const skillCategories = [
  {
    title: "AI, ML & Vision",
    icon: "🧠",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "MediaPipe",
      "NLP & NLTK",
      "ResNet50",
      "MTCNN",
      "Image Preprocessing",
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
      "Flutter",
    ],
  },
  {
    title: "Testing & QA",
    icon: "🧪",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Smoke Testing",
      "Regression Testing",
      "API Validation",
      "ESLint",
      "Security Auditing",
    ],
  },
  {
    title: "Tools & Architecture",
    icon: "⚙️",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Firebase",
      "Postman",
      "JWT & Auth",
      "MVC Architecture",
      "RESTful APIs",
      "Razorpay",
    ],
  },
  {
    title: "Core Concepts",
    icon: "💻",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    skills: [
      "C++",
      "Python",
      "JavaScript",
      "SQL",
      "DSA (700+ Solved)",
      "DBMS",
      "OOPs",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Team Leadership",
      "Adaptability",
      "Time Management",
      "Effective Communication",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Smooth UI/UX Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#48d3fd]/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 50, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#1a4a6b]/20 rounded-full blur-[150px]"
      />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="relative min-h-screen py-16 px-6 lg:px-12 flex flex-col items-center">
      <AnimatedBackground />

      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
            My{" "}
            <span className="text-[#48d3fd] drop-shadow-[0_0_15px_rgba(72,211,253,0.5)]">
              Arsenal
            </span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mt-4 font-light max-w-2xl mx-auto">
            Hover over the categories to explore the specific technologies,
            concepts, and skills I leverage.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl pb-10"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-[22rem] rounded-3xl overflow-hidden border border-white/10 shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />

              {/* Default Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/80" />

              {/* Glassmorphism Blur Overlay */}
              <div className="absolute inset-0 opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content Container */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Title & Icon - Moves up and becomes a background watermark on hover */}
                <div className="absolute bottom-6 left-6 right-6 z-0 transition-all duration-500 ease-in-out origin-left group-hover:-translate-y-[12rem] group-hover:opacity-20 group-hover:scale-90">
                  <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] mb-2 block">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags - Slides up into the foreground on hover */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap gap-2 opacity-0 translate-y-12 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-[#48d3fd] hover:text-black hover:border-[#48d3fd] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
