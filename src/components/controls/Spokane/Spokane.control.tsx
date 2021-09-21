import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardMedia } from "@material-ui/core";
import spkImage from "../../../assets/spk.jpg";
import WeatherControl from "../Weather/Weather.control";
import WeatherControlErrorBoundary from "../Weather/Weather.control.errorboundary";

export default function SpokaneControl() {
  return (
    <Card>
      <CardMedia component="img" image={spkImage} alt="Spokane - Riverfront" />
      <CardContent>
        <WeatherControlErrorBoundary>
          <WeatherControl />
        </WeatherControlErrorBoundary>
      </CardContent>
    </Card>
  );
}
