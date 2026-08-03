import type { Client } from "../types";

interface ClientCardProps {
  client: Client;
  onRemoveClient?: (id: number) => void;
}

const ClientCard = ({
  client,
  onRemoveClient,
}: ClientCardProps) => {
  return (
    <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
      <div>
        <p className="font-medium">{client.name}</p>

        <p className="text-sm text-slate-500">
          {client.email}
        </p>

        <p className="text-sm text-slate-500">
          {client.phone}
        </p>
      </div>

      <button
        onClick={() => onRemoveClient?.(client.id)}
        className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
        title="Excluir cliente"
      >
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
};

export default ClientCard;