import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar(props) {
    return (
        <div className="bg-white w-full h-fit flex flex-col sm:flex-row justify-between items-center py-5 px-20 fixed top-0 z-20">
            <Link href="/">
                <h1 className="text-2xl text-blue-500 font-bold">SIPAKAR</h1>
            </Link>
            <div className="space-x-10 py-2">
                <Link href="/">
                    <button
                        className={`${
                            props.title == "Home"
                                ? "text-blue-400"
                                : "text-gray-800"
                        } hover:text-blue-400 transition-all duration-300`}
                    >
                        Home
                    </button>
                </Link>
                <Link href="/about">
                    <button
                        className={`${
                            props.title == "About"
                                ? "text-blue-400"
                                : "text-gray-800"
                        } hover:text-blue-400 transition-all duration-300`}
                    >
                        About
                    </button>
                </Link>
                <Link href="/login" target="_blank">
                    <a
                        className={`${
                            props.title == "Login"
                                ? "text-blue-500"
                                : "text-white"
                        } hover:text-blue-500 hover:bg-white border border-blue-500 transition-all duration-300 bg-blue-500 px-5 py-2 rounded-lg`}
                    >
                        Login
                    </a>
                </Link>
            </div>
        </div>
    );
}
