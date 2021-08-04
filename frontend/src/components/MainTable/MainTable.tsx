import { TableS, TheadS, TbodyS, TrS, TdS, ThS } from "./MainTableStyles";
import { Keyword } from "../Keyword/Keyword";
import { deleteCategory } from "../../services/deleteCategory";
import { deleteKeyword } from "../../services/deleteKeyword";
import { AddKeywordForm } from "../AddKeywordForm/AddKeywordForm";
import { DivS } from "../../pages/MainPage/MainPageStyles";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { ContainerS } from "../../pages/MainPage/MainPageStyles";
import { Icontent } from "../../interfaces/contentInterfaces";
import { Category } from "../../interfaces/categoryInterfaces";
import { setKeywords } from "../../helpers/setKeywords";

export const MainTable = ({ content, setContent }: Icontent) => {
  const handleRemoveCategory = async (categoryId: string) => {
    const responseId = await deleteCategory(categoryId);

    const copiedState = JSON.parse(JSON.stringify(content));
    const newCategories = copiedState.filter((category: Category) => category.id !== responseId);
    setContent(newCategories);
  };

  const handleRemoveKeyword = async (keywordId: string, categoryId: string) => {
    const newKeywords = await deleteKeyword(keywordId, categoryId);

    if (newKeywords) {
      const newContent = setKeywords(content, categoryId, newKeywords);
      setContent(newContent);
    }
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
        {content.map((category) => (
          <TbodyS key={category.id}>
            <TrS>
              <TdS cursorValue="pointer" borderValue="2px" onClick={() => handleRemoveCategory(category.id)}>
                {category.categoryName}
              </TdS>
              <TdS itemProp="flex">
                {category.keywords.map(({ id, keywordName }) => (
                  <Keyword key={id} text={keywordName} onClick={() => handleRemoveKeyword(id, category.id)} />
                ))}
              </TdS>
              <TdS>
                <AddKeywordForm categoryId={category.id} content={content} setContent={setContent} />
              </TdS>
            </TrS>
          </TbodyS>
        ))}
      </TableS>
    </ContainerS>
  );
};
