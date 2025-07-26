// TrendingSlider.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const trendingData = [
  {
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
  },
  {
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

function TrendingSlider() {
  return (
    <section className="relative bg-[#141414] text-white overflow-hidden">
      {/* 🔴 Top Red Curve */}
      <div className="absolute -top-1 left-0 w-full z-0 overflow-hidden">
        <svg
          className="w-full h-12 md:h-16"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C150,80 350,0 500,40 L500,0 L0,0 Z"
            fill="rgb(229,9,20)"
          />
        </svg>
      </div>

      {/* 🔴 Soft gradient (optional glow) */}
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-[rgb(229,9,20)] to-transparent z-0 opacity-80" />

      {/* Content Section */}
      <div className="relative z-10 px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Trending Now</h2>

        <Slider {...settings}>
          {trendingData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative transition-transform hover:scale-105 duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <span className="absolute top-2 left-2 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded-md">
                  #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TrendingSlider;
