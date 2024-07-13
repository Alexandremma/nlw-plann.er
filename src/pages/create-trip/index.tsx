import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'

export function CreateTripPage() {
    const navigate = useNavigate()

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    const [emailsToInvite, setEmailsToInvite] = useState([
        'teste@gmail.com',
    ])

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

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            event.currentTarget.reset()
            return
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])

        event.currentTarget.reset()
    }

    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        navigate('/trips/123')
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

                    {isGuestsInputOpen && (
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
                    )}
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                    com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
                </p>
            </div>

            {isGuestsModalOpen && (
                <InviteGuestsModal
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeGuestsModal={closeGuestsModal}
                    removeEmailFromInvites={removeEmailFromInvites}
                />
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal 
                    closeConfirmTripModal={closeConfirmTripModal} 
                    createTrip={createTrip} 
                />
            )}

        </div>
    )
}