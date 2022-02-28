import React from "react";

const Lock = ({ width = 16, height = 16, fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6667 7.33331H3.33333C2.59695 7.33331 2 7.93027 2 8.66665V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V8.66665C14 7.93027 13.403 7.33331 12.6667 7.33331Z"
        stroke="#0AA7BD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66666 7.33331V4.66665C4.66666 3.78259 5.01785 2.93475 5.64297 2.30962C6.2681 1.6845 7.11594 1.33331 8 1.33331C8.88405 1.33331 9.7319 1.6845 10.357 2.30962C10.9821 2.93475 11.3333 3.78259 11.3333 4.66665V7.33331"
        stroke="#0AA7BD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Lock;
