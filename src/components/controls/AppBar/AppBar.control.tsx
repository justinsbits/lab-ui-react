import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//import Button from "@material-ui/core/Button";
//import "@fontsource/roboto";

import WeatherComponent from "../Spokane/Spokane.control";
import SignInDialog from "../../dialogs/SignIn/SignIn.dialog";
import SignUpDialog from "../../dialogs/SignUp/SignUp.dialog";
import { GitHub, Home, LinkedIn, Person, Settings } from "@material-ui/icons";
const drawerWidth = 75;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: "#cccccc",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarGrow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "left",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

export function AppBarControl() {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [signInDialogOpen, setsignInDialogOpen] = React.useState(false);
  const [signUpDialogOpen, setsignUpDialogOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "#2E3B55" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawerOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.appBarGrow} />
          {/* <Button color="inherit" onClick={handleSignUpDialogOpen}>
            SIGN UP
          </Button>
          <Button color="inherit" onClick={handleSignInDialogOpen}>
            SIGN IN
          </Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
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
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        <SignInDialog
          open={signInDialogOpen}
          onClose={handleSignInDialogClose}
        />
        <SignUpDialog
          open={signUpDialogOpen}
          onClose={handleSignUpDialogClose}
        />
        <WeatherComponent />
      </main>
    </div>
  );
}
