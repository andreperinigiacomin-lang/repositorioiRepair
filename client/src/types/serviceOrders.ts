export type ServiceOrderStatus =
    | "open"
    | "in_progress"
    | "done";

export interface ServiceOrder {
    id: number;
    clienteId: number;
    dispositivo: string;
    problema: string;
    status: ServiceOrderStatus;
    dataInicio: string;
}

export interface CreateServiceOrderData {
    clienteId: number;
    dispositivo: string;
    problema: string;
    status: ServiceOrderStatus;
}