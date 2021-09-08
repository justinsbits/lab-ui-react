import WeatherResponseInterface, {
  apiWeatherResponseInterface,
  WeatherResponse,
} from "./weatherService.response";
import { httpRequest } from "../../tools/apiCall";

export default async function getSpokaneWeather(setResponse: any) {
  const baseWeatherUri: string =
    "http://api.openweathermap.org/data/2.5/weather";
  const query: string = "?q=spokane&units=imperial";
  const key = "&appid=867548eeeaefffb0e229939f6f7119bb";
  let weatherInfo: WeatherResponseInterface | null = null;

  try {
    const content = await httpRequest(baseWeatherUri + query + key);
    weatherInfo = new WeatherResponse(
      null,
      content as apiWeatherResponseInterface
    );
    setResponse(weatherInfo);
  } catch (err) {
    weatherInfo = new WeatherResponse(err as Error, null);
    setResponse(weatherInfo);
  }
}
