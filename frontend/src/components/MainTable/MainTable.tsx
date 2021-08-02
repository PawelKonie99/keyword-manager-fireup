import { TableS, TheadS, TbodyS, TrS, TdS, ThS } from "./MainTableStyles";
import { Keyword } from "../Keyword/Keyword";
import { AddButton } from "../AddItemButton/AddItemButton";
import { useEffect, useState } from "react";
import { getAll } from "../../services/getAllData";
import { Category } from "../../interfaces/category";
import { putNewCategory } from "../../services/putNewCategory";
import { deleteCategory } from "../../services/deleteCategory";
// import { AddCategory } from "../AddCategoryButton/AddCategoryButton";

export const MainTable = ({ controlCategory, setControlCategory }: any) => {
  const [content, setContent] = useState<Category[]>();

  useEffect(() => {
    getContent();
  }, [controlCategory]);

  const getContent = async (): Promise<void> => {
    const data = await getAll();
    setContent(data.data);
  };

  const handleRemoveCategory = async (categoryId: string) => {
    await deleteCategory(categoryId);
    setControlCategory(controlCategory + 1);
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
            <TdS borderValue="2px" onClick={() => handleRemoveCategory(category.id)}>
              {category.categoryName}
            </TdS>
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
