import ServiceCard from "../components/ServiceCard";
import type { ServiceOrder } from "../types/serviceOrders";
import StatusSummary from "../components/StatusSummary";
import { useEffect, useState } from "react";
import { getAllServiceOrders } from "../services/serviceOrderService";
import { getAllClients } from "../services/clientService";
import type { Client } from "../types/client";

const DashboardPage = () => {
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [clients, setClients] = useState<Client[]>([]);

  async function loadOrders() {
    try {
      const data = await getAllServiceOrders();
      console.log("Ordens recebidas:", data);
      setOrders(data);
    } catch (error) {
      console.error(error);
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
  useEffect(() => {
    loadOrders();
    loadClients();
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


            <div className="w-2/3">
              {orders.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">{/*blco sem mensagens */}
                  <h2 className="text-lg font-semibold text-slate-700">
                    Nenhuma ordem de serviço cadastrada
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Cadastre uma ordem de serviço na página "Service Orders"
                    para que ela apareça aqui.
                  </p>
                </div> /*bloco sem mensagens */
              ) : (
                <div className="grid grid-cols-3 gap-x-4 gap-y-2"> {/*segura o bloco das cards 2/3 da tela*/}
                  {orders.map((order) => (
                    <ServiceCard
                      key={order.id}
                      order={order}
                      clients={clients}
                    />
                  ))}
                </div>
              )}
            </div>{/*segura o bloco das cards 2/3 da tela*/}
          </div>{/*espacamento dos blocos*/}
        </main>
      </div>
      {/*bloco principal*/}
    </>
  );
};
export default DashboardPage;
