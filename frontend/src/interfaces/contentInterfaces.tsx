import { Dispatch, SetStateAction } from "react";
import { Category } from "./categoryInterfaces";

export interface Icontent {
  content: Category[];
  setContent: Dispatch<SetStateAction<Category[]>>;
}
