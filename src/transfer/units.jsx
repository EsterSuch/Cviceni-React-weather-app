import { months } from "../transfer/citiesDates.jsx";
import { days } from "../transfer/citiesDates.jsx";

export const forecastDate = (unix) => {
  const day = new Date(unix * 1000);
  return (months[day.getMonth()] + " " + day.getDate() + ", " + days[day.getDay()]);
};
/*
export const forecastMonth = (unix) => {
  const month = new Date(unix * 1000).getMonth();
  return `${months[(month)]}`;
};

export const forecastDate = (unix) => {
  const date = new Date(unix * 1000).getDate();
  return date;
};*/

export const timeSetup = (unix) => {
  const hours = new Date(unix * 1000).getHours();
  const minutes = new Date(unix * 1000).getMinutes();
  const timeFormat = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  return timeFormat;
};

