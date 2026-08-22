import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { db, auth } from "../../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";

const Feedbacks = () => {
  const [loading, setLoading] = useState(false);

  const username = useSelector((state) => state.user.value.username);
  const { theme } = useSelector((state) => state.theme);

  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const testimonialRef = collection(db, "testimonials");

  const onSubmit = async (data) => {
    if (!user?.uid) {
      toast.warning("Please Sign In to create feedback");
      navigate("/sign-in");
      return;
    }

    try {
      setLoading(true);

      const getCookie = (name) => {
        const nameEQ = `${name}=`;
        const cookies = document.cookie.split(";");

        for (let cookie of cookies) {
          cookie = cookie.trim();

          if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
          }
        }

        return null;
      };

      const cookieUsername = getCookie("username");

      await addDoc(testimonialRef, {
        ...data,
        username: user.displayName || cookieUsername || username,
        userId: user.uid,
        comments: [],
        likes: [],
      });

      toast.success("Feedback submitted successfully!");

      navigate("/testimonials");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === "dark";

  return (
    <section
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-6 lg:px-8 ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* ================= AMBIENT GLOW ================= */}

      <div
        className={`pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl ${
          isDark ? "bg-blue-500/10" : "bg-blue-400/10"
        }`}
      />

      <div
        className={`pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
          isDark ? "bg-cyan-400/5" : "bg-cyan-400/10"
        }`}
      />

      {/* ================= FORM CARD ================= */}

      <div className="relative w-full max-w-xl">
        {/* Small Section Label */}
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Your Opinion Matters
          </p>

          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            We Value Your Feedback
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p
            className={`mx-auto mt-4 max-w-md text-sm leading-6 sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Share your thoughts, suggestions, or experience. Your feedback
            helps make this portfolio better.
          </p>
        </div>

        {/* Form */}
        <div
          className={`rounded-3xl border p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:p-7 md:p-8 ${
            isDark
              ? "border-slate-800 bg-slate-900/70 shadow-black/20"
              : "border-slate-200 bg-white/80 shadow-slate-200/60"
          }`}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Feedback Field */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="feedback"
                  className={`text-sm font-semibold ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Your Feedback
                </label>

                <span className="text-xs text-slate-500">
                  Required
                </span>
              </div>

              <textarea
                id="feedback"
                rows={6}
                placeholder="Tell me what you think..."
                {...register("feedback", {
                  required: "Feedback is required",
                  minLength: {
                    value: 5,
                    message: "Feedback must contain at least 5 characters",
                  },
                })}
                className={`block w-full resize-none rounded-2xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-500 focus:ring-2 ${
                  errors.feedback
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : isDark
                    ? "border-slate-700 bg-slate-950/70 text-white focus:border-blue-500 focus:ring-blue-500/20"
                    : "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />

              {errors.feedback && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.feedback.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`group relative flex w-full items-center justify-center overflow-hidden rounded-2xl px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${
                loading
                  ? "cursor-not-allowed bg-blue-600/60"
                  : "bg-blue-600 shadow-blue-600/20 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/30"
              }`}
            >
              {/* Button glow */}
              {!loading && (
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              )}

              <span className="relative">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Feedback"
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
