import { useContext, useEffect } from "react";
import { useFela } from "react-fela";
import useDarkMode from "../../hooks/useDarkMode";
import { appContext } from "../../../context/GlobalContext";
import AppLayout from "./AppLayout";
import Alert from "../../presentational/Alert";

const MainLayout = () => {
  const { alertMessage, alertSettings, currentTheme } = useContext(appContext);

  const [mountedComponent] = useDarkMode();

  const {
    css,
    theme: {
      darkModusLayout,
      colors: { bg_dark, bg_light },
    },
  } = useFela();

  const rules = () => ({
    ...darkModusLayout(currentTheme),
    width: "100vw",
    minHeight: "100vh",
  });

  useEffect(() => {
    currentTheme === "light"
      ? document.documentElement.style.setProperty("--main-bg-color", bg_light)
      : document.documentElement.style.setProperty("--main-bg-color", bg_dark);
    return () => {
      document.documentElement.style.removeProperty("--main-bg-color");
    };
  }, [currentTheme, bg_dark, bg_light]);

  if (!mountedComponent) return <div />;

  return (
    <>
      <Alert message={alertMessage} alertSettings={alertSettings} />
      <div className={css(rules)}>
        <AppLayout currentTheme={currentTheme} />
      </div>
    </>
  );
};

export default MainLayout;
