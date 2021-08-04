import { TableS, TheadS, TbodyS, TrS, TdS, ThS } from "./MainTableStyles";
import { Keyword } from "../Keyword/Keyword";
import { useEffect, useState } from "react";
import { getAll } from "../../services/getAllData";
import { Category } from "../../interfaces/category";
import { deleteCategory } from "../../services/deleteCategory";
import { deleteKeyword } from "../../services/deleteKeyword";
import { AddKeywordForm } from "../AddKeywordForm/AddKeywordForm";
import { DivS } from "../../pages/MainPage/MainPageStyles";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { ContainerS } from "../../pages/MainPage/MainPageStyles";

export const MainTable = ({ control, setControl }: any) => {
  const [content, setContent] = useState<Category[]>([]);

  useEffect(() => {
    getContent();
  }, [control]);

  const getContent = async (): Promise<void> => {
    const { data } = await getAll();
    setContent(data);
  };

  const handleRemoveCategory = async (categoryId: string) => {
    await deleteCategory(categoryId);
    setControl(control + 1);
  };

  const handleRemoveKeyword = async (keywordId: string) => {
    await deleteKeyword(keywordId);
    setControl(control + 1);
  };

  return (
    <ContainerS>
      <DivS>
        <AddCategoryForm content={content} setContent={setContent} />
      </DivS>
      <TableS>
        <TheadS>
          <TrS>
            <ThS borderValue="2px">Categories</ThS>
            <ThS paddingValue="3rem">Keywords</ThS>
            <ThS />
          </TrS>
        </TheadS>
        {content.map(({ id, categoryName, keywords }) => (
          <TbodyS key={id}>
            <TrS>
              <TdS cursorValue="pointer" borderValue="2px" onClick={() => handleRemoveCategory(id)}>
                {categoryName}
              </TdS>
              <TdS itemProp="flex">
                {keywords.map(({ id, keywordName }) => (
                  <Keyword key={id} text={keywordName} onClick={() => handleRemoveKeyword(id)} />
                ))}
              </TdS>
              <TdS>
                <AddKeywordForm categoryId={id} control={control} setControl={setControl} />
              </TdS>
            </TrS>
          </TbodyS>
        ))}
      </TableS>
    </ContainerS>
  );
};
