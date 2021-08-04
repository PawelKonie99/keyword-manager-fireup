import { useState } from "react";
import { postNewCategory } from "../../services/postNewCategory";
import { AddCategory } from "../AddCategoryButton/AddCategoryButton";
import { FormS } from "./AddCategoryFormStyles";
import { AddInput } from "../AddInput/AddInput";
import colors from "../../utils/colors";

//todo dodac typy
export const AddCategoryForm = ({ control, setControl }: any) => {
  const [categoryName, newCategoryName] = useState("");

  const handleInputText = (event: EventTarget & HTMLInputElement) => {
    newCategoryName(event.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postNewCategory(categoryName);
    setControl(control + 1);
    newCategoryName("");
  };

  return (
    <FormS onSubmit={(event) => handleSubmit(event)}>
      <AddInput
        color={colors.navy}
        backgroundColor={"#C4C4C4"}
        padding={"1rem"}
        borderColor={colors.navy}
        marginRight={"1rem"}
        placeholder={"New Category"}
        value={categoryName}
        //todo change this
        onChange={(event) => handleInputText(event.target)}
      />
      <AddCategory />
    </FormS>
  );
};
