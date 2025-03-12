import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import ScrollButton from "./ScrollButton";

const Footer: React.FC = () => {
    return (
        <footer className="w-full max-w-6xl px-8 py-10 mx-auto mt-16 bg-white border-t border-gray-200">
            <div className="flex flex-col items-center justify-between max-w-6xl mx-auto text-center md:flex-row md:items-start md:text-left">
                {/* logo e social */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg"
                        alt="Lacrei Saúde"
                        className="h-10 mb-4"
                    />
                    <div className="flex gap-4 text-xl text-emerald-700">
                        <FaFacebookF className="transition cursor-pointer hover:text-emerald-800" />
                        <FaInstagram className="transition cursor-pointer hover:text-emerald-800" />
                        <FaLinkedinIn className="transition cursor-pointer hover:text-emerald-800" />
                        <FaEnvelope className="transition cursor-pointer hover:text-emerald-800" />
                    </div>
                </div>

                {/* links */}
                <div className="mt-10 md:mt-0">
                    <h4 className="mb-3 font-semibold text-gray-900">Lacrei Saúde</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li className="cursor-pointer hover:underline">Quem Somos</li>
                        <li className="cursor-pointer hover:underline">Nosso Propósito</li>
                        <li className="cursor-pointer hover:underline">Missão, Visão e Valor</li>
                        <li className="cursor-pointer hover:underline">Acessibilidade</li>
                    </ul>
                </div>

                <div className="mt-10 md:mt-0">
                    <h4 className="mb-3 font-semibold text-gray-900">Saúde</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li className="cursor-pointer hover:underline">Buscar atendimento</li>
                        <li className="cursor-pointer hover:underline">Oferecer atendimento</li>
                    </ul>
                </div>

                <div className="mt-10 md:mt-0">
                    <h4 className="mb-3 font-semibold text-gray-900">Segurança e Privacidade</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li className="cursor-pointer hover:underline">Política de Privacidade</li>
                        <li className="cursor-pointer hover:underline">Termos de Uso</li>
                        <li className="cursor-pointer hover:underline">Direitos de Titular</li>
                    </ul>
                </div>

            </div>

            <div className="flex flex-row justify-between pt-8 mt-8 text-sm text-left text-gray-600 border-t border-gray-200 flex-pt-6">
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
