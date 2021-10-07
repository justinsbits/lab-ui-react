import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  IconButton,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

//import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../services/authentication/Authentication.context";
import AuthenticationService from "../../../services/authentication/Authentication.service";
interface SignInDialogProps {
  open: boolean;
  //   selectedValue: string;
  onClose: () => void;
}

function SignInDialog(props: SignInDialogProps) {
  const { open, onClose } = props;
  const { toggleAuthenticated } = useContext(AuthContext);
  const history = useHistory();

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
      AuthenticationService.signIn(
        formik.values.email,
        formik.values.password
      ).then(() => {
        toggleAuthenticated();
        history.push("/");
        handleDialogExit();
      });
    },
  });

  const handleDialogExit = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleDialogExit}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item xs={11}>
            <DialogTitle>Sign in to your account</DialogTitle>
          </Grid>
          <Grid item xs={1} alignItems="flex-start">
            <Tooltip title="Close">
              <IconButton onClick={handleDialogExit}>
                <CancelIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <DialogContent>
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
          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
export default SignInDialog;
