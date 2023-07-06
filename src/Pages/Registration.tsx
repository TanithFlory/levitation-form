import SignUp from "../Components/SignUp/SignUp";
import { images } from "../images";
const Registration = () => {
  return (
    <div className="flex items-center max-w-screen m-0 h-screen">
      <div className="basis-1/2 relative h-full flex items-center flex-col justify-center max-lg:basis-auto w-100%">
        <img
          src={images.Artwork}
          alt="artwork"
          className="absolute top-0 right-0 rotate-180 z-10"
        />
        <h2 className="mb-12 font-bold text-2xl">Let's get you started</h2>
        <SignUp />
        <img
          src={images.Artwork}
          alt="artwork"
          className="absolute bottom-0 left-0"
        />
      </div>
      <div className="basis-1/2 h-full w-full relative flex justify-center items-center max-lg:hidden">
        <img
          src={images.RegistrationBG}
          alt="reg-bg"
          className="h-full w-100% absolute top-0"
        />
        <div className="z-10 fixed  max-w-400px text-[#000] ">
          <h1 className="text-6xl">“Creativity is intelligence having fun”</h1>
          <h5>- Albert Einstein</h5>
        </div>
      </div>
    </div>
  );
};

export default Registration;
