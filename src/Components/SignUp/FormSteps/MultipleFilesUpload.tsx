import { useState } from "react";
import PrimaryButton from "../../../Utils/PrimaryButton";
import { IFiles } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import getLocation from "./getLocation";
import { formActions } from "../../../Store/Features/form";
import axios from "axios";
import Loading from "../../../Utils/Loading";
interface IProps {
  handleStep(n: number): void;
  onChangeMultiFiles(e: React.SyntheticEvent<HTMLInputElement>): void;
  setSuccess(n: number): void;
  files: IFiles;
}

const MultipleFilesUpload = (props: IProps) => {
  const dispatch = useAppDispatch();
  const globalFormData = useAppSelector((state) => state.form);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    file: "",
    location: "",
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!props.files.multi_ups1) {
      setErrors((prev) => ({ ...prev, file: "Upload atleast one file." }));
      return;
    }
    if (!globalFormData.geolocation) {
      setErrors((prev) => ({
        ...prev,
        location: "Location data is required.",
      }));
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form",
        {
          ...globalFormData,
          ...props.files,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.UpmkZAMbsGLZiJVd8rIY4G0gauRBChuB3AgwBeP5IkTbwdhEVCZu7ZY356DAzrJHLUEvgwtzvN72j7EiJSAZtPmBJJqFFBAG._KNloeQGRaMxNYURlLGJdQ.BsRIFabcMaF7DmJMhF7ks65BhmrQ7OCr-o2Xs65TpDQNbmP_6meKVqBuPdhdmxhrFmVIGO6O32MvbFcbxjuoNOM5g9_Qx4f047rzSZysJpE5F2elJGuZYeyNqy5k7SwKwrPmjWERHOdMd971fyp3zeZH0DXllcUM-sH2_gtEkV8.lcc27ODDDTLzDPea__D-1nfNxpnqsSdQuB_PeAUwJIg",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        props.setSuccess(5);
      }
    } catch (err) {
      props.setSuccess(6);
      console.log(err);
    }
  };

  const getLocationHandler = async () => {
    setErrors((prev) => ({ ...prev, location: "" }));
    try {
      const response = await getLocation();
      const { latitude, longitude } = response.coords;
      dispatch(
        formActions.updateForm({
          ...globalFormData,
          geolocation: `Latitude:${latitude}, Longitude:${longitude}`,
        })
      );
      setErrors((prev) => ({
        ...prev,
        location: `Location captured. Latitude:${latitude} Longitude:${longitude}`,
      }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, location: (err as Error).message }));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <h4 className="text-center text-[#64f000]">Optional</h4>
      <input
        className="input-tag w-100 mt-6 mb-1"
        type="file"
        name="single_file"
        accept=".png, .pdf"
        multiple
        onChange={props.onChangeMultiFiles}
      />
      <h5>{errors.file}</h5>
      <div className="flex flex-col justify-center items-center">
        <p>Please allow us to access your location.</p>
        <p className="text-center">
          We use your location to provide you with personalized services and
          enhance your experience.
        </p>
        <button
          type="button"
          onClick={getLocationHandler}
          className="h-[40px] mb-3 text-[#fff] bg-color-button hover:bg-color-button-hover px-2 rounded"
        >
          Allow Access
        </button>
        <h5>{errors.location}</h5>
      </div>
      <div className="flex gap-6">
        <PrimaryButton
          handleStep={props.handleStep}
          type={0}
          id="multiple-prev"
        >
          Previous Step
        </PrimaryButton>
        <button
          type="submit"
          className="h-10 bg-color-button text-[#fff] max-w-400px w-100% hover:bg-color-button-hover rounded z-10"
        >
          Submit
        </button>
      </div>
      {loading && <Loading />}
    </form>
  );
};
export default MultipleFilesUpload;
