import addIcon from "../../utils/icons/add-icon.svg";
import { ButtonS, ImgS, DivS } from "./AddKeywordButtonStyles";

// interface IaddKeywordButton {
//   onClick: () => void;
// }

//todo that dont need to be button refactor
export const AddKeywordButton = () => {
  return (
    <DivS>
      <ButtonS>
        <ImgS src={addIcon} alt="addIcon" />
      </ButtonS>
    </DivS>
  );
};
