import { useState } from "react";
import axios from "axios";
import Loading from "../../Utils/Loading";
import Success from "../Status/Success";
interface IProps {
  setStatusHandler(): void;
}

const SignIn = ({ setStatusHandler }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>();
  const changeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",
        {
          ...formData,
        }
      );
      if (response) {
        setStatusHandler();
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {!success ? (
        <form className="my-2" onSubmit={submitHandler}>
          <input
            className="input-tag mb-6"
            type="text"
            name="email"
            required
            onChange={changeHandler}
            placeholder="Enter your email..."
          />
          <input
            className="input-tag mb-6"
            type="password"
            name="password"
            required
            onChange={changeHandler}
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="h-10 bg-color-button text-[#fff] max-w-400px w-100% hover:bg-color-button-hover rounded z-10"
          >
            Login
          </button>
          {loading && <Loading />}
        </form>
      ) : (
        <Success text={`You're successfully signed in!`} />
      )}
    </>
  );
};
export default SignIn;
