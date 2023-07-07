import FormWrapper from "../../Utils/FormWrapper";
import { images } from "../../images";
const Success = () => {
  return (
    <FormWrapper className="flex items-center flex-col">
      <img src={images.CheckMark} alt="checkmark" />
      <h1 className="text-center text-lg">Success. Your details have been successfully sent!</h1>
    </FormWrapper>
  );
};

export default Success;
