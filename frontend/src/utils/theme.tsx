import { colors } from "./colors";

export interface Itheme {
  colors: {
    white: string;
    black: string;
    yellow: string;
    darkBlue: string;
    navy: string;
  };
}

export const theme: Itheme = {
  colors,
};
