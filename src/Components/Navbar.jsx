import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledWrapper>
      <div className="nav">
        <div className="container">
          <Link to="/" className="btn">
            Home
          </Link>
          <Link to="/progress" className="btn">
            Progress
          </Link>
          <Link to="/skills" className="btn">
            Skills
          </Link>
          <Link to="/projects" className="btn">
            Builds
          </Link>
          <Link to="/contact" className="btn">
            Chat
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460 60"
            height={60}
            width={460}
            overflow="visible"
            className="outline"
          >
            <rect
              strokeWidth={5}
              fill="transparent"
              height={60}
              width={460}
              y={0}
              x={0}
              pathLength={100}
              className="rect"
            />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: #48d3fd;
  }

  .nav {
    position: relative;
    width: 460px; /* Increased from 400px to fit 5 items */
    height: 60px;
    border-radius: 40px;
  }

  .container:hover .outline .rect {
    transition: 999999s;
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }

  .container {
    position: absolute;
    inset: 0;
    background: rgba(16, 16, 16, 0.4);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
  }

  .btn {
    padding: 0.5em 1em; /* Reduced padding slightly to ensure fit */
    color: #fff;
    cursor: pointer;
    transition: 0.1s;
    text-decoration: none;
  }

  .btn:hover {
    background: #48d3fd;
    color: black;
    border-radius: 10px;
  }

  /* Updated SVG Stroke logic for 5 buttons */
  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 2 8 73.3 8 10.7;
  }

  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 16 9.5 50 9.5 20;
  }

  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 31 8.5 35 8.5 25;
  }

  .btn:nth-child(4):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 45 7 20 7 30;
  }

  .btn:nth-child(5):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 60 7 5 7 30;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
`;

export default Navbar;
