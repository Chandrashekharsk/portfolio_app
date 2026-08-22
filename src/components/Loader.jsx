import "./styles/loader.css";
import { useSelector } from "react-redux";

const Loader = () => {
  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <div
      className={`loader-container ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Ambient glow */}
      <div
        className={`loader-glow ${
          isDark ? "bg-blue-500/10" : "bg-blue-400/10"
        }`}
      />

      {/* Spinner */}
      <div className="spinner" />

      {/* Loading text */}
      <p
        className={`loading-text ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        Loading
        <span className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>
    </div>
  );
};

export default Loader;