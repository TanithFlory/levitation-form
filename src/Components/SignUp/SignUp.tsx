import { useState } from "react";
import BasicDetails from "./FormSteps/BasicDetails";
import FormWrapper from "../../Utils/FormWrapper";
import Address from "./FormSteps/Address";
import FileUpload from "./FormSteps/FileUpload";

const SignUp = () => {
  const [step, setStep] = useState<number>(1);
  const handleStep = (type: number) => {
    console.log(type);
    type ? setStep((prev) => ++prev) : setStep((prev) => --prev);
  };
  switch (step) {
    case 1:
      return (
        <FormWrapper type="Basic Details">
          <BasicDetails handleStep={handleStep} />
        </FormWrapper>
      );
    case 2:
      return (
        <FormWrapper type="Address Details">
          <Address handleStep={handleStep} />
        </FormWrapper>
      );
    case 3:
      return (
        <FormWrapper type="Upload a file. (.png, .pdf)">
          <FileUpload handleStep={handleStep} />
        </FormWrapper>
      );
    default:
      <h5>GG</h5>;
  }
};

export default SignUp;
