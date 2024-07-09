import {MapPin, Calendar, ArrowRight} from 'lucide-react'

import "./index.css"

export function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[720px] w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg ">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
          <div className='flex items-center flex-1 gap-2'>
            <MapPin className='size-5 text-zinc-400'/>
            <input type="text" placeholder="Para onde vcê vai?" className="text-large placeholder:text-zinc-400 bg-transparent outline-none" />
          </div>
          
          <div className='flex items-center gap-2 '>
            <Calendar className='size-5 text-zinc-400'/>
            <input type="text" placeholder="Quando?" className="w-40 text-large placeholder:text-zinc-400 bg-transparent outline-none" />
          </div>

          <div className='w-px h-6 bg-zinc-800'/>

          <button className='px-5 py-2 flex items-center gap-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'>
            Continuar
            <ArrowRight className='size-5 '/>
          </button>
        </div>

        <p className="text-small text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda 
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade.</a>
        </p>
      </div>
    </div>
  )
}
//42min