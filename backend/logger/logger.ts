import { Ierror } from "../interfaces/loggerInterfaces";

export const info = (message: string) => {
  console.log({ info: message });
};

export const error = (message: string): Ierror => {
  return { error: message };
};
