import React from "react";

function NumberCard(props) {
  return (
    <div className="flex flex-col items-start font-sans text-white mr-2">
      <div className="text-8xl font-bold tracking-tighter leading-none text-[oklch(0.81_0.13_221.95)]">
        +{props.number}
      </div>

      <div className="text-xl uppercase tracking-tight leading-tight mt-2 ">
        {props.text}
      </div>
    </div>
  );
}

export default NumberCard;
