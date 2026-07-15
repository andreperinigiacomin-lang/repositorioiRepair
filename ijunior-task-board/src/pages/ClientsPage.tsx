import React from 'react'
import { useEffect, useState } from "react";
import { getAllClients } from "../services/clientService";
import type { Client } from "../types";

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

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Clients</h1>

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
