import { SetStateAction, useState } from "react";
import { postNewCategory } from "../../services/postNewCategory";
import { AddCategory } from "../AddCategoryButton/AddCategoryButton";
import { FormS } from "./AddCategoryFormStyles";
import { AddInput } from "../AddInput/AddInput";
import colors from "../../utils/colors";
import { Icontent } from "../../interfaces/contentInterfaces";

//todo dodac typy
export const AddCategoryForm = ({ content, setContent }: Icontent) => {
  const [categoryName, newCategoryName] = useState("");

  const handleInputText = (value: SetStateAction<string>) => {
    newCategoryName(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCategory = await postNewCategory(categoryName);
      console.log(newCategory)
    if (newCategory) {
      setContent(content.concat(newCategory));
    }
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
        onChange={(event) => handleInputText(event.target.value)}
      />
      <AddCategory />
    </FormS>
  );
};
