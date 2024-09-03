import '../../css/app.css';

export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-t-4 border-[#32de1b] border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}
