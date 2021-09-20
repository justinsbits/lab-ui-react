import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";

import { CardMedia } from "@material-ui/core";
import spkImage from "../../../assets/spk.jpg";
import WeatherControl from "../Weather/Weather.control";
import WeatherControlErrorBoundary from "../Weather/Weather.control.errorboundary";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  image: {
    "object-fit": "scale-down",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.image}
        image={spkImage}
        alt="Spokane - Riverfront"
      />
      <CardContent>
        <WeatherControlErrorBoundary>
          <WeatherControl />
        </WeatherControlErrorBoundary>
      </CardContent>
      <CardActions>
        {/* <Button size="small">More Stuff Here</Button> */}
      </CardActions>
    </Card>
  );
}
