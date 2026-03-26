import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import styled from "styled-components";

const PageNotFound = () => {
  return (
    <StyledWrapper>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-[12rem] font-bold leading-none text-white/5 tracking-tighter select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                textShadow: [
                  "0 0 10px #48d3fd",
                  "0 0 20px #48d3fd",
                  "0 0 10px #48d3fd",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[#48d3fd] text-5xl font-bold tracking-widest uppercase italic"
            >
              Lost in Space
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-md"
        >
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            The neural network couldn't find the path you're looking for. This
            coordinate doesn't exist in my technical evolution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Link to="/" className="home-btn">
            <span>Back to Reality</span>
            <div className="liquid"></div>
          </Link>
        </motion.div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#48d3fd]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#48d3fd]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .home-btn {
    position: relative;
    padding: 15px 40px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    width: 200px;
    overflow: hidden;
    border-radius: 40px;
    border: 1px solid #48d3fd;
    transition: 0.5s;
    z-index: 1;
  }

  .home-btn span {
    position: relative;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    z-index: 1;
  }

  .home-btn:hover span {
    color: #000;
  }

  .home-btn .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 200px;
    height: 200px;
    background: #48d3fd;
    box-shadow: 0 0 50px rgba(72, 211, 253, 0.5);
    transition: 0.5s;
    z-index: -1;
  }

  .home-btn:hover .liquid {
    top: -120px;
  }

  .home-btn .liquid::after,
  .home-btn .liquid::before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #000;
  }

  .home-btn .liquid::before {
    border-radius: 45%;
    background: rgba(0, 0, 0, 1);
    animation: animate 5s linear infinite;
  }

  .home-btn .liquid::after {
    border-radius: 40%;
    background: rgba(0, 0, 0, 0.5);
    animation: animate 10s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;

export default PageNotFound;
