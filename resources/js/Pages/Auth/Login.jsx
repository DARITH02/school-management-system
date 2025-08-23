import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [dots, setDots] = useState("");

    // Animate dots "..."
    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev === "..." ? "" : prev + "."));
        }, 300);
        return () => clearInterval(interval);
    }, []);

    const submit = (e) => {
        e.preventDefault();

        // Show loading screen
        setIsLoading(true);

        // Wait 300ms before posting
        setTimeout(() => {
            post(route("login"), {
                onFinish: () => {
                    reset("password");
                    setIsLoading(false); // hide loader if login fails
                },
            });
        }, 500);
    };

    return (
        <GuestLayout>
            {/* Show full screen loader */}
            {isLoading && (
                <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
                    <div className="text-center space-y-8">
                        {/* Spinner */}
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin mx-auto"></div>
                            <div
                                className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-indigo-300 rounded-full animate-spin mx-auto"
                                style={{
                                    animationDirection: "reverse",
                                    animationDuration: "1.5s",
                                }}
                            ></div>
                        </div>

                        {/* Loading text */}
                        <div className="space-y-2">
                            <h1 className="text-2xl font-semibold text-gray-800">
                                Logging in{dots}
                            </h1>
                            <p className="text-gray-500">
                                Please wait while we prepare everything for you
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* <Head title="Log in" /> */}

            <form onSubmit={submit} className="text-gray-900">
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route("password.request")}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Forgot your password?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        {processing ? "Logging in..." : "Log in"}
                    </PrimaryButton>
                </div>

                <div className="text-gray-600 mt-5">
                    <span className="text-center block my-2">
                        Don't have an account?
                    </span>
                    <Link
                        href={route("register")}
                        className="text-white bg-red-500 px-5 py-2 rounded-md"
                    >
                        Register
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
