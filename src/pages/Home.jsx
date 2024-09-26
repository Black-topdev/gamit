import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <main className="flex flex-col gap-16 md:gap-32 pt-10 md:pt-20 pb-20 md:pb-44 px-6 md:px-16 mx-auto">
      <section className="flex flex-col items-center gap-10 md:gap-20">
        <div className="flex pl-0 justify-between">
          <img
            src="/assets/img/home/main-left.svg"
            alt="arbitrium"
            className="max-w-[720px]"
          />
          <div
            className="flex flex-col items-center gap-6 md:gap-12 max-w-[720px] mx-auto"
            // data-aos="fade-up"
          >
            <div className="flex flex-col text-center font-extrabold pt-16 uppercase">
              <span className="text-6xl">The Future of</span> 
              <span className="text-8xl">Sports <br/> Betting</span>
              <span className="text-7xl">is Here</span> 
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-8"
          // data-aos="zoom-in"
          // data-aos-delay={200}
        >
          <p className="text-lg md:text-3xl font-bold text-gray-600 text-center">PARTNERS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>                
              <img
                src="/assets/img/home/partner-ethereum.svg"
                alt="ethereum"
                className="w-10 h-10"
              />
            </div>
            <div>
              <img
                src="/assets/img/home/partner-arbitrium.svg"
                alt="arbitrium"
                className="w-10 h-10"
              />
            </div>
            <div>
              <img
                src="/assets/img/home/partner-base.svg"
                alt="arbitrium"
                className="w-10 h-10"
              />
            </div>
            <div>
              <img
                src="/assets/img/home/partner-fx1.svg"
                alt="arbitrium"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full px-0">
        <img
          src="/assets/img/home/main-footer.svg"
          alt="arbitrium"
          className="w-fit"
        />
      </div>

      <section className="flex flex-col items-center">
        <div className="flex flex-col font-extrabold uppercase text-center gap-2">
          <span className="text-4xl">bet on your favourite</span>
          <span className="text-6xl">sports with crypto</span>
        </div>
        <Slider
            {...settings}
            className="mx-10 pt-8 gap-8 w-[calc(100%-80px)] md:w-[calc(50%-80px)]"
          >
            <img
              src="/assets/img/home/carousel1.svg"
              className="w-full border border-[#C1F9167A] rounded-2xl"
            />
            <img
              src="/assets/img/home/carousel1.svg"
              className="w-full border border-[#C1F9167A] rounded-2xl"
            />
        </Slider>
      </section>

      <section data-aos="fade-left" data-aos-delay={200}>
        <div className="mb-16 flex flex-col md:flex-row gap-6">
          <Slider
            {...settings}
            className="mx-10 w-[calc(100%-80px)] md:w-[calc(50%-80px)]"
          >
            <img
              src="/assets/img/home/carousel1.svg"
              className="w-full border border-[#C1F9167A] rounded-2xl"
            />
            <img
              src="/assets/img/home/carousel1.svg"
              className="w-full border border-[#C1F9167A] rounded-2xl"
            />
          </Slider>
          <Slider
            {...settings}
            className="mx-10 w-[calc(100%-80px)] md:w-[calc(50%-80px)]"
          >
            <img
              src="/assets/img/home/carousel2.svg"
              className="w-full border border-[#C1F9167A] rounded-2xl"
            />
            <img
              src="/assets/img/home/carousel2.svg"
              className="w-full border border-[#C1F9167A] rounded-2xl"
            />
          </Slider>
        </div>
        <p className="text-xl md:text-4xl font-semibold mb-4 md:mb-8">
          Most Popular bets
        </p>

        <div className="flex gap-1 md:gap-3 mb-5 md:mb-10 flex-wrap text-xs md:text-base">
          <p className="bg-[#C1F916] rounded-2xl text-[#030400] font-semibold py-[10px] px-4">
            Soccer
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            Basketball
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            Tennis
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            FootballGo
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            American Football
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            Cricket
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            Hockey
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            Baseball
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            Wrestling
          </p>
          <p className="bg-[#232323] rounded-2xl font-semibold py-[10px] px-4">
            Handball
          </p>
        </div>

        <div className="w-full overflow-auto text-xs md:xt-base">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#181818] border border-[#C1F9163D]">
                <th className="px-3 md:px-6 py-1 md:py-3 text-left">Time</th>
                <th className="px-3 md:px-6 py-1 md:py-3 text-left">Game</th>
                <th className="px-3 md:px-6 py-1 md:py-3 text-left">1</th>
                <th className="px-3 md:px-6 py-1 md:py-3 text-left">X</th>
                <th className="px-3 md:px-6 py-1 md:py-3 text-left">2</th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill(true)
                .map((_, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-[#181818] border border-[#C1F9163D]"
                    >
                      <td className="px-3 md:px-6 py-3 md:py-6">
                        11:00 AM SEP 29
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-6">
                        Conventry City vs Tottenham Hotspur
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-6">
                        <span className="border border-[#C1F916] text-[#C1F916] px-4 py-[2px] rounded-full text-sm md:text-xl font-semibold">
                          2.10
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-6">
                        <span className="border border-[#C1F916] text-[#C1F916] px-4 py-[2px] rounded-full text-sm md:text-xl font-semibold">
                          3.75
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-6">
                        <span className="border border-[#C1F916] text-[#C1F916] px-4 py-[2px] rounded-full text-sm md:text-xl font-semibold">
                          2.75
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className="border border-[#C1F9167A] rounded-2xl p-4 md:p-8 flex flex-col gap-6 md:gap-12"
          data-aos="fade-up"
        >
          <p className="text-xl md:text-4xl font-semibold">Why Gambit?</p>
          <p>
            Welcome to Gambit, the next-generation sports betting platform
            powered by blockchain technology. Say goodbye to outdated, opaque
            betting systems, and experience a seamless, secure, and transparent
            way to bet on your favorite sports.
          </p>
        </div>
        <div
          className="border border-[#C1F9167A] rounded-2xl p-4 md:p-8 flex flex-col gap-6 md:gap-12"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <p className="text-xl md:text-4xl font-semibold">Why Blockchain?</p>
          <p>
            Gambit uses decentralized technology to ensure that all betting
            transactions are immutable and transparent. You’ll never have to
            worry about shady practices, manipulated odds, or withheld payouts
            again. Blockchain empowers you to take control of your betting
            experience.
          </p>
        </div>
        <div
          className="border border-[#C1F9167A] rounded-2xl p-4 md:p-8 flex flex-col gap-6 md:gap-12 bg-gradient-to-b from-[#C1F916] to-[#72930D] text-black"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <p className="text-xl md:text-4xl font-semibold">
            Join the Community
          </p>
          <p>
            Become part of the Gambit community and connect with fellow sports
            fans and betting enthusiasts from around the world. Stay updated
            with the latest events, exclusive promotions, and real-time insights
            from our experts. Whether you’re here to learn, share strategies, or
            just chat about the latest game, our community is the place to be.
          </p>
        </div>
        <div
          className="border border-[#C1F9167A] rounded-2xl p-4 md:p-8 flex flex-col gap-6 md:gap-12"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <p className="text-xl md:text-4xl font-semibold">
            Get Started Today!
          </p>
          <p>
            Whether you`re a casual bettor or a seasoned pro, Gambit offers the
            most secure, user-friendly, and rewarding platform for sports
            enthusiasts everywhere. Connect your wallet, place your bet, and
            start winning with Gambit today!
          </p>
          <button className="w-[160px] h-[45px] text-[#030400] bg-[#C1F916] font-bold rounded-full">
            Get started
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
