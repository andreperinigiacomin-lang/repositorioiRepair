import React from 'react'
import { useEffect, useState } from "react";
import { getAllClients, createClient } from "../services/clientService";
import type { Client, CreateClientData } from "../types";
import NewClientForm from "../components/NewClientForm";

const ClientsPage = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadClients() {
            try {
                const data = await getAllClients();
                console.log(data);
                setClients(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        loadClients();
    }, []);

    const handleCreateClient = async (client: CreateClientData) => {
    try {
        await createClient(client);
    } catch (error) {
        console.error(error);
    }
};


    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
    <div className="space-y-8">
        <h1 className="text-2xl font-bold">
            Clients
        </h1>
        <NewClientForm
            onCreateClient={handleCreateClient}
        />
        <ul>
            {clients.map((client) => (
                <li key={client.id}>
                    {client.name}
                </li>
            ))}
        </ul>
    </div>
    );
};

export default ClientsPage;
