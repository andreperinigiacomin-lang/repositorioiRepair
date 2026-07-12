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
      <div>{/*bloco principal*/}
        <Header />
        <main className="mt-8 ml-8">
          <div className="flex gap-8">{/*espacamento dos blocos*/}

            <div className="w-1/3 flex flex-col gap-4 items-stretch">{/*segura 1/3 da tela para adicionar nova secao*/}

              <NewServiceForm onAddOrder={addOrder} />

              <div>{/*bloco de status summary*/}
                <StatusSummary orders={orders} />
              </div>{/*bloco de status summary*/}
            </div>{/*segura 1/3 da tela para o adicionar nova secao e status summary*/}

            <div className="w-2/3 grid grid-cols-3 gap-x-4 gap-y-2">{/*segura o bloco das cards 2/3 da tela*/}

              {orders.map((order) => (
                <ServiceCard
                  key={order.id}
                  order={order}
                  onRemoveOrder={removeOrder}
                />
              ))}
            </div>{/*segura o bloco das cards 2/3 da tela*/}
          </div>{/*espacamento dos blocos*/}
        </main>
      </div>{/*bloco principal*/}
    </>
  );
}
