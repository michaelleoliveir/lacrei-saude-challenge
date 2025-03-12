import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/Card";

describe("Card Component", () => {
    const mockProps = {
        image: "https://example.com/doctor.jpg",
        name: "Dr. John Doe",
        specialization: "Cardiologist",
        crm: "CRM/SP 123456",
    };

    it("renders the card with correct props", () => {
        render(<Card {...mockProps} />);

        // renderização da imagem
        const image = screen.getByRole("img", { name: mockProps.name });
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", mockProps.image);
        expect(image).toHaveAttribute("alt", mockProps.name);

        // renderização do nome
        const nameElement = screen.getByText(mockProps.name);
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveClass("text-lg", "font-bold");

        // renderizaÇão da especialização
        const specializationElement = screen.getByText(mockProps.specialization);
        expect(specializationElement).toBeInTheDocument();
        expect(specializationElement).toHaveClass("text-sm", "text-gray-600");

        // renderização do CRM
        const crmElement = screen.getByText(mockProps.crm);
        expect(crmElement).toBeInTheDocument();
        expect(crmElement).toHaveClass("text-sm", "text-gray-500");
    });

    it("has the correct structure and classes", () => {
        render(<Card {...mockProps} />);

        // verifica classes
        const cardContainer = screen.getByTestId("card-container"); 

        expect(cardContainer).toBeInTheDocument();
        expect(cardContainer).toHaveClass(
            "flex",
            "flex-col",
            "items-center",
            "w-35",
            "p-4",
            "m-3",
            "text-center",
            "rounded-lg",
            "shadow-xl",
            "md:w-64",
            "font-nunito",
            "hover:shadow-[#5e876c5e]",
            "cursor-pointer"
        );

        // verifica imagens
        const image = screen.getByRole("img", { name: mockProps.name });
        expect(image).toHaveClass(
            "object-cover",
            "w-24",
            "h-24",
            "mb-4",
            "border-2",
            "rounded-full",
            "border-emerald-900"
        );
    });
});