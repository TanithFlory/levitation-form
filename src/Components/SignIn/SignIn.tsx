import FormWrapper from "../../Utils/FormWrapper";

const SignIn = () => {
  return (
    <FormWrapper>
      <form>
        <input type="text" name="email" required />
        <input type="password" name="password" required />
      </form>
    </FormWrapper>
  );
};
export default SignIn;
