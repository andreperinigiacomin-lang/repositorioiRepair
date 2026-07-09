import React, { useState } from "react";

const NewServiceForm = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm max-w-md w-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-[#10b981]/10 p-1 rounded-lg text-[#10b981] flex items-center justify-center">
          <i className="bi bi-file-earmark-arrow-up text-lg [-webkit-text-stroke:0.5px]"></i>
        </div>
        {/*icone */}
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">
          Nova Ordem de Serviço
        </h2>
      </div>{/*titulo*/}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Cliente
          </label>
          <input
            type="text"
            placeholder="Nome do cliente"
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
          />
        </div>{/*cliente*/}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Aparelho
          </label>
          <input
            type="text"
            placeholder="Modelo do aparelho"
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
          />
        </div>{/*Aparelho */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Defeito
          </label>
          <input
            type="text"
            placeholder="Descreva o defeito"
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
          />
        </div>{/*Defeito */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">Status</label>
          <div className="relative">
            <select
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm appearance-none cursor-pointer"
              defaultValue="Aberto"
              >
              <option value="Aberto">Aberto</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Aguardando Peça">Aguardando Peça</option>
              <option value="Finalizado">Finalizado</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500 text-xs">
              <i className="bi bi-caret-down-fill"></i>
            </div>{/*Setinha */}
          </div>{/* */}
        </div>{/*status */}
        <button type="submit" className="w-full mt-2 bg-[#10b981] hover:bg-[#0e9f6e] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm shadow-[#10b981]/20 cursor-pointer text-sm">
        <i className="bi bi-plus-circle-fill text-xl "></i>
        Salvar Ordem de Serviço
        </button>
      </form>{/*formulario */}
    </div>
  );
};

export default NewServiceForm;
