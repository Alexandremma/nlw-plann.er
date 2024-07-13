import { ArrowRight, UserRoundPlus } from 'lucide-react'

interface InviteGuestsStepProps {
    openGuestsModal: () => void
    emailsToInvite: string[]
    openConfirmTripModal: () => void
}

export function InviteGuestsStep({
    openGuestsModal,
    emailsToInvite,
    openConfirmTripModal
}: InviteGuestsStepProps) {
    return (
        <div className="h-16 flex items-center gap-3 bg-zinc-900 px-4 rounded-xl shadow-shape">
            <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                {emailsToInvite.length > 0 ? (
                <span className='flex-1 text-zinc-100 text-lg text-left'>{emailsToInvite.length} pessoa(s) convidada(s)</span>
                ) : (
                <span className='flex-1 text-zinc-400 text-lg text-left'>Quem estará na viagem?</span>
                )}
            </button>

            <div className='w-px h-6 bg-zinc-800'></div>

            <button onClick={openConfirmTripModal} className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>
                Confirmar Viagem
                <ArrowRight className='size-5' />
            </button>
        </div>
    )
}