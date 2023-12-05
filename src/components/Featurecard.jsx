import Lottie from "lottie-react";
import { MyFeature } from "../data";
import { Link } from "react-router-dom"; // Import Link dari React Router jika digunakan

const Featurecard = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {MyFeature.map((fitur) => {
        return (
          <div key={fitur.id}>
            <Link to={fitur.link} className="group">
              <div
                className="shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-lg hover:bg-color-primary-500 transition duration-300 ease-in-out hover:text-white cursor-pointer"
                style={{ width: "97px", height: "137px" }}
              >
                <div className="flex flex-col items-center">
                  <Lottie
                    className="mb-3 rounded-full mt-6 drop-shadow"
                    style={{ height: "58px", width: "58px" }}
                    animationData={fitur.image}
                    alt={`feature-${fitur.id}`}
                  />
                  <h5 className="mb-2 text-xs font-medium text-gray-900 dark:text-black transition duration-300 ease-in-out group-hover:text-white text-center">
                    {fitur.title}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Featurecard;
