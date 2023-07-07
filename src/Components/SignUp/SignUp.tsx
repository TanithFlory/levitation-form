import { useState, useEffect } from "react";
import BasicDetails from "./FormSteps/BasicDetails";
import FormWrapper from "../../Utils/FormWrapper";
import Address from "./FormSteps/Address";
import FileUpload from "./FormSteps/FileUpload";
import Success from "../Status/Success";
import Failure from "../Status/Failure";
import SignIn from "../SignIn/SignIn";

interface IProps {
  getStepNumber(n: number): void;
  checkSignInForm(): void;
}

const SignUp = (props: IProps) => {
  const [step, setStep] = useState<number>(1);
  const [status, setStatus] = useState<boolean>(true);
  const handleStep = (type: number) => {
    type ? setStep((prev) => ++prev) : setStep((prev) => --prev);
  };
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    props.getStepNumber(step);
  }, [step]);

  const setSuccess = (n: number) => {
    setStep(n);
  };
  const setStatusHandler = () => {
    setStatus(false);
  };
  switch (step) {
    case 1:
      return (
        <FormWrapper type={`${signIn ? "Sign In" : "Basic Details"}`}>
          {signIn ? <SignIn setStatusHandler={setStatusHandler}/> : <BasicDetails handleStep={handleStep} />}
          {status && (
            <div
              className="my-5 text-center"
              onClick={() => {
                setSignIn((prev) => !prev);
                props.checkSignInForm();
              }}
            >
              <span>
                {signIn ? `Don't have an account?` : `Already have an account?`}
              </span>{" "}
              <span className="text-color-blue cursor-pointer hover:text-[#4b34ff]">
                Sign {signIn ? "Up" : "In"}
              </span>
            </div>
          )}
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
          <FileUpload handleStep={handleStep} setSuccess={setSuccess} />
        </FormWrapper>
      );
    case 5:
      return (
        <Success text="Success. Your details have been successfully sent!" />
      );
    default:
      return <Failure />;
  }
};

export default SignUp;
