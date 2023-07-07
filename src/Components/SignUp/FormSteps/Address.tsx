import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import PrimaryButton from "../../../Utils/PrimaryButton";
import validateField from "./validationField";
import { formActions } from "../../../Store/Features/form";

interface IProps {
  handleStep(type: number): void;
}

const Address = (props: IProps) => {
  const globalFormData = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const { address_1, address_2, state, city, country, pincode } =
    globalFormData;

  const [formData, setformData] = useState({
    address_1,
    address_2,
    state,
    city,
    country,
    pincode,
  });
  const emptyErrors = {
    address_1: "",
    address_2: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
  };
  const [errors, setErrors] = useState(emptyErrors);
  const inputBoxAddress = [
    {
      identifier: "address_1",
      label: "Address line one",
      placeholder: "Enter your address...",
    },
    {
      identifier: "address_2",
      label: "Address line two",
      placeholder: "Enter your address...",
    },
  ];
  const inputBoxLocation = [
    {
      identifier: "city",
      label: "City",
      placeholder: "Enter your city...",
      identifier2: "state",
      label2: "State",
      placeholder2: "Enter your state...",
    },
    {
      identifier: "pincode",
      label: "Pincode",
      placeholder: "Enter your pincode...",
      identifier2: "country",
      label2: "Country",
      placeholder2: "Enter your country...",
    },
  ];

  const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setErrors((prev) => {
      return {
        ...prev,
        [target.name]: "",
      };
    });
    setformData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const validation = () => {
    const { address_1, address_2, state, city, country, pincode } = formData;
    const pincodeRegex = /^[0-9]*$/;
    if (
      !validateField(
        address_2,
        "address_1",
        "Address 1 cannot be empty.",
        setErrors
      )
    )
      return;
    if (
      !validateField(
        address_1,
        "address_2",
        "Address 2 cannot be empty.",
        setErrors
      )
    )
      return;
    if (!validateField(state, "state", "State cannot be empty.", setErrors))
      return;
    if (!validateField(city, "city", "City cannot be empty.", setErrors))
      return;
    if (
      !validateField(country, "country", "Country cannot be empty.", setErrors)
    )
      return;
    if (
      !validateField(
        pincode.toString(),
        "pincode",
        "Pincode cannot be empty.",
        setErrors
      )
    )
      return;

    if (!pincodeRegex.test(pincode.toString())) {
      setErrors((prev) => {
        return {
          ...prev,
          pincode: "Pincode can contain numbers only.",
        };
      });
      return;
    }
    if (pincode.toString().length > 6) {
      setErrors((prev) => {
        return {
          ...prev,
          pincode: "Pincode cant exceed 6 digits.",
        };
      });
    }
    dispatch(
      formActions.updateForm({
        ...globalFormData,
        ...formData,
      })
    );
    props.handleStep(1);
  };
  return (
    <>
      {" "}
      {inputBoxAddress.map((data, index) => {
        return (
          <div key={index}>
            <div>
              <div>
                <label>{data.label}</label>
                <span className="text-[#f43535]">*</span>
              </div>
              <div>
                <input
                  className="input-tag my-1"
                  type="text"
                  name={data.identifier}
                  required
                  placeholder={data.placeholder}
                  onChange={onChangeHandler}
                  value={formData[data.identifier as keyof typeof formData]}
                />
                <h5>{errors[data.identifier as keyof typeof formData]}</h5>
              </div>
            </div>
          </div>
        );
      })}
      {inputBoxLocation.map((data, index) => {
        return (
          <div
            key={index}
            className={`grid grid-cols-2 gap-2 ${index === 1 && "mb-2"}`}
          >
            <div>
              <div>
                <label>{data.label}</label>
                <span className="text-[#f31212]">*</span>
              </div>
              <div>
                <input
                  className="input-tag my-1 w-100"
                  type="text"
                  name={data.identifier}
                  required
                  placeholder={data.placeholder}
                  onChange={onChangeHandler}
                  value={formData[data.identifier as keyof typeof formData]}
                />
                <h5>{errors[data.identifier as keyof typeof formData]}</h5>
              </div>
            </div>
            <div>
              <div>
                <label>{data.label2}</label>
                <span className="text-[#f31212]">*</span>
              </div>
              <div>
                <input
                  className="input-tag my-1"
                  type="text"
                  name={data.identifier2}
                  required
                  placeholder={data.placeholder2}
                  onChange={onChangeHandler}
                  maxLength={data.label === "pincode" ? 6 : undefined}
                  value={formData[data.identifier2 as keyof typeof formData]}
                />
                <h5>{errors[data.identifier2 as keyof typeof formData]}</h5>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex gap-10 mb-6">
        <PrimaryButton type={0} handleStep={props.handleStep}>
          Previous Step
        </PrimaryButton>
        <PrimaryButton type={1} handleStep={validation}>
          Next Step
        </PrimaryButton>
      </div>
    </>
  );
};

export default Address;
