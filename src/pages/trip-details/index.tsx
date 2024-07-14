import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2 } from 'lucide-react'

export function TripDetailsPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
            <div className="h-16 flex items-center justify-between gap-5 px-4 rounded-xl bg-zinc-900 shadow-shape">
                <div className='flex items-center justify-between flex-1'>
                    <div className='flex items-center gap-2'>
                        <MapPin className='size-5 text-zinc-400' />
                        <span className='text-zinc-100'>Florianópolis, Brasil</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Calendar className='size-5 text-zinc-400' />
                        <span className='text-zinc-100'>17 a 23 de Agosto</span>
                    </div>
                </div>

                <div className='w-px h-6 bg-zinc-800'></div>
                
                <button className='flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700'>
                    <span className='text-zinc-100'>Alterar local/data</span>
                    <Settings2 className='size-5' />
                </button>
            </div>

            <main className='flex gap-16 px-6'>
                <div className='flex-1 space-y-6'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-3xl text-zinc-50 font-semibold'>Atividades</h2>
                        <button className='flex items-center gap-2 px-5 py-2 bg-lime-300 text-lime-950 rounded-lg font-medium hover:bg-lime-400'>
                            <Plus className='size-5' />
                            Cadastrar atividade
                        </button>
                    </div>

                    <div className='space-y-8'>
                        <div className='space-y-2.5'>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className='text-xs text-zinc-500'>Sábado</span>
                            </div>
                            <p className="text-zinc-500 text-sm">
                                Nenhuma atividade cadastrada nessa data.
                            </p>
                        </div>

                        <div className='space-y-2.5'>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className='text-xs text-zinc-500'>Domingo</span>
                            </div>
                            <div className='space-y-2.5'>
                                <div className='flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape'>
                                    <CircleCheck className='size-5 text-lime-300' />
                                    <span className='text-zinc-100'>Academia em grupo</span>
                                    <span className='ml-auto text-sm text-zinc-400'>08:00h</span>
                                </div>
                                <div className='flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape'>
                                    <CircleDashed className='size-5 text-zinc-400' />
                                    <span className='text-zinc-100'>Almoço</span>
                                    <span className='ml-auto text-sm text-zinc-400'>12:00h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-80 space-y-6'>
                    <div className='space-y-6'>
                        <h2 className='text-xl font-semibold'>Links importantes</h2>
                        
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-12">
                                <div className='space-y-1.5'>
                                    <span className='block font-medium text-zinc-100'>Reserva do AirBnB</span>
                                    <a href='#' className='block text-xs text-zinc-400 truncate hover:text-zinc-200'>
                                        https://www.airbnb.com.br/rooms/104700011
                                    </a>
                                </div>
                                <Link2 className='shrink-0 size-5 text-zinc-400' />
                            </div>
                            <div className="flex items-center justify-between gap-12">
                                <div className='space-y-1.5'>
                                    <span className='block font-medium text-zinc-100'>Regras da Casa</span>
                                    <a href='#' className='block text-xs text-zinc-400 truncate hover:text-zinc-200'>
                                        https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
                                    </a>
                                </div>
                                <Link2 className='shrink-0 size-5 text-zinc-400' />
                            </div>
                        </div>

                        <button className='w-full flex items-center justify-center gap-2 h-10 bg-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-700'>
                            <Plus className='size-5' />
                            Cadastrar novo link
                        </button>
                    </div>

                    <div className='w-full h-px bg-zinc-800'></div>
                    
                    <div>
                        <h3 className='text-xl font-semibold'>Convidados</h3>
                    </div>
                </div>
            </main>
        </div>
    )
} 