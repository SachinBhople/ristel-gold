"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
    PackageSearch,
    Users,
    ShoppingCart,
    Clock,
    CheckCircle,
    ShoppingBasket
} from "lucide-react";

const Dashboard = () => {
    const [stockCount, setStockCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [pendingOrderCount, setPendingOrderCount] = useState(0);
    const [deliveredOrderCount, setDeliveredOrderCount] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [resStock, resUser, resOrder, resPending, resDelivered] =
                    await Promise.all([
                        axios.get("/api/stock/count"),
                        axios.get("/api/user/count"),
                        axios.get("/api/order/count"),
                        axios.get("/api/order/pending/count"),
                        axios.get("/api/order/delivered/count")
                    ]);

                setStockCount(resStock.data.count);
                setUserCount(resUser.data.count);
                setOrderCount(resOrder.data.count);
                setPendingOrderCount(resPending.data.count);
                setDeliveredOrderCount(resDelivered.data.count);
            } catch (error) {
                console.error("Error fetching dashboard data", error);
            }
        };

        fetchCounts();
    }, []);

    const cards = [
        {
            title: "Total Stock",
            count: stockCount,
            icon: <PackageSearch className="w-8 h-8 text-yellow-700" />,
            bg: "bg-gradient-to-tr from-yellow-100 to-yellow-300"
        },
        {
            title: "Total Users",
            count: userCount,
            icon: <Users className="w-8 h-8 text-blue-700" />,
            bg: "bg-gradient-to-tr from-blue-100 to-blue-300"
        },
        {
            title: "Total Orders",
            count: orderCount,
            icon: <ShoppingCart className="w-8 h-8 text-green-700" />,
            bg: "bg-gradient-to-tr from-green-100 to-green-300"
        },
        {
            title: "Pending Orders",
            count: pendingOrderCount,
            icon: <Clock className="w-8 h-8 text-orange-700" />,
            bg: "bg-gradient-to-tr from-orange-100 to-orange-300"
        },
        {
            title: "Delivered Orders",
            count: deliveredOrderCount,
            icon: <CheckCircle className="w-8 h-8 text-emerald-700" />,
            bg: "bg-gradient-to-tr from-emerald-100 to-emerald-300"
        },
        {
            title: "Total Sell",
            count: deliveredOrderCount,
            icon: <ShoppingBasket className="w-8 h-8 text-pink-700" />,
            bg: "bg-gradient-to-tr from-pink-100 to-pink-300"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8"> Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className={`${card.bg} p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300`}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">{card.title}</h3>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{card.count}</p>
                            </div>
                            <div className="bg-white rounded-full p-2 shadow-sm">
                                {card.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
