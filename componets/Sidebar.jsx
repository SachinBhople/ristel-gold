'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/admin/home', label: 'Dashboard' },
    { href: '/admin/category', label: 'Category' },
    { href: '/admin/subcategory', label: 'Subcategory' },
    { href: '/admin/product', label: 'Products' },
    { href: '/admin/stock', label: 'Stock' },
    { href: '/admin/orders', label: 'Orders' },
    { href: '/admin/customers', label: 'Customers' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-gray-900 text-white p-6 shadow-lg sticky top-0">
            <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">Admin Panel</h2>
            <ul className="space-y-3">
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`block px-4 py-3 rounded-lg transition duration-200 ${pathname === href
                                ? 'bg-yellow-500 text-gray-900 font-semibold'
                                : 'hover:bg-gray-700'
                                }`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
