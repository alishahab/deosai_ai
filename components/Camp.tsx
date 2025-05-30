import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          
        </div>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Advanced speech-to-text engine for local dialects."
          subtitle=""
          peopleJoined=""
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="AI-driven medicalknowledge base prompts doctors to ask all the right questions."
          subtitle=""
          peopleJoined=""
        />
        <CampSite 
          backgroundImage="bg-bg-img-3"
          title="Intuitive UI enabling rapid adoption with minimal training."
          subtitle=""
          peopleJoined=""
        />
         <CampSite 
          backgroundImage="bg-bg-img-4"
          title="Seamless EHR integration for continuity of care."
          subtitle=""
          peopleJoined=""
        />
      </div>

      
    </section>
  )
}

export default Camp