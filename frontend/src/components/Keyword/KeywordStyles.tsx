import styled from "styled-components";
import { Itheme } from "../../utils/theme";

export const KeywordS = styled.button`
  padding: 0.4rem 1rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  background-color: ${({ theme }: { theme: Itheme }) => theme.colors.yellow};
  color: ${({ theme }: { theme: Itheme }) => theme.colors.darkBlue};
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
`;
