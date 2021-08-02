import { MainTable } from "../../components/MainTable/MainTable";
import { AddCategoryForm } from "../../components/AddCategoryInput/AddCategoryForm";
import { useState } from "react";
import { ContainerS, DivS } from "./MainPageStyles";

export const MainPage = () => {
  const [control, setControl] = useState(1);

  return (
    <ContainerS>
      <DivS>
        <AddCategoryForm control={control} setControl={setControl} />
      </DivS>
      <MainTable control={control} setControl={setControl} />
    </ContainerS>
  );
};
