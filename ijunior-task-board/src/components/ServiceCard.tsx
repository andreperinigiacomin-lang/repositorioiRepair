
import type { ServiceOrder } from "../types";
import type { Client } from "../types";

interface ServiceCardProps {
    order: ServiceOrder;
    clients: Client[];
    onRemoveOrder?: (id: number) => void;
}

const ServiceCard = ({ order, clients, onRemoveOrder }: ServiceCardProps) => {
  const client = clients.find(
  (client) => client.id === order.client_id
);
  const getDeviceIcon = () => {
    const device = order.device.toLowerCase();

    if (
      device.includes("iphone") ||
      device.includes("celular") ||
      device.includes("galaxy")
    ) {
      return "bi-phone";
    }

    if (
      device.includes("notebook") ||
      device.includes("laptop") ||
      device.includes("macbook")
    ) {
      return "bi-laptop";
    }

    if (device.includes("tablet")) {
      return "bi-tablet";
    }

    return "bi-tools";
  };
  
  const getIconStyle = () => {
    switch (order.status) {
      case "open":
        return "bg-emerald-50 text-emerald-600";

      case "in_progress":
        return "bg-blue-50 text-blue-600";

      case "done":
        return "bg-slate-100 text-slate-600";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const statusStyle: Record<string, string> = {
    "open": "bg-emerald-100 text-emerald-800",
    "in_progress": "bg-blue-100 text-blue-800",
    "done": "bg-slate-200 text-slate-700",
  };
  return (
    <div className="w-full max-w-[300px] bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between max-h-[250px]">{/*tamanho do card*/}
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-3">
          <div 
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${getIconStyle()}`}>
            <i className={`bi ${getDeviceIcon()}`}></i>
          </div>{/*logo */}

          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-slate-800 tracking-tight truncate max-w-[140px]">
              {client?.name ?? "Cliente não encontrado"}
            </h4>
            <p className="text-xs font-medium text-slate-400">
              {order.device}
            </p>
          </div>{/*centralizar-card*/}
        </div>{/*cabecalho-card */}

        <button
          onClick={() => onRemoveOrder?.(order.id)}
          className="text-slate-400 hover:text-red-600 cursor-pointer p-1"
        >
          <i className="bi bi-trash3"></i>
        </button>{/*lixeira */}
      </div>

      <div className="flex flex-col gap-3 mt-4 my-auto">{/*meio do card*/}
        <p className="text-sm text-slate-600 font-semibold tracking-tight">
          {order.issue}
        </p>
        <div className="flex">{/*bolinha e status lado a lado*/}
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[order.status]}`}>
            <span className="w-2 h-2 aspect-square rounded-full bg-current"></span>
            {order.status}
          </span>
        </div>{/*bolinha e status lado a lado */}
      </div>{/*meio do card */}

      <div className="mt-4 w-full">{/*rodape do card*/}
        <div className="h-[1px] w-full bg-slate-100 mb-3"></div>{/*linha divisoria */}
        <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">{/*codigo e data*/}
          <p>{order.id}</p>
          <p>{order.created_at}</p>
        </div>{/*codigo e data */}
      </div>{/*rodape do card */}
    </div>
  );
};

export default ServiceCard;
