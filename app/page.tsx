import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import PartnerWithUs from "@/components/Partner";

export default function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="problems">
        <Problems />
      </div>
      <div id="getapp">
        <GetApp />
      </div>
      <div id="guide">
        <Guide />
      </div>
      <div id="camp">
        <Camp />
      </div>
      <div id="partner">
        <PartnerWithUs />
      </div>
    </>
  )
}


