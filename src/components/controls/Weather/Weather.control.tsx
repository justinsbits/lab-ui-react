import { makeStyles } from "@material-ui/core";
import { useWeather } from "../../../services/weather/Weather";
import { LoadingControl } from "../Loading.tsx/Loading.control";

const useStyles = makeStyles({
  root: {
    fontSize: 18,
  },
  weatherLabel: {},
  weatherValue: { fontSize: 18, fontWeight: "bold" },
  weatherScale: {},
});

export default function WeatherControl() {
  const wri = useWeather();
  const classes = useStyles();

  if (wri.error) throw wri.error;
  if (wri.loading) {
    return <LoadingControl />;
  }

  return (
    <div className={classes.root}>
      <label className={classes.weatherLabel}>Current Temperature: </label>
      <label className={classes.weatherValue}>
        {JSON.stringify(wri.data?.main.temp)}
      </label>
      <label className={classes.weatherScale}>F</label>
    </div>
  );
}
