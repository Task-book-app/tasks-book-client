import React from "react";
import { useFela } from "react-fela";
import { ModalProvider } from "../../../context/ModalProvider";
import Footer from "./boxes/Footer";
import BoxesView from "./boxesView/BoxesView";
import TopBar from "./topbar/TopBar";
import TopBarSmallScreen from "./topbar/TopBarSmallScreen";
import useMediaQuery from "../../hooks/useMediaQuery";

const MainView = ({ currentTheme }) => {
  const {
    css,
    theme: {
      breakpoints: { laptop, laptop_L },
      getMediaQuery,
      scrollBarStyles,
    },
  } = useFela();

  const laptopScreenListener = useMediaQuery(getMediaQuery(laptop));

  const rules = () => ({
    width: "84%",
    padding: "2rem 2rem 0",
    flex: "1 1 auto",
    minHeight: "100%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    ...scrollBarStyles(currentTheme),
    [laptop_L]: {
      padding: "2rem 7rem",
    },
  });

  return (
    <div className={css(rules)}>
      {laptopScreenListener ? (
        <ModalProvider>
          <TopBar />
        </ModalProvider>
      ) : (
        <ModalProvider>
          <TopBarSmallScreen />
        </ModalProvider>
      )}
      <BoxesView />
      <Footer />
    </div>
  );
};

export default MainView;
