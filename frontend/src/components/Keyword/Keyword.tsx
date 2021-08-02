import { KeywordS } from "./KeywordStyles";

interface Iitem {
  text: string;
  onClick: () => void;
  // id: string
}

export const Keyword = ({ text, onClick }: Iitem) => {
  return <KeywordS onClick={onClick}>{text}</KeywordS>;
};
