import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react";

const stats = [
    {
        title: "Total Student",
        value: "61",
        icon: Users,
        iconColor: "text-green-600",
        iconBg: "bg-green-100",
    },
    {
        title: "Total Instructor",
        value: "1",
        icon: GraduationCap,
        iconColor: "text-yellow-600",
        iconBg: "bg-yellow-100",
    },
    {
        title: "Total Course",
        value: "7",
        icon: BookOpen,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100",
    },
    {
        title: "Total Sales",
        value: "17",
        icon: TrendingUp,
        iconColor: "text-red-600",
        iconBg: "bg-red-100",
    },
];

export default function Dashboard() {
    const { flash } = usePage().props;
    console.log(flash.success);

    return (
        <AuthenticatedLayout
        // header={
        //     <h2 className="text-xl font-semibold leading-tight text-gray-800">
        //         Dashboard
        //     </h2>
        // }
        >
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="mx-auto sm:px-6 lg:px-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">DASHBOARD</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-5">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 border border-gray-200"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600 mb-1">
                                            {stat.title}
                                        </p>
                                        <p className="text-3xl font-bold text-gray-900">
                                            {stat.value}
                                        </p>
                                    </div>
                                    <div
                                        className={`p-3 rounded-lg ${stat.iconBg}`}
                                    >
                                        <stat.icon
                                            className={`w-6 h-6 ${stat.iconColor}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
