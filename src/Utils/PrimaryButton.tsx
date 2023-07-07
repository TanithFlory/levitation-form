interface IProps {
  handleStep(type: number): void;
  children: React.ReactNode;
  type: number;
  id?:string;
}

const PrimaryButton = ({ handleStep, children, type }: IProps) => {
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
