import { useEffect, useState } from "react";
import {
  getAllClients,
  createClient,
  deleteClient,
} from "../services/clientService";
import type { Client, CreateClientData } from "../types";
import NewClientForm from "../components/NewClientForm";
import Loading from "../components/Loading";
import ClientCard from "../components/ClientCard";

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
      await createClient(client);
      await loadClients();
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleDeleteClient = async (id: number) => {
    const confirmed = window.confirm("Deseja realmente excluir esse cliente?");
    if (!confirmed) {
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
          <li key={client.id}>
            <ClientCard client={client} onRemoveClient={handleDeleteClient} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
