import { useState } from "react";
import type {
  Client,
  CreateServiceOrderData,
  ServiceOrderStatus,
} from "../types";

interface NewServiceFormProps {
  clients: Client[];
  onCreateServiceOrder: (
    order: CreateServiceOrderData
  ) => void;
}

const NewServiceForm = ({
  clients,
  onCreateServiceOrder,
}: NewServiceFormProps) => {
  const [clientId, setClientId] = useState("");
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] =
    useState<ServiceOrderStatus>("open");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!clientId || !device || !issue) {
      return;
    }

    onCreateServiceOrder({
      clientId: Number(clientId),
      device,
      issue,
      status,
    });

    setClientId("");
    setDevice("");
    setIssue("");
    setStatus("open");
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm w-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-[#10b981]/10 p-1 rounded-lg text-[#10b981] flex items-center justify-center">
          <i className="bi bi-file-earmark-arrow-up text-lg [-webkit-text-stroke:0.5px]"></i>
        </div>

        <h2 className="text-lg font-bold text-slate-800 tracking-tight">
          Nova Ordem de Serviço
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Cliente
          </label>

          <select
            value={clientId}
            onChange={(e) =>
              setClientId(e.target.value)
            }
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
          >
            <option value="">
              Selecione um cliente
            </option>

            {clients.map((client) => (
              <option
                key={client.id}
                value={client.id}
              >
                {client.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Aparelho
          </label>

          <input
            type="text"
            value={device}
            onChange={(e) =>
              setDevice(e.target.value)
            }
            placeholder="Modelo do aparelho"
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Defeito
          </label>

          <input
            type="text"
            value={issue}
            onChange={(e) =>
              setIssue(e.target.value)
            }
            placeholder="Descreva o defeito"
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as ServiceOrderStatus
              )
            }
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
          >
            <option value="open">Aberto</option>
            <option value="in_progress">
              Em processo
            </option>
            <option value="done">Finalizado</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-[#10b981] hover:bg-[#0e9f6e] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm shadow-[#10b981]/20 cursor-pointer text-sm"
        >
          <i className="bi bi-plus-circle-fill text-xl"></i>
          Salvar Ordem de Serviço
        </button>
      </form>
    </div>
  );
};

export default NewServiceForm;
