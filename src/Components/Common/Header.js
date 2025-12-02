'use client';
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Benefits", href: "/benefits" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed w-full my-2 top-0 z-[999]">
            <div className="container mx-auto min-h-16 border border-blue-200 rounded-lg backdrop-blur-sm px-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">
                        <img className="w-12 cursor-pointer" src="/Images/Auth/logo2.png" alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`transition ${pathname === item.href
                                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                                : "hover:text-blue-600"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? (
                        <RxCross1 className="text-3xl" />
                    ) : (
                        <IoMenuOutline className="text-3xl" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden rounded-lg backdrop-blur-sm bg-white/30 border-t border-gray-200">
                    <nav className="flex flex-col items-center space-y-3 py-4 text-gray-700 font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`transition ${pathname === item.href
                                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                                    : "hover:text-blue-600"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;