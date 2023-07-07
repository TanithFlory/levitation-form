import { useState, useEffect } from "react";
import BasicDetails from "./FormSteps/BasicDetails";
import FormWrapper from "../../Utils/FormWrapper";
import Address from "./FormSteps/Address";
import FileUpload from "./FormSteps/FileUpload";

interface IProps {
  getStepNumber(n: number): void;
}

const SignUp = (props: IProps) => {
  const [step, setStep] = useState<number>(1);
  const handleStep = (type: number) => {
    type ? setStep((prev) => ++prev) : setStep((prev) => --prev);
  };
  useEffect(() => {
    props.getStepNumber(step);
  }, [step]);
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
    case 4:
      return (
        <FormWrapper type="Upload files (.png/.pdf accepted)">
          <FileUpload handleStep={handleStep} />
        </FormWrapper>
      );
    default:
      <h5>GG</h5>;
  }
};

export default SignUp;
