import { MainTable } from "../../components/MainTable/MainTable";
import { AddCategoryForm } from "../../components/AddCategoryInput/AddCategoryForm";
import { useState } from "react";
import { ContainerS, DivS } from "./MainPageStyles";

export const MainPage = () => {
  const [controlCategory, setControlCategory] = useState(1);

  return (
    <ContainerS>
      <DivS>
        <AddCategoryForm controlCategory={controlCategory} setControlCategory={setControlCategory} />
      </DivS>
      <MainTable controlCategory={controlCategory} setControlCategory={setControlCategory} />
    </ContainerS>
  );
};
