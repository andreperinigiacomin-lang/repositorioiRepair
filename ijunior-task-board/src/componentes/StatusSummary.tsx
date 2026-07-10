import type { ServiceOrder } from "../interfaces/ServiceOrder";

interface StatusSummaryProps {
  orders: ServiceOrder[];
}

const StatusSummary = ({ orders }: StatusSummaryProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm h-full">

      <p className="text-sm font-bold text-slate-700 mb-4">
        Resumo por status
      </p>

      <div className="flex flex-col gap-3">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="text-sm text-slate-600">
              Aberto
            </span>
          </div>

          <span className="font-bold text-slate-700">
            {orders.filter(order => order.status === "Aberto").length}
          </span>
        </div>


        <div className="h-[1px] bg-slate-100"></div>


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-sm text-slate-600">
              Em andamento
            </span>
          </div>

          <span className="font-bold text-slate-700">
            {orders.filter(order => order.status === "Em Andamento").length}
          </span>
        </div>


        <div className="h-[1px] bg-slate-100"></div>


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600"></span>
            <span className="text-sm text-slate-600">
              Aguardando peça
            </span>
          </div>

          <span className="font-bold text-slate-700">
            {orders.filter(order => order.status === "Aguardando Peça").length}
          </span>
        </div>


        <div className="h-[1px] bg-slate-100"></div>


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-600"></span>
            <span className="text-sm text-slate-600">
              Finalizado
            </span>
          </div>

          <span className="font-bold text-slate-700">
            {orders.filter(order => order.status === "Finalizado").length}
          </span>
        </div>

      </div>


      <div className="h-[1px] bg-slate-100 my-4"></div>


      <div className="flex justify-between">
        <span className="text-sm font-semibold text-slate-500">
          Total
        </span>

        <span className="font-bold text-slate-800">
          {orders.length}
        </span>
      </div>

    </div>
  );
};

export default StatusSummary;