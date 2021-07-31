import { TableS } from "./MainTableStyles";
import { TheadS } from "./MainTableStyles";
import { TbodyS } from "./MainTableStyles";
import { TrS } from "./MainTableStyles";
import { TdS } from "./MainTableStyles";
import { ThS } from "./MainTableStyles";
import { Item } from "../Item/Item";

export const MainTable = () => {
  return (
    <TableS>
      <TheadS>
        <TrS>
          <ThS>Header content 1</ThS>
          <ThS about="3rem">Header content 2</ThS>
        </TrS>
      </TheadS>
      <TbodyS>
        <TrS>
          <TdS>Body content 1</TdS>
          <TdS about="flex">
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
            <Item text="Body content 2"></Item>
          </TdS>
        </TrS>
      </TbodyS>
      <TbodyS>
        <TrS>
          <TdS>Body content 3</TdS>
          <TdS>Body content 4</TdS>
        </TrS>
      </TbodyS>
    </TableS>
  );
};
