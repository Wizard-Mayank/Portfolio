// import React from "react";
// import styled from "styled-components";
// import GotoButton from "./GotoButton";

// const ProjectCard = (props) => {
//   return (
//     <StyledWrapper>
//       <div className="container">
//         <div className="box">
//           <span className="title">{props.title}</span>
//           <div>
//             <strong>{props.desc}</strong>
//             <GotoButton link={props.link}></GotoButton>
//             <span>Date:</span>{" "}
//             <span>
//               {props.month}, {props.year}
//             </span>
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .container {
//     color: white;
//     position: relative;
//     font-family: sans-serif;
//   }

//   .container::before,
//   .container::after {
//     content: "";
//     background-color: #48d3fd;
//     position: absolute;
//   }

//   .container::before {
//     border-radius: 50%;
//     width: 6rem;
//     height: 6rem;
//     top: 30%;
//     right: 7%;
//   }

//   .container::after {
//     content: "";
//     position: absolute;
//     height: 3rem;
//     top: 8%;
//     right: 5%;
//     border: 1px solid;
//   }

//   .container .box {
//     width: 11.875em;
//     height: 15.875em;
//     padding: 1rem;
//     background-color: rgba(0, 0, 0, 0);
//     border: 1px solid rgba(255, 255, 255, 0.222);
//     -webkit-backdrop-filter: blur(20px);
//     backdrop-filter: blur(20px);
//     border-radius: 0.7rem;
//     transition: all ease 0.3s;
//   }

//   .container .box {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }

//   .container .box .title {
//     font-size: 2rem;
//     font-weight: 500;
//     letter-spacing: 0.1em;
//   }

//   .container .box div strong {
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   .container .box div p {
//     margin: 0;
//     font-size: 0.9em;
//     font-weight: 300;
//     letter-spacing: 0.1em;
//   }

//   .container .box div span {
//     font-size: 0.7rem;
//     font-weight: 300;
//   }

//   .container .box div span:nth-child(3) {
//     font-weight: 500;
//     margin-right: 0.2rem;
//   }

//   .container .box:hover {
//     box-shadow: 0px 0px 20px 1px #48d3fd;
//     border: 1px solid #48d3fd;
//   }
// `;

// export default ProjectCard;

import React from "react";
import GotoButton from "./GotoButton";

const ProjectCard = (props) => {
  return (
    <div className="group relative w-[16rem] h-[20rem]">
      {/* Glow Effect behind card on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#48d3fd]/0 via-[#48d3fd]/30 to-[#48d3fd]/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700" />

      {/* Glassmorphism Card */}
      <div className="relative flex flex-col justify-between h-full p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 group-hover:bg-black/60 group-hover:border-[#48d3fd]/40">
        {/* Top Section: Title & Status Indicator */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#48d3fd]/50 group-hover:bg-[#48d3fd]/10 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[#48d3fd] animate-pulse" />
            </div>
            <span className="text-[10px] font-mono text-[#48d3fd]/70 uppercase tracking-widest bg-[#48d3fd]/5 px-2 py-1 rounded-md border border-[#48d3fd]/10">
              {props.month} {props.year}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-[#48d3fd] transition-colors duration-300">
            {props.title}
          </h3>
        </div>

        {/* Bottom Section: Button */}
        <div className="pt-4 border-t border-white/10 group-hover:border-[#48d3fd]/20 transition-colors">
          <GotoButton link={props.link} text="View Project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;