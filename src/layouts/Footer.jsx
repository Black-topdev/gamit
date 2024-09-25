import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <section className="bg-[#252525] flex flex-col md:flex-row justify-between gap-8 px-8 md:px-16 py-6 md:py-12">
        <div className="max-w-[444px] flex flex-col gap-8">
          <Link to="/">
            <img
              src="/assets/img/footer/logo.svg"
              alt="Gambit"
              className="w-[112px] h-[48px]"
            />
          </Link>
          <p className="flex flex-col gap-4 text-2xl font-bold">
            Legal Disclaimer
            <span className="text-lg text-[#FFFFFFCC]">
              Gambit is a decentralized sports betting platform. Betting
              involves risk, and users should only wager what they can afford to
              lose. Ensure you comply with your local laws and regulations
              regarding online gambling.
            </span>
          </p>
        </div>

        <div className="flex gap-12 md:gap-24">
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-2xl font-bold">Explore</p>
            <div className="flex flex-col gap-1 md:gap-3 text-[#FFFFFFCC]">
              <Link to="/">How It Works</Link>
              <Link to="/">Supported Sports</Link>
              <Link to="/">Blog & News</Link>
              <Link to="/">FAQs</Link>
              <Link to="/">FAQs</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-2xl font-bold">Stay Connected</p>
            <div className="flex flex-col gap-1 md:gap-3 text-[#FFFFFFCC]">
              <Link to="/">X (Twitter)</Link>
              <Link to="/">Discord</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Instagram</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0E0E0E] px-8 md:px-16 py-4 md:py-8 flex flex-col md:flex-row justify-between">
        <p className="text-center md:text-left">
          © 2024 Gambit. All rights reserved.
        </p>
        <div className="flex gap-6 justify-center md:justify-normal">
          <Link to="/">Terms</Link>
          <Link to="/">Privacy policy</Link>
        </div>
      </section>
    </footer>
  );
}
