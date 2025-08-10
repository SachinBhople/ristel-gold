// app/admin/layout.jsx
import Sidebar from '@/componets/Sidebar';

export default function AdminLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1">{children}</main>
        </div>
    );
}
