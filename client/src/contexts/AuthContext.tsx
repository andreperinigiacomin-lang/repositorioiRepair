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