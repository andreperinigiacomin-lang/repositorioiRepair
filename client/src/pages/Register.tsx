import { useState} from "react";
import { useNavigate } from "react-router";
import { api } from "../services/api";

export function Register(){
    const [email, setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [erro,setErro] = useState<string | null>(null);
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        setErro(null);
        setCarregando(true);

        try{
            await api.post("/auth/register",{
                email,
                senha,
            });
            navigate("/login");
        } catch{
            setErro("Não foi possível realizar o cadastro.")
        } finally{
            setCarregando(false);
        }
    }

    return(
                <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        iRepair
                    </h1>

                    <p className="text-sm text-slate-400 mt-2">
                        Criar uma nova conta
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Senha
                        </label>

                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    {erro && (
                        <p className="text-red-500 text-sm">
                            {erro}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={carregando}
                        className="w-full rounded-lg bg-emerald-500 py-2.5 text-white font-semibold hover:bg-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {carregando ? "Cadastrando..." : "Cadastrar"}
                    </button>

                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-400">
                        Já possui uma conta?
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="mt-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition cursor-pointer"
                    >
                        Voltar para o login
                    </button>
                </div>

            </div>
        </div>
    );
}