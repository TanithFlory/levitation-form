import FormWrapper from "../../Utils/FormWrapper";
import { images } from "../../images";
interface IProps {
  text: string;
}

const Success = ({ text }: IProps) => {
  return (
    <FormWrapper className="flex items-center flex-col">
      <img src={images.CheckMark} alt="checkmark" />
      <h1 className="text-center text-lg">
       {text}
      </h1>
    </FormWrapper>
  );
};

export default Success;
