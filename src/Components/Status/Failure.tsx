import FormWrapper from "../../Utils/FormWrapper";
import { images } from "../../images";
const Failure = () => {
  return (
    <FormWrapper className="flex items-center flex-col">
      <img src={images.CrossMark} alt="checkmark" />
      <h1 className="text-center text-lg">Fail! Try again later!</h1>
    </FormWrapper>
  );
};

export default Failure;
