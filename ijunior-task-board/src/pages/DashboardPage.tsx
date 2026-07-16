import ServiceCard from "../components/ServiceCard";
import type { ServiceOrder } from "../types/serviceOrders";
import StatusSummary from "../components/StatusSummary";
import { useEffect, useState } from "react";
import { getAllServiceOrders } from "../services/serviceOrderService";

const DashboardPage = () => {
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  async function loadOrders() {
  try {
    const data = await getAllServiceOrders();
    setOrders(data);
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
  loadOrders();
}, []);
  return (
    <>
      <div>
        {/*bloco principal*/}
        <main className="mt-8 ml-8">
          <div className="flex gap-8">
            {/*espacamento dos blocos*/}

            <div className="w-1/3 flex flex-col gap-4 items-stretch">
              <StatusSummary orders={orders} />
            </div>

            <div className="w-2/3 grid grid-cols-3 gap-x-4 gap-y-2">
              {/*segura o bloco das cards 2/3 da tela*/}

              {orders.map((order) => (
                <ServiceCard key={order.id} order={order} clients={[]} />
              ))}
            </div>
            {/*segura o bloco das cards 2/3 da tela*/}
          </div>
          {/*espacamento dos blocos*/}
        </main>
      </div>
      {/*bloco principal*/}
    </>
  );
};
export default DashboardPage;
