import { TableS, TheadS, TbodyS, TrS, TdS, ThS } from "./MainTableStyles";
import { Keyword } from "../Keyword/Keyword";
import { AddButton } from "../AddItemButton/AddItemButton";
import { useEffect, useState } from "react";
import { getAll } from "../../services/getAllData";
import { Category } from "../../interfaces/category";

export const MainTable = () => {
  const [content, setContent] = useState<Category[]>();

  useEffect(() => {
    getContent();
  }, []);

  const getContent = async (): Promise<void> => {
    const data = await getAll();
    setContent(data.data);
  };

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
        <TbodyS>
          <TrS>
            <TdS borderValue="2px">{category.categoryName}</TdS>
            <TdS itemProp="flex">
              {category.keywords?.map((keyword) => (
                <>
                  <Keyword text={keyword.keywordName}></Keyword>
                </>
              ))}
            </TdS>
            <TdS>
              <AddButton />
            </TdS>
          </TrS>
        </TbodyS>
      ))}
    </TableS>
  );
};
