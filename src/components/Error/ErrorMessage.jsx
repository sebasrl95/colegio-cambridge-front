export default function ErrorMessage({ message }) {
    return (
        <div className="container mt-4">
            <div className="alert alert-danger">{message}</div>
        </div>
    );
}
