import { SetStateAction, useState } from "react";
import { AddKeywordButton } from "../AddKeywordButton/AddKeywordButton";
import { FormS } from "./AddKeywordFormStyles";
import { AddInput } from "../AddInput/AddInput";
import { colors } from "../../utils/colors";
import { postNewKeyword } from "../../services/postNewKeyword";
import { IaddKeyword } from "../../interfaces/keywordInterfaces";
import { setKeywords } from "../../helpers/setKeywords";

export const AddKeywordForm = ({ categoryId, content, setContent }: IaddKeyword) => {
  const [keywordName, setKeywordName] = useState("");

  const handleInputText = (value: SetStateAction<string>) => {
    setKeywordName(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const keywordsRes= await postNewKeyword(keywordName, categoryId);

    if (keywordsRes) {
      const newContent = setKeywords({content, categoryId: keywordsRes.categoryIdResponse, newKeywords: keywordsRes.newKeywords});
      setContent(newContent);
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
        onChange={(event) => handleInputText(event.target.value)}
      />
      <AddKeywordButton />
    </FormS>
  );
};
