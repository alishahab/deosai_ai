import Team from "@/components/Team";
import About from "@/components/About";
import Blank from "@/components/Blank";


export default function Home() {
  return (
    <>
      <div id="about">
        <About />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="blank">
        <Blank />
      </div>

    </>

  )
}
