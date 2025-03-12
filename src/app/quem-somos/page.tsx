"use client"

import Card from "@/components/Card";
import { useEffect } from "react";

const Contact: React.FC = () => {
    useEffect(() => {
            document.title = "Quem somos | Lacrei Saúde";
        });
        
    const doctors = [
        {
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww",
            name: "Dr. João Silva",
            specialization: "Cardiologista",
            crm: "CRM-SP 123456",
        },
        {
            image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Dr. Pedro Oliveira",
            specialization: "Ortopedista",
            crm: "CRM-SP 654321",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661551577028-80cfb8e4d236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Dr. Ricardo Mendes",
            specialization: "Neurologista",
            crm: "CRM-SP 789012",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1673953510158-174d4060db8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Dra. Ana Souza",
            specialization: "Dermatologista",
            crm: "CRM-SP 345678",
        },
        {
            image: "https://images.unsplash.com/photo-1594658979472-b3d920f2eb3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
            name: "Dra. Juliana Lima",
            specialization: "Pediatra",
            crm: "CRM-SP 987654",
        },
        {
            image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
            name: "Dra. Mariana Castro",
            specialization: "Ginecologista",
            crm: "CRM-SP 112233",
        },
        {
            image: "https://images.unsplash.com/photo-1615177393579-5fc7431152c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
            name: "Dr. Fernando Alves",
            specialization: "Psiquiatra",
            crm: "CRM-SP 445566",
        },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center p-8 mt-5">

            {/* heading */}
            <div className="flex flex-col items-center">
                <div className="mb-6">
                    <h1 className="mb-2 text-4xl font-bold text-center font-nunito">Conheça nosso time!</h1>
                    <div className="h-[0.1rem] mx-6 bg-emerald-600"></div>
                </div>
                <p className="text-[1.2rem] w-[70%] font-nunito text-center">A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ mais que precisam de atendimento clínico a profissionais da saúde.</p>
                <p className="text-[1.2rem] w-[70%] font-nunito text-center">Buscamos proporcionar um atendimento de qualidade, sustentado pelos pilares da inclusão, representatividade e segurança.</p>
            </div>

            {/* profissionais */}
            <div className="flex flex-wrap justify-center w-[100%] md:w-[70%] mt-15">
                {doctors.map((doctor, index) => {
                    return (
                        <div key={index} className="transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <Card
                                image={doctor.image}
                                name={doctor.name}
                                specialization={doctor.specialization}
                                crm={doctor.crm}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Contact;