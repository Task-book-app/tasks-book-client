import { gql, useMutation, useApolloClient } from "@apollo/client";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../Components/containers/pages/LoadingPage";
import GlobalStyles from "../Components/GlobalStyles";
import useAlert from "../Components/hooks/useAlert";
import useDarkMode from "../Components/hooks/useDarkMode";

export const appContext = createContext();

const GET_VERIFY_USER = gql`
  mutation VerifyLoggedUser {
    verifyUser {
      id
      username
      email
      picture
      userTasks {
        id
        task
        category
        priority
        completed
      }
    }
  }
`;

const LOG_OUT = gql`
  mutation LogOut {
    logout
  }
`;

export function GlobalContext({ children }) {
  const navigate = useNavigate();
  const client = useApolloClient();
  const [currentTheme, themeToggler] = useDarkMode();
  const [alertMessage, setAlertMessage, alertSettings] = useAlert();

  const [user, setUser] = useState();
  const [tasks, setTasks] = useState([]);

  const [verifyLoggedUser, { loading }] = useMutation(GET_VERIFY_USER, {
    onCompleted: (data) => {
      const { id, username, email, picture, userTasks } = data.verifyUser;
      setUser({
        id: id,
        username: username,
        email: email,
        picture: picture,
      });

      setTasks(userTasks);
    },
    onError: (error) => {
      console.error({ error });
    },
  });

  const [logoutMutation, logoutResult] = useMutation(LOG_OUT, {
    onCompleted: (data) => {
      // client.cache.evict({ id: "TaskType" });
      setUser();
      setTasks([]);
      client.cache.evict({ id: "ROOT_MUTATION" });
      client.cache.gc();
      navigate("/");
      console.log(data);
    },
    onError: (error) => console.error("Error logout", error),
  });

  useEffect(() => {
    verifyLoggedUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <>
        <GlobalStyles />
        <LoadingPage currentTheme={currentTheme} text={"Loading . . ."} />
      </>
    );
  }
  if (logoutResult.loading) {
    return (
      <>
        <GlobalStyles />
        <LoadingPage
          currentTheme={currentTheme}
          text={"Logging you Out . . ."}
        />
      </>
    );
  }

  return (
    <appContext.Provider
      value={{
        tasks,
        setTasks,
        alertMessage,
        setAlertMessage,
        alertSettings,
        currentTheme,
        themeToggler,
        user,
        setUser,
        logoutMutation,
      }}
    >
      <GlobalStyles />
      {children}
    </appContext.Provider>
  );
}
