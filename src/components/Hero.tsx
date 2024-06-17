const Hero = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-4 py-5">
      <div className="">
        <img
          src="/hero.svg"
          alt="hero"
          className="w-full md:absolute md:bottom-4 md:right-0 md:h-full md:w-auto"
        />
        <div className="p-4 text-center md:absolute md:bottom-[100px] md:left-[100px] md:w-1/3 md:space-y-4 md:text-start">
          <h1 className="roboto-medium text-4xl leading-relaxed text-[#091133] md:text-5xl">
            Introduce Your Product Quickly & Effectively
          </h1>
          <div className="roboto-regular flex flex-col gap-4 text-base leading-relaxed text-[#505F98] md:text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="space-y-4 px-2 text-base">
            <button className="roboto-medium flex-center w-full bg-[#111B47] py-2 text-white">
              Purchase UI Kit
            </button>
            <button className="roboto-medium flex-center w-full border-2 border-solid border-[#091133] py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
