import Header from "./componentes/Header";
import ServiceCard from "./componentes/ServiceCard";
import NewServiceForm from "./componentes/NewServiceForm";
import type { ServiceOrder } from "./interfaces/ServiceOrder";
import StatusSummary from "./componentes/StatusSummary";
import { useState } from "react";

export function App() {
 const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const addOrder = (order: {
  cliente: string;
  aparelho: string;
  defeito: string;
  status: string;
}) => {
  const newOrder: ServiceOrder = {
    id: Date.now(),
    data: new Date().toLocaleDateString("pt-BR"),
    cliente: order.cliente,
    aparelho: order.aparelho,
    defeito: order.defeito,
    status: order.status,
};
setOrders([...orders, newOrder]);
};
const removeOrder = (id: number) => {
  setOrders(orders.filter((order) => order.id !== id));
};
  return (
    <>
    <div>
    <Header />
    <main className="mt-8 ml-8">
       <div className="flex gap-8">

    <div className="w-1/3 flex flex-col gap-4 items-stretc">

      <NewServiceForm onAddOrder={addOrder} />

      <div>
        <StatusSummary orders={orders} />
      </div>

    </div>


    <div className="w-2/3 grid grid-cols-3 gap-x-4 gap-y-2">

      {orders.map((order) => (
        <ServiceCard
          key={order.id}
          order={order}
          onRemoveOrder={removeOrder}
        />
      ))}

    </div>

  </div>
    </main>
    </div>
    </>
    
  )
}