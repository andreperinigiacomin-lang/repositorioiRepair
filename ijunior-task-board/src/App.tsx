import Header from "./componentes/Header";
import ServiceCard from "./componentes/ServiceCard";
import NewServiceForm from "./componentes/NewServiceForm";

export function App() {
  return (
    <>
    <div>
    <Header />
    <main>
      <NewServiceForm />
      <ServiceCard />
    </main>
    </div>
    </>
    
  )
}