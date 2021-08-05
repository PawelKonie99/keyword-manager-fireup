import { Dispatch, SetStateAction } from "react";
import { Icategory } from "./categoryInterfaces";

export interface Icontent {
  content: Icategory[];
  setContent: Dispatch<SetStateAction<Icategory[]>>;
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
