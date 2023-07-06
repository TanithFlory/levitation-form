import PrimaryButton from "../../../Utils/PrimaryButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IProps {
  handleStep(type: number): void;
}

const BasicDetails = (props: IProps) => {
  const inputBox = [
    {
      type: "text",
      identifier: "name",
      label: "Full Name",
      placeholder: "Enter your name...",
    },
    {
      type: "email",
      identifier: "email",
      label: "Email",
      placeholder: "yourname@email.com",
    },
    {
      label: "Phone Number",
      component: <PhoneInput />,
    },
  ];
  return (
    <>
      {inputBox.map((data, index) => {
        return (
          <div key={index}>
            <div>
              <div>
                {" "}
                <label>{data.label}</label>
                <span className="text-[#f33]">*</span>
              </div>
              {data.component ? (
                <PhoneInput
                  country={"in"}
                  inputProps={{
                    name: "phone_number",
                    required: true,
                    autoFocus: true,
                  }}
                  inputClass="custom-phone-input"
                  containerClass="mb-6"
                />
              ) : (
                <input
                  className="input-tag mb-6 my-1 "
                  type={data.type}
                  name={data.identifier}
                  required
                  placeholder={data.placeholder}
                />
              )}
            </div>
          </div>
        );
      })}
      <PrimaryButton handleStep={props.handleStep} type={1}>
        Next Step
      </PrimaryButton>
    </>
  );
};

export default BasicDetails;
