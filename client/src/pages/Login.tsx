import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import React from "react";

export function Login(){
    const [email, setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [erro,setErro] = useState<string | null>(null);
    const [carregando, setCarregando] = useState(false);

    const {login} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
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
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 p-8">

                <div className= "text-center mb-8>">{/* textos do login */}
                    <h1 className="text-3xl font-bold text-slate-800">
                        iRepair
                    </h1>
                    <p className="text-sm text-slate-400 mt-2">
                          Sistema de Ordens de Serviço
                    </p>
                </div>{/* textos do login */}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>{/* formulario email */}

                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email
                        </label>

                        <input type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"/>

                    </div>{/* formulario email */}

                    <div>{/* formulario senha */}

                        <label className="block text-sm font-medium text-slate-700 mb-2">
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
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"/>

                    </div>{/* formulario senha */}

                    {erro && (
                        <p className="text-red-500 text-sm">
                            {erro}
                        </p>
                    )}
                    <button type="submit"
                    disabled={carregando}
                    className="w-full rounded-lg bg-emerald-500 py-2.5 text-white font-semibold hover:bg-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {carregando? "Entrando": "Entrar"}
                    </button>

                </form>
            </div>
        </div>
    )
}