import React, { useEffect, useRef } from "react";
import { useFela } from "react-fela";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToogleDropDown = ({ showDropDown, setShowDropDown }) => {
  const { css, theme } = useFela();

  const rules = () => ({
    color: theme.colors.blue,
    width: "2.4rem",
    height: "2.4rem",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",

    backgroundColor: theme.colors.whiteBg,

    ...theme.centerFlex,

    ...theme.buttonStyles,
  });

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

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

  useOutsideClick(toggleButton, setShowDropDown);

  return (
    <div ref={toggleButton} className={css(rules)} onClick={handleDropDown}>
      <FontAwesomeIcon icon={faChevronDown} fontSize={"1.6rem"} />
    </div>
  );
};

export default ToogleDropDown;