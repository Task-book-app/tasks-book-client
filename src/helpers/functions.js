import fallbackQuotes from "./fallbackQuotes.json";

export const randomFallbackQuote = () => {
  return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
};

export const longDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const month = months[date.getMonth()];

  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
