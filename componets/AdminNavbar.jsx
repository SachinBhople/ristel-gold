"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function AdminNavbar({ onToggleSidebar }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const handleLogout = () => {
        window.location.href = "/";
    };

    return (
        <nav className="w-full bg-gray-900 text-white shadow-md px-4 py-3 flex items-center justify-between relative">
            {/* Left Section */}
            <div className="flex items-center gap-3">
                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        onToggleSidebar?.();
                    }}
                    className="md:hidden p-2 rounded hover:bg-gray-800"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <span className="font-bold text-lg">Admin Dashboard</span>
            </div>

            {/* Right Section */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-3 hover:bg-gray-800 px-3 py-1 rounded"
                >
                    <span className="text-sm text-gray-300">Welcome, Admin</span>
                    <img
                        src="https://ui-avatars.com/api/?name=Admin&background=random"
                        alt="Admin Avatar"
                        className="w-8 h-8 rounded-full"
                    />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-50">
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
