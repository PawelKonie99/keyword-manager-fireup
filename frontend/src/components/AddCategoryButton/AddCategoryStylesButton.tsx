import styled from "styled-components";
import { Itheme } from "../../utils/theme";

export const CategoryButtonS = styled.button`
  margin-bottom: 0.8rem;
  cursor: pointer;
  border: none;
  padding: 0.4rem 1.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: ${({ theme }: { theme: Itheme }) => theme.colors.navy};
  color: ${({ theme }: { theme: Itheme }) => theme.colors.white}; ;
`;
