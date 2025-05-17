export const capitalizeFirstChar = (inputString: string) =>
  inputString.charAt(0).toUpperCase() + inputString.slice(1);

export const removeDash = (inputString: string) =>
  inputString.replaceAll('-', ' ');
