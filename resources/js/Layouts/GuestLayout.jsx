import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/" className="flex-col items-center ">
                    <img
                        className="w-24 rounded-ful "
                        src="/images/logo/logo.png"
                        alt=""
                    />
                    <span
                        className=" from-amber-300 to-amber-600 bg-gradient-to-r bg-clip-text text-transparent text-4xl font-black text-center  w-full flex -mt-4"
                        style={{ letterSpacing: ".6rem" }}
                    >
                        ACS
                    </span>
                </Link>
            </div>

            <div className="mt-3 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
