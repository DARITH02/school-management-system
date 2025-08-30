import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm, Link } from "@inertiajs/react";
// import {  } from "lucide-react";
import React, { useState } from "react";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dots, setDots] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        permission_id: 2,
    });

    const submit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            post(route("register.store"), {
                onFinish: () => {
                    reset("password", "password_confirmation"),
                        setIsLoading(false);
                },
            });
        }, 500);
    };
    return (
        <GuestLayout>
            <Head title="Register" />
            {/* {isLoading && (
                <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
                    <div className="text-center space-y-8">
                       
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
            )} */}

            <form onSubmit={submit}>
                <div className="uppercase my-3 text-center font-black text-2xl bg-gradient-to-r from-amber-800 to-amber-500 bg-clip-text text-transparent">
                    Register Admin form
                </div>
                <div>
                    <InputLabel htmlFor="" value="Permission Name" />
                    <TextInput
                        value="2"
                        id="permission_id"
                        name="permission_id"
                        readOnly
                        hidden
                    />
                    <TextInput
                        value="Admin"
                        readOnly
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
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
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
};

export default Register;
