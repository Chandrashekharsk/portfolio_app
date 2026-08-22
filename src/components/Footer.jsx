import { useSelector } from "react-redux";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/chandrashekharsk",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/chandrashekharsk",
    },
    {
      name: "LeetCode",
      icon: SiLeetcode,
      href: "https://leetcode.com/u/Chandrashekhar_singh_Kushwaha",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com/cs9981625252",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:cs9981625252@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/+918103892672",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/chandrashekhar_zz/",
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-300 ${
        isDark
          ? "border-slate-800 bg-slate-950 text-slate-300"
          : "border-slate-200 bg-slate-50 text-slate-700"
      }`}
    >
      {/* Ambient background glow */}
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl ${
          isDark ? "bg-blue-500/10" : "bg-blue-400/10"
        }`}
      />

      <div
        className={`pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full blur-3xl ${
          isDark ? "bg-cyan-400/5" : "bg-cyan-400/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row md:gap-8">
          {/* Brand / Copyright */}
          <div className="text-center md:text-left">
            <p
              className={`text-sm font-medium leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-blue-500">
                Chandrashekhar Singh Kushwaha
              </span>
              . All rights reserved.
            </p>

            <p
              className={`mt-1 text-xs sm:text-sm ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Java Full Stack Developer · Building scalable solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex max-w-full flex-wrap items-center justify-center gap-2 sm:gap-3">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={`Visit ${name}`}
                title={name}
                className={`group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:h-11 sm:w-11 ${
                  isDark
                    ? "border-slate-700 bg-slate-900/70 text-slate-400 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
                    : "border-slate-200 bg-white text-slate-500 hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10"
                }`}
              >
                <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

