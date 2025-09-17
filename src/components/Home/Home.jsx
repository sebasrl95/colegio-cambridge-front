import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container text-center mt-5">
            <h1>Bienvenido al Colegio Cambridge</h1>
            <p className="lead">Plataforma de gestión académica y administrativa</p>

            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Salones</h5>
                            <p className="card-text">Administra los salones de clase</p>
                            <Link to="/salones" className="btn btn-primary">Ir</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Oficinas</h5>
                            <p className="card-text">Gestiona las oficinas del colegio</p>
                            <Link to="/oficinas" className="btn btn-primary">Ir</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Áreas</h5>
                            <p className="card-text">Organiza las áreas académicas y administrativas</p>
                            <Link to="/areas" className="btn btn-primary">Ir</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Empleados</h5>
                            <p className="card-text">Gestiona la información de empleados</p>
                            <Link to="/empleados" className="btn btn-primary">Ir</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
