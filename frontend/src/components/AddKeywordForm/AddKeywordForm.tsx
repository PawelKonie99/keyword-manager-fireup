import { useState } from "react";
import { AddKeywordButton } from "../AddKeywordButton/AddKeywordButton";
import { FormS } from "./AddKeywordFormStyles";
import { AddInput } from "../AddInput/AddInput";
import { colors } from "../../utils/colors";
import { postNewKeyword } from "../../services/postNewKeyword";
import { Icontent } from "../../interfaces/contentInterfaces";
import { Category } from "../../interfaces/categoryInterfaces";

interface IaddKeyword extends Icontent {
  categoryId: string;
}

//todo add interafce
export const AddKeywordForm = ({ categoryId, content, setContent }: IaddKeyword) => {
  const [keywordName, setKeywordName] = useState("");

  const handleInputText = ({ value }: EventTarget & HTMLInputElement) => {
    setKeywordName(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newKeyword = await postNewKeyword(keywordName, categoryId);

    if (newKeyword) {
      const copiedState = JSON.parse(JSON.stringify(content));
      const properCategory = copiedState.find((category: Category) => category.id === categoryId);
      properCategory?.keywords.push(newKeyword);
      setContent(copiedState);
    }
    setKeywordName("");
  };

  return (
    <FormS onSubmit={(event) => handleSubmit(event)}>
      <AddInput
        color={colors.white}
        backgroundColor={colors.navy}
        padding={"0.1rem"}
        borderColor={colors.white}
        marginRight={"0rem"}
        placeholder={"New keyword"}
        value={keywordName}
        onChange={(event) => handleInputText(event.target)}
      />
      <AddKeywordButton />
    </FormS>
  );
};
