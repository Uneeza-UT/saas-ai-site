import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function HowItWorks() {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);
    const steps = ["Enter Idea", "AI Processes", "Get Results"];

    return (
        <section className="pb-32 md:pb-40">
            <div className="container mx-auto px-8 md:px-10 lg:px-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">How It Works </h2>
                <div className="relative flex items-center w-full">
              
                    {steps.map((step, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center relative">
                            <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary-color z-10 ring-2 ${!lightMode ? "shadow-[0_0_10px_var(--primary-color)] ring-body-color/10" : "shadow-xl ring-white"}`} />
                             {i < steps.length - 1 && (
                                <div className={`absolute top-1/2 left-1/2 w-full z-0 ${!lightMode ? "h-1 bg-linear-to-r from-transparent via-primary-color to-transparent" : "h-0.75 bg-primary-color"} -translate-y-6 md:-translate-y-7`}></div>
                            )}
                            <p className="mt-6 text-sm md:text-lg font-medium">{step}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}