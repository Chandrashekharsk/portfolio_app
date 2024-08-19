import { useSelector } from "react-redux";
import Card from "../Card";

const Education = () => {
const {theme} = useSelector((state) => state.theme);

  return (
    <section className={`px-8 py-24 ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
      <div className="pb-0 container mx-auto text-center">
        <h2 className={`text-4xl font-bold  ${theme === "dark" ? "text-white" : "text-black"}`}>Education</h2>
      </div>
      <div className="pt-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Education;
