import Blank from '@/components/Blank';
import Traction from '@/components/Traction';
import Roadmap from '@/components/Roadmap';
import Journey from '@/components/Journey';

export default function Home() {
  return (
    <>
      <div id="blank">
      <Blank />
    </div>
    <div id="traction">
      <Traction />
    </div>
    <div id="blank">
      <Blank />
    </div>
    <div id="blank">
      <Blank />
    </div>
    <div id="blank">
      <Blank />
    </div>

    <div id="journey">
      <Journey />
    </div>
    <div id="blank">
      <Blank />
    </div>
    <div id="roadmap">
      <Roadmap />
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
