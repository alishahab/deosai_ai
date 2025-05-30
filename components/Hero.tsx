import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">AI-Powered Synthetic Medical Intelligence for the World</h1>
        <p className="regular-20 mt-6 text-gray-30 xl:max-w-[700px]">
          Speech-to-Text | Medical Decision Support | Seamless Care Delivery
        </p>


      </div>

      <div className="relative flex flex-1 items-start">
        

      </div>
    </section>
  )
}

export default Hero