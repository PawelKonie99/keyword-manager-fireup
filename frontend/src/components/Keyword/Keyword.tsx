import { IkeywordButton } from "../../interfaces/contentInterfaces";
import { KeywordS } from "./KeywordStyles";


export const Keyword = ({ text, onClick }: IkeywordButton) => {
  return <KeywordS onClick={onClick}>{text}</KeywordS>;
};
