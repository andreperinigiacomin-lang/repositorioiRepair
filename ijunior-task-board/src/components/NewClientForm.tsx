import { useState } from "react";

interface NewClientFormProps {
  onCreateClient: (client: {
    name: string;
    phone: string;
    email: string;
  }) => void;
}

const NewClientForm = ({ onCreateClient }: NewClientFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!name || !phone || !email) {
      return;
    }

    onCreateClient({
      name,
      phone,
      email,
    });
    setName("");
    setPhone("");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
    >
      <h2 className="text-xl font-semibold mb-4">Novo Cliente</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome do cliente"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
        />

        <input
          type="text"
          placeholder="(31)99999-9999"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
        />

        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#10b981] focus:bg-white transition-colors text-sm"
        />

        <button
          type="submit"
          className="w-full mt-2 bg-[#10b981] hover:bg-[#0e9f6e] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm shadow-[#10b981]/20 cursor-pointer text-sm"
        >
          Criar cliente
        </button>
      </div>{/*formulario*/}
    </form>
  );
};

export default NewClientForm;
