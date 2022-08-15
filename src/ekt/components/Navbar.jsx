import { useAuth } from "../hooks/useAuth"

export const Navbar = () => {

  const { startLogout } = useAuth();
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand"> 
            <i className="fa-solid fa-list-check"></i>&nbsp; 
            Listado
        </span>

        <button 
        className="btn btn-outline-danger"
        onClick={startLogout}>
            <i className="fas fa-sign-out-alt"></i>&nbsp;
            <span>Salir</span>
        </button>
    </div>
  )
}
