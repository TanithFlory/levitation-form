import React from "react";
import CheckMark from "../../Utils/CheckMark";

interface Iprops {
  stepNumber: number;
}

const ProgressBar = (props: Iprops) => {
  return (
    <div className="flex  flex-col w-100% items-center mb-8 ">
      <div className="flex w-100% z-10 relative">
        {[1, 2, 3, 4].map((d) => {
          return (
            <React.Fragment key={d}>
              <div className="flex  w-100% items-center">
                <div
                  className={`h-[5px] w-100% ${
                    d < props.stepNumber + 1
                      ? "bg-color-blue"
                      : "bg-color-button"
                  }`}
                />
                <div
                  className={`rounded-full flex justify-center items-center relative  h-[35px] w-[35px] p-2 ${
                    d < props.stepNumber + 1
                      ? "bg-color-blue"
                      : "bg-color-button"
                  }`}
                >
                  {d < props.stepNumber ? (
                    <CheckMark />
                  ) : (
                    <div className="rounded-full w-[20px] h-[20px] bg-[#fff]" />
                  )}
                </div>
              </div>
              {d === 4 && (
                <div className="w-100% flex items-center">
                  <div className=" h-[5px] w-100% bg-color-button" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <span>
        {props.stepNumber <= 4 ? `Step ${props.stepNumber}/4` : "Success!"}
      </span>
    </div>
  );
};
export default ProgressBar;
