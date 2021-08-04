import { useState } from "react";
import { AddKeywordButton } from "../AddKeywordButton/AddKeywordButton";
import { FormS } from "./AddKeywordFormStyles";
import { AddInput } from "../AddInput/AddInput";
import { colors } from "../../utils/colors";
import { postNewKeyword } from "../../services/postNewKeyword";

//todo add interafce
export const AddKeywordForm = ({ categoryId, control, setControl }: any) => {
  const [keywordName, setKeywordName] = useState("");

  const handleInputText = (event: EventTarget & HTMLInputElement) => {
    setKeywordName(event.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postNewKeyword(keywordName, categoryId);
    setControl(control + 1);
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
