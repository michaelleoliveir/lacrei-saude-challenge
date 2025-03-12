import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScrollButton from "../components/ScrollButton";
import { ChevronUp } from "lucide-react";

describe("ScrollButton", () => {
    it("renders the scroll button", () => {
        render(<ScrollButton />);
        const button = screen.getByRole("button", { name: /scroll to top/i });
        expect(button).toBeInTheDocument();
    });

    it("renders the ChevronUp icon inside the button", () => {
        render(<ScrollButton />);
        const icon = screen.getByRole("button").querySelector("svg");
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass("lucide-chevron-up");
    });

    it("calls window.scrollTo with {top: 0, behavior: 'smooth'} when clicked", () => {
        const scrollToSpy = jest.spyOn(window, "scrollTo").mockImplementation(() => { });
        render(<ScrollButton />);
        const button = screen.getByRole("button", { name: /scroll to top/i });
        fireEvent.click(button);
        expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
        scrollToSpy.mockRestore();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});