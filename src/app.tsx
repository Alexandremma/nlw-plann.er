import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function confirmTrip() {
    console.log('Viagem Confirmada!')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-square-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er logo" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
          <div className="h-16 flex items-center gap-3 bg-zinc-900 px-4 rounded-xl shadow-shape">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400' />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"/>
            </div>

            <div className='flex items-center gap-2 '>
              <Calendar className='size-5 text-zinc-400' />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-28 outline-none"/>
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>

            {isGuestsInputOpen ? (
              <button onClick={closeGuestsInput} className='flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium hover:bg-zinc-700'>
                Alterar local/data 
                <Settings2 className='size-5' />
              </button>
            ) : (
              <button onClick={openGuestsInput} className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>
                Continuar
                <ArrowRight className='size-5' />
            </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 flex items-center gap-3 bg-zinc-900 px-4 rounded-xl shadow-shape">
              <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                {/* <input type="text" placeholder="Quem estará na viagem?" className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"/> */}
                <span className='flex-1 text-zinc-400 text-lg text-left'>Quem estará na viagem?</span>
              </button>

              <div className='w-px h-6 bg-zinc-800'></div>

              <button onClick={confirmTrip} className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>
                Confirmar Viagem
                <ArrowRight className='size-5' />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
            <div className='flex items-center justify-between'>
              <h2>Selecionar convidados</h2>
              <X onClick={closeGuestsModal} className='size-5 text-zinc-400 transition-all hover:cursor-pointer hover:text-zinc-50' />
            </div>
            <p className='text-sm text-zinc-400'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
          </div>
        </div>
      )}
    </div>
  )
}