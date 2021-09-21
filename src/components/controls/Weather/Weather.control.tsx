import { makeStyles } from "@material-ui/core";

import { useWeather } from "../../../services/weather/Weather";
import { LoadingControl } from "../Loading.tsx/Loading.control";

const useStyles = makeStyles({
  weatherValue: { fontWeight: "bold" },
});

export default function WeatherControl() {
  const wri = useWeather();
  const classes = useStyles();

  if (wri.error) throw wri.error;
  if (wri.loading) {
    return <LoadingControl />;
  }

  return (
    <div>
      <h6>Current Temperature: </h6>
      <h6 className={classes.weatherValue}>
        {JSON.stringify(wri.data?.main.temp)}
      </h6>
      <h6>F</h6>
    </div>
  );
}
