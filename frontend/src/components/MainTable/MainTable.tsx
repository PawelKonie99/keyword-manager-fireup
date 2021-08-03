import { TableS, TheadS, TbodyS, TrS, TdS, ThS } from "./MainTableStyles";
import { Keyword } from "../Keyword/Keyword";
import { useEffect, useState } from "react";
import { getAll } from "../../services/getAllData";
import { Category } from "../../interfaces/category";
import { deleteCategory } from "../../services/deleteCategory";
import { deleteKeyword } from "../../services/deleteKeyword";
import { AddKeywordForm } from "../AddKeywordForm/AddKeywordForm";
import { postNewKeyword } from "../../services/postNewKeyword";

export const MainTable = ({ control, setControl }: any) => {
  const [content, setContent] = useState<Category[]>();

  useEffect(() => {
    getContent();
  }, [control]);

  const getContent = async (): Promise<void> => {
    const data = await getAll();
    setContent(data.data);
  };

  const handleRemoveCategory = async (categoryId: string) => {
    await deleteCategory(categoryId);
    setControl(control + 1);
  };

  const handleRemoveKeyword = async (keywordId: string) => {
    await deleteKeyword(keywordId);
    setControl(control + 1);
  };

  //TODO add keys to map
  return (
    <TableS>
      <TheadS>
        <TrS>
          <ThS borderValue="2px">Categories</ThS>
          <ThS paddingValue="3rem">Keywords</ThS>
          <ThS></ThS>
        </TrS>
      </TheadS>
      {content?.map((category) => (
        <TbodyS key={category.id}>
          <TrS>
            <TdS cursorValue="pointer" borderValue="2px" onClick={() => handleRemoveCategory(category.id)}>
              {category.categoryName}
            </TdS>
            <TdS itemProp="flex">
              {category.keywords?.map((keyword) => (
                <>
                  <Keyword
                    key={keyword.id}
                    text={keyword.keywordName}
                    onClick={() => handleRemoveKeyword(keyword.id)}
                  />
                </>
              ))}
            </TdS>
            <TdS>
              <AddKeywordForm categoryId={category.id} control={control} setControl={setControl} />
            </TdS>
          </TrS>
        </TbodyS>
      ))}
    </TableS>
  );
};
