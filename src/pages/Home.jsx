import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <main className="flex flex-col gap-16 md:gap-32 pt-10 md:pt-20 pb-20 md:pb-44 max-w-[1420px] px-3 mx-auto">
      <section className="flex flex-col items-center gap-10 md:gap-20">
        <div
          className="flex flex-col items-center gap-6 md:gap-12 max-w-[720px] mx-auto"
          data-aos="fade-up"
        >
          <p className="font-extrabold text-3xl md:text-6xl text-center">
            The Future of Sports Betting is Here
          </p>
          <p className="text-base md:text-2xl font-light text-center">
            Bet Smarter. Win Bigger. Own Your Game.
          </p>
          <button className="w-[160px] h-[45px] text-[#030400] bg-[#C1F916] font-bold rounded-full">
            Get started
          </button>
        </div>

        <div
          className="flex flex-col items-center gap-8"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <p className="text-lg md:text-3xl font-semibold">PARTNERS</p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-4">
              <div className="flex items-center gap-4 border border-[#444444] rounded-full p-3 font-bold">
                <img
                  src="/assets/img/home/partner-ethereum.svg"
                  alt="ethereum"
                />
                <p>Ethereum</p>
              </div>
              <div className="flex items-center gap-4 border border-[#444444] rounded-full p-3 font-bold">
                <img
                  src="/assets/img/home/partner-arbitrium.svg"
                  alt="arbitrium"
                />
                <p>Arbitrium</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <div className="flex items-center gap-4 border border-[#444444] rounded-full p-3 font-bold">
                <img src="/assets/img/home/partner-base.svg" alt="base" />
                <p>Base</p>
              </div>
              <div className="flex items-center gap-4 border border-[#444444] rounded-full p-3 font-bold">
                <img src="/assets/img/home/partner-fx1.svg" alt="fx1" />
                <p>FX1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 md:gap-16">
        <p className="text-xl md:text-4xl font-semibold text-center">
          How it works
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
          <div
            className="border border-[#C1F9167A] rounded-2xl p-4 md:p-8 flex flex-col gap-6 md:gap-12"
            data-aos="fade-up"
          >
            <img
              src="/assets/img/home/wallet-dynamic-color.svg"
              alt="connect-wallet"
              className="w-[72px] h-[72px]"
            />
            <p className="text-base md:text-2xl font-semibold">
              Connect your wallet
            </p>
            <p>
              Sign in with your web3 wallet to access the Gambit platform. No
              registration required.
            </p>
          </div>
          <div
            className="border border-[#C1F9167A] rounded-2xl p-4 md:p-8 flex flex-col gap-6 md:gap-12"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <img
              src="/assets/img/home/target-dynamic-color.svg"
              alt="connect-wallet"
              className="w-[72px] h-[72px]"
            />
            <p className="text-base md:text-2xl font-semibold">
              Choose Your Sport:
            </p>
            <p>
              Browse our wide range of sports and live events, and select the
              match you want to bet on.
            </p>
          </div>
          <div
            className="border border-[#C1F9167A] rounded-2xl p-4 md:p-8 flex flex-col gap-6 md:gap-12"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <img
              src="/assets/img/home/tick-dynamic-color.svg"
              alt="connect-wallet"
              className="w-[72px] h-[72px]"
            />
            <p className="text-base md:text-2xl font-semibold">
              Place Your Bet:
            </p>
            <p>
              Enter your wager, confirm the bet, and watch as your prediction
              plays out in real-time.
            </p>
          </div>
          <div
            className="border border-[#C1F9167A] rounded-2xl p-4 md:p-8 flex flex-col gap-6 md:gap-12"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <img
              src="/assets/img/home/money-bag-dynamic-color.svg"
              alt="connect-wallet"
              className="w-[72px] h-[72px]"
            />
            <p className="text-base md:text-2xl font-semibold">Win & Earn:</p>
            <p>
              When you win, your payouts are instantly delivered to your wallet,
              with no middlemen or delays.
            </p>
          </div>
        </div>
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
            Whether you're a casual bettor or a seasoned pro, Gambit offers the
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
