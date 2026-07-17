import { useEffect, useState } from "react";
import {
  getAllServiceOrders,
  createServiceOrder,
  deleteServiceOrder,
} from "../services/serviceOrderService";
import type { ServiceOrder, Client, CreateServiceOrderData } from "../types";
import { getAllClients } from "../services/clientService";
import ServiceCard from "../components/ServiceCard";
import NewServiceForm from "../components/NewServiceForm";

const ServiceOrdersPage = () => {
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState<Client[]>([]);

  async function loadServiceOrders() {
    try {
      const data = await getAllServiceOrders();
      console.log(data);
      setOrders(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function loadClients() {
    try {
      const data = await getAllClients();
      setClients(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function handleCreateServiceOrder(order: CreateServiceOrderData) {
    try {
      await createServiceOrder(order);

      await loadServiceOrders();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadServiceOrders();
    loadClients();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Service Orders</h1>
      <NewServiceForm
        clients={clients}
        onCreateServiceOrder={handleCreateServiceOrder}
      />

      <div className="grid grid-cols-3 gap-4">
        {orders.map((order) => (
          <ServiceCard key={order.id} order={order} clients={clients} />
        ))}
      </div>
    </div>
  );
};

export default ServiceOrdersPage;
