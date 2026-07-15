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
          className="border rounded-lg p-2"
        />

        <input
          type="text"
          placeholder="(31)99999-9999"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="border rounded-lg p-2"
        />

        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2"
        >
          Create Client
        </button>
      </div>{/*formulario*/}
    </form>
  );
};

export default NewClientForm;
