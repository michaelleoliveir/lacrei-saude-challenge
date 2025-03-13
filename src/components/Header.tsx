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
        <header style={{ background: "linear-gradient(rgb(245, 255, 251) 31.04%, rgb(255, 255, 255) 100%)" }} className="relative flex items-center justify-between h-16 px-6 py-0 mt-3 md:mt-0 md:h-24 md:px-[7.625rem]">
            {/* logo */}
            <div>
                {/* mobile */}
                <Link href="/">
                    <img
                        src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_mobile.1f3a65cb.svg"
                        alt="Lacrei Saúde Mobile"
                        className="block h-4 w-[200px] ml-[-20px] md:hidden"
                    />
                </Link>
                {/* desktop */}
                <Link href="/">
                    <img
                        src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg"
                        alt="Lacrei Saúde"
                        className="hidden h-6 w-[187px] md:block"
                    />
                </Link>
            </div>

            {/* navbar */}
            <nav className="flex items-center gap-4">
                {/* links do desktop */}
                <Link href="/quem-somos">
                    <button className="hidden md:block px-8 py-2 font-semibold text-[1.2rem] text-emerald-700 hover:bg-[#014c3717] rounded-lg transition cursor-pointer">
                        Quem Somos
                    </button>
                </Link>
                <Link href="https://lacreisaude.com.br/ajuda/">
                    <button className="hidden md:block px-8 py-2 font-semibold text-[1.2rem] text-emerald-700 hover:bg-[#014c3717] rounded-lg transition cursor-pointer">
                        Ajuda
                    </button>
                </Link>


                {/* dropdown */}
                <div className="flex flex-row" ref={dropdownRef}>
                    {/* desktop: botão com texto */}
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="hidden md:flex items-center px-10 py-2 font-bold text-[1.2rem] bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition cursor-pointer"
                    >
                        Entrar
                        {dropdownOpen ? <ChevronUp className="ml-4" /> : <ChevronDown className="ml-4" />}
                    </button>
                    <Link href="/quem-somos">
                        <button
                            className="flex items-center p-2 mr-6 transition rounded-lg text-emerald-900 md:hidden hover:bg-[#d0f7eb6a]"
                        >
                            <Info />
                        </button>
                    </Link>
                    {/* mobile: botão com ícone */}
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center p-2 text-white transition rounded-lg md:hidden bg-emerald-700 hover:bg-green-700"
                    >
                        <User />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 z-10 w-58 mt-14 mr-6 md:mr-28 bg-white border border-[#00000054] rounded-lg">
                            <div className="m-3">
                                <Link href="https://paciente.lacreisaude.com.br/">
                                    <button className="flex flex-row w-full px-6 py-4 text-left text-black hover:bg-[#7ed7be27] hover:text-emerald-700">
                                        <User className="mr-4" />
                                        Paciente
                                    </button>
                                </Link>
                            </div>
                            <div className="h-px mx-4 bg-gray-300"></div>
                            <div className="m-3">
                                <Link href="https://profissional.lacreisaude.com.br/">
                                    <button className="flex flex-row w-full px-6 py-4 text-left text-black hover:bg-[#7ed7be27] hover:text-emerald-700">
                                        <BriefcaseMedical className="mr-4" />
                                        Profissional
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
