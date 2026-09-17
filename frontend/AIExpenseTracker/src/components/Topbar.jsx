import { useAuth } from '../context/AuthContext.jsx';

const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
};

const formatToday = () =>
    new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

const Topbar = () => {
    const { user } = useAuth();
    const firstName = user?.name?.split(' ')[0] || '';

    return (
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6 shrink-0">
            <div>
                <div className="text-sm font-semibold text-slate-900 tracking-tight">
                    {greeting()}{firstName && `, ${firstName}`} 👋
                </div>
                <div className="text-xs text-slate-500">{formatToday()}</div>
            </div>
        </header>
    );
};

export default Topbar;
