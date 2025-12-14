import { Link } from 'react-router-dom';
import BoxIcon from '../../components/icons/BoxIcon.jsx';

export default function CatalogButton({ className = "" }) {
    return (
        <Link to="/catalogo" className={`flex items-center gap-2 bg-Rojo text-white px-4 py-2 rounded-lg cursor-pointer hover:text-Negro hover:bg-Amarillo transition duration-300 ${className}`}>
            <span>Ver el catálogo</span>
            <BoxIcon className="w-6 h-6" />
        </Link>
    )
}
