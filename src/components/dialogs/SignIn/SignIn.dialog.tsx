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
  // Hidden,
  Grid,
  Button,
  // Divider,
  TextField,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { AuthProviderList } from "../../controls/AuthProviderList/AuthProviderList.control";
//import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

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

interface SignInDialogProps {
  open: boolean;
  //   selectedValue: string;
  onClose: () => void;
}

function SignInDialog(props: SignInDialogProps) {
  const classes = useStyles(theme);
  const { open, onClose } = props;

  // const signIn = () => {};
  function signInWithAuthProvider(provider: any) {}

  const PasswordSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email address is required"),
    password: yup
      .string()
      .min(8, "Password should be a minimum of 8 characters in length")
      .required("Password can't be empty"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: PasswordSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleExited = () => {
    formik.resetForm();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onExited={handleExited}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle disableTypography>
          <Typography variant="h6">Sign in to your account</Typography>

          <Tooltip title="Close">
            <IconButton className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </DialogTitle>

        <DialogContent>
          {
            <AuthProviderList
              gutterBottom
              onAuthProviderClick={signInWithAuthProvider}
            />
          }

          <Grid container direction="column" spacing={2}>
            <Grid item xs>
              <TextField
                type="email"
                autoComplete="email"
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                label="Email address"
                placeholder="name@example.com"
                required
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs>
              <TextField
                type="password"
                autoComplete="current-password"
                variant="outlined"
                fullWidth
                id="password"
                name="password"
                label="Password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                required
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            color="primary"
            //       disabled={!emailAddressState}
            variant="outlined"
            //   onClick={this.resetPassword}
          >
            Reset password
          </Button>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            // onClick={signIn}
          >
            Sign in
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
export default withStyles(styles)(SignInDialog);
