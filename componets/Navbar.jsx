

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { User, Search, ShoppingCart } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// const categories = [
//     {
//         id: 1,
//         name: "Gold",
//         subcategories: ["Chains", "Rings", "Bracelets", "Necklaces"],
//     },
//     {
//         id: 2,
//         name: "Jewellery",
//         subcategories: ["Earrings", "Anklets", "Bangles", "Nose Pins"],
//     },
//     {
//         id: 3,
//         name: "Coins",
//         subcategories: ["1g", "5g", "10g", "Custom Coins"],
//     },
//     {
//         id: 4,
//         name: "Silver",
//         subcategories: ["Chains", "Rings", "Bracelets", "Necklaces"],
//     },
//     {
//         id: 5,
//         name: "Platinum",
//         subcategories: ["Earrings", "Anklets", "Bangles", "Nose Pins"],
//     },
//     {
//         id: 6,
//         name: "New Gold",
//         subcategories: ["1g", "5g", "10g", "Custom Coins"],
//     },
// ];

// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);

//     const [showUserDropdown, setShowUserDropdown] = useState(false)
//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 10);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);




//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setShowUserDropdown(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);


//     return (
//         <motion.nav
//             className={`fixed top-0  left-0 w-full z-50 transition-all ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col bg-amber-400">
//                 {/* Top Row */}
//                 <div className="flex items-center justify-between w-full">
//                     {/* Logo */}
//                     <Link href="/" className="text-2xl font-serif font-bold text-yellow-800 tracking-wide">
//                         GoldLux
//                     </Link>

//                     {/* Search Input - Centered */}
//                     <div className="flex-1 mx-4 hidden md:flex justify-center">
//                         <div className="relative w-full max-w-md">
//                             <input
//                                 type="text"
//                                 placeholder="Search gold, jewellery..."
//                                 className="w-full py-2 pl-10 pr-4 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 text-sm"
//                             />
//                             <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-600" />
//                         </div>
//                     </div>

//                     {/* Icons */}
//                     <div className="flex items-center gap-4">
//                         <Search className="w-5 h-5 text-gray-700 hover:text-yellow-600 cursor-pointer md:hidden" />
//                         <div
//                             className="relative"
//                             ref={dropdownRef}
//                             onMouseEnter={() => setShowUserDropdown(true)}
//                             onMouseLeave={() => setShowUserDropdown(false)}
//                         >
//                             <User
//                                 className="w-5 h-5 text-gray-700 hover:text-yellow-600 cursor-pointer"
//                             />
//                             {showUserDropdown && (
//                                 <div className="absolute right-0  w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                                     <Link
//                                         href="/profile"
//                                         className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
//                                     >
//                                         Profile
//                                     </Link>
//                                     <Link
//                                         href="/orders"
//                                         className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
//                                     >
//                                         Orders
//                                     </Link>
//                                     <Link href="/">
//                                         <button
//                                             onClick={() => {
//                                                 console.log("Logging out...");
//                                             }}
//                                             className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
//                                         >
//                                             Logout
//                                         </button>
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                         <Link href="/cart">

//                             <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-yellow-600 cursor-pointer" /></Link>

//                     </div>
//                 </div>

//                 {/* Nav Items */}

//                 <div className="hidden md:flex justify-start gap-10 mt-2 bg-white/70 rounded-md py-1 px-4 shadow">
//                     {categories.map((category) => (
//                         <div key={category.name} className="relative group">
//                             <span className="text-sm text-yellow-900 font-semibold cursor-pointer hover:text-yellow-700">
//                                 <Link href={`/catfilter/${category.id}`}>  {category.name}</Link>
//                             </span>
//                             <div className="absolute left-0 top-full  hidden group-hover:block bg-white rounded-md shadow-lg z-10 min-w-[160px]">
//                                 {category.subcategories.map((sub, index) => (
//                                     <Link
//                                         href="#"
//                                         key={index}
//                                         className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
//                                     >
//                                         {sub}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </motion.nav>
//     );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Search, ShoppingCart } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const categories = [
    {
        id: "gold",
        name: "Gold",
        subcategories: ["Chains", "Rings", "Bracelets", "Necklaces"],
    },
    {
        id: "jewellery",
        name: "Jewellery",
        subcategories: ["Earrings", "Anklets", "Bangles", "Nose Pins"],
    },
    {
        id: "coins",
        name: "Coins",
        subcategories: ["1g", "5g", "10g", "Custom Coins"],
    },
    {
        id: "silver",
        name: "Silver",
        subcategories: ["Chains", "Rings", "Bracelets", "Necklaces"],
    },
    {
        id: "platinum",
        name: "Platinum",
        subcategories: ["Earrings", "Anklets", "Bangles", "Nose Pins"],
    },

];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowUserDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled
                ? "bg-white/80 backdrop-blur-lg shadow-md"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col bg-amber-400">
                {/* Top Row */}
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-serif font-bold text-yellow-800 tracking-wide"
                    >
                        GoldLux
                    </Link>

                    {/* Search Input */}
                    <div className="flex-1 mx-4 hidden md:flex justify-center">
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search gold, jewellery..."
                                className="w-full py-2 pl-10 pr-4 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 text-sm"
                            />
                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-600" />
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        <Search className="w-5 h-5 text-gray-700 hover:text-yellow-600 cursor-pointer md:hidden" />
                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={() => setShowUserDropdown(true)}
                            onMouseLeave={() => setShowUserDropdown(false)}
                        >
                            <User className="w-5 h-5 text-gray-700 hover:text-yellow-600 cursor-pointer" />
                            {showUserDropdown && (
                                <div className="absolute right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        href="/orders"
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
                                    >
                                        Orders
                                    </Link>
                                    <Link href="/">
                                        <button
                                            onClick={() => console.log("Logging out...")}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
                                        >
                                            Logout
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/cart">
                            <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-yellow-600 cursor-pointer" />
                        </Link>
                    </div>
                </div>

                {/* Nav Items */}
                <div className="hidden md:flex justify-start gap-10 mt-2 bg-white/70 rounded-md py-1 px-4 shadow">
                    {categories.map((category) => (
                        <div key={category.name} className="relative group">
                            <span className="text-sm text-yellow-900 font-semibold cursor-pointer hover:text-yellow-700">
                                <Link href={`/catfilter/${category.id}`}>
                                    {category.name}
                                </Link>
                            </span>
                            <div className="absolute left-0 top-full hidden group-hover:block bg-white rounded-md shadow-lg z-10 min-w-[160px]">
                                {category.subcategories.map((sub, index) => (
                                    <Link
                                        href="#"
                                        key={index}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
                                    >
                                        {sub}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
