import {useState} from 'react'
import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, Plus, AtSign} from 'lucide-react'

export function App() {

  const [isGuestInputVisible, setIsGuestInputVisible] = useState<boolean>(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState<boolean>(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    'jessica.white44@yahoo.com'
  ]);


  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center ">
      <div className="max-w-[720px] w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src='/logo.svg' alt="" />
          <p className="text-zinc-300 text-lg ">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
            <div className='flex items-center flex-1 gap-2'>
              <MapPin className='size-5 text-zinc-400'/>
              <input 
                type="text" 
                placeholder="Para onde vcê vai?" 
                disabled={isGuestInputVisible}
                className="flex-1 text-large placeholder:text-zinc-400 bg-transparent outline-none" 
              />
            </div>
            
            <div className='flex items-center gap-2 '>
              <Calendar className='size-5 text-zinc-400'/>
              <input 
                type="text" 
                placeholder="Quando?" 
                disabled={isGuestInputVisible}
                className="w-40 text-large placeholder:text-zinc-400 bg-transparent outline-none" 
              />
            </div>

            <div className='w-px h-6 bg-zinc-800'/>

            {
              isGuestInputVisible ? 
              <button 
                onClick= {() => setIsGuestInputVisible(false)}
                className='px-5 py-2 flex items-center gap-2 font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg'
              >
                Alterar local/data
                <Settings2 className='size-5 '/>
              </button>
              :
              <button 
                onClick= {() => setIsGuestInputVisible(true)}
                className='px-5 py-2 flex items-center gap-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'
              >
                Continuar
                <ArrowRight className='size-5 '/>
              </button>

            }

          </div>
          
          
          {
            isGuestInputVisible &&
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
              <button 
                onClick={() => setIsGuestModalOpen(true)}
                className='flex items-center flex-1 gap-2'
              >
                <UserRoundPlus className='size-5 text-zinc-400'/>
                <span className='flex-1 text-large text-start placeholder:text-zinc-400'>Quem estará na viagem?</span>
              </button>

              <div className='w-px h-6 bg-zinc-800'/>

              <button 
                className='px-5 py-2 flex items-center gap-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'
              >
                Confirmar viagem
                <ArrowRight className='size-5 '/>
              </button>
            </div>
          }
        </div>

        <p className="text-small text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda 
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade.</a>
        </p>
      </div>

      {/* MODAL */}
      {isGuestModalOpen && (
        <div 
          className='fixed inset-0 px-5 flex items-center justify-center bg-black/60'
        >
          <div className='w-full max-w-[640px] py-5 px-6 space-y-5 bg-zinc-900 rounded-xl shadow-shape '>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>
                Selecionar convidados
              </h2>

              <button type='button' onClick={() => setIsGuestModalOpen(false)}>
                <X className='size-5 text-zinc-400'/>
              </button>
            </div>
            
            <p className='mt-2 text-sm text-zinc-400'>
              Os convidados irão receber e-mails para confirmar a participação na viagem.
            </p>

            <div className='flex flex-wrap gap-2'>
              <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-md bg-zinc-800'>
                <span>jessica.white44@yahoo.com</span>
                <X className='size-4 text-zinc-400'/>
              </div>

              <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-md bg-zinc-800'>
                <span>erik_leffler3@gmail.com</span>
                <X className='size-4 text-zinc-400'/>
              </div>

              <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-md bg-zinc-800'>
                <span>jessica.white44@yahoo.com</span>
                <X className='size-4 text-zinc-400'/>
              </div>

              <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-md bg-zinc-800'>
                <span>jessica.white44@yahoo.com</span>
                <X className='size-4 text-zinc-400'/>
              </div>

              <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-md bg-zinc-800'>
                <span>jessica.white44@yahoo.com</span>
                <X className='size-4 text-zinc-400'/>
              </div>

              <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-md bg-zinc-800'>
                <span>jessica.white44@yahoo.com</span>
                <X className='size-4 text-zinc-400'/>
              </div>
            </div>

            <div className='w-full h-0.5 bg-zinc-800'/>

            <form>
              <div className='p-2.5 flex items-center rounded-lg border border-zinc-800 bg-zinc-950'>
                <AtSign className='size-5 text-zinc-400 mr-2.5'/>

                <input 
                  type="text" 
                  placeholder='Digite o e-mail do convidado'
                  className='w-full flex-1 text-large placeholder:text-zinc-400 bg-transparent  outline-none'
                />

                <button 
                  type='submit'
                  className='px-5 py-2 hidden md:flex items-center gap-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'
                >
                  Convidar
                  <Plus className='size-5 '/>
                </button>
              </div>
              
              <button 
                className='px-5 py-2 mt-5 ml-auto flex md:hidden items-center gap-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'
              >
                Convidar
                <Plus className='size-5 '/>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    
  )
}
//1hr13min