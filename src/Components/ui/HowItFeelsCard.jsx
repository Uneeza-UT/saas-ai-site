import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function HowItFeelsCard({ icon, title, description}) {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);

    return (
        <div 
            className={`
                relative rounded-xl border ${!lightMode ? 'border-white/10' : 'border-black/10'}
                transition-transform flex flex-col items-center overflow-hidden text-center cursor-pointer duration-300
                hover:-translate-y-2 ${!lightMode ? 'shadow-none hover:shadow-[inset_0_20px_50px_-15px_var(--primary-color)]' 
                : 'shadow-lg hover:shadow-[0_0_10px_var(--primary-color)] '} p-10`}
        >
            <div className={`absolute top-0 left-0 h-1 w-full pointer-events-none rounded-t-xl
                    ${!lightMode ? "bg-linear-to-r from-transparent via-primary-color to-transparent" : "bg-primary-color"} 
                `} />
            <div className="mx-auto w-12 h-12 rounded-xl bg-primary-color 
                border border-primary-color grid place-items-center mb-3
                shadow-[inset_0_2px_0_0_rgba(255,255,255,0.2)]"
            >
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 tracking-tight"> {title} </h3>
            <p className="text-muted-text leading-relaxed"> {description} </p>
        </div>
    )
}