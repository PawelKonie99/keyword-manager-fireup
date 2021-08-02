import { useState } from "react";
import { putNewCategory } from "../../services/putNewCategory";
import { AddCategory } from "../AddCategoryButton/AddCategoryButton";
import { FormS, LabelS, InputS } from "./AddCategoryFormStyles";

export {};

//todo dodac typy
export const AddCategoryForm = ({ controlCategory, setControlCategory }: any) => {
  const [newCategory, setNewCategory] = useState("");

  const handleInputText = (event: EventTarget & HTMLInputElement) => {
    setNewCategory(event.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await putNewCategory(newCategory);
    setControlCategory(controlCategory + 1);
    setNewCategory("");
  };

  return (
    <FormS onSubmit={(event) => handleSubmit(event)}>
      <LabelS>
        <InputS
          placeholder="New category"
          type="text"
          value={newCategory}
          onChange={(event) => handleInputText(event.target)}
        />
      </LabelS>
      <AddCategory />
    </FormS>
  );
};
