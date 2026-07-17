import { useEffect, useState } from "react";
import {getAllClients, createClient, deleteClient} from "../services/clientService";
import type { Client, CreateClientData } from "../types";
import NewClientForm from "../components/NewClientForm";
import Loading from "../components/Loading";

const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  

  async function loadClients() {
    try {
      const data = await getAllClients();
      setClients(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadClients();
  }, []);

  const handleCreateClient = async (client: CreateClientData) => {
    try {
      const newClient = await createClient(client);
      console.log("Cliente criado:", newClient);
      await loadClients();
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteClient = async (id: number) => {
    const confirmed = window.confirm("Deseja realmente excluir esse usuário?");
    if(!confirmed){
      return;
    }
    try {
      await deleteClient(id);

      await loadClients();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Clientes</h1>
      <NewClientForm onCreateClient={handleCreateClient} />
      <ul className="space-y-3">
        {clients.map((client) => (
          <li
            key={client.id}
            className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
          >
            <div>
              <p className="font-medium">{client.name}</p>
              <p className="text-sm text-slate-500">{client.email}</p>
            </div>{/*bloco-direita*/}

            <button
              onClick={() => handleDeleteClient(client.id)}
              className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
              title="Excluir cliente"
            >
              <i className="bi bi-trash3"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
