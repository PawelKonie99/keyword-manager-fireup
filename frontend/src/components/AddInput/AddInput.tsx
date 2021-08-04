import React from "react";
import { LabelS, InputS } from "./AddInputStyles";

interface IaddInput {
  value: string;
  onChange: (event: any) => void;
  backgroundColor: string;
  color: string;
  padding: string;
  borderColor: string;
  marginRight: string;
  placeholder: string;
}

export const AddInput = ({
  value,
  onChange,
  backgroundColor,
  color,
  padding,
  borderColor,
  marginRight,
  placeholder,
}: IaddInput) => {
  return (
    <LabelS>
      <InputS
        backgroundColor={backgroundColor}
        color={color}
        padding={padding}
        borderColor={borderColor}
        marginRight={marginRight}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
    </LabelS>
  );
};
