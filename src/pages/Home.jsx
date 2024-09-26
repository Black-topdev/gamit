import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Faq } from "../components/faq";

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
    <main className="flex flex-col gap-16 md:gap-32 pb-20 md:pb-44 mx-auto">
      <div className="main-bg">
        <section className="flex flex-col items-center gap-10 md:gap-20 w-[1301px] m-auto">
          <div className="flex pl-0 w-full relative">
            <img
              src="/assets/img/home/main-left.svg"
              alt="arbitrium"
              className="z-10"
            />
            <div
              className="flex flex-col pt-12 absolute left-[52%]"
              // data-aos="fade-up"
            >
              <div className="flex flex-col font-extrabold uppercase">
                <span className="text-6xl purple-gradient-text">The Future of</span> 
                <span className="text-9xl gray-gradient-text">Sports <br/> Betting</span>
                <span className="text-7xl text-stroke">is Here!</span> 
              </div>
            </div>
            <div className="items-center absolute right-0 bottom-0 text-center">
              <img
                src="/assets/img/home/circle.svg"
                alt="circle"
                className="w-full h-full mb-2"
              />
              <span className="ml-2 font-semibold text-gray-600 pt-4">Get Started</span>
            </div>
            
          </div>

        </section>
      </div>
      <section className="fullContent flex flex-col items-center gap-10 md:gap-20 w-[1301px] m-auto">
          <div
            className="flex flex-col gap-8 w-[80%]"
            // data-aos="zoom-in"
            // data-aos-delay={200}
          >
            <p className="text-lg md:text-3xl font-bold text-gray-600 text-center">PARTNERS</p>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  src="/assets/img/home/partner-ethereum.svg"
                  alt="ethereum"
                  className="w-10"
                />
                <span className="ml-2">Ethereum</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/img/home/partner-arbitrium.svg"
                  alt="arbitrium"
                  className="w-10"
                />
                <span className="ml-2">Arbiturium</span>
                </div>
              <div className="flex items-center">
                <img
                  src="/assets/img/home/partner-base.svg"
                  alt="arbitrium"
                  className="w-10"
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
          className="w-full"
        />
      </div>

      <div className="main-bg">
        <section className="fullContent flex flex-col items-center">
          <div className="flex flex-col font-extrabold uppercase text-center gap-2">
            <span className="text-4xl purple-gradient-text">bet on your favourite</span>
            <span className="text-6xl gray-gradient-text">sports with crypto</span>
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
      </div>

      <section className="fullContent flex flex-col items-center">
        <div className="flex flex-col font-extrabold uppercase text-center gap-2">
          <span className="text-4xl purple-gradient-text">Lets get in </span>
          <span className="text-6xl gray-gradient-text">Start Playing</span>
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

      <section className="fullContent flex flex-col items-center px-4">
        <div className="flex flex-col font-extrabold uppercase text-center gap-2">
          <span className="text-4xl purple-gradient-text">Bet on your Favorite</span>
          <span className="text-6xl gray-gradient-text">popular events</span>
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

      <section className="fullContent flex flex-col items-center">
        <div className="flex flex-col font-extrabold uppercase text-center gap-2">
          <span className="text-5xl purple-gradient-text">For Your</span>
          <span className="text-7xl gray-gradient-text">Curiosity</span>
        </div>
      </section>
      <section className="fullContent">
        <Faq />
      </section>
    </main>
  );
};

export default Home;
