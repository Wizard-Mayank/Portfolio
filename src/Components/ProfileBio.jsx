import React from "react";
import NumberCard from "./NumberCard";
import ChatButton from "./ChatButton";
import RedirectButton3D from "./RedirectButton3D";

function ProfileBio() {
  return (
    <div className="flex-col items-center h-screen rounded-2xl p-5 text-white">
      <div className="flex flex-col justify-center rounded-4xl w-[90%] h-[90%]">
        <div className="text-7xl font-bold">
          Transforming My Ideas into{" "}
          <span className="text-[oklch(0.81_0.13_221.95)]">Reality</span>.
        </div>
        <div className="text-2xl mt-4">
          <div>Full Stack Developer and AIML Engineer.</div>
          <div>
            Focused on building scalable web applications with integrated
            intelligence.
          </div>
        </div>
        <div className="flex mt-10">
          <NumberCard number="7" text="YEARS OF EXPERIENCE"></NumberCard>
          <NumberCard number="38" text="PROJECTS COMPLETED"></NumberCard>
        </div>

        <div className="flex">
          <div className="w-max h-max ml-4 mt-18">
            <ChatButton></ChatButton>
          </div>
          <div className="ml-4 mt-19">
            <RedirectButton3D></RedirectButton3D>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBio;
