//import validate from "validate.js";
import { TextInputControl } from "../../controls/TextInput/TextInput.control";

import {
  makeStyles,
  Theme,
  createTheme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Tooltip,
  IconButton,
  Hidden,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";

import { Close as CloseIcon } from "@material-ui/icons";

import { AuthProviderList } from "../../controls/AuthProviderList/AuthProviderList.control";
import { useState } from "react";

interface ErrorState {
  emailAddress: string;
  password: string;
}
// import constraints from "../../data/constraints";
// import authentication from "../../services/authentication";

const theme = createTheme();
const styles = (theme: Theme) =>
  createStyles({
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
    },

    icon: {
      marginRight: theme.spacing(0.5),
    },

    divider: {
      margin: "auto",
    },

    grid: {
      marginBottom: theme.spacing(2),
    },
  });
const useStyles = makeStyles(styles);

// class SignUpState {
//   Email: string;
//   ConfirmEmail: string;
//   Password: string;
//   ConfirmPassword: string;

//   constructor() {
//     this.Email = "";
//     this.ConfirmEmail = "";
//     this.Password = "";
//     this.ConfirmPassword = "";
//   }
// }

interface SignUpDialogProps {
  open: boolean;
  //   selectedValue: string;
  onClose: () => void;
}

function SignUpDialog(props: SignUpDialogProps) {
  const classes = useStyles(theme);
  const { open, onClose } = props;
  const [errorsState] = useState<ErrorState>({
    emailAddress: "",
    password: "",
  });
  //   const [profile, setProfile] = useState<Partial<SignUpState>>(
  //     new SignUpState()
  //   );

  const signUp = () => {};
  function signInWithAuthProvider(provider: any) {}

  // const validate = () => {
  //   let temp = {}
  //  // temp.fullName = values.fullName?"":"This field is required."; useFormControl()
  // }

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      //   disableBackdropClick={performingAction}
      //   disableEscapeKeyDown={performingAction}
      //{...dialogProps}
      //   onKeyPress={this.handleKeyPress}
      //   onExited={this.handleExited}
    >
      <DialogTitle disableTypography>
        <Typography variant="h6">Sign up for an account</Typography>

        <Tooltip title="Close">
          <IconButton
            className={classes.closeButton}
            //disabled={performingAction}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>

      <Hidden xsDown>
        <DialogContent>
          <Grid container direction="row">
            <Grid item xs={4}>
              <AuthProviderList onAuthProviderClick={signInWithAuthProvider} />
            </Grid>

            <Grid item xs={1}>
              <Divider className={classes.divider} orientation="vertical" />
            </Grid>

            <Grid item xs={7}>
              <Grid container direction="column" spacing={2}>
                <Grid item xs>
                  <TextInputControl
                    autoComplete="email"
                    // error={!!(errors && errors.emailAddress)}
                    fullWidth
                    helperText={
                      errorsState && errorsState.emailAddress
                        ? errorsState.emailAddress[0]
                        : ""
                    }
                    label="E-mail address"
                    placeholder="john@doe.com"
                    required
                    type="email"
                    //     value={emailAddress}
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    // onChange={this.handleEmailAddressChange}
                  />
                </Grid>

                <Grid item xs>
                  <TextInputControl
                    autoComplete="email"
                    fullWidth
                    // helperText={
                    //   errorsState && errorsState.emailAddressConfirmation
                    //     ? errorsState.emailAddressConfirmation[0]
                    //     : ""
                    // }
                    label="E-mail address confirmation"
                    placeholder="john@doe.com"
                    required
                    type="email"
                    // value={emailAddressConfirmation}
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    //   onChange={this.handleEmailAddressConfirmationChange}
                  />
                </Grid>

                <Grid item xs>
                  <TextInputControl
                    autoComplete="new-password"
                    error={!!(errorsState && errorsState.password)}
                    fullWidth
                    helperText={
                      errorsState && errorsState.password
                        ? errorsState.password[0]
                        : ""
                    }
                    label="Password"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    required
                    type="password"
                    //     value={password}
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    //    onChange={this.handlePasswordChange}
                  />
                </Grid>

                <Grid item xs>
                  <TextInputControl
                    autoComplete="password"
                    //error={!!(errorsState && errorsState.passwordConfirmation)}
                    fullWidth
                    // helperText={
                    //   errorsState && errorsState.passwordConfirmation
                    //     ? errorsState.passwordConfirmation[0]
                    //     : ""
                    // }
                    label="Password confirmation"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    required
                    type="password"
                    //   value={passwordConfirmation}
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    //  onChange={this.handlePasswordConfirmationChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Hidden>

      <Hidden smUp>
        <DialogContent>
          <AuthProviderList
            gutterBottom
            // performingAction={performingAction}
            onAuthProviderClick={signInWithAuthProvider}
          />

          <Grid container direction="column" spacing={2}>
            <Grid item xs>
              <TextInputControl
                autoComplete="email"
                // disabled={performingAction}
                // error={!!(errors && errors.emailAddress)}
                fullWidth
                // helperText={
                //   errors && errors.emailAddress ? errors.emailAddress[0] : ""
                // }
                label="E-mail address"
                placeholder="john@doe.com"
                required
                type="email"
                // value={emailAddress}
                variant="outlined"
                InputLabelProps={{ required: false }}
                // onChange={this.handleEmailAddressChange}
              />
            </Grid>

            <Grid item xs>
              <TextInputControl
                autoComplete="email"
                // disabled={performingAction}
                // error={!!(errors && errors.emailAddressConfirmation)}
                fullWidth
                // helperText={
                //   errors && errors.emailAddressConfirmation
                //     ? errors.emailAddressConfirmation[0]
                //     : ""
                // }
                label="E-mail address confirmation"
                placeholder="john@doe.com"
                required
                type="email"
                // value={emailAddressConfirmation}
                variant="outlined"
                InputLabelProps={{ required: false }}
                //  onChange={this.handleEmailAddressConfirmationChange}
              />
            </Grid>

            <Grid item xs>
              <TextInputControl
                autoComplete="new-password"
                // disabled={performingAction}
                // error={!!(errors && errors.password)}
                // fullWidth
                // helperText={errors && errors.password ? errors.password[0] : ""}
                label="Password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                required
                type="password"
                // value={password}
                variant="outlined"
                InputLabelProps={{ required: false }}
                // onChange={this.handlePasswordChange}
              />
            </Grid>

            <Grid item xs>
              <TextInputControl
                autoComplete="password"
                // disabled={performingAction}
                // error={!!(errors && errors.passwordConfirmation)}
                fullWidth
                // helperText={
                //   errors && errors.passwordConfirmation
                //     ? errors.passwordConfirmation[0]
                //     : ""
                // }
                label="Password confirmation"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                required
                type="password"
                // value={passwordConfirmation}
                variant="outlined"
                InputLabelProps={{ required: false }}
                //  onChange={handlePasswordConfirmationChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Hidden>

      <DialogActions>
        <Button
          color="primary"
          //   disabled={
          //     !emailAddress ||
          //     !emailAddressConfirmation ||
          //     !password ||
          //     !passwordConfirmation ||
          //     performingAction
          //   }
          variant="contained"
          onClick={signUp}
        >
          Sign up
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(SignUpDialog);
