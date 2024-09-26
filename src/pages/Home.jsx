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
            <div className="flex items-center">
              <img
                src="/assets/img/home/partner-ethereum.svg"
                alt="ethereum"
                className="w-10 h-10"
              />
              <span className="ml-2">Ethereum</span>
            </div>
            <div className="flex items-center">
              <img
                src="/assets/img/home/partner-arbitrium.svg"
                alt="arbitrium"
                className="w-10 h-10"
              />
              <span className="ml-2">Arbiturium</span>
              </div>
            <div className="flex items-center">
              <img
                src="/assets/img/home/partner-base.svg"
                alt="arbitrium"
                className="w-10 h-10"
              />
              <span className="ml-2">Base</span>
              </div>
            <div className="flex items-center">
              <img
                src="/assets/img/home/partner-fx1.svg"
                alt="arbitrium"
                className="w-10 h-10"
              />
              <span className="ml-2">FX1</span>
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
            className="mx-10 pt-8 gap-8 w-[calc(100%-80px)] md:w-[calc(80%-80px)]"
          >
            <img
              src="/assets/img/home/carousel-1.png"
              className="w-full rounded-2xl px-2"
            />
            <img
              src="/assets/img/home/carousel-2.png"
              className="w-full rounded-2xl px-2"
            />
        </Slider>
        
        <img
          src="/assets/img/home/iPhone-Mockup.png"
          alt="iPhone-Mockup"
          className="w-fit"
        />
      </section>

      <section className="flex flex-col items-center">
        <div className="flex flex-col font-extrabold uppercase text-center gap-2">
          <span className="text-4xl">Lets get in </span>
          <span className="text-6xl">Start Playing</span>
        </div>
        <div className="flex flex-col text-center text-gray-600 text-xl mt-4">
          <span>Choose what you want to play among diverse options to start with.</span>
          <span>you can explore the latest news about sports in discover section.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="flex items-end">
            <div>
              <img src="/assets/img/home/trending.png"/>
              <p className="text-center uppercase font-extrabold">trending</p>
            </div>
          </div>
          <div className="flex items-end">
            <div>
              <img src="/assets/img/home/sports.png"/>
              <p className="text-center uppercase font-extrabold">sports</p>
            </div>
          </div>
          <div className="flex items-end">
            <div>
              <img src="/assets/img/home/discover.png"/>
              <p className="text-center uppercase font-extrabold">discover</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className="flex flex-col font-extrabold uppercase text-center gap-2">
          <span className="text-4xl">Bet on your Favorite</span>
          <span className="text-6xl">popular events</span>
        </div>
        <div className="flex justify-center gap-4 mt-16">
          <button className="border border-gray-500 rounded-md flex items-center font-bold px-4 py-2">
            <span className="bg-red-600 w-2 h-2 rounded-full"></span>
            <span className="ml-2 text-2xl">Live</span>
          </button>
          <button className="bg-[#BFF816] rounded-md text-black text-2xl px-4 py-2">
            Top Events
          </button>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-[#BFF816] rounded-full text-black text-xl px-4 py-1">
            Soccer
          </button>
          <button className="bg-gray-800 rounded-full text-xl px-4 py-1">
            Basketball
          </button>
          <button className="bg-gray-800 rounded-full text-xl px-4 py-1">
            Tennis
          </button>
          <button className="bg-gray-800 rounded-full text-xl px-4 py-1">
            FootballGo
          </button>
          <button className="bg-gray-800 rounded-full text-xl px-4 py-1">
            American Football
          </button>
          <button className="bg-gray-800 rounded-full text-xl px-4 py-1">
            Cricket
          </button>
          <button className="bg-gray-800 rounded-full text-xl px-4 py-1">
            Hockey
          </button>
          <button className="bg-gray-800 rounded-full text-xl px-4 py-1">
            Baseball
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-16">
          <div className="border border-[#295323] rounded-lg p-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-che.png"/>
                <span className="text-gray-600 mt-1">CHE</span>
                <span className="mt-1 font-bold">Chelsea</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600">Matchday 2</span>
                <span className="mt-1 font-bold text-2xl">0 : 0</span>
                <span className="text-gray-600">February 8, 2024</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-ars.png"/>
                <span className="text-gray-600 mt-1">ARS</span>
                <span className="mt-1 font-bold">Arsenal</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 m-2">
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">1x</span>
                <span className="font-bold">3.56</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">x</span>
                <span className="font-bold">2.99</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">2x</span>
                <span className="font-bold">1.86</span>
              </button>
            </div>
            <div className="mt-4 h-2 bg-red-600">
              <div className="h-2 bg-blue-600 w-[60%]"></div>
            </div>
          </div>

          <div className="border border-[#295323] rounded-lg p-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-drt.png"/>
                <span className="text-gray-600 mt-1">DRT</span>
                <span className="mt-1 font-bold">Dortmund</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600">Matchday 2</span>
                <span className="mt-1 font-bold text-2xl">0 : 0</span>
                <span className="text-gray-600">February 8, 2024</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-brg.png"/>
                <span className="text-gray-600 mt-1">BRG</span>
                <span className="mt-1 font-bold">Brugge</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 m-2">
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">1x</span>
                <span className="font-bold">3.56</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">x</span>
                <span className="font-bold">2.99</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">2x</span>
                <span className="font-bold">1.86</span>
              </button>
            </div>
            <div className="mt-4 h-2 bg-red-600">
              <div className="h-2 bg-blue-600 w-[30%]"></div>
            </div>
          </div>

          <div className="border border-[#295323] rounded-lg p-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-int.png"/>
                <span className="text-gray-600 mt-1">INT</span>
                <span className="mt-1 font-bold">Inter</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600">Matchday 2</span>
                <span className="mt-1 font-bold text-2xl">0 : 0</span>
                <span className="text-gray-600">February 8, 2024</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-man.png"/>
                <span className="text-gray-600 mt-1">MAN</span>
                <span className="mt-1 font-bold">Man City</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 m-2">
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">1x</span>
                <span className="font-bold">3.56</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">x</span>
                <span className="font-bold">2.99</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">2x</span>
                <span className="font-bold">1.86</span>
              </button>
            </div>
            <div className="mt-4 h-2 bg-red-600">
              <div className="h-2 bg-blue-600 w-[80%]"></div>
            </div>
          </div>

          <div className="border border-[#295323] rounded-lg p-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-che.png"/>
                <span className="text-gray-600 mt-1">CHE</span>
                <span className="mt-1 font-bold">Chelsea</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600">Matchday 2</span>
                <span className="mt-1 font-bold text-2xl">0 : 0</span>
                <span className="text-gray-600">February 8, 2024</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-ars.png"/>
                <span className="text-gray-600 mt-1">ARS</span>
                <span className="mt-1 font-bold">Arsenal</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 m-2">
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">1x</span>
                <span className="font-bold">3.56</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">x</span>
                <span className="font-bold">2.99</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">2x</span>
                <span className="font-bold">1.86</span>
              </button>
            </div>
            <div className="mt-4 h-2 bg-red-600">
              <div className="h-2 bg-blue-600 w-[60%]"></div>
            </div>
          </div>

          <div className="border border-[#295323] rounded-lg p-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-drt.png"/>
                <span className="text-gray-600 mt-1">DRT</span>
                <span className="mt-1 font-bold">Dortmund</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600">Matchday 2</span>
                <span className="mt-1 font-bold text-2xl">0 : 0</span>
                <span className="text-gray-600">February 8, 2024</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-brg.png"/>
                <span className="text-gray-600 mt-1">BRG</span>
                <span className="mt-1 font-bold">Brugge</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 m-2">
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">1x</span>
                <span className="font-bold">3.56</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">x</span>
                <span className="font-bold">2.99</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">2x</span>
                <span className="font-bold">1.86</span>
              </button>
            </div>
            <div className="mt-4 h-2 bg-red-600">
              <div className="h-2 bg-blue-600 w-[30%]"></div>
            </div>
          </div>

          <div className="border border-[#295323] rounded-lg p-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-int.png"/>
                <span className="text-gray-600 mt-1">INT</span>
                <span className="mt-1 font-bold">Inter</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600">Matchday 2</span>
                <span className="mt-1 font-bold text-2xl">0 : 0</span>
                <span className="text-gray-600">February 8, 2024</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/img/home/logo-man.png"/>
                <span className="text-gray-600 mt-1">MAN</span>
                <span className="mt-1 font-bold">Man City</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 m-2">
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">1x</span>
                <span className="font-bold">3.56</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">x</span>
                <span className="font-bold">2.99</span>
              </button>
              <button className="border border-[#295323] rounded-full px-4 py-1 flex justify-between">
                <span className="text-gray-600">2x</span>
                <span className="font-bold">1.86</span>
              </button>
            </div>
            <div className="mt-4 h-2 bg-red-600">
              <div className="h-2 bg-blue-600 w-[80%]"></div>
            </div>
          </div>
        </div>

      </section>

      <section className="flex flex-col items-center">
        <div className="flex flex-col font-extrabold uppercase text-center gap-2">
          <span className="text-4xl">For Your</span>
          <span className="text-6xl">Curiosity</span>
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
