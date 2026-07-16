import type { ServiceOrder } from "../types";

interface StatusSummaryProps {
  orders: ServiceOrder[];
}

const StatusSummary = ({ orders }: StatusSummaryProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm h-full">{/*bloco do status summary*/}

      <p className="text-sm font-bold text-slate-700 mb-4">Resumo por status</p>

      <div className="flex flex-col gap-3">{/*bloco que segura um embaixo do outro*/}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <p className="text-sm text-slate-600">Aberto</p>
          </div>{/*contador - aberto*/}

          <span className="font-bold text-slate-700">
            {orders.filter((order) => order.status === "open").length}
          </span>
        </div>{/*contador - aberto*/}

        <div className="h-[1px] bg-slate-100"></div>{/*linha divisoria*/}

        <div className="flex items-center justify-between">{/*em andamento*/}
          <div className="flex items-center gap-2">{/*texto - em andamento*/}
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <p className="text-sm text-slate-600">Em andamento</p>
          </div>{/*texto - em andamento*/}

          <span className="font-bold text-slate-700">
            {orders.filter((order) => order.status === "in_progress").length}
          </span>
        </div>{/*em andamento*/}

        <div className="h-[1px] bg-slate-100"></div>{/*linha divisoria*/}

        <div className="flex items-center justify-between">{/*finalizado*/}
          <div className="flex items-center gap-2">{/*texto - finalizado*/}
            <span className="w-2 h-2 rounded-full bg-slate-600"></span>
            <p className="text-sm text-slate-600">Finalizado</p>
          </div>{/*texto - finalizado*/}

          <span className="font-bold text-slate-700">
            {orders.filter((order) => order.status === "done").length}
          </span>
        </div>{/*finalizado*/}
      </div>{/*bloco que segura um embaixo do outro*/}

      <div className="h-[1px] bg-slate-100 my-4"></div>{/*linha divisoria*/}

      <div className="flex justify-between">{/*total de ordens*/}
        <p className="text-sm font-semibold text-slate-500">Total</p>

        <span className="font-bold text-slate-800">{orders.length}</span>
      </div>{/*total de ordens*/}
    </div>
  );
};

export default StatusSummary;
