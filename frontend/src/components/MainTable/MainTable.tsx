import { TableS, TheadS, TbodyS, TrS, TdS, ThS } from "./MainTableStyles";
import { Item } from "../Item/Item";
import { AddButton } from "../AddItemButton/AddItemButton";

export const MainTable = () => {
  return (
    <TableS>
      <TheadS>
        <TrS>
          <ThS borderValue="2px">Header content 1</ThS>
          <ThS paddingValue="3rem">Header content 2</ThS>
          <ThS></ThS>
        </TrS>
      </TheadS>
      <TbodyS>
        <TrS>
          <TdS borderValue="2px">Body content 1</TdS>
          <TdS itemProp="flex">
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
          </TdS>
          <TdS>
            <AddButton />
          </TdS>
        </TrS>
      </TbodyS>
      <TbodyS>
        <TrS>
          <TdS borderValue="2px">Body content 3</TdS>
          <Item text="Body content 4"></Item>
          <TdS>
            <AddButton />
          </TdS>
        </TrS>
      </TbodyS>
    </TableS>
  );
};
