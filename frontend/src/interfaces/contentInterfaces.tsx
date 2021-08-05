import { Dispatch, SetStateAction } from "react";
import { Category } from "./categoryInterfaces";

export interface Icontent {
  content: Category[];
  setContent: Dispatch<SetStateAction<Category[]>>;
}

export interface IaddInput {
  value: string;
  onChange: (event: any) => void;
  backgroundColor: string;
  color: string;
  padding: string;
  borderColor: string;
  marginRight: string;
  placeholder: string;
}

export interface IkeywordButton {
  text: string;
  onClick: () => void;
}