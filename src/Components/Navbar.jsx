import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

const Button = () => {
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

          <Link to="/projects" className="btn">
            Builds
          </Link>

          <Link to="/contact" className="btn">
            Chat
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            height={60}
            width={400}
            overflow="visible"
            className="outline"
          >
            <rect
              strokeWidth={5}
              fill="transparent"
              height={60}
              width={400}
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
    width: 400px;
    height: 60px;
    border-radius: 40px;
  }

  .container:hover .outline .rect {
    transition: 999999s;
    /* Must specify these values here as something *different* just so that the transition works properly */
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
    padding: 0.5em 1.5em;
    color: #fff;
    cursor: pointer;
    transition: 0.1s;
  }

  .btn:hover {
    background: #48d3fd;
    color: black;
    border-radius: 10px;
  }

  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 2 8 73.3 8 10.7;
  }

  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 12.6 9.5 49.3 9.5 31.6;
  }

  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 24.5 8.5 27.5 8.5 55.5;
  }

  .btn:nth-child(4):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 34.7 6.9 10.2 6.9 76;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
`;

export default Button;
