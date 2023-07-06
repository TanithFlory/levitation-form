import PrimaryButton from "../../../Utils/PrimaryButton";

interface IProps {
  handleStep(type: number): void;
}

const Address = (props: IProps) => {
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
      identifier2: "State",
      label2: "State",
      placeholder2: "Enter your state...",
    },
    {
      identifier: "Pincode",
      label: "Pincode",
      placeholder: "Enter your pincode...",
      identifier2: "Country",
      label2: "Country",
      placeholder2: "Enter your country...",
    },
  ];
  return (
    <>
      {" "}
      {inputBoxAddress.map((data, index) => {
        return (
          <div key={index}>
            <div>
              <label>{data.label}</label>
              <input
                className="input-tag mb-6 my-1 placeholder-input-gray"
                type="text"
                name={data.identifier}
                required
                placeholder={data.placeholder}
              />
            </div>
          </div>
        );
      })}
      {inputBoxLocation.map((data, index) => {
        return (
          <div key={index} className="grid grid-cols-2 gap-2">
            <div>
              <label>{data.label}</label>
              <input
                className="input-tag my-1 placeholder-input-gray w-100"
                type="text"
                name={data.identifier}
                required
                placeholder={data.placeholder}
              />
            </div>
            <div>
              <label>{data.label2}</label>
              <input
                className="input-tag mb-6 my-1 placeholder-input-gray"
                type="text"
                name={data.identifier2}
                required
                placeholder={data.placeholder2}
              />
            </div>
          </div>
        );
      })}
      <div className="flex gap-10">
        <PrimaryButton type={0} handleStep={props.handleStep}>
          Previous Step
        </PrimaryButton>
        <PrimaryButton type={1} handleStep={props.handleStep}>
          Next Step
        </PrimaryButton>
      </div>
    </>
  );
};

export default Address;
