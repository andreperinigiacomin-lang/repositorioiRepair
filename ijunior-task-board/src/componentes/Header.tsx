import React from 'react'

const Header = () => {
  return (
    <header className=' bg-[#0f172a] text-white px-6 py-3 flex items-center justify-start border-b border-slate-800'>
    <div className="flex items-center gap-4">
        <div className='flex items-center gap-2 bg-[#10b981] px-3 py-1.5 rounded-lg border-[#10b981]/40'>
        <i className="bi bi-tools text-[#0f172a] text-2xl [-webkit-text-stroke:1px]"></i>
        </div>
        <h1 className='font-bold text-4xl text-white tracking-tight'>i<span className='font-bold text-4xl text-[#10b981] tracking-tight'>Repair</span></h1>
    </div>{/*lado esquerdo*/}
    <div className="h-6 w-[1.5px] bg-slate-700 hidden sm:block ml-[25px]"></div>{/*linha divisoria */}
    <h3 className="text-slate-200 text-sm font-medium hidden sm:block ml-[15px]">Sistema de Ordens de Serviço</h3>
    </header>
  )
}

export default Header
