import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSalon, createSalon, updateSalon } from "../../services/salonService";
import ErrorMessage from "../Error/ErrorMessage";

export default function SalonForm() {
    const [codigo, setCodigo] = useState("");
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getSalon(id).then(data => setCodigo(data.codigo));
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateSalon(id, { codigo });
            } else {
                await createSalon({ codigo });
            }
            navigate("/salones");
        } catch (err) {
            console.error("Error al crear salon", err);
            setErrors(err.response.data.message);
        }
    };

    const handleCancel = () => {
        navigate("/salones");
    };

    return (
        <div className="container mt-4">
            <h2>{id ? "Editar" : "Nuevo"} Salón</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Código</label>
                    <input
                        type="text"
                        className="form-control"
                        value={codigo}
                        onChange={e => setCodigo(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success me-2">Guardar</button>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
            </form>
            {errors.length > 0 && errors.map((err) => (
                <ErrorMessage message={err} />
            ))}
        </div>
    );
}
