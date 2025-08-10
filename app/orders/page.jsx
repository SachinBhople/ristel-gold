"use client";
import React, { useState, useMemo } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    flexRender,
} from "@tanstack/react-table";

export default function CustomerTable() {
    // Sample Data
    const data = useMemo(
        () => [
            { id: 1, name: "John Doe", email: "john@example.com", phone: "9876543210", country: "India" },
            { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "8765432109", country: "USA" },
            { id: 3, name: "Amit Kumar", email: "amit@example.com", phone: "7654321098", country: "India" },
            { id: 4, name: "Sara Lee", email: "sara@example.com", phone: "6543210987", country: "Canada" },
            { id: 5, name: "Michael Johnson", email: "mike@example.com", phone: "5432109876", country: "UK" },
            { id: 6, name: "Emma Watson", email: "emma@example.com", phone: "4321098765", country: "USA" },
            { id: 7, name: "Raj Patel", email: "raj@example.com", phone: "3210987654", country: "India" },
            { id: 8, name: "Olivia Brown", email: "olivia@example.com", phone: "2109876543", country: "Australia" },
            { id: 9, name: "Chris Evans", email: "chris@example.com", phone: "1098765432", country: "USA" },
            { id: 10, name: "Sophia Taylor", email: "sophia@example.com", phone: "9988776655", country: "Canada" },
            { id: 11, name: "Liam White", email: "liam@example.com", phone: "8877665544", country: "UK" },
        ],
        []
    );

    // Table Columns
    const columns = useMemo(
        () => [
            { accessorKey: "id", header: "ID" },
            { accessorKey: "name", header: "Name" },
            { accessorKey: "email", header: "Email" },
            { accessorKey: "phone", header: "Phone" },
            { accessorKey: "country", header: "Country" },
        ],
        []
    );

    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="p-6 mt-9">
            <h2 className="text-2xl font-bold mb-4">Customer List</h2>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search customers..."
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="border px-4 py-2 mb-4 rounded w-full md:w-1/3"
            />

            {/* Table */}
            <div className="overflow-x-auto border rounded-lg shadow-md">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100 text-slate-900">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="px-4 py-2 text-left cursor-pointer select-none"
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{
                                            asc: " 🔼",
                                            desc: " 🔽",
                                        }[header.column.getIsSorted()] ?? null}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 hover: text-slate-600">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-2 border-t">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <div>
                    <button
                        className="px-3 py-1 border rounded mr-2"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        ⏮ First
                    </button>
                    <button
                        className="px-3 py-1 border rounded mr-2"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        ◀ Prev
                    </button>
                    <button
                        className="px-3 py-1 border rounded mr-2"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next ▶
                    </button>
                    <button
                        className="px-3 py-1 border rounded"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        Last ⏭
                    </button>
                </div>
                <span>
                    Page{" "}
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </strong>
                </span>
            </div>
        </div>
    );
}
