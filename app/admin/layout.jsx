// // app/admin/layout.jsx
// import Sidebar from '@/componets/Sidebar';

// export default function AdminLayout({ children }) {
//     return (
//         <div className="flex">
//             <Sidebar />
//             <main className="flex-1">{children}</main>
//         </div>
//     );
// }



// app/admin/layout.jsx
"use client";
import { useState } from "react";
import Sidebar from "@/componets/Sidebar";
import AdminNavbar from "@/componets/AdminNavbar";

export default function AdminLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <AdminNavbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

            {/* Main Content */}
            <div className="flex flex-1">
                {isSidebarOpen && <Sidebar />}
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
}
