import backGround from "./assets/backGround.jpg";

const NetflixLandingPage = () => {
  const languages = ["English", "العربية", "Français", "Español"];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* 🔳 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${backGround})` }}
      />

      {/* 🔳 Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* 🔳 Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between px-6 py-4">
          <div className="text-3xl text-red-600 font-extrabold tracking-wider">
            NETFLIX
          </div>

          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            {/* Language Selector */}
            <select className="bg-black/60 border border-gray-500 text-white rounded px-3 py-1 text-sm">
              {languages.map((lang) => (
                <option key={lang}>{lang}</option>
              ))}
            </select>

            {/* Sign In */}
            <button className="bg-red-600 hover:bg-red-700 px-4 py-1.5 text-sm rounded font-medium">
              Sign In
            </button>
          </div>
        </header>

        {/* Main */}
        <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-10 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Unlimited movies, TV shows, and more
            </h1>

            <p className="text-lg sm:text-xl mb-4">
              Starts at AED 35. Cancel anytime.
            </p>

            <p className="text-base sm:text-lg mb-6 text-gray-300">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            {/* Email Form */}
            <form className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center sm:items-stretch">
              <input
                type="email"
                placeholder="Email address"
                required
                className="flex-1 px-4 py-3 bg-black/70 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold text-lg"
              >
                Get Started
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NetflixLandingPage;
