import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { MoreHorizontal, Plus } from "lucide-react";

const rolesData = [
    { id: 1, name: "Organization", permissions: 0, status: "active" },
    { id: 2, name: "Super Admin", permissions: 242, status: "active" },
    { id: 3, name: "Admin", permissions: 47, status: "active" },
    { id: 4, name: "Manager", permissions: 8, status: "active" },
    { id: 5, name: "Student", permissions: 3, status: "active" },
    { id: 6, name: "Instructor", permissions: 0, status: "active" },
];
const Index = () => {
    return (
        <AuthenticatedLayout>
            <div className="py-4">
                <div className="mx-auto sm:px-6 lg:px-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">User</div>
                    </div>
                    {/* Header */}

                    {/* Table */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-4">
                        <div className="flex items-center justify-between py-4 px-8 border-b border-gray-200">
                            <span className="text-3xl uppercase font-bold text-gray-700">
                                Users
                            </span>
                            <button className="bg-blue-600 px-4 py-2 font-bold text-white rounded-lg flex items-center gap-2 hover:bg-blue-800 transition-colors">
                                <Plus /> ADD
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            NAME
                                        </th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            PERMISSIONS
                                        </th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            STATUS
                                        </th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            ACTION
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {rolesData.map((role) => (
                                        <tr
                                            key={role.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="py-4 px-6 text-sm text-gray-900">
                                                {role.id}
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-900">
                                                {role.name}
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-teal-600">
                                                {role.permissions}
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="inline-flex px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                                                    {role.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
