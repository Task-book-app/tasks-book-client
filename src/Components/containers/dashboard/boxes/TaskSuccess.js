import React, { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../../context/GlobalContext";
import H3 from "../../../presentational/typography/H3";

const TaskSuccess = () => {
  const { currentTheme } = useContext(appContext);
  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    display: "flex",
    // flex: "1 1 auto",
  });

  return (
    <div className={css(rules)}>
      <H3 color={theme.colors.blue}>Success for the week</H3>
    </div>
  );
};

export default TaskSuccess;