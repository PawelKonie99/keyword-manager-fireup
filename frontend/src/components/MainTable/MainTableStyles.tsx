import styled from "styled-components";
import { Itheme } from "../../utils/theme";

export const TableS = styled.table`
  background-color: ${({ theme }: { theme: Itheme }) => theme.colors.navy};
  color: ${({ theme }: { theme: Itheme }) => theme.colors.darkBlue};
  border-collapse: collapse;
  width: 1024px;
`;

export const TheadS = styled.thead`
  background-color: ${({ theme }: { theme: Itheme }) => theme.colors.yellow};
`;

export const ThS = styled.th`
  color: ${({ theme }: { theme: Itheme }) => theme.colors.darkBlue};
  padding: 1rem ${(props) => (props.about ? props.about : "0.5rem")} 1rem 0.5rem;
`;

export const TbodyS = styled.tbody``;

export const TrS = styled.tr`
  color: ${({ theme }: { theme: Itheme }) => theme.colors.white};
  /* display: flex; */
`;

export const TdS = styled.td`
  display: ${(props) => (props.about ? props.about : "table-cell")};
  flex-wrap: wrap;
`;
