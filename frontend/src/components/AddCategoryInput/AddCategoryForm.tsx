import { useState } from "react";
import { AddCategory } from "../AddCategoryButton/AddCategoryButton";
import { FormS, LabelS, InputS } from "./AddCategoryFormStyles";

export {};

export const AddCategoryForm = () => {
  const [newCategory, setNewCategory] = useState("");

  const handleInputText = (event: EventTarget & HTMLInputElement) => {
    setNewCategory(event.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
