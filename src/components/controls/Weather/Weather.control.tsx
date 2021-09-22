import Typography from "@mui/material/Typography";
import { useWeather } from "../../../services/weather/Weather";
import { LoadingControl } from "../Loading/Loading.control";

export default function WeatherControl() {
  const wri = useWeather();

  if (wri.error) throw wri.error;
  if (wri.loading) {
    return <LoadingControl />;
  }

  return (
    <Typography variant="h6" noWrap component="div">
      Spokane - Current Temperature: {JSON.stringify(wri.data?.main.temp)}F
    </Typography>
  );
}
