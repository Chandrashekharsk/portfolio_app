import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../slices/themeSlice";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { Avatar } from "@mui/material";
import logo from "/logo.png";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const location = useLocation();
  const navigate = useNavigate();

  const isDark = theme === "dark";

  useEffect(() => {
    const currentPath = location.pathname.substring(1);

    const activeLink = navLinks.find(
      (link) => link.id === currentPath
    );

    if (activeLink) {
      setActive(activeLink.title);
    } else {
      setActive("/");
    }

    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch(setTheme("dark"));
      document.documentElement.classList.add("dark");
    } else {
      dispatch(setTheme("light"));
      document.documentElement.classList.remove("dark");
    }
  }, [location, dispatch]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleThemeClick = () => {
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    dispatch(setTheme(nextTheme));
  };

  const handleLogoutClick = async () => {
    try {
      await signOut(auth);
      toast.success("Logged Out Successfully");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
          isNavbarVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          isDark
            ? "border-slate-800/80 bg-slate-950/85 text-white"
            : "border-slate-200/80 bg-white/85 text-slate-900"
        }`}
      >
        {/* Subtle blue glow */}
        <div
          className={`pointer-events-none absolute left-1/2 top-0 h-20 w-72 -translate-x-1/2 rounded-full blur-3xl ${
            isDark ? "bg-blue-500/10" : "bg-blue-400/10"
          }`}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* ================= LEFT ================= */}
            <div className="flex items-center gap-3">
              {/* Mobile Menu */}
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
                  isDark
                    ? "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>

              {/* Logo */}
              <Link
                to="/"
                aria-label="Go to homepage"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="group relative"
              >
                <div
                  className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 group-hover:opacity-100 ${
                    isDark ? "bg-blue-500/20" : "bg-blue-400/20"
                  } opacity-50`}
                />

                <Avatar
                  src={logo}
                  alt="Chandrashekhar Singh Kushwaha"
                  sx={{
                    width: 42,
                    height: 42,
                    position: "relative",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: isDark
                      ? "2px solid rgba(59,130,246,0.45)"
                      : "2px solid rgba(59,130,246,0.25)",
                  }}
                />
              </Link>
            </div>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive = active === link.title;

                return (
                  <Link
                    key={link.id}
                    to={`/${link.id}`}
                    onClick={() => setActive(link.title)}
                    className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                        : isDark
                        ? "text-slate-400 hover:bg-slate-800/70 hover:text-blue-400"
                        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                    }`}
                  >
                    {link.title}

                    {/* Active indicator */}
                    {isActive && (
                      <span
                        className={`absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full ${
                          isDark ? "bg-cyan-400" : "bg-blue-500"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Button */}
              <button
                onClick={handleThemeClick}
                aria-label="Toggle theme"
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "border-slate-700 bg-slate-900/70 hover:border-blue-500/50 hover:bg-blue-500/10"
                    : "border-slate-200 bg-slate-50 hover:border-blue-500/50 hover:bg-blue-50"
                }`}
              >
                {isDark ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-blue-600" />
                )}
              </button>

              {/* Auth Button */}
              {!user ? (
                <Link
                  to="/sign-in"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/30"
                >
                  <span className="hidden xs:inline sm:inline">
                    Sign In
                  </span>
                  <span className="sm:hidden">Login</span>
                </Link>
              ) : (
                <button
                  onClick={handleLogoutClick}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/30"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed left-0 top-0 z-[70] h-screen w-[82%] max-w-sm transform border-r shadow-2xl transition-transform duration-300 md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        } ${
          isDark
            ? "border-slate-800 bg-slate-950 text-white"
            : "border-slate-200 bg-white text-slate-900"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-800/60 px-5 py-5">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <Avatar
              src={logo}
              alt="logo"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div>
              <p
                className={`text-sm font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Chandrashekhar
              </p>

              <p className="text-xs text-blue-500">
                Full Stack Developer
              </p>
            </div>
          </Link>

          <button
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
              isDark
                ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                : "border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <div className="flex flex-col gap-2 p-5">
          {navLinks.map((link) => {
            const isActive = active === link.title;

            return (
              <Link
                key={link.id}
                to={`/${link.id}`}
                onClick={() => {
                  setActive(link.title);
                  closeMobileMenu();
                }}
                className={`flex items-center rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-blue-50 text-blue-600"
                    : isDark
                    ? "text-slate-400 hover:bg-slate-900 hover:text-blue-400"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        {/* Drawer Bottom Glow */}
        <div
          className={`pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full blur-3xl ${
            isDark ? "bg-blue-500/10" : "bg-blue-400/10"
          }`}
        />
      </div>
    </>
  );
};

export default Navbar;

