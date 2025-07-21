import Snackbar from "../../ui/Snackbar";
import AvatarStack from "../../ui/Avatar";
import CustomerLogos from "../../ui/Logos";
import "./Hero.css";
import BlobBackground from "../../ui/Blob";
const Hero = () => {
  return (
    <>
      <section className="w-full pt-16 pb-10 relative hero-section">
        <div className="flex flex-col gap-4 items-center text-center">
          {/* Snackbar */}
          <Snackbar />
          {/* Heading */}
          <div className="hero-content">
            {/* <div className="hero-heading">
              <h1 className="text-6xl leading-tight">Ideas Meet</h1>
              <h1 className="text-6xl text-[var(--brand-primary-color)] italic leading-tight">
                Automated Brilliance
              </h1>
            </div> */}
            <div className="hero-heading px-4 py-8 text-center">
              <h1 className="text-4xl sm:text-6xl font-bold leading-snug">
                Ideas Meet
              </h1>
              <h1 className="text-4xl sm:text-6xl sm:text-[var(--brand-primary-color)] text-[var(--brand-primary-color)] italic leading-snug mt-2">
                Automated Brilliance
              </h1>
            </div>

            {/* Paragraph */}
            <p className="mt-4 px-4 text-lg sm:px-0 sm:text-xl max-w-full sm:max-w-3xl leading-[101%] sm:leading-relaxed">
              Neutrino AI Studio transforms ideas into AI—instantly, creatively,
              and seamlessly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="button-container flex flex-wrap justify-center gap-2 sm:gap-4 px-4 sm:px-0">
            <a
              href="#learn-more"
              className="
      w-full sm:w-auto
      text-center
      bg-transparent
      text-[var(--tertiary-color)]
      border
      border-[var(--tertiary-color)]
      px-4 py-3 sm:px-6 sm:py-2
      rounded-md
      text-base sm:text-lg
      font-medium
      transition
    "
            >
              Book a Demo
            </a>
            <a
              href="#get-started"
              className="
      w-full sm:w-auto
      text-center
      bg-[var(--brand-primary-color)]
      text-white
      px-4 py-3 sm:px-6 sm:py-2
      rounded-md
      text-base sm:text-lg
      font-medium
      transition
    "
            >
              Get in Touch
            </a>
          </div>
        </div>
        <AvatarStack></AvatarStack>
        {/* <div className="mt-8 mb-4 text-center">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight">
            Trusted by top Companies
          </h2>

          <p className="mt-2 text-lg sm:text-xl max-w-3xl mx-auto leading-snug">
            Don’t just take our word for it!
          </p>
        </div>

        <CustomerLogos></CustomerLogos> */}
        {/* <div className="relative w-full flex justify-center items-center mt-8 pointer-events-none z-0">
          <div id="blob1" className="blob absolute left-0 -bottom-12"></div>
          <div id="blob2" className="blob absolute right-1/4 bottom-0"></div>
          <div id="blob3" className="blob absolute left-1/4 bottom-0"></div>
        </div> */}

        <BlobBackground></BlobBackground>
      </section>
    </>
  );
};

export default Hero;
