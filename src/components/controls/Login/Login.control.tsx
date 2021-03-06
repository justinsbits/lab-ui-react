import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import profileImg from "../../../assets/spokanejs-profile.jpg";
import SignInDialog from "../../dialogs/SignIn/SignIn.dialog";
import { useContext } from "react";
import AuthContext from "../../../services/authentication/Authentication.context";
import AuthenticationService from "../../../services/authentication/Authentication.service";

export function LoginControl() {
  const [signInDialogOpenState, setSignInDialogOpenState] = useState(false);
  const { userAuthenticated, toggleAuthenticated } = useContext(AuthContext);
  return (
    <>
      {userAuthenticated ? (
        <Button
          onClick={() => {
            AuthenticationService.signOut();
            toggleAuthenticated();
          }}
        >
          <Avatar
            alt="Justin Schultz"
            src={profileImg}
            sx={{ width: 40, height: 40, backgroundColor: "#ffffff" }}
          />
        </Button>
      ) : (
        <Button color="inherit" onClick={() => setSignInDialogOpenState(true)}>
          SIGN IN
        </Button>
      )}
      <SignInDialog
        open={signInDialogOpenState}
        onClose={() => setSignInDialogOpenState(false)}
      />
    </>
  );
}
