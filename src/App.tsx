import './App.css'
import { Accordion } from './assets/components/accordion';
import AvatarImg from './assets/memoji.webp';

function App() {
const myData = [
  {
    question: "Skills",
    answer: "HTML/CSS, Javascript, Typescript, React JS, Next JS, Tailwind, Node JS., web3 Js"
  },
  {
    question: "Education",
    answer: "B.Eng Computer Eng(Unilorin) "
  },
  {
    question: "Past Projects",
    answer: "Push Chain - Datazen - Mobicure"
  }
];

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-between box-border">
      <div className='p-12 h-full flex flex-col'>
      {/* nav */}
      <div className="flex flex-row justify-between">
        <div className='flex flex-row gap-1 items-center'>
          <img src={AvatarImg} alt="Avatar" className='w-8 h-8 rounded-full' />
          <div className='font-bold pl-2'>kolade.</div>
        </div>

        <div
          className="cursor-pointer group"
          onClick={() => window.open('mailto:your.email@example.com', '_blank')}
        >
          <span className="group-hover:hidden transition-opacity duration-300">
            contact
          </span>
          <span className="hidden group-hover:inline transition-opacity duration-300 underline">
            oyewumi.koladej@gmail.com
          </span>
        </div>
      </div>

      {/* content */}
      <div className='pt-18 items-center w-full flex flex-row justify-between gap-54 items-start'>
        <div className='flex-3/5'>
          <div className='text-gray-900 text-8xl font-bold leading-none pb-2'>I'm Kolade <br /> Oyewumi</div>
          <div className='text-3xl font-semibold pb-12 text-gray-800'>Cloud Devops Engineer</div>

          <h3 className='text-xl pb-2 text-gray-800'>The Future of Local Service Marketplace</h3>
          <div className='text-md font-light text-gray-500'>
            Our platform instantly connects homeowners with verified local service professionals, allowing users to post jobs and get quotes from top-rated workers in their area while giving professionals steady customers through our commission-based marketplace.

            This creates a network effect making us the go-to platform in each city, building the essential connection between homeowners and skilled professionals they need.
          </div>

        </div>

        {/* education */}
        <div className='flex-2/5'>
          <h2 className='font-semibold text-sm text-gray-400 pb-4'>
            ABOUT ME
          </h2>
          <Accordion items={myData} />
        </div>
      </div>

      </div>

      {/* footer */}
      <div className='w-full bg-[#dcfe9c] box-border py-6 px-12 flex flex-row justify-between'>
        <div className='text-gray-800 font-semibold text-lg'>Made by me 🎯</div>
        <div className='text-gray-800 font-semibold text-lg'>Based in Lagos, Nigeria 📍</div>
        </div>
    </div>
  )
}

export default App
