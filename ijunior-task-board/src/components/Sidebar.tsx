import { NavLink } from "react-router";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white border-r border-slate-200 p-4">

            <nav className="flex flex-col gap-3">

                <NavLink
                    to="/"
                    className = {({isActive}) =>
                    `rounded-lg px-4 py-2 ${
                    isActive ? "bg-emerald-500 text-white": "hover:bg-slate-100"}`
            }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/clients"
                    className = {({isActive}) =>
                    `rounded-lg px-4 py-2 ${
                    isActive ? "bg-emerald-500 text-white": "hover:bg-slate-100"}`
            }
                >
                    Clients
                </NavLink>

                <NavLink
                    to="/service-orders"
                    className = {({isActive}) =>
                    `rounded-lg px-4 py-2 ${
                    isActive ? "bg-emerald-500 text-white": "hover:bg-slate-100"}`
            }
                >
                    Service Orders
                </NavLink>

            </nav>

        </aside>
    );
};

export default Sidebar;