import Camp from "@/components/Camp";
import ProdIntro from "@/components/ProdIntro";
import Guide from "@/components/Guide";
import Blank from "@/components/Blank";
import Value from "@/components/Value";
import Framework from "@/components/Framework";

export default function Home() {
  return (
    <>
    <div id="blank">
      <Blank />
    </div>
    <div id="hero">
      <ProdIntro />
    </div>
    <div id="value">
      <Value />
    </div>
    <div id="blank">
      <Blank />
    </div>
    <div id="guide">
       <Guide />
    </div>
    <div id="camp">
       <Camp />
    </div>
    <div id="framework">
      <Framework />
    </div>
    <div id="blank">
      <Blank />
    </div>
    <div id="blank">
      <Blank />
    </div>

    </>
  )
}
