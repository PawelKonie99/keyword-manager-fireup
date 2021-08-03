import { useState } from "react";
import { AddKeywordButton } from "../AddKeywordButton/AddKeywordButton";
import { FormS } from "./AddKeywordFormStyles";
import { AddInput } from "../AddInput/AddInput";
import { colors } from "../../utils/colors";
import { postNewKeyword } from "../../services/postNewKeyword";

//todo add interafce
export const AddKeywordForm = ({ categoryId, control, setControl }: any) => {
  const [newKeyword, setNewKeyword] = useState("");

  const handleInputText = (event: EventTarget & HTMLInputElement) => {
    setNewKeyword(event.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postNewKeyword(newKeyword, categoryId);
    setControl(control + 1);
    setNewKeyword("");
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
        value={newKeyword}
        onChange={(event) => handleInputText(event.target)}
      />
      <AddKeywordButton />
    </FormS>
  );
};
