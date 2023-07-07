import { useState } from "react";
import PrimaryButton from "../../../Utils/PrimaryButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IProps {
  handleStep(type: number): void;
}

const BasicDetails = (props: IProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
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
  const setErrorHelper = (fieldName:string, errorMessage:string) =>{
    setErrors((prev)=>{
      return {...prev,[fieldName]:errorMessage};
    })
  }
  const onChangePhoneHandler = (value: string) => {
    setErrorHelper("phone_number","");
    setFormData((prev) => {
      return {
        ...prev,
        phone_number: value,
      };
    });
  };
  const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setErrorHelper(target.name,"");
    setFormData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const validateField = (field:string, fieldName:string, errorMessage:string) => {
    if (field.trim() === "") {
      setErrors((prev) => {
        return { ...prev, [fieldName]: errorMessage };
      });
      return false;
    }
    return true;
  };

  const validation = () => {
    const { email, phone_number, name } = formData;
    const nameRegex = /(^[a-zA-Z\ ]{3,})/;
    const emailRegex =  /^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/;

    if (!validateField(name, "name", "Name cannot be empty.")) return;
    if (!validateField(email, "email", "Email cannot be empty.")) return;
    if (!validateField(phone_number,"phone_number","Phone Number cannot be empty."))return;
    

    if(!nameRegex.test(name)){
      console.log("failed")
      return setErrorHelper("name","Name can contain only alphabets. (Minimum 3 characters)")
    } 
    if(!emailRegex.test(email)){
      console.log("failed")
      return setErrorHelper("email","Enter a valid email.")
    } 

    props.handleStep(1);
  };

  return (
    <>
      {inputBox.map((data, index) => {
        return (
          <div key={index}>
            <div>
              <div>
                <label>{data.label}</label>
                <span className="text-[#f33]">*</span>
              </div>
              {data.component ? (
                <div className="mb-2">
                  <PhoneInput
                    country={"in"}
                    inputProps={{
                      name: "phone_number",
                      autoFocus: true,
                    }}
                    inputClass="custom-phone-input"
                    onChange={onChangePhoneHandler}
                    value={formData.phone_number}
                  />
                  <h5>{errors.phone_number}</h5>
                </div>
              ) : (
                <div className="mb-2">
                  <input
                    className="input-tag"
                    type={data.type}
                    name={data.identifier}
                    placeholder={data.placeholder}
                    onChange={onChangeHandler}
                    value={formData[data.identifier as keyof typeof formData]}
                    maxLength={data.identifier==='name'?16:36}
                  />
                  <h5>{errors[data.identifier as keyof typeof formData]}</h5>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <PrimaryButton handleStep={validation} type={1}>
        Next Step
      </PrimaryButton>
    </>
  );
};

export default BasicDetails;
