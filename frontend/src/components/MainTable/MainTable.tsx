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

export const MainTable = ({ content, setContent }: Icontent) => {
  const handleRemoveCategory = async (categoryId: string) => {
    const responseId = await deleteCategory(categoryId);
    const copiedState = JSON.parse(JSON.stringify(content));
    const categoryIndex = copiedState.findIndex((category: Category) => category.id === responseId);
    if (categoryIndex !== -1) copiedState.splice(categoryIndex, 1);
    setContent(copiedState);
  };

  const handleRemoveKeyword = async (keywordId: string) => {
    const responseId = await deleteKeyword(keywordId);
    const copiedState = JSON.parse(JSON.stringify(content));

    copiedState.forEach((category: Category) => {
      const index = category.keywords.findIndex((x) => x.id === responseId);
      if (index !== -1) {
        category.keywords.splice(index, 1);
      }
    });
    setContent(copiedState);
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
                  <Keyword key={id} text={keywordName} onClick={() => handleRemoveKeyword(id)} />
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
