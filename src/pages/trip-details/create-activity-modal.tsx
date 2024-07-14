import { Calendar, Tag, X } from 'lucide-react'

interface CreateActivityModalProps {
    closeCreateActivityModal: () => void
}

export function CreateActivityModal({closeCreateActivityModal}: CreateActivityModalProps) {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/60'>
            <div className="w-[540px] py-5 px-6 space-y-4 bg-zinc-900 rounded-xl shadow-shape">
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                        <button type='button' onClick={closeCreateActivityModal}>
                            <X className='size-5 text-zinc-400 transition hover:text-zinc-50' />
                        </button>
                    </div>

                    <p className='text-sm text-zinc-400'>
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>

                <form >
                    <div className='h-14 mb-2 flex items-center gap-2 px-4 bg-zinc-950 border border-zinc-800 rounded-lg'>
                        <Tag className='size-5 text-zinc-400'/>
                        <input 
                            type="text" 
                            name='title' 
                            placeholder='Qual a atividade?' 
                            className='flex-1 bg-transparent placeholder-zinc-400 outline-none' 
                        />
                    </div>

                    <div className='h-14 mb-3 flex items-center gap-2 px-4 bg-zinc-950 border border-zinc-800 rounded-lg'>
                        <Calendar className='size-5 text-zinc-400'/>
                        <input 
                            type="datetime-local"
                            name='occurs_at' 
                            placeholder='Data e horário da atividade'
                            className='flex-1 bg-transparent placeholder-zinc-400 outline-none [color-scheme:dark]' 
                        />
                    </div>
                
                    <button type='submit' className='h-11 w-full flex items-center justify-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-4 font-medium hover:bg-lime-400'>
                        Salvar atividade
                    </button>
                </form>
            </div>
        </div>
    )
}