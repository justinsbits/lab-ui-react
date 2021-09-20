import { useFetch } from "../useFetch";
import { getSpokaneWeatherMockURI } from "./mock/spokaneWeather.mock.api";

interface WeatherAPIResponseInterface {
  main: {
    temp: number;
  };
  timezone: number;
  id: number;
  name: string;
}

interface WeatherResponseInterface {
  error: null | Error;
  data: null | WeatherAPIResponseInterface;
  loading: boolean;
}

class WeatherResponse implements WeatherResponseInterface {
  error: null | Error;
  data: null | WeatherAPIResponseInterface;
  loading: boolean;
  constructor(
    error: null | Error,
    data: null | WeatherAPIResponseInterface,
    loading: boolean
  ) {
    this.error = error;
    this.data = data;
    this.loading = loading;
  }
}

function getSpokaneWeatherProdURI(): string {
  const baseWeatherUri: string =
    "http://zapi.openweathermap.org/data/2.5/weather";
  const query: string = "?q=spokane&units=imperial";
  const key = "&appid=867548eeeaefffb0e229939f6f7119bb";
  return baseWeatherUri + query + key;
}

function getSpokaneWeatherURI(): string {
  let uri = "";
  const prod = true; // !!! make config based

  if (prod) {
    uri = getSpokaneWeatherProdURI();
  } else {
    uri = getSpokaneWeatherMockURI();
  }
  return uri;
}

export enum WeatherForCity {
  SPOKANE = "Spokane",
}

export function useWeather(
  city: WeatherForCity = WeatherForCity.SPOKANE
): WeatherResponseInterface {
  let uri = "";
  switch (city) {
    case WeatherForCity.SPOKANE:
      uri = getSpokaneWeatherURI();
      break;
    default:
      throw new Error("useWeather not implemented for: " + city);
  }
  const { data, error, loading } = useFetch(uri);
  return new WeatherResponse(error, data, loading);
}

export type { WeatherResponseInterface };
