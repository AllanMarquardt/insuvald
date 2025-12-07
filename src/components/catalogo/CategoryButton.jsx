export default function CategoryButton({ icon: Icon, label, isActive, onClick }) {
    return (
        <button 
            onClick={onClick}
            className={`px-4 py-0.5 rounded-full border-2 flex items-center gap-1 border-dashed border-Negro transition cursor-pointer group ${
                isActive 
                    ? 'bg-Amarillo text-white' 
                    : 'bg-transparent text-Negro hover:bg-Amarillo hover:text-white'
            }`}
        >
            <Icon className={`inline-block w-7 h-7 transition duration-200 ${
                isActive ? 'text-white' : 'text-Negro group-hover:text-white'
            }`} />
            {label}
        </button>
    )
}
