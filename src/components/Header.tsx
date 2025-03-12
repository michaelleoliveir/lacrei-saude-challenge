"use client"

import { BriefcaseMedical, ChevronDown, ChevronUp, Info, User } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Header: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Fecha o dropdown se clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="relative flex items-center justify-between h-16 p-6 px-10 py-10 md:h-24 md:px-28">
            {/* logo */}
            <div>
                {/* mobile */}
                <Link href="/">
                    <img
                        src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_mobile.1f3a65cb.svg"
                        alt="Lacrei Saúde Mobile"
                        className="block h-4 md:hidden"
                    />
                </Link>
                {/* desktop */}
                <Link href="/">
                    <img
                        src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg"
                        alt="Lacrei Saúde"
                        className="hidden h-6 md:block"
                    />
                </Link>
            </div>

            {/* navbar */}
            <nav className="flex items-center gap-4">
                {/* links do desktop */}
                <Link href="/quem-somos">
                    <button className="hidden md:block px-4 py-2 font-semibold text-[1.2rem] text-emerald-700 hover:bg-emerald-100 rounded-lg transition cursor-pointer">
                        Quem Somos
                    </button>
                </Link>
                <Link href="https://lacreisaude.com.br/ajuda/">
                    <button className="hidden md:block px-6 py-2 font-semibold text-[1.2rem] text-emerald-700 hover:bg-emerald-100 rounded-lg transition cursor-pointer">
                        Ajuda
                    </button>
                </Link>


                {/* dropdown */}
                <div className="flex flex-row" ref={dropdownRef}>
                    {/* desktop: botão com texto */}
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="hidden md:flex items-center px-10 py-2 font-bold text-[1.2rem] bg-emerald-700 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
                    >
                        Entrar
                        {dropdownOpen ? <ChevronUp className="ml-4" /> : <ChevronDown className="ml-4" />}
                    </button>
                    <button
                        className="flex items-center p-2 mr-6 transition rounded-lg text-emerald-900 md:hidden hover:bg-[#d0f7eb6a]"
                    >
                        <Info />
                    </button>
                    {/* mobile: botão com ícone */}
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center p-2 text-white transition rounded-lg md:hidden bg-emerald-700 hover:bg-green-700"
                    >
                        <User />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 z-10 w-60 mt-14 mr-10 md:mr-28 bg-white border border-[#00000054] rounded-md">
                            <div className="m-4">
                                <button className="flex flex-row w-full px-6 py-4 text-left text-gray-700 hover:bg-emerald-100 hover:text-emerald-700">
                                    <User className="mr-4" />
                                    Paciente
                                </button>
                            </div>
                            <div className="h-px mx-4 bg-gray-300"></div>
                            <div className="m-4">
                                <button className="flex flex-row w-full px-6 py-4 text-left text-gray-700 hover:bg-emerald-100 hover:text-emerald-700">
                                    <BriefcaseMedical className="mr-4" />
                                    Profissional
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
