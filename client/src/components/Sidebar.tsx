import { NavLink } from "react-router";

const Sidebar = () => {
    return (
        <aside className="w-64 min-h-screen bg-[#0f172a] border-r border-slate-200 p-4">

            <nav className="flex flex-col gap-3">

                <NavLink
                    to="/"
                    className = {({isActive}) =>
                    `rounded-lg px-4 py-2 text-slate-200 ${
                    isActive ? "bg-emerald-500 text-white": "hover:bg-emerald-500/50"}`
            }
                >
                    <i className="bi bi-house-door-fill text-lg mr-3 text-slate-200"></i>
                    Dashboard
                </NavLink>

                <NavLink
                    to="/clients"
                    className = {({isActive}) =>
                    `rounded-lg px-4 py-2 text-slate-200 ${
                    isActive ? "bg-emerald-500 text-white": "hover:bg-emerald-500/50"}`
            }
                >
                    <i className="bi bi-people-fill text-lg mr-3 text-slate-200"></i>
                    Clientes
                </NavLink>

                <NavLink
                    to="/service-orders"
                    className = {({isActive}) =>
                    `rounded-lg px-4 py-2 text-slate-200  ${
                    isActive ? "bg-emerald-500 text-white": "hover:bg-emerald-500/50"}`
            }
                >
                    <i className="bi bi-file-earmark-text-fill text-lg mr-3 text-slate-200"></i>
                    Ordens de Serviço
                </NavLink>

            </nav>

        </aside>
    );
};

export default Sidebar;