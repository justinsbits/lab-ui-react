import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import { GitHub, Home, LinkedIn, Person, Settings } from "@mui/icons-material";

import WeatherComponent from "../Spokane/Spokane.control";
import SignInDialog from "../../dialogs/SignIn/SignIn.dialog";
import SignUpDialog from "../../dialogs/SignUp/SignUp.dialog";

const drawerWidth = 75;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function AppBarControl() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [signInDialogOpen, setsignInDialogOpen] = React.useState(false);
  const [signUpDialogOpen, setsignUpDialogOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleSignInDialogOpen = () => {
  //   setsignInDialogOpen(true);
  // };

  const handleSignInDialogClose = () => {
    setsignInDialogOpen(false);
  };

  // const handleSignUpDialogOpen = () => {
  //   setsignUpDialogOpen(true);
  // };

  const handleSignUpDialogClose = () => {
    setsignUpDialogOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key="home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
          </ListItem>
          <ListItem button key="about">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
          </ListItem>
          <ListItem
            button
            key="linkedin"
            onClick={(e) =>
              window.open(
                "https://www.linkedin.com/in/spk-justin-schultz",
                "_blank"
              )
            }
          >
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
          </ListItem>
          <ListItem
            button
            key="github"
            onClick={(e) =>
              window.open("https://github.com/justinsbits", "_blank")
            }
          >
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="1">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <SignInDialog
          open={signInDialogOpen}
          onClose={handleSignInDialogClose}
        />
        <SignUpDialog
          open={signUpDialogOpen}
          onClose={handleSignUpDialogClose}
        />
        <WeatherComponent />
      </Main>
    </Box>
  );
}
