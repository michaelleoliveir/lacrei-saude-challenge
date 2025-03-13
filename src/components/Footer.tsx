import React from "react";
import { FaInstagram } from "react-icons/fa";
import ScrollButton from "./ScrollButton";
import { LuFacebook } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer: React.FC = () => {
    return (
        <footer className="w-full max-w-6xl px-8 py-10 mx-auto mt-16 bg-white border-t border-[#52a04f72]">
            <div className="flex flex-col items-center justify-between max-w-6xl mx-auto text-center md:flex-row md:items-start md:text-left">
                {/* logo e social */}
                <div className="flex flex-col items-center md:items-start gap-14">
                    <img
                        src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg"
                        alt="Lacrei Saúde"
                        className="h-12"
                    />
                    <div className="flex gap-4 text-xl text-emerald-700">
                        <LuFacebook size={32} className="transition cursor-pointer hover:text-emerald-800" />
                        <FaInstagram size={32} className="transition cursor-pointer hover:text-emerald-800" />
                        <TbBrandLinkedin size={32} className="transition cursor-pointer hover:text-emerald-800" />
                        <MdOutlineMailOutline size={32} className="transition cursor-pointer hover:text-emerald-800" />
                    </div>
                </div>

                {/* links */}
                <div className="mt-10 md:mt-0">
                    <h4 className="mb-3 font-bold text-gray-900 font-nunito text-[1.125rem]">Lacrei Saúde</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li className="py-1 text-black cursor-pointer hover:underline">Quem Somos</li>
                        <li className="py-1 text-black cursor-pointer hover:underline">Nosso Propósito</li>
                        <li className="py-1 text-black cursor-pointer hover:underline">Missão, Visão e Valor</li>
                        <li className="py-1 text-black cursor-pointer hover:underline">Acessibilidade</li>
                    </ul>
                </div>

                <div className="mt-10 md:mt-0">
                    <h4 className="mb-3 font-bold text-gray-900 font-nunito text-[1.125rem]">Saúde</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li className="py-1 text-black cursor-pointer hover:underline">Buscar atendimento</li>
                        <li className="py-1 text-black cursor-pointer hover:underline">Oferecer atendimento</li>
                    </ul>
                </div>

                <div className="mt-10 md:mt-0">
                    <h4 className="mb-3 font-bold text-gray-900 font-nunito text-[1.125rem]">Segurança e Privacidade</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li className="py-1 text-black cursor-pointer hover:underline">Política de Privacidade</li>
                        <li className="py-1 text-black cursor-pointer hover:underline">Termos de Uso</li>
                        <li className="py-1 text-black cursor-pointer hover:underline">Direitos de Titular</li>
                    </ul>
                </div>

            </div>

            <div className="flex flex-row justify-between pt-8 mt-8 text-[0.75rem] text-left text-gray-600 border-t border-[#52a04f72] flex-pt-6 font-nunito">
                <div>
                    <p>A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência, procure o hospital mais próximo.</p>
                    <p>
                        Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site{" "}
                        <a href="https://www.cvv.org.br" className="text-emerald-700 hover:underline">
                            www.cvv.org.br
                        </a>
                    </p>
                    <p className="mt-2">
                        Copyright © 2025 Michaelle Oliveira.
                    </p>
                </div>

                <ScrollButton />
            </div>
        </footer>
    );
};

export default Footer;
