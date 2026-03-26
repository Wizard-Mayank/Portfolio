import React from "react";
import ChatButton from "./ChatButton.jsx";

function ProfileCard() {
  return (
    <div className="h-screen w-[40vw] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-4xl w-[65%] h-[88%] bg-[oklch(0.18_0.02_220.86)]">
        <img
          className="w-60 rounded-2xl ring-1 ring-[oklch(0.81_0.13_221.95)]"
          src="Mayank_Portfolio_Image.png"
          alt="Mayank's pic"
        />
        <h2 className=" text-white font-bold mt-5 font-['IM_Fell_French_Canon_SC',serif] text-4xl">
          Mayank Pandey
        </h2>
        <h3 className="text-2xl text-white">
          Full Stack Developer | AIML Engineer
        </h3>
        <h3 className="text-2xl text-white">Uttar Pradesh, India</h3>
        <div className="flex justify-between w-32 mt-2 mb-10">
          <a
            href="https://www.linkedin.com/in/pandeymayank369"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors duration-300 hover:bg-[oklch(0.81_0.13_221.95)] rounded-md"
          >
            <img className="w-7" src="linkedin.png" alt="linkedin logo" />
          </a>

          <a
            href="https://www.github.com/Wizard-Mayank"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors duration-300 hover:bg-[oklch(0.81_0.13_221.95)] rounded-md"
          >
            <img className="w-7" src="github.png" alt="github logo" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=mayankit369@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors duration-300 hover:bg-[oklch(0.81_0.13_221.95)] rounded-md"
          >
            <img className="w-7" src="mail.png" alt="gmail logo" />
          </a>
        </div>

        <ChatButton></ChatButton>
      </div>
    </div>
  );
}

export default ProfileCard;
