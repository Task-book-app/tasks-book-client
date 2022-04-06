import React, { useState, useContext } from "react";
import { useFela } from "react-fela";
import Avatar from "../../../presentational/Avatar";
import ToogleDropDown from "../../../presentational/ToogleDropDown";
import DropDown from "../DropDown";
import DropDownItem from "../../../presentational/DropDownItem";
import ListContainer from "../ListContainer";
import GearIcon from "../../../presentational/icons/GearIcon";
import LogOutIcon from "../../../presentational/icons/LogOutIcon";
import ButtonMenu from "../../../presentational/ButtonMenu";
import SunIcon from "../../../presentational/icons/SunIcon";
import MoonIcon from "../../../presentational/icons/MoonIcon";
import UserIcon from "../../../presentational/icons/UserIcon";
import { appContext } from "../../../../context/GlobalContext";

const rules = () => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& > :not(:first-child)": {
    marginLeft: "2rem",
  },
});

const UserTopBarSmallScreen = () => {
  const { css, theme } = useFela();

  const { currentTheme, themeToggler, user } = useContext(appContext);

  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={css(rules)}>
      <Avatar picture={user.picture} />
      <ToogleDropDown
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
      {showDropDown && (
        <DropDown width={"14rem"} border={"1px solid " + theme.colors.blue}>
          <ListContainer marginBottom={0}>
            <DropDownItem title={"Profile"} link={"profile"}>
              <UserIcon fontSize={1.2} />
            </DropDownItem>

            <ButtonMenu
              padding="1.25rem 2rem"
              fontSize={1.2}
              title="Settings"
              event={null}
            >
              <GearIcon fontSize={1.2} />
            </ButtonMenu>

            <ButtonMenu
              padding="1.25rem 2rem"
              fontSize={1.2}
              title={currentTheme === "light" ? "Dark Mode" : "Light Mode"}
              event={themeToggler}
            >
              {currentTheme === "light" ? (
                <MoonIcon fontSize={1.2} />
              ) : (
                <SunIcon fontSize={1.2} />
              )}
            </ButtonMenu>

            <ButtonMenu
              padding="1.25rem 2rem"
              fontSize={1.2}
              title="Log Out"
              event={null}
              hoverColor={theme.colors.danger}
            >
              <LogOutIcon fontSize={1.2} />
            </ButtonMenu>
          </ListContainer>
        </DropDown>
      )}
    </div>
  );
};

export default UserTopBarSmallScreen;
