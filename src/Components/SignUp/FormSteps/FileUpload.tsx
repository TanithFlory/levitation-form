import { useState } from "react";
import PrimaryButton from "../../../Utils/PrimaryButton";
import MultipleFilesUpload from "./MultipleFilesUpload";
import { IFiles } from "../../../types";

interface IProps {
  handleStep(type: number): void;
}

const FileUpload = (props: IProps) => {
  const [files, setFiles] = useState<IFiles>({
    single_file: null,
    multi_ups1: null,
    multi_ups2: null,
    multi_ups3: null,
  });
  const [error, setError] = useState("");
  const [form, setForm] = useState(true);

  const onChangeSingleFile = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0] as File;
    setFiles((prev) => {
      return {
        ...prev,
        single_file: file,
      };
    });
  };
  const onChangeMultiFiles = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const files = Array.from(target.files as FileList) as File[];
    setFiles((prev) => {
      return {
        ...prev,
        multi_ups1: files[0],
        multi_ups2: files[1],
        multi_ups3: files[2],
      };
    });
  };
  const nextHandler = () => {
    if (
      files.single_file?.type !== "image/png" &&
      files.single_file?.type !== "application/pdf"
    ) {
      setError("Supported document type - pdf/png");
      return;
    }
    if (!files.single_file) {
      setError("One attachment is mandatory.");
      return;
    }
    props.handleStep(1);
    setForm(false);
  };
  const previousStep = () => {
    props.handleStep(0);
    setForm(true);
  };
  return (
    <>
      {form ? (
        <div>
          <div className="my-6">
            <input
              className="input-tag w-100"
              type="file"
              name="single_file"
              required
              accept=".png, .pdf"
              onChange={onChangeSingleFile}
            />
            <h5>{error}</h5>
          </div>
          <div className="flex gap-6">
            <PrimaryButton
              handleStep={props.handleStep}
              type={0}
              id="previous-file-upload"
            >
              Previous Step
            </PrimaryButton>
            <PrimaryButton
              handleStep={nextHandler}
              type={1}
              id="next-fileupload"
            >
              Next Step
            </PrimaryButton>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-center text-xl">{"Attach more files (Max 5)"}</h3>
          <MultipleFilesUpload
            files={files}
            onChangeMultiFiles={onChangeMultiFiles}
            handleStep={previousStep}
          />
        </>
      )}
    </>
  );
};

export default FileUpload;
