import { api } from "./api";
import type{ Client, CreateClientData } from "../types";

export async function getAllClients(): Promise<Client[]> {
    const response = await api.get("/clients");

    return response.data.map((client:any) => ({
        id: client.id,
        name: client.nome,
        email: client.email,
        phone: client.telefone,
    }));
}

export async function createClient(
    data: CreateClientData
): Promise<Client> {
    const response = await api.post<Client>("/clients", data);
    return response.data;
}

export async function deleteClient(
    id: number
): Promise<void> {
    await api.delete(`/clients/${id}`);
}