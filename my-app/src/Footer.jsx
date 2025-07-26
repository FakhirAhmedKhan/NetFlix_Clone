import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const links = [
    "Legal Notices",
    "Jobs",
    "Buy Gift Cards",
    "Privacy",
    "Cookie Preferences",
    "FAQ",
    "Media Center",
    "Redeem Gift Cards",
    "Terms of Use",
    "Corporate Information",
    "Ways to Watch",
    "Contact Us",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Email submitted:", email);
    // Add logic for actual submission or routing
  };

  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 text-sm space-y-10">
      <p className="text-center text-2xl text-white">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      {/* Email Form with Floating Label */}
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col md:flex-row items-center gap-4"
      >
        <div className="relative w-full md:flex-1">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="peer w-full px-4 py-3 bg-black/70 border border-gray-500 rounded text-white placeholder-transparent focus:outline-none focus:border-blue-500"
          />
          <label
            htmlFor="email"
            className={`
              absolute left-4 top-3 text-gray-400 
              transform origin-left scale-100 transition-all duration-200 ease-in-out 
              peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 
              peer-focus:top-[-3px] peer-focus:scale-90 peer-focus:text-blue-500
              ${email ? "top-[-2px] scale-20 text-blue-500" : ""}
            `}
          >
            Email address
          </label>
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold"
        >
          Get Started
        </button>
      </form>

      {/* Contact Info & Language Selector */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
        <p className="text-lg text-white">
          <span style={{ color: "oklch(86.9% 0.005 56.366)" }}>
            Questions? Call
          </span>{" "}
          <span className="underline cursor-pointer">800 035 702473</span>
        </p>

        <div className="flex items-center gap-2 w-fit border border-gray-500 px-3 py-2 rounded bg-black text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            className="text-white-400"
            aria-label="Language icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
            />
          </svg>

          <select className="bg-black text-white outline-none">
            <option value="ar-AE">العربية</option>
            <option value="en-AE">English</option>
          </select>
        </div>
      </div>

      {/* Footer Links Grid */}
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4"
        style={{ color: "oklch(75% 0.005 56.366)" }}
      >
        {links.map((item, idx) => (
          <li
            key={idx}
            className="text-[16px] underline cursor-pointer hover:text-white transition"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Footer Bottom */}
      <div className="pt-6 space-y-4">
        <p className="text-lg" style={{ color: "oklch(75% 0.005 56.366)" }}>
          Netflix Fakhir Ahmed Khan
        </p>
        <p className="text-base text-gray-300 dark:text-gray-400">
          This page is protected by Vercel to ensure you're not a bot or is a
          demo project.
          <span className="underline cursor-pointer text-blue-600 dark:text-sky-400 ml-1">
            Learn more.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
