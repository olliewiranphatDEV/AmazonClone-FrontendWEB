import { ShieldCheck } from 'lucide-react'
import React from 'react'
import ReloadingLink from '../ReloadingLink'

function AdminAccess() {
    return (
        <ReloadingLink to='/admin' className=' account flex justify-start gap-2 hover:bg-slate-400 hover:font-semibold hover:text-black w-full py-[10px] px-4 hover:duration-300 rounded-sm cursor-pointer'>
            <ShieldCheck className='h-[18px]' />
            <span className='ml-1 bottom-[2px] text-[12px]'>Centric Staff</span>
        </ReloadingLink>
    )
}

export default AdminAccess