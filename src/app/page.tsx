"use client"

import { Mail, Phone, Pin } from "lucide-react";
import { useEffect, useState } from "react";
import { IoIosAlert } from "react-icons/io";

const Contact: React.FC = () => {
    useEffect(() => {
        document.title = "Início | Lacrei Saúde";
    }, []);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});

    const validar = () => {
        let newErrors: typeof errors = {};

        if(!name.trim()) {
            newErrors.name = "O campo 'Nome Completo' é obrigatório"
        }

        if (!email.trim()) {
            newErrors.email = "O campo 'Email' é obrigatório.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "E-mail inválido.";
        }

        if (!subject.trim()) {
            newErrors.subject = "O campo 'Assunto' é obrigatório.";
        }

        if (!message.trim()) {
            newErrors.message = "O campo 'Mensagem' é obrigatório.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validar()) {
            alert("Formulário enviado com sucesso!");
        }
    };
    
    return (
        <>
            <div className="relative flex flex-col items-center justify-center p-8 mt-5 ">
                {/* Título */}
                <div>
                    <h1 className="mb-2 text-4xl font-bold text-center font-nunito">Entre em Contato</h1>
                    <div className="h-[0.1rem] mx-18 bg-emerald-700"></div>
                </div>
                
                {/* Informações de Contato */}
                <div className="flex flex-col justify-center gap-8 mt-8 mb-8 md:flex-row">
                    <div className="flex flex-col items-center text-center">
                        <div className="p-5 mb-3 transition rounded-full bg-emerald-700 hover:bg-emerald-800">
                            <Pin color="#ffffff" />
                        </div>
                        <h2>
                            <span className="font-bold">Endereço:</span> Centro, São Paulo - SP
                        </h2>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="p-5 mb-3 rounded-full bg-emerald-700 hover:bg-emerald-800">
                            <Phone color="#ffffff" />
                        </div>
                        <h2>
                            <span className="font-bold">Telefone:</span> (11) 99999-9999
                        </h2>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="p-5 mb-3 rounded-full bg-emerald-700 hover:bg-emerald-800">
                            <Mail color="#ffffff" />
                        </div>
                        <h2>
                            <span className="font-bold">Email:</span> contato@lacreisaude.com.br
                        </h2>
                    </div>
                </div>
                
                <div className="flex flex-col items-center w-full max-w-5xl mt-12 bg-white rounded-lg shadow-lg md:flex-row md:justify-between">
                    {/* Formulário */}
                    <div className="w-full p-6 md:w-2/3">
                        <h2 className="mb-6 text-2xl font-semibold text-gray-800 font-nunito">
                            Ainda possui dúvidas? Fale com nosso time.
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="w-full md:w-1/2">
                                    <label className="block font-medium text-gray-700">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Seu nome" 
                                        className={`w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-900 ${errors.name ? `border-[#bc1c1c]` : `border-gray-300`}`} />
                                        {errors.name && 
                                            <div className="flex flex-row gap-0.5 mt-2">
                                                <IoIosAlert height={16} width={16} color="#bc1c1c" />
                                                <p className="text-xs text-[#bc1c1c] font-nunito">{errors.name}</p>
                                            </div>
                                        }
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block font-medium text-gray-700">E-mail</label>
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="seu@email.com" 
                                        className={`w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-900 ${errors.email ? `border-[#bc1c1c]` : `border-gray-300`}`} />
                                        {errors.email && 
                                        <div className="flex flex-row gap-0.5 mt-2">
                                            <IoIosAlert height={16} width={16} color="#bc1c1c" />
                                            <p className="text-xs text-[#bc1c1c] font-nunito">{errors.email}</p>
                                        </div>
                                        }
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-medium text-gray-700">Assunto</label>
                                <input 
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)} 
                                    placeholder="Assunto" 
                                    className={`w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-900 ${errors.subject ? `border-[#bc1c1c]` : `border-gray-300`}`} />
                                    {errors.subject && 
                                        <div className="flex flex-row gap-0.5 mt-2">
                                            <IoIosAlert height={16} width={16} color="#bc1c1c" />
                                            <p className="text-xs text-[#bc1c1c] font-nunito">{errors.subject}</p>
                                        </div>
                                    }
                            </div>
                            <div className="mt-4">
                                <label className="block font-medium text-gray-700">Mensagem</label>
                                <textarea 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Sua mensagem..." 
                                    className={`w-full resize-none p-2 mt-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-900 ${errors.message ? `border-[#bc1c1c]` : `border-gray-300`}`}></textarea>
                                    {errors.message && 
                                        <div className="flex flex-row gap-0.5 mt-2">
                                            <IoIosAlert height={16} width={16} color="#bc1c1c" />
                                            <p className="text-xs text-[#bc1c1c] font-nunito">{errors.message}</p>
                                        </div>
                                    }
                            </div>
                            <button type="submit" className="w-full px-10 py-2 mt-6 font-bold text-[#ffffff] transition bg-emerald-700 hover:bg-emerald-800 rounded-lg md:w-auto">
                                Enviar
                            </button>
                        </form>
                    </div>
                    
                    {/* Imagem */}
                    <div className="hidden w-full mt-8 overflow-hidden md:block md:w-1/2 md:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1594850598343-a5b0a83c237d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGdidHxlbnwwfDF8MHx8fDA%3D"
                            alt="Imagem de Contato"
                            className="object-cover w-full max-h-[560px] shadow-md"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;