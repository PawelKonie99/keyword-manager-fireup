import styled from "styled-components";
import { Itheme } from "../../utils/theme";

export const LabelS = styled.label``;
export const InputS = styled.input<{
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderColor?: string;
  marginRight?: string;
}>`
  border: none;
  color: ${(props) => (props.color ? props.color : ({ theme }: { theme: Itheme }) => theme.colors.navy)};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "1rem")};
  padding: 0.6rem ${(props) => (props.padding ? props.padding : "1.6rem")};
  border-bottom: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : ({ theme }: { theme: Itheme }) => theme.colors.navy)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ({ theme }: { theme: Itheme }) => theme.colors.white};
  outline: none;
  font-size: 0.85rem;

  ::placeholder {
    color: ${(props) => (props.color ? props.color : ({ theme }: { theme: Itheme }) => theme.colors.navy)};
  }
`;
