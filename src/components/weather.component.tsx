import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import getSpokaneWeather from "../services/weather/weatherService";
import { useEffect, useState } from "react";

import WeatherResponseInterface from "../services/weather/weatherService.response";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function setWeatherUI(
  weather: undefined | WeatherResponseInterface
): string | undefined {
  let val: undefined | string;
  if (weather !== undefined) {
    if (weather.error !== null) {
      // console.error(
      //   JSON.stringify(
      //     weather.error,
      //     Object.getOwnPropertyNames(weather.error) // Error object doesn't ahve enumerable properties - i.e. not covered by JSON.stringify (would see {} only)
      //   )
      // );
      val = "Unknown";
    } else {
      val = `${weather.data?.name} -- Temp: ${weather.data?.main.temp}`;
    }
  }
  return val;
}

export default function SimpleCard() {
  const [spokaneWeather, setSpokaneWeather] =
    useState<WeatherResponseInterface>();

  useEffect(() => {
    try {
      getSpokaneWeather(setSpokaneWeather);
    } catch (err) {
      console.log("useEffect:" + err);
    }
  }, []);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {setWeatherUI(spokaneWeather)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
