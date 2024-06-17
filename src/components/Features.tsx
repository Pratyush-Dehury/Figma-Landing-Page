const Features = () => {
  return (
    <section className="flex flex-col gap-20 px-8 py-2 text-center md:px-32 md:text-left">
      <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:h-[700px] md:gap-8  ">
        <figure className="h-auto w-full overflow-hidden md:order-2">
          <img
            src="/mobile_login.svg"
            alt="mobile_login"
            className="my-4 w-full md:h-full md:w-auto"
          />
        </figure>
        <div className="grid grid-cols-1 place-items-center justify-between gap-4 md:gap-8 md:px-32">
          <div className="flex flex-col gap-8  md:text-left">
            <h3 className="roboto-medium text-3xl text-[#091133] md:text-4xl">
              Light, Fast & Powerfull
            </h3>
            <p className="roboto-regular text-[#6F7CB2]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
            <p className="roboto-regular text-[#6F7CB2]">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 place-content-center gap-4">
            <article className="flex flex-col gap-4 ">
              <figure className="flex h-9 w-full justify-center md:justify-start">
                <img src="/title_icon.svg" alt="icon" className="h-full" />
              </figure>
              <div>
                <h2 className="roboto-medium text-[#091133]">
                  Title Goes Here
                </h2>
                <p className="roboto-regular text-xs text-[#5D6970]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-4 ">
              <figure className="flex h-9 w-full justify-center md:justify-start">
                <img src="/title_icon.svg" alt="icon" className="h-full" />
              </figure>
              <div>
                <h2 className="roboto-medium text-[#091133]">
                  Title Goes Here
                </h2>
                <p className="roboto-regular text-xs text-[#5D6970]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:h-[700px] md:gap-8">
        <figure className="h-auto w-full">
          <img
            src="/happy_news.svg"
            alt="happy_news"
            className="w-full md:h-full md:w-auto"
          />
        </figure>
        <article className="flex flex-col gap-4 md:px-32">
          <h3 className="roboto-medium text-3xl text-[#091133] md:text-4xl">
            Light, Fast & Powerfull
          </h3>
          <p className="roboto-regular text-[#6F7CB2]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <p className="roboto-regular  text-[#6F7CB2]">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </article>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:h-[700px] md:gap-8">
        <figure className="h-auto w-full">
          <img
            src="/social_influencer.svg"
            alt="social influencer"
            className="w-full md:h-full md:w-auto"
          />
        </figure>
        <article className="flex flex-col gap-4 md:px-36">
          <h3 className="roboto-medium text-3xl text-[#091133] md:text-4xl">
            Light, Fast & Powerfull
          </h3>
          <p className="roboto-regular text-[#6F7CB2]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <p className="roboto-regular  text-[#6F7CB2]">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </article>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:h-[700px] md:gap-8">
        <figure className="h-auto w-full">
          <img
            src="/mention.svg"
            alt="mention"
            className="w-full md:h-full md:w-auto"
          />
        </figure>
        <article className="flex flex-col gap-4 md:px-36">
          <h3 className="roboto-medium text-3xl text-[#091133] md:text-4xl">
            Light, Fast & Powerfull
          </h3>
          <p className="roboto-regular text-[#6F7CB2]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <p className="roboto-regular  text-[#6F7CB2]">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Features;
