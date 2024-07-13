import { MapPin, Calendar, ArrowRight, Settings2 } from 'lucide-react'

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    isGuestsInputOpen, 
    closeGuestsInput, 
    openGuestsInput
}: DestinationAndDateStepProps) {
    return (
        <div className="h-16 flex items-center gap-3 bg-zinc-900 px-4 rounded-xl shadow-shape">
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400' />
                <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"/>
            </div>

            <div className='flex items-center gap-2 '>
                <Calendar className='size-5 text-zinc-400' />
                <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
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
    )
}