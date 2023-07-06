import PrimaryButton from "../../../Utils/PrimaryButton";

interface IProps {
  handleStep(n: number): void;
}

const MultipleFilesUpload = (props: IProps) => {
  return (
    <div>
      <input
        className="input-tag w-100 my-6"
        type="file"
        name="single_file"
        accept=".png, .pdf"
        multiple
      />
      <div className="flex gap-6">
        <PrimaryButton handleStep={props.handleStep} type={0}>
          Previous Step
        </PrimaryButton>
        <button className="h-10 bg-color-button text-[#fff] max-w-400px w-100% hover:bg-color-button-hover rounded z-10">
          Submit
        </button>
      </div>
    </div>
  );
};
export default MultipleFilesUpload;
