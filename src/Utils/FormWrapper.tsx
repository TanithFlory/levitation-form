interface IProps {
  type: string;
  children: React.ReactNode;
}

const FormWrapper = ({ children, type }: IProps) => {
  return (
    <form className="w-100% max-w-400px z-10 box-border max-lg:mx-6 px-1">
      <h3 className="text-center text-xl">{type}</h3>
      {children}
    </form>
  );
};

export default FormWrapper;
