import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import ClientsPage from "./pages/ClientsPage";
import ServiceOrdersPage from "./pages/ServiceOrdersPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";
import { Login } from "./pages/Login";

export const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                    path="/login"
                    element={<Login/>}
                    />

                    <Route element={<PrivateRoute/>}>
                    <Route element={<MainLayout />}>
                        <Route
                            path="/"
                            element={<DashboardPage />}
                        />

                        <Route
                            path="/clients"
                            element={<ClientsPage />}
                        />

                        <Route
                            path="/service-orders"
                            element={<ServiceOrdersPage />}
                        />

                    </Route>
                </Route>


                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;