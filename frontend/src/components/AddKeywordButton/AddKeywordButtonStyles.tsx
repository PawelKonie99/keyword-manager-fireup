import styled from "styled-components";
import { Itheme } from "../../utils/theme";

export const ImgS = styled.img`
  filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(52deg) brightness(113%) contrast(101%);
  display: block;
  padding: 0.3rem;
`;

export const ButtonS = styled.button`
  display: inline-block;
  height: 2.2rem;
  width: 2.2rem;
  background-color: ${({ theme }: { theme: Itheme }) => theme.colors.navy};
  cursor: pointer;
  border: none;
  margin: 0.5rem;
`;

export const DivS = styled.div`
  margin: 0 1rem 0 0;
`;
