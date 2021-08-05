import { IaddInput } from "../../interfaces/contentInterfaces";
import { LabelS, InputS } from "./AddInputStyles";



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
