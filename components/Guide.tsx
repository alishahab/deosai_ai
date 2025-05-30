import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-0">
        
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          What we offer 
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[600px]"><strong>Elevating care,</strong> Scaling expertise</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">SensAI records doctor-patient conversations, turns them into flawless notes, and learns from each edit—boosting care while cutting paperwork. In 6–12 weeks it localises to new languages, growing a shared knowledge base that preserves physicians’ expertise and steadily elevates primary-care standards.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Guide