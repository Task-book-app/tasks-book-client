import { useFela } from "react-fela";
import { bold, poppins, semi_bold } from "../fonts/Poppins/poppins";

// const lightTheme = `
//   *,
//   *::after,
//   *::before {
//     margin: 0;
//     padding: 0;
//     box-sizing: inherit;
//   }

//   html {
//       font-size: 50%;
//       font-family: "Poppins";
//       background-color: #fafafa;
//   }

//   @media only screen and (min-width: 64em) {
//       html{
//         font-size: 62.5%;
//       }
//   }

//   body{
//     box-sizing: border-box;
//   }
// `;

const GlobalStyles = () => {
  const {
    renderer,
    // staticStyle
  } = useFela();

  // font-family
  renderer.renderFont("Poppins", poppins);
  renderer.renderFont("Poppins-Bold", bold, {
    fontWeight: "bold",
  });
  renderer.renderFont("Semi-bold", semi_bold, {
    fontWeight: "semi-bold",
  });

  // staticStyle(lightTheme);

  return null;
};

export default GlobalStyles;
