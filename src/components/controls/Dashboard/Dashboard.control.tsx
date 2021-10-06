import { useContext } from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";
import AuthContext from "../../../services/authentication/Authentication.context";
import NotFoundPage from "../../pages/NotFound/NotFound.page";
import HomePage from "../../pages/Home/Home.page";
import ResumePage from "../../pages/Resume/Resume.page";
import SettingsPage from "../../pages/Settings/Settings.page";
import AdminSandboxPage from "../../pages/AdminSandbox/AdminSandbox.page";

function PrivateRoute({ children, ...rest }: RouteProps) {
  const { userAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function DashboardControl() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/settings" component={SettingsPage} />
        <PrivateRoute path="/admin" component={AdminSandboxPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
