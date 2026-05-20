import React from "react";
import { motion } from "framer-motion";

const updates = [
  {
    date: "2020 - 2021",
    title: "Foundations: Python & SQL",
    desc: "Mastered core programming logic with Python and relational database management using SQL during Class XI & XII.",
    status: "completed",
  },
  {
    date: "Early 2021",
    title: "C, C++ & Data Structures",
    desc: "Deep-dived into low-level programming with C/C++ and mastered Data Structures & Algorithms (DSA).",
    status: "completed",
  },
  {
    date: "Mid 2022",
    title: "Web & Data Science Basics",
    desc: "Learned HTML, CSS, JS for web development and mastered Pandas, NumPy, and Matplotlib for data analysis.",
    status: "completed",
  },
  {
    date: "Late 2022",
    title: "Tools & Core Concepts",
    desc: "Mastered Git/GitHub for version control and studied Object-Oriented Programming (OOPS) principles.",
    status: "completed",
  },
  {
    date: "February 2023",
    title: "Video Media Player Project",
    desc: "Built a feature-rich VLC-inspired web player using Vanilla JavaScript and the HTML5 Media API.",
    status: "completed",
  },
  {
    date: "Mid 2023",
    title: "Backend & Systems Mastery",
    desc: "Studied Operating Systems, Java, and advanced Deep Learning concepts including LSTM networks.",
    status: "completed",
  },
  {
    date: "Late 2023",
    title: "MERN Stack & Next.js",
    desc: "Mastered professional web architecting using MongoDB, Express, React, Node.js, and Next.js.",
    status: "completed",
  },
  {
    date: "Early 2024",
    title: "Infrastructure & Networking",
    desc: "Studied Computer Networks and specialized in architecting scalable system communications.",
    status: "completed",
  },
  {
    date: "July 2024",
    title: "Hand Gesture Recognition",
    desc: "Applied Computer Vision skills to build a real-time data collection pipeline using OpenCV and MediaPipe.",
    status: "completed",
  },
  {
    date: "December 2024",
    title: "Real-time Chat Application",
    desc: "Implemented a high-performance WhatsApp-style interface using React, Vite, and Firebase integration.",
    status: "completed",
  },
  {
    date: "Early 2025",
    title: "Advanced AI & QA",
    desc: "Mastered Computer Vision, TensorFlow, Keras, and Scikit-learn alongside Testing Methodologies and Security Auditing.",
    status: "completed",
  },
  {
    date: "July 2025",
    title: "Full Stack OTT Platform",
    desc: "Deployed a production-grade streaming service with JWT authentication, Redux Toolkit, and TMDB API.",
    status: "completed",
  },
  {
    date: "November 2025",
    title: "Advanced AI Research",
    desc: "Mastered Agentic AI, GenAI, RAG, XAI, RAI, and traditional ML algorithms to learn about ethical and explainable systems.",
    status: "completed",
  },
  {
    date: "January 2026",
    title: "Face Matcher AI",
    desc: "Architected a facial recognition engine using VGGFace and MTCNN to calculate celebrity similarity embeddings.",
    status: "completed",
  },
  {
    date: "February 2026",
    title: "AI Virtual Paint Pro",
    desc: "Engineered a gesture-controlled canvas using coordinate geometry and real-time hand-tracking mapping.",
    status: "completed",
  },
  {
    date: "February 2026",
    title: "Email Spam Classifier",
    desc: "Developed an NLP system using Multinomial Naive Bayes and TF-IDF to detect spam with 97% accuracy.",
    status: "completed",
  },
  {
    date: "March 2026",
    title: "Desktop GUI with Tkinter",
    desc: "Learned Tkinter for Python and built a local user registration system with a desktop-based interface.",
    status: "completed",
  },
  {
    date: "March 2026",
    title: "Web Backends with Flask",
    desc: "Mastered Flask to migrate my registration form to the web, handling user login and secure API requests.",
    status: "completed",
  },
  {
    date: "March 2026",
    title: "Portfolio v2.0 & NLP",
    desc: "Integrated Formspree and Framer Motion while mastering NLTK pipelines and advanced text processing.",
    status: "completed",
  },

  {
    date: "May 2026",
    title: "Task Manager",
    desc: "Developed and deployed a MERN-based task management system featuring RBAC for secure access, live team analytics via a real-time dashboard, and a responsive UI for seamless cross-device performance.",
    status: "completed",
  },

  {
    date: "May 2026",
    title: "Visual Verse",
    desc: "Implemented a scalable AI-powered photo management system using MERN, Flutter, and TensorFlow Lite.",
    status: "completed",
  },
];

const TechnicalProgress = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4 flex justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-[#48d3fd] text-3xl font-bold mb-16 text-center tracking-tight">
          Technical Evolution
        </h2>

        <div className="relative">
          {/* THE TRACK (Background Line) */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/5 rounded-full" />

          {/* THE ANIMATED PROGRESS LINE (The Fill) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-6 top-0 w-0.5 bg-[#48d3fd] shadow-[0_0_15px_#48d3fd] rounded-full origin-top"
          />

          {updates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="relative pl-16 mb-16 group"
            >
              {/* THE CHECKPOINT DOT */}
              <div className="absolute left-3.75 top-2 z-10">
                <div className="relative flex items-center justify-center">
                  {/* Outer Glow Circle */}
                  <div
                    className={`absolute w-6 h-6 rounded-full blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#48d3fd]/50`}
                  />

                  {/* Inner Solid Circle */}
                  <div
                    className={`w-4.5 h-4.5 rounded-full border-2 border-[#48d3fd] 
                    ${item.status === "completed" ? "bg-[#48d3fd]" : "bg-black shadow-inner"}
                    transition-all duration-300 group-hover:scale-125`}
                  />
                </div>
              </div>

              {/* THE GLASS CARD */}
              <div
                className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl 
                hover:border-[#48d3fd]/40 transition-all duration-500 hover:shadow-[20px_20px_50px_rgba(0,0,0,0.5)] 
                hover:-translate-y-1 relative overflow-hidden group/card"
              >
                {/* Decorative Subtle Gradient inside Card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#48d3fd]/5 blur-[60px] rounded-full -mr-10 -mt-10" />

                <span className="text-[10px] font-mono text-[#48d3fd]/70 uppercase tracking-[0.2em] mb-2 block">
                  {item.date}
                </span>

                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#48d3fd] transition-colors">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Status Badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${item.status === "completed" ? "bg-green-400" : "bg-[#48d3fd] animate-pulse"}`}
                  />
                  <span className="text-[10px] text-zinc-300 uppercase font-medium">
                    {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalProgress;
