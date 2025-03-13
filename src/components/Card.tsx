interface CardProps {
    image: string;
    name: string;
    specialization: string;
    crm: string;
}

const Card: React.FC<CardProps> = ({ image, name, specialization, crm }) => {
    return (
        <div data-testid="card-container" className="flex flex-col items-center w-50 p-4 m-3 text-center rounded-lg shadow-xl md:w-64 font-nunito hover:shadow-[#5e876c5e] cursor-pointer flex-shrink-0 flex-grow-0 basis-[calc(50%-1.5rem)]">
            <img
                src={image}
                alt={name}
                className="object-cover w-24 h-24 mb-4 border-2 rounded-full border-emerald-900"
            />
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-600">{specialization}</p>
            <p className="text-sm text-gray-500">{crm}</p>
        </div>
    );
};

export default Card;
