import React, { useContext, useEffect, useRef } from "react";
import { useFela } from "react-fela";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appContext } from "../../context/GlobalContext";

const ToogleDropDown = ({ showDropDown, setShowDropDown }) => {
  const { css, theme } = useFela();
  const { currentTheme } = useContext(appContext);

  const rules = () => ({
    color: theme.colors.blue,
    border: "1px solid " + theme.colors.blue,
    width: "2.4rem",
    height: "2.4rem",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",

    ...theme.centerFlex,

    ...theme.buttonStyles,
    ...theme.darkModusBoxes(currentTheme),
  });

  const toggleButton = useRef(null);

  // function to catch click outside element
  const useOutsideClick = (ref) => {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropDown(false);
        }
      }
      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
  };

  useOutsideClick(toggleButton);

  return (
    <div
      ref={toggleButton}
      className={css(rules)}
      onClick={() => setShowDropDown(!showDropDown)}
    >
      <FontAwesomeIcon icon={faChevronDown} fontSize={"1.6rem"} />
    </div>
  );
};

export default ToogleDropDown;
