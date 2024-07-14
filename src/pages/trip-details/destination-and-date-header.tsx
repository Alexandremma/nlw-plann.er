import { MapPin, Calendar, Settings2 } from "lucide-react";

export function DestinationAndDateHeader() {
    return (
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
    )
}