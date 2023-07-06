import PrimaryButton from "../../../Utils/PrimaryButton";

interface IProps {
  handleStep(type: number): void;
}

const FileUpload = (props: IProps) => {
  return (
    <div>
      <input
        className="input-tag placeholder-input-gray w-100 my-6"
        type="file"
        name="single_file"
        required
        accept=".png, .pdf"
      />
      <div className="flex gap-6">
        <PrimaryButton handleStep={props.handleStep} type={0}>
          Previous Step
        </PrimaryButton>
        <PrimaryButton handleStep={props.handleStep} type={1}>
          Next Step
        </PrimaryButton>
      </div>
    </div>
  );
};

export default FileUpload;
