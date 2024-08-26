import "./styles/loader.css"; 
import { useSelector } from "react-redux";

const Loader = () => {
  const {theme} = useSelector((state) => state.theme);
  return (
    <div className={`${theme=="light"?"bg-white text-black": "bg-gray-900 text-white"} loader-container`}>
      <div className="spinner text-bg-blue-500"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loader;
