function MoreReasons() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-red-600"
        >
          <path d="M4 5h16v11H4z" opacity=".3" />
          <path d="M22 3H2.01L2 17h6l-2 3h12l-2-3h6V3zM4 5h16v11H4V5z" />
        </svg>
      ),
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favorites easily and always have something to watch.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-red-600"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18h14v2H5z" />
        </svg>
      ),
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-red-600"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l-1.29 1.29c-.63.63-.18 1.71.71 1.71h10.17c.89 0 1.33-1.08.71-1.71L17 19h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-red-600"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        More Reasons to Join
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-[#141414] rounded-lg p-6 shadow-lg transition hover:scale-[1.02] hover:bg-[#1f1f1f]"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MoreReasons;
