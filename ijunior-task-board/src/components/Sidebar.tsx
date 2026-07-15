import { Link } from "react-router";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white border-r border-slate-200 p-4">

            <nav className="flex flex-col gap-3">

                <Link
                    to="/"
                    className="rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    Dashboard
                </Link>

                <Link
                    to="/clients"
                    className="rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    Clients
                </Link>

                <Link
                    to="/service-orders"
                    className="rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    Service Orders
                </Link>

            </nav>

        </aside>
    );
};

export default Sidebar;