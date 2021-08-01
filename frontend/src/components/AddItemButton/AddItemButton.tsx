import addIcon from "../../utils/icons/add-icon.svg";
import { ButtonS, ImgS } from "./AddItemButtonStyles";

export const AddButton = () => {
  return (
    <>
      <ButtonS>
        <ImgS src={addIcon} alt="addIcon" />
      </ButtonS>
    </>
  );
};
