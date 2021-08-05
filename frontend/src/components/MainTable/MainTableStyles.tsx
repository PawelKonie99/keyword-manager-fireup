import styled from "styled-components";
import { Itheme } from "../../utils/theme";

export const TableS = styled.table`
  background-color: ${({ theme }: { theme: Itheme }) => theme.colors.navy};
  color: ${({ theme }: { theme: Itheme }) => theme.colors.darkBlue};
  border-collapse: collapse;
  max-width: 1024px;
  width: 100%;
  border-radius: 5px;
`;

export const TheadS = styled.thead`
  background-color: ${({ theme }: { theme: Itheme }) => theme.colors.yellow};
`;

export const ThS = styled.th<{ borderValue?: string; paddingValue?: string; maxWidthValue?: string }>`
  color: ${({ theme }: { theme: Itheme }) => theme.colors.darkBlue};
  padding: 1rem ${(props) => (props.paddingValue ? props.paddingValue : "0.5rem")} 1rem 1rem;
  border-right: ${(props) => (props.borderValue ? props.borderValue : "0px")} solid white;
  text-align: start;
  font-size: 1.5rem;
`;

export const TbodyS = styled.tbody``;

export const TrS = styled.tr`
  color: ${({ theme }: { theme: Itheme }) => theme.colors.white};
`;

export const TdS = styled.td<{ borderValue?: string; cursorValue?: string }>`
  display: ${(props) => (props.itemProp ? props.itemProp : "table-cell")};
  flex-wrap: wrap;
  border-right: ${(props) => (props.borderValue ? props.borderValue : "0px")} solid white;
  text-align: center;
  font-size: 1.4rem;
  cursor: ${(props) => (props.cursorValue ? props.cursorValue : "")};
`;

export const PS = styled.p`
  margin: 0.6rem;
  text-align: center;
  color: ${({ theme }: { theme: Itheme }) => theme.colors.navy};
  font-weight: 600;
  font-size: 1.1rem;
`;
