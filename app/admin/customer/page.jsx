import React from "react";

const Page = () => {
    // Dummy data
    const customers = [
        { name: "John Doe", address: "123 Main St, New York, NY", mobile: "+1 234 567 890" },
        { name: "Jane Smith", address: "456 Park Ave, Los Angeles, CA", mobile: "+1 987 654 321" },
        { name: "Michael Brown", address: "789 Elm St, Chicago, IL", mobile: "+1 555 666 777" },
        { name: "Emily Davis", address: "101 Maple Rd, Houston, TX", mobile: "+1 888 999 000" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Customer List</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Customer Name</th>
                            <th className="px-6 py-3">Address</th>
                            <th className="px-6 py-3">Mobile No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 font-medium">{customer.name}</td>
                                <td className="px-6 py-4">{customer.address}</td>
                                <td className="px-6 py-4">{customer.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
