import { Mail, Phone, Pin } from "lucide-react";

const Contact: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center p-8 mt-5 ">

            {/* Título */}
            <h1 className="text-4xl font-bold text-center font-nunito">Entre em Contato</h1>

            {/* Informações de Contato */}
            <div className="flex flex-col justify-center gap-8 mt-8 mb-8 md:flex-row">
                <div className="flex flex-col items-center text-center">
                    <div className="p-5 mb-3 rounded-full bg-emerald-900">
                        <Pin color="#dff2ed" />
                    </div>
                    <h2>
                        <span className="font-bold">Endereço:</span> São Paulo, SP
                    </h2>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="p-5 mb-3 rounded-full bg-emerald-900">
                        <Phone color="#dff2ed" />
                    </div>
                    <h2>
                        <span className="font-bold">Telefone:</span> (11) 99999-9999
                    </h2>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="p-5 mb-3 rounded-full bg-emerald-900">
                        <Mail color="#dff2ed" />
                    </div>
                    <h2>
                        <span className="font-bold">Email:</span> contato@lacreisaude.com.br
                    </h2>
                </div>
            </div>

            <div className="flex flex-col items-center w-full max-w-5xl mt-12 bg-white rounded-lg shadow-lg md:flex-row">
                {/* Formulário */}
                <div className="w-full p-6 md:w-1/2">
                    <h2 className="mb-6 text-2xl font-semibold text-gray-800 font-nunito">
                        Ainda possui dúvidas? Fale com nosso time.
                    </h2>
                    <form>
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="w-full md:w-1/2">
                                <label className="block font-medium text-gray-700">Nome Completo</label>
                                <input type="text" placeholder="Seu Nome" className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <label className="block font-medium text-gray-700">E-mail</label>
                                <input type="email" placeholder="seu@email.com" className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block font-medium text-gray-700">Assunto</label>
                            <input type="text" placeholder="Assunto" className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900" />
                        </div>

                        <div className="mt-4">
                            <label className="block font-medium text-gray-700">Mensagem</label>
                            <textarea placeholder="Sua mensagem..." className="w-full h-32 p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900"></textarea>
                        </div>

                        <button className="w-full px-10 py-2 mt-6 font-bold text-[#dff2ed] transition bg-emerald-900 rounded-lg md:w-auto hover:bg-[#dff2ed] hover:text-emerald-950">
                            Enviar
                        </button>
                    </form>
                </div>

                {/* Imagem */}
                <div className="hidden w-full mt-8 overflow-hidden md:block md:w-1/2 md:mt-0">
                    <img
                        src="https://images.unsplash.com/photo-1594850598343-a5b0a83c237d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGdidHxlbnwwfDF8MHx8fDA%3D"
                        alt="Imagem de Contato"
                        className="object-cover w-full max-h-[550px] shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;