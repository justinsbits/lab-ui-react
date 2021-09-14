export interface APIWeatherResponseInterface {
  main: {
    temp: number;
  };
  timezone: number;
  id: number;
  name: string;
}

export interface WeatherResponseInterface {
  error: null | Error;
  data: null | APIWeatherResponseInterface;
}

export class WeatherResponse implements WeatherResponseInterface {
  error: null | Error;
  data: null | APIWeatherResponseInterface;
  constructor(error: null | Error, data: null | APIWeatherResponseInterface) {
    this.error = error;
    this.data = data;
  }
}
