interface IProps {
  handleStep(type: number): void;
  children: React.ReactNode;
  type: number;
}

const PrimaryButton = ({ handleStep, children, type }: IProps) => {
  console.log(children);
  return (
    <button
      type="button"
      className="h-10 bg-color-button text-[#fff] max-w-400px w-100% hover:bg-color-button-hover rounded z-10"
      onClick={() => handleStep(type)}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
