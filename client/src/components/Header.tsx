import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {

  const {logout} = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <header className=" bg-[#0f172a] text-white px-6 py-3 flex items-center justify-between border-b border-slate-800 ">
      <div className="flex items-center gap-4">{/*lado esquerdo*/}
        <div className="flex items-center gap-2 bg-[#10b981] px-3 py-1.5 rounded-lg border-[#10b981]/40">{/*logo e nome*/}
          <i className="bi bi-tools text-[#0f172a] text-2xl [-webkit-text-stroke:1px]"></i>
        </div>{/*logo e nome*/}
        <h1 className="font-bold text-4xl text-white tracking-tight">
          i
          <span className="font-bold text-4xl text-[#10b981] tracking-tight">
            Repair
          </span>
        </h1>
      <div className="h-6 w-[1.5px] bg-slate-700 hidden sm:block ml-[25px]"></div>{/*linha divisoria */}
      <h3 className="text-slate-200 text-sm font-medium hidden sm:block ml-[15px]">
        Sistema de Ordens de Serviço
      </h3>
      </div>{/*lado esquerdo*/}

      <div>{/* lado direito */}
      <button 
      onClick={handleLogout}
      className="px-4 py-2 text-sm font-semibold text-slate-300 rounded-lg hover:bg-emerald-300 text-white-700 transition">
        Sair
      </button>
      </div>{/* lado direito */}
    </header>
  );
};

export default Header;
