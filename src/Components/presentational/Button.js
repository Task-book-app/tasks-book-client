import { useFela } from "react-fela";

const Button = ({
  children,
  fontSize = 1.8,
  type,
  event = null,
  width = "100%",
  height,
  fontFamily,
  bg,
  disabled = false,
  extend,
}) => {
  const { css, theme } = useFela({ fontSize, width, height, fontFamily, bg });

  const rule = ({ fontSize, width, height, fontFamily, bg }) => ({
    width,
    height: `${height}rem`,
    padding: `1rem 2rem`,
    background:
      bg === "danger" ? theme.colors.danger : theme.gradients.blueGradient,

    border: "none",
    fontSize: `${fontSize}rem`,
    fontFamily: fontFamily ? fontFamily : "inherit",
    letterSpacing: ".1rem",

    color: theme.colors.whiteBtn,

    ...theme.centerFlex,

    ...theme.buttonStyles,

    "& > :first-child": {
      marginRight: "1rem",
    },
  });

  return (
    <button
      type={type}
      onClick={event}
      className={css([rule, extend])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
