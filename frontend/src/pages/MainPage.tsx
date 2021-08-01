import styled from "styled-components";
import { MainTable } from "../components/MainTable/MainTable";
import { AddCategory } from "../components/AddCategoryButton/AddCategoryButton";

export const MainPage = () => {
  return (
    <ContainerS>
      <DivS>
        <AddCategory />
      </DivS>
      <MainTable />
    </ContainerS>
  );
};

const ContainerS = styled.section`
  margin: auto;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
`;

const DivS = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: auto;
`;
