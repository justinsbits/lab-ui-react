import { Route, Switch } from "react-router-dom";
import AboutMeControl from "../AboutMe/AboutMe.control";
import SettingsControl from "../Settings/Settings.control";
import SpokaneControl from "../Spokane/Spokane.control";

export default function DashboardControl() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SpokaneControl} />
        <Route path="/resume" component={AboutMeControl} />
        <Route path="/settings" component={SettingsControl} />
      </Switch>
    </>
  );
}
