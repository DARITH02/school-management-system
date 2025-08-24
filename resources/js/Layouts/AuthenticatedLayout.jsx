import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

// import Logo from "../asssets/images/logo.png";

import {
    Globe,
    ChevronLeft,
    Maximize2,
    Home,
    Users,
    MessageCircle,
    BookOpen,
    Video,
    FileText,
    HelpCircle,
    UserCheck,
    Award,
    Building,
    GraduationCap,
    User,
    Star,
    CreditCard,
    Wallet,
    Settings,
    Phone,
    ChevronRight,
    Minimize2,
} from "lucide-react";

const menuItems = [
    {
        icon: Home,
        label: "Dashboard",
        hasSubmenu: false,

        route: route("dashboard"),
    },
    {
        icon: Users,
        label: "Staffs",
        hasSubmenu: true,
        submenu: [
            { label: "Rolse", link: route("roles.index") },
            { label: "Users", link: route("users.index") },
        ],
    },
    { icon: MessageCircle, label: "AI Support" },
    { icon: BookOpen, label: "Courses", hasSubmenu: true },
    { icon: Video, label: "Live Classes", badge: "Addon", hasSubmenu: true },
    { icon: FileText, label: "Assignment", hasSubmenu: true },
    { icon: HelpCircle, label: "Quizzes", hasSubmenu: true },
    { icon: UserCheck, label: "Enrollment", hasSubmenu: true },
    { icon: Award, label: "Certificate", hasSubmenu: true },
    { icon: Building, label: "Organization", badge: "Addon", hasSubmenu: true },
    { icon: GraduationCap, label: "Instructors", hasSubmenu: true },
    { icon: User, label: "Students", hasSubmenu: true },
    { icon: Star, label: "Reviews", hasSubmenu: true },
    { icon: CreditCard, label: "Payouts", hasSubmenu: true },
    { icon: Wallet, label: "Offline Payment", hasSubmenu: true },
    { icon: Settings, label: "Accounts", hasSubmenu: true },
    { icon: Phone, label: "Contacts", hasSubmenu: true },
];

export default function AuthenticatedLayout({ header, children }) {
    const [isFull, setIsFull] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(null);

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
    }, [flash]);

    const toggleSubmenu = (i) => {
        setIsCollapsed(isCollapsed === i ? null : i);
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <div
                className={` bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
                    isFull ? "w-28" : "w-64 "
                }`}
            >
                <div className="h-[75px] border-b border-gray-200">
                    <div className="flex items-center h-full px-2">
                        <Link
                            href={route("dashboard")}
                            className="h-full object-cover flex items-center justify-center w-full"
                        >
                            <img
                                className={`${
                                    !isFull
                                        ? "h-full duration-500"
                                        : "h-3/4 duration-300"
                                } object-cover`}
                                src="/images/logo/logo.png"
                                alt=""
                            />
                            {!isFull ? (
                                <span
                                    className="block w-full text-4xl text-center font-extrabold text-amber-500 from-amber-400 to-amber-600 bg-gradient-to-r bg-clip-text text-transparent duration-300"
                                    style={{ letterSpacing: "25px" }}
                                >
                                    ACS
                                </span>
                            ) : null}
                        </Link>
                    </div>
                </div>

                <nav
                    className="flex-1 overflow-y-auto py-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    <ul className="space-y-1 px-3">
                        {menuItems.map((item, index) => {
                            const url = window.location.pathname; // or use React Router's useLocation()
                            const isSubActive = item.submenu?.some((sub) =>
                                url.startsWith(sub.link)
                            );
                            const isActive =
                                item.route && url.startsWith(item.route);
                            console.log(isSubActive);

                            return (
                                <li key={index}>
                                    <a
                                        onClick={() => toggleSubmenu(index)}
                                        href={item.route ? item.route : "#"}
                                        className={`flex items-center justify-between px-3 py-2 rounded-t-lg text-sm transition-colors ${
                                            isCollapsed === index ||
                                            isActive ||
                                            isSubActive
                                                ? "bg-gray-200/90 text-blue-700"
                                                : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <item.icon className="w-5 h-5" />
                                            {!isFull && (
                                                <span>{item.label}</span>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {item.badge && (
                                                <span
                                                    className={`${
                                                        !isFull
                                                            ? "px-2 py-1 text-xs"
                                                            : "px-1 text-[8px]"
                                                    } bg-red-500 text-white rounded`}
                                                >
                                                    {item.badge}
                                                </span>
                                            )}
                                            {item.hasSubmenu && (
                                                <svg
                                                    className={`w-4 h-4 transform transition-transform ${
                                                        isCollapsed === index ||
                                                        isSubActive
                                                            ? "rotate-90"
                                                            : ""
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </a>

                                    {item.hasSubmenu && (
                                        <div
                                            className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                                                isCollapsed === index ||
                                                isSubActive
                                                    ? "max-h-screen opacity-100 bg-gray-100"
                                                    : "max-h-0 opacity-0"
                                            }`}
                                        >
                                            <ul className="flex-col flex gap-1 text-sm text-gray-600">
                                                {item.submenu?.map(
                                                    (sub, subIndex) => {
                                                        const subActive =
                                                            url.startsWith(
                                                                sub.link
                                                            );
                                                        return (
                                                            <li key={subIndex}>
                                                                <a
                                                                    href={
                                                                        sub.link
                                                                    }
                                                                    className={`block px-2 py-1 rounded ${
                                                                        subActive
                                                                            ? "bg-blue-100 text-blue-700"
                                                                            : "hover:bg-gray-50"
                                                                    }`}
                                                                >
                                                                    {sub.label}
                                                                </a>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* <ul className="space-y-1 px-3">
                        {menuItems.map((item, index) => {
                            // You may need to define 'url' or replace with your own logic for active route
                            // For now, we'll just use item.active as a placeholder
                            const isActive = item.route;

                            return (
                                <li key={index}>
                                    <a
                                        onClick={() => toggleSubmenu(index)}
                                        href={item.route ? item.route : "#"}
                                        className={`flex items-center justify-between px-3 py-2 rounded-t-lg text-sm transition-colors ${
                                            isCollapsed === index
                                                ? "bg-gray-100/90 text-blue-700"
                                                : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <item.icon className="w-5 h-5" />
                                            {!isFull && (
                                                <span>{item.label}</span>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {item.badge && (
                                                <span
                                                    className={`${
                                                        !isFull
                                                            ? "px-2 py-1 text-xs"
                                                            : "px-1 text-[8px]"
                                                    }  bg-red-500 text-white rounded`}
                                                >
                                                    {item.badge}
                                                </span>
                                            )}
                                            {item.hasSubmenu && (
                                                <svg
                                                    className={`w-4 h-4 transform transition-transform ${
                                                        isCollapsed === index
                                                            ? "rotate-90 duration-75"
                                                            : ""
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </a>
                                    {item.hasSubmenu && (
                                        <div
                                            className={`px-5 m-auto bg-gray-100/50 overflow-hidden transition-all duration-500 ease-in-out ${
                                                isCollapsed === index
                                                    ? "max-h-auto opacity-100"
                                                    : "max-h-0 opacity-0"
                                            }`}
                                        >
                                            <ul className="flex-col flex gap-1 text-xs text-gray-600">
                                                <li className="">
                                                    <a href="">1</a>
                                                </li>
                                                <li className="">1</li>
                                                <li className="">1</li>
                                                <li className="">1</li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul> */}
                </nav>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsFull(!isFull)}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                {!isFull ? (
                                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                                ) : (
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Home className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Globe className="w-4 h-4 text-gray-600" />
                                <span className="text-sm text-gray-700">
                                    English
                                </span>
                                <svg
                                    className="w-4 h-4 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                            <button className="px-3 py-2 hover:bg-gray-100 mb-0 rounded-lg">
                                <div className="hidden sm:flex sm:items-center">
                                    <div className="relative ">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <Settings className="w-5 h-5 text-gray-600" />
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                            </button>
                            <button
                                onClick={() => setIsFull(!isFull)}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                {!isFull ? (
                                    <Maximize2 className="w-5 h-5 text-gray-600" />
                                ) : (
                                    <Minimize2 className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </header>
                <main
                    className={`flex-1 overflow-y-auto transition-all duration-200 ${
                        isFull ? "w-full h-screen" : "w-full"
                    }`}
                >
                    {/* <div className=""> */}
                    <main>{children}</main>
                    {/* </div> */}
                </main>
            </div>
        </div>
    );
}

// <div className="min-h-screen bg-gray-100">
//     <nav className="border-b border-gray-100 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-16 justify-between">
//                 <div className="flex">
//                     <div className="flex shrink-0 items-center">
//                         <Link href="/">
//                             <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
//                         </Link>
//                     </div>

//                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
//                         <NavLink
//                             href={route('dashboard')}
//                             active={route().current('dashboard')}
//                         >
//                             Dashboard
//                         </NavLink>
//                     </div>
//                 </div>

//                 <div className="hidden sm:ms-6 sm:flex sm:items-center">
//                     <div className="relative ms-3">
//                         <Dropdown>
//                             <Dropdown.Trigger>
//                                 <span className="inline-flex rounded-md">
//                                     <button
//                                         type="button"
//                                         className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
//                                     >
//                                         {user.name}

//                                         <svg
//                                             className="-me-0.5 ms-2 h-4 w-4"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 20 20"
//                                             fill="currentColor"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                 clipRule="evenodd"
//                                             />
//                                         </svg>
//                                     </button>
//                                 </span>
//                             </Dropdown.Trigger>

//                             <Dropdown.Content>
//                                 <Dropdown.Link
//                                     href={route('profile.edit')}
//                                 >
//                                     Profile
//                                 </Dropdown.Link>
//                                 <Dropdown.Link
//                                     href={route('logout')}
//                                     method="post"
//                                     as="button"
//                                 >
//                                     Log Out
//                                 </Dropdown.Link>
//                             </Dropdown.Content>
//                         </Dropdown>
//                     </div>
//                 </div>

//                 <div className="-me-2 flex items-center sm:hidden">
//                     <button
//                         onClick={() =>
//                             setShowingNavigationDropdown(
//                                 (previousState) => !previousState,
//                             )
//                         }
//                         className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
//                     >
//                         <svg
//                             className="h-6 w-6"
//                             stroke="currentColor"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 className={
//                                     !showingNavigationDropdown
//                                         ? 'inline-flex'
//                                         : 'hidden'
//                                 }
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                             <path
//                                 className={
//                                     showingNavigationDropdown
//                                         ? 'inline-flex'
//                                         : 'hidden'
//                                 }
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M6 18L18 6M6 6l12 12"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>

//         <div
//             className={
//                 (showingNavigationDropdown ? 'block' : 'hidden') +
//                 ' sm:hidden'
//             }
//         >
//             <div className="space-y-1 pb-3 pt-2">
//                 <ResponsiveNavLink
//                     href={route('dashboard')}
//                     active={route().current('dashboard')}
//                 >
//                     Dashboard
//                 </ResponsiveNavLink>
//             </div>

//             <div className="border-t border-gray-200 pb-1 pt-4">
//                 <div className="px-4">
//                     <div className="text-base font-medium text-gray-800">
//                         {user.name}
//                     </div>
//                     <div className="text-sm font-medium text-gray-500">
//                         {user.email}
//                     </div>
//                 </div>

//                 <div className="mt-3 space-y-1">
//                     <ResponsiveNavLink href={route('profile.edit')}>
//                         Profile
//                     </ResponsiveNavLink>
//                     <ResponsiveNavLink
//                         method="post"
//                         href={route('logout')}
//                         as="button"
//                     >
//                         Log Out
//                     </ResponsiveNavLink>
//                 </div>
//             </div>
//         </div>
//     </nav>

//     {header && (
//         <header className="bg-white shadow">
//             <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//                 {header}
//             </div>
//         </header>
//     )}

//     <main>{children}</main>
// </div>
