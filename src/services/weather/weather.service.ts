import {
  WeatherResponseInterface,
  APIWeatherResponseInterface,
  WeatherResponse,
} from "./WeatherResponse.interface";
import { httpRequest } from "../../tools/apiCall";
import { getSpokaneWeatherMockURI } from "./mock/spokaneWeather.mock.api";

export default async function getSpokaneWeather(setResponse: any) {
  const baseWeatherUri: string =
    "http://api.openweathermap.org/data/2.5/weather";
  const query: string = "?q=spokane&units=imperial";
  const key = "&appid=867548eeeaefffb0e229939f6f7119bb";
  let uri = baseWeatherUri + query + key;
  let weatherInfo: WeatherResponseInterface | null = null;

  // !!! mock - figure out how to drive off of dev
  if (true) uri = getSpokaneWeatherMockURI();

  try {
    const content = await httpRequest(uri);
    weatherInfo = new WeatherResponse(
      null,
      content as APIWeatherResponseInterface
    );
    setResponse(weatherInfo);
  } catch (err) {
    weatherInfo = new WeatherResponse(err as Error, null);
    setResponse(weatherInfo);
  }
}
