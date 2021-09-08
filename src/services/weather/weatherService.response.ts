export interface apiWeatherResponseInterface {
  main: {
    temp: number;
  };
  timezone: number;
  id: number;
  name: string;
}

export default interface WeatherResponseInterface {
  error: null | Error;
  data: null | apiWeatherResponseInterface;
}

export class WeatherResponse implements WeatherResponseInterface {
  error: null | Error;
  data: null | apiWeatherResponseInterface;
  constructor(error: null | Error, data: null | apiWeatherResponseInterface) {
    this.error = error;
    this.data = data;
  }
}
