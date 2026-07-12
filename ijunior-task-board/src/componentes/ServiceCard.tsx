import React from "react";
import type { ServiceOrder } from "../interfaces/ServiceOrder";

interface ServiceCardProps {
  order: ServiceOrder;
  onRemoveOrder: (id: number) => void;
}

const ServiceCard = ({ order, onRemoveOrder }: ServiceCardProps) => {
  const getDeviceIcon = () => {
    const aparelho = order.aparelho.toLowerCase();

    if (
      aparelho.includes("iphone") ||
      aparelho.includes("celular") ||
      aparelho.includes("galaxy")
    ) {
      return "bi-phone";
    }

    if (
      aparelho.includes("notebook") ||
      aparelho.includes("laptop") ||
      aparelho.includes("macbook")
    ) {
      return "bi-laptop";
    }

    if (aparelho.includes("tablet")) {
      return "bi-tablet";
    }

    return "bi-tools";
  };
  const getIconStyle = () => {
    switch (order.status) {
      case "Aberto":
        return "bg-emerald-50 text-emerald-600";

      case "Em Andamento":
        return "bg-blue-50 text-blue-600";

      case "Aguardando Peça":
        return "bg-orange-50 text-orange-600";

      case "Finalizado":
        return "bg-slate-100 text-slate-600";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const statusStyle: Record<string, string> = {
    "Aberto": "bg-emerald-100 text-emerald-800",
    "Em Andamento": "bg-blue-100 text-blue-800",
    "Aguardando Peça": "bg-orange-100 text-orange-800",
    "Finalizado": "bg-slate-200 text-slate-700",
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
              {order.cliente}
            </h4>
            <p className="text-xs font-medium text-slate-400">
              {order.aparelho}
            </p>
          </div>{/*centralizar-card*/}
        </div>{/*cabecalho-card */}

        <button
          onClick={() => onRemoveOrder(order.id)}
          className="text-slate-400 hover:text-red-600 cursor-pointer p-1"
        >
          <i className="bi bi-trash3"></i>
        </button>{/*lixeira */}
      </div>

      <div className="flex flex-col gap-3 mt-4 my-auto">{/*meio do card*/}
        <p className="text-sm text-slate-600 font-semibold tracking-tight">
          {order.defeito}
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
          <p>{order.data}</p>
        </div>{/*codigo e data */}
      </div>{/*rodape do card */}
    </div>
  );
};

export default ServiceCard;
