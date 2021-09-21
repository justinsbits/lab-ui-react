import Card from "@mui/material/Card";
import { CardMedia } from "@material-ui/core";
import CardContent from "@mui/material/CardContent";
import WeatherControl from "../Weather/Weather.control";
import WeatherControlErrorBoundary from "../Weather/Weather.control.errorboundary";

import spkImage from "../../../assets/spk.jpg";

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
