import { KeywordS } from "./KeywordStyles";

interface Iitem {
  text: string;
}

export const Keyword = ({ text }: Iitem) => {
  return <KeywordS>{text}</KeywordS>;
};
