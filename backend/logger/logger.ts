import { IloggerError, IloggerInfo } from "../interfaces/loggerInterfaces";

export const info = (message: string): IloggerInfo => {
  return { info: message };
};

export const error = (message: string): IloggerError => {
  return { error: message };
};
