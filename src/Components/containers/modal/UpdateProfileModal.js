import React, { useContext, useState } from "react";
import { useFela } from "react-fela";
import Label from "../../presentational/Label";
import Input from "../../presentational/Input";
import ModalGroup from "./ModalGroup";
import Button from "../../presentational/Button";
import { appContext } from "../../../context/GlobalContext";
import UploadPicture from "../../presentational/UploadPicture";
import H3 from "../../presentational/typography/H3";
import { gql, useMutation } from "@apollo/client";

const UPDATE_USER_INFO = gql`
  mutation UpdateUser($username: String!, $email: String!, $picture: String!) {
    updateUser(username: $username, email: $email, picture: $picture) {
      username
      email
      picture
    }
  }
`;

const UpdateProfileModal = ({ handleCloseModal }) => {
  const { currentTheme, user, setUser, setAlertMessage } =
    useContext(appContext);

  const { css, theme } = useFela();

  const rules = () => ({
    minWidth: "90vw",
    fontSize: "1.4rem",

    ...theme.boxesGeneral,
    ...theme.darkModusBoxes(currentTheme),
    display: "flex",
    flexDirection: "column",
    "& > :not(:last-child)": {
      marginBottom: "2rem",
    },

    [theme.breakpoints.laptop]: {
      minWidth: "50vw",
    },

    "& .content": {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.tablet]: {
        flexDirection: "row",
        "& > :not(:last-child)": {
          marginRight: "5rem",
        },
      },
    },

    "& .info": {
      fontSize: "1.4rem",
      lineHeight: "1.9rem",
      letterSpacing: "0.03em",

      flex: "1 1 auto",
      "& > :not(:last-child)": {
        marginBottom: "3rem",
      },
    },
  });

  const [disable, setDisable] = useState(false);

  // const [updated, setUpdated] = useState({
  //   username: user.username,
  //   email: user.email,
  // });

  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const [avatarPreview, setAvatarPreview] = useState(user.picture);
  // console.log(avatarPreview);

  const [updateUserMutation, { loading }] = useMutation(UPDATE_USER_INFO, {
    onCompleted: (data) => {
      // console.log(data);

      setUser({ ...user, ...data.updateUser });
      // setAvatarPreview();
      handleCloseModal();
    },
    onError: (error) => {
      console.error(error);
      setAlertMessage({ error });
    },
  });

  const disableForm = () => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 2500);
  };

  // const handleChange = (e) => {
  //   setUpdated({ ...updated, [e.target.name]: e.target.value });
  // };
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username) {
        disableForm();
        throw new Error("Update username or cancel");
      }
      if (!email) {
        disableForm();
        throw new Error("Update email or cancel");
      }
      if (
        user.username === username &&
        user.email === email &&
        user.picture === avatarPreview
      ) {
        console.log("not updating");
        throw new Error("Nothing was updated, please Cancel");
      }
      updateUserMutation({
        variables: {
          username: username,
          email: email,
          picture: avatarPreview,
        },
      });
    } catch (error) {
      setAlertMessage({ error });
    }
  };
  // console.log(avatarPreview);

  const resetAndClose = () => {
    setUsername(user.username);
    setEmail(user.email);
    setAvatarPreview(user.picture);
    handleCloseModal();
    return;
  };

  return (
    <form className={css(rules)} onSubmit={handleSubmit}>
      <H3 color={theme.colors.blue}>Update your profile</H3>
      <div className="content">
        <div className="avatar-update">
          <UploadPicture
            avatarPreview={avatarPreview}
            setAvatarPreview={setAvatarPreview}
          />
        </div>
        <div className="info">
          {/* <H3 color={theme.colors.blue}>Update your profile</H3> */}
          <ModalGroup gb={1}>
            <Label htmlFor="username">Username</Label>
            <Input
              placeholder={user.username || "username"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              name="username"
            />
          </ModalGroup>
          <ModalGroup gb={1}>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder={user.email || "email@address.com"}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              name="email"
            />
          </ModalGroup>

          <ModalGroup fd={"column"} gb={2} jc="flex-end">
            <Button
              width={"auto"}
              fontSize={1.4}
              type="submit"
              disabled={disable || loading}
            >
              Save Changes
            </Button>
            <Button
              width={"auto"}
              fontSize={1.4}
              bg="danger"
              type="button"
              event={resetAndClose}
              disabled={disable || loading}
            >
              Cancel
            </Button>
          </ModalGroup>
        </div>
      </div>
    </form>
  );
};

export default UpdateProfileModal;
