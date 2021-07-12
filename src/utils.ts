export const convertKelvinToCelcius = (kelvin: number): string =>
  (kelvin - 273.15).toFixed(1);

export const convertKelvinToFahrenheit = (kelvin: number): string =>
  (((kelvin - 273.15) * 9) / 5 + 32).toFixed(1);

export const convertHPAtoMM = (hPa: number): string => (hPa / 1.333).toFixed(1);

export const getCardinalDirection = (angle: number): string => {
  const directions = [
    "северный",
    "северо-восточный",
    "восточный",
    "юго-восточный",
    "южный",
    "южно-западный",
    "западный",
    "западно-восточный",
  ];
  return directions[Math.round(angle / 45) % 8];
};

export const capitalizeAllWords = (sentence: string): string =>
  sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");

export const formatEmptyValue = (
  value: string | number | undefined
): string | number => (value === undefined ? "--" : value);
