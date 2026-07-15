import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./pages/DashboardPage";
import ClientsPage from "./pages/ClientsPage";
import ServiceOrdersPage from "./pages/ServiceOrdersPage";
import NotFoundPage from "./pages/NotFoundPage";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>

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

                <Route
                    path="*"
                    element={<NotFoundPage />}
                />

            </Routes>
        </BrowserRouter>
    );
};

export default App;