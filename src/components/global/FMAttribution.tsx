

import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  link: string;
};

// Frontend Mentor Attribution component
// Creates credits in the bottom left hand of the screen
// Turned it into a component with props cause why not
const FMAttribution = ({ name, link }: Props) => {
  return (
    <div className="absolute bottom-0 right-0 text-sm p-4">
      Challenge by{" "}
      <a
        className="text-red hover:text-rosey-400 transition-colors duration-300"
        href="https://www.frontendmentor.io?ref=challenge"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href={link}
        className="text-red hover:text-rosey-400 transition-colors duration-300"
      >
        {name}
      </a>
      .
    </div>
  );
};
export default FMAttribution;
