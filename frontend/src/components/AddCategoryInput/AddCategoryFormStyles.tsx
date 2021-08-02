import styled from "styled-components";
import { Itheme } from "../../utils/theme";

export const FormS = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
`;
export const LabelS = styled.label``;
export const InputS = styled.input`
  border: none;
  margin-right: 1rem;
  padding: 0.6rem 1.6rem;
  border-bottom: 1px solid ${({ theme }: { theme: Itheme }) => theme.colors.navy};
  background-color: #c4c4c4;
  outline: none;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }: { theme: Itheme }) => theme.colors.navy};
  }
`;
