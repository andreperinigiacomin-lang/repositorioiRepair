import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export function Login(){
    const [email, setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [erro,setErro] = useState<string | null>(null);
    const [carregando, setCarregando] = useState(false);

    const {login} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault;
        setErro(null);
        setCarregando(true);

        try{
            await login(email,senha);
            navigate("/")
        } catch {
            setErro("Credenciais inválidas");
        } finally{
            setCarregando(false);
        }
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-8">
                    iRepair
                </h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>{/* formulario email */}

                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>

                        <input type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                    </div>{/* formulario email */}

                    <div>{/* formulario senha */}

                        <label className="block text-sm font-medium mb-2">
                            Senha
                        </label>

                        <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) =>
                            setSenha(e.target.value)
                        }
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                    </div>{/* formulario senha */}

                    {erro && (
                        <p className="text-red-500 text-sm">
                            {erro}
                        </p>
                    )}
                    <button type="submit"
                    disabled={carregando}
                    className="w-full rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {carregando? "Entrando": "Entrar"}
                    </button>

                </form>
            </div>
        </div>
    )
}