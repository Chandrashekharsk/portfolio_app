import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const Testimonials = () => {
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const { theme } = useSelector((state) => state.theme);

  const feedbackRef = collection(db, "testimonials");

  const getFeedbacks = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const data = await getDocs(feedbackRef);
      setFeedbacks(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched or if an error occurs
    }
  };

  useEffect(() => {
    getFeedbacks(); // Fetch feedbacks when the component mounts
  }, []);

  return (
    <div
      className={`container min-h-[81vh] px-auto p-16 ${
        theme === "light" ? "text-black bg-white" : "text-white bg-gray-900"
      }`}
    >
      <h2 className="text-3xl font-semibold text-center py-3 mb-8">
        Testimonials
      </h2>

      {loading ? (
        <Loader /> // Show the loader while data is being fetched
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className={`rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                theme === "light"
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold pb-2 mb-2">
                  {feedback.username}
                </h3>
                <p
                  className={`${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  } mb-4`}
                >
                  {feedback.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
