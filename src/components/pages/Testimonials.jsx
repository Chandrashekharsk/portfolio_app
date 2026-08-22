import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);

  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  const feedbackRef = collection(db, "testimonials");

  const getFeedbacks = async () => {
    try {
      setLoading(true);

      const data = await getDocs(feedbackRef);

      setFeedbacks(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      );
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <section
      className={`relative min-h-screen overflow-hidden px-5 py-20 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* ================= AMBIENT BACKGROUND ================= */}

      <div
        className={`pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl ${
          isDark ? "bg-blue-500/10" : "bg-blue-400/10"
        }`}
      />

      <div
        className={`pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl ${
          isDark ? "bg-cyan-400/5" : "bg-cyan-400/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Community Voices
          </p>

          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            Visitors Feedback
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            See what visitors have to say about their experience.
          </p>
        </div>

        {/* ================= CONTENT ================= */}

        {loading ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <Loader />
          </div>
        ) : feedbacks.length === 0 ? (
          /* Empty State */
          <div
            className={`mx-auto max-w-lg rounded-3xl border p-8 text-center sm:p-10 ${
              isDark
                ? "border-slate-800 bg-slate-900/70"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10">
              <span className="text-2xl text-blue-500">💬</span>
            </div>

            <h3
              className={`text-xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              No Feedback Yet
            </h3>

            <p
              className={`mt-2 text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Be the first visitor to share your experience.
            </p>
          </div>
        ) : (
          /* ================= TESTIMONIAL GRID ================= */

          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {feedbacks.map((feedback) => (
              <article
                key={feedback.id}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "border-slate-800 bg-slate-900/70 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
                    : "border-slate-200 bg-white hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
                }`}
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400" />

                {/* User Name */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white shadow-md shadow-blue-500/20">
                    {feedback.username?.charAt(0)?.toUpperCase() || "U"}
                  </div>

                  <div className="min-w-0">
                    <h3
                      className={`truncate text-base font-bold sm:text-lg ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {feedback.username || "Anonymous"}
                    </h3>

                    <p className="text-xs font-medium text-blue-500">Visitor</p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className={`my-5 h-px ${
                    isDark ? "bg-slate-800" : "bg-slate-200"
                  }`}
                />

                {/* Feedback Message */}
                <p
                  className={`text-sm leading-7 sm:text-base ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {feedback.feedback}
                </p>

                {/* Subtle bottom glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
