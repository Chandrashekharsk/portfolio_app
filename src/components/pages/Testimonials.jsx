import { collection, doc, query, deleteDoc, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase-config";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [likes, setLikes] = useState([]);
  const { theme } = useSelector((state) => state.theme);
  const [user] = useAuthState(auth);
  
  const likesRef = collection(db, "likes");
  const feedbackRef = collection(db, "testimonials");

  const getFeedbacks = async () => {
    const data = await getDocs(feedbackRef);
    console.log("data"+ data.docs)
    setFeedbacks(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };


  // const getLikes = async () => {
  //   const data = await getLikes(likesRef);
  //   setLikes(
  //     data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }))
  //   )
  //   console.log(likes.length)
  // }

  const addLike = async()=>{
    console.log("id: "+id)
    try {
      const newDoc = await addDoc(likesRef,{
        userId: user?.uid,
      });
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div
      className={`container min-h-[84vh] px-auto p-16 ${theme === "light" ? "text-black bg-white" : "text-white bg-gray-900"
        }`}
    >
      <h2 className="text-3xl font-semibold text-center py-3 mb-8">
        Testimonials
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${theme === "light" ? "bg-gray-200" : "bg-gray-800"
              }`}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold pb-2 mb-2">{feedback.username}</h3>
              <p className={`${theme === "light" ? "text-gray-700 " : "text-gray-300"} mb-4`}>
                {feedback.feedback}
              </p>
            </div>
            {/* <div className="flex items-center justify-between">
              <button onClick={addLike()} className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-md font-medium`}>
                ❤️ {feedback.likes.length}
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;