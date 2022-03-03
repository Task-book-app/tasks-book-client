import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { useFela } from "react-fela";
import { combineRules } from "fela";

const rules = () => ({
  textDecoration: "none",
  transition: "all 0.5s ease",
  display: "flex",
  alignItems: "center",

  fontSize: "1.2rem",
  lineHeight: "1.5rem",

  "& > :first-child": {
    marginRight: "1rem",
  },
});

const DropDownItem = ({ children, title = "", icon = "", link = "" }) => {
  const { css, theme } = useFela();

  const rulesActive = () => ({
    color: theme.colors.blue,
  });

  const rulesInactive = () => ({
    color: "inherit",
    ":visited": {
      color: "inherit",
    },

    ":hover": {
      color: theme.colors.blue,
    },
  });

  const activeCombined = combineRules(rules, rulesActive);
  const inactiveCombined = combineRules(rules, rulesInactive);

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          css(isActive ? activeCombined : inactiveCombined)
        }
      >
        {icon ? <FontAwesomeIcon icon={icon} /> : children}
        {title}
      </NavLink>
    </li>
  );
};

export default DropDownItem;