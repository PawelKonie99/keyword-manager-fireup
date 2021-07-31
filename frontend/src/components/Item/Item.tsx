import { ItemS } from "./ItemStyles";

interface Iitem {
  text: string;
}

export const Item = ({ text }: Iitem) => {
  return <ItemS>{text}</ItemS>;
};
