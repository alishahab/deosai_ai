const Hero = () => {
  return (
    <section className="relative overflow-hidden max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
       {/* <h1 className="bold-52 lg:bold-88">AI-Powered Synthetic Medical</h1>*/}
       <h1 className="bold-82 lg:text-[64px] lg:font-[700] lg:leading-[120%]">More Attention for Patients. Less Time on Documentation</h1>
        {/* <p className="regular-20 mt-6 text-gray-30 xl:max-w-[700px]">
          Speech-to-Text | Medical Decision Support | Seamless Care Delivery
        </p>*/}
        <p className="regular-24 mt-6 text-gray-30 xl:max-w-[700px]">
        Your AI clinical assistant that captures visits, drafts notes, and keeps documentation effortless.
        </p>
      </div>

      <div className="relative flex flex-1 items-start"></div>
    </section>
  )
}

export default Hero
