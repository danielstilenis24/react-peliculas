import { NavLink } from "react-router-dom";

export default function Menu() {
    const claseActiva = "active";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-breand" to="/" 
                activeClassName={claseActiva}>React Peliculas
                </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/generos" className="nav-link" 
                            activeClassName={claseActiva}>
                                Generos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}