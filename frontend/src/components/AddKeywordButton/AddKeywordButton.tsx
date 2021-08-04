import addIcon from "../../utils/icons/add-icon.svg";
import { ButtonS, ImgS, DivS } from "./AddKeywordButtonStyles";

export const AddKeywordButton = () => {
  return (
    <DivS>
      <ButtonS>
        <ImgS src={addIcon} alt="addIcon" />
      </ButtonS>
    </DivS>
  );
};
