import { createContext, useContext, useEffect, useState} from "react";
import type { ReactNode } from "react";
import { api } from "../services/api";
import type { User } from "../types";

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, senha: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        api.get("/auth/me")
            .then(response => {
                setUser(response.data.usuario);
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    async function login(email: string, senha: string) {
        const response = await api.post("/auth/login", {
            email,
            senha,
        });
    
        setUser(response.data.usuario);
    }

    async function logout() {
    await api.post("/auth/logout");

    setUser(null);
    }
    
return (
    <AuthContext.Provider
        value={{
            user,
            isAuthenticated: user !== null,
            isLoading,
            login,
            logout,
        }}
    >
        {children}
    </AuthContext.Provider>
);
}
export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth deve ser usado dentro do AuthProvider"
        );
    }

    return context;
}
