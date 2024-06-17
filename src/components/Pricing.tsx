const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-pricing bg-cover bg-center bg-no-repeat px-4 py-10 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="roboto-medium  text-3xl text-[#091133] md:text-4xl">
          A Price to Suit Everyone
        </h1>
        <p className="roboto-regular text-[#6F7CB2] md:w-[700px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="roboto-medium text-4xl text-[#222F65]">$40</h1>
        <p className="roboto-regular text-[#37447E]">UI Design Kit</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-[#5D6970]">See, One price. Simple</p>
        <button className="w-full bg-[#111B47] px-6 py-2">
          <p className="roboto-medium text-sm text-white">Purchase Now</p>
        </button>
      </div>
    </section>
  );
};

export default Pricing;
