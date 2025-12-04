'use client'
import React, { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Use usePathname instead of useParams to get current pathname
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "How It Works", id: "howitworks" },
        { name: "Benefits", id: "benefits" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // 60% visible
        );

        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => {
            navItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);


    return (
        <header className="w-full top-0 p-5 z-[999]">
            <div className="container mx-auto min-h-16 overflow-hidden flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">
                        <img className="w-40" src="/Images/Auth/headerLogo.png" alt="" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-5 p-2 rounded-full bg-[#c7d2dd] backdrop-blur-sm text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`${item.id == "about" ? "/about" : "/#" + item.id}`}
                            onClick={() => setActiveSection(item.id)}
                            className={`rounded-full transition flex items-center py-3 px-8 justify-center ${activeSection === item.id
                                ? "bg-primary text-white "
                                : "text-gray-800"
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>



                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden focus:outline-none"
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
                <div className="lg:hidden rounded-lg backdrop-blur-sm bg-white/30 border-t border-gray-200">
                    <nav className="flex flex-col items-center space-y-3 py-4 text-gray-700 font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`transition ${pathname.includes(item.href) // Check if pathname contains item.href
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
