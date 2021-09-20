import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useWeather } from "../../../services/weather/Weather";
import { LoadingControl } from "../Loading.tsx/Loading.control";
import { CardMedia } from "@material-ui/core";
import spkImage from "../../../assets/spk.jpg";

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

export default function SimpleCard() {
  const classes = useStyles();
  const wri = useWeather();

  if (wri.error) throw wri.error;
  if (wri.loading) return <LoadingControl />;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        style={{ height: 500, alignItems: "left" }}
        image={spkImage}
        alt="Spokane - Riverfront"
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {JSON.stringify(wri.data?.main.temp)}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">More Stuff Here</Button> */}
      </CardActions>
    </Card>
  );
}
