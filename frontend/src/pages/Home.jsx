import MainSlider from "../component/MainSlider";
import img1 from "../Assets/NAT.png";
import img2 from "../Assets/twoleaff.png";
import Navbar from "./../component/NavaBar";
import CustomizedSteppers from "../component/Stepper";

const Home = () => {
  return (
    <>
      <div className="relative w-[90%] m-auto">
        <div className="absolute z-[99] bg-black bg-opacity-20">
          <img src={img1} alt="" className="h-screen w-full" />
        </div>

        <img
          src={img2}
          alt=""
          className="absolute z-[999] top-[32%] left-[6.5%]"
        />

        <div className="absolute z-[999] top-[37%] left-[7%]">
          <h1 className="primaryTitle text-white text-[70px] font-Poppins leading-[200px]">
            MED<span className="ml-[-24px]"> IC</span>{" "}
            <span className="ml-[-20px]">INAL</span>
          </h1>
          <p className="w-[400px] text-white">
            Predict Plant is medicinal or not and get information of plant
          </p>
          <a href="#about">
          <button className="border px-5 my-6 border-[#89eb8894] rounded-[20px] text-white py-1 hover:shadow-md hover:shadow-[#8eec8d] hover:scale-[1.01] transform duration-200"
          >
            Learn More
          </button>
          </a>
        </div>

        <MainSlider />
      </div>
      <div className="" id="">
        <h3 className="block mx-auto mt-16 text-center text-blue-700" id="about">
          About This Website
        </h3>
        <div className="flex  justify-center items-center h-[70vh]">
          <div className="max-w-md p-6 border-2 border-blue-400 rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">About Image Prediction</h1>
            <p className="text-gray-700" >
              Welcome to Image Prediction – a user-friendly web application
              designed for effortless image analysis and predictions. Whether
              you're uploading images from your device or capturing them with
              your camera, our intuitive interface guides you through the
              process. After selecting or capturing an image, a simple click
              on the 'Submit' button initiates the backend machine learning
              algorithm. The results, rich in information and categories, are
              promptly displayed on the webpage. Image Prediction combines
              user-friendly design with advanced machine learning, making image
              analysis an engaging and efficient endeavor. Explore the power of
              predictions with ease and precision.
            </p>
          </div>
        </div>

        <div className="mb-16" id="work">
        <h3 className="block mx-auto mt-4 mb-8 text-center text-blue-700">
          How It Works
        </h3>
          <CustomizedSteppers className="mb-8" />
        </div>
      </div>
    </>
  );
};

export default Home;
