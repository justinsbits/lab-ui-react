import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../../pages/NotFound/NotFound.page";
import HomePage from "../../pages/Home/Home.page";
import ResumePage from "../../pages/Resume/Resume.page";
import SettingsPage from "../../pages/Settings/Settings.page";

export default function DashboardControl() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/settings" component={SettingsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
