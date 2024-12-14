import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-color2 h-20 px-5 md:px-10 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-bold text-color3 text-xl md:text-2xl">
                LMS
            </Link>

            {/* Hamburger Menu for Mobile */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden block text-color3"
                aria-label="Toggle navigation menu"
            >
                {menuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>

            {/* Navigation Links */}
            <section
                className={`flex-col md:flex-row md:flex gap-5 items-center absolute md:static top-20 left-0 w-full md:w-auto bg-color2 md:bg-transparent p-5 md:p-0 transition-all duration-300 ${
                    menuOpen ? "flex" : "hidden"
                }`}
            >
                <Link href="/pages/signin" className="px-7 py-2 rounded text-color3 border border-color3 hover:bg-color3 hover:text-white transition-all">
                    Signin
                </Link>
                <Link
                    href="/pages/signup"
                    className="px-7 py-2 rounded text-white bg-color3 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    Join Us
                </Link>
            </section>
        </nav>
    );
}
