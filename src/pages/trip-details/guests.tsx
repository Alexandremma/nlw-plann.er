import { CircleDashed, CircleCheck, UserCog } from "lucide-react";

export function Guests() {
    return (
        <div className='space-y-6'>
            <h2 className='text-xl font-semibold'>Convidados</h2>
            
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-12">
                    <div className='space-y-1.5'>
                        <span className='block font-medium text-zinc-100'>Jessica White</span>
                        <span className='block text-sm text-zinc-400 truncate'>
                            jessica.white44@yahoo.com
                        </span>
                    </div>
                    <CircleDashed className='shrink-0 size-5 text-zinc-400' />
                </div>
                <div className="flex items-center justify-between gap-12">
                    <div className='space-y-1.5'>
                        <span className='block font-medium text-zinc-100'>Dra. Rita Pacocha</span>
                        <span className='block text-sm text-zinc-400 truncate'>
                            lacy.stiedemann@gmail.com
                        </span>
                    </div>
                    <CircleCheck className='shrink-0 size-5 text-lime-300' />
                </div>
            </div>

            <button className='w-full flex items-center justify-center gap-2 h-10 bg-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-700'>
                <UserCog className='size-5' />
                Gerenciar Convidados
            </button>
        </div>
    )
}