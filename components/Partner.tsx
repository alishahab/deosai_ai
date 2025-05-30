import Image from 'next/image'
import React from 'react'
import Button from './Button'

const PartnerWithUs = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 pb-[300px] ">
      <div className="max-container padding-container relative w-full flex items-start justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%] relative lg:top-20 lg:ml-12 pl-16 ">
          <p className="text-green-600 uppercase font-semibold tracking-wide">
            Call to Action
          </p>

          <h2 className="bold-40 lg:bold-64 mt-2">
            Partner with us to <br className="hidden lg:block" />
            transform healthcare
          </h2>

          <ul className="mt-10 space-y-4 text-gray-600 regular-20 ">
            <li>Tap into the $462B market of Primary Care advice</li>
            <li>Bring healthcare to millions of people who don’t have it today</li>
          </ul>

          <p className="mt-10 space-y-4 text-gray-600 bold-20">
            Together, we can build SensAI and start this journey.
          </p>
          <p className="font-semibold text-gray-800 mt-6 pb-16">
          </p>

          <Button
            type="button"
            title="Partner with us"
            variant="btn_green"
            href="#getapp"
          />
        </div>
      </div>

    </section>

  )
}

export default PartnerWithUs


