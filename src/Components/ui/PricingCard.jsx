import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { ArrowRight, Check } from "lucide-react";

export default function PricingCard ({title, subtitle, price, features, buttonText, isPro }) {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);

     return (
        <div 
            className={`flex flex-col h-full relative bg-alt backdrop-blur-sm
                rounded-lg p-12 text-left group border ${!lightMode && !isPro ? "border-white/10" : "border-black/10"}
                ${isPro ? "md:scale-105 border-primary-color shadow-[0_20px_50px_-10px_var(--primary-color)] z-10 bg-linear-to-b from-white/5 to-transparent" 
                        : !lightMode ? 'shadow-[inset_0_20px_30px_-15px_var(--primary-color)]' 
                :        'shadow-2xl '}`}       
        >

            
            
            {isPro && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-color text-white text-sm 
                    px-4 py-2 rounded-full shadow-lg">
                    Most Popular
                </div>
            )}

            <div className="flex-1 ">
                <h3 className={`${isPro? "text-3xl" : "text-2xl"}  font-bold mb-2 tracking-tight`}> {title} </h3>
                <p className="text-lg text-muted-text leading-relaxed mb-6"> {subtitle} </p>
                <p className={`${isPro? "text-5xl" : "text-4xl"} font-bold mb-10`}> {price} <span className="text-base font-medium text-muted-text">/month</span></p>

                <div className="flex justify-center mb-10">
                    <div className={`${!lightMode ? "h-0.75" : "h-0.5"} max-w-xs w-full bg-linear-to-r from-transparent via-primary-color to-transparent rounded-t-xl`} />
                </div>

                <ul className="mb-6 space-y-3 text-muted-text"> 
                    {features.map((feature, index) => (
                    <li key={index} className="flex justify-start gap-3 text-muted-text">
                    <Check className="mt-1 text-highlight w-5 h-5"/> {feature}
                    </li>
                ))}
                </ul>
            </div>
            
            <div className="mt-auto pt-6">
                {isPro ? 
                    <button className="bg-primary-color hover:bg-hover px-8 py-4 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex group/link">
                        {buttonText} <ArrowRight className="ml-2 shrink-0 mt-1" />
                    </button>
                    : <a  className="inline-flex mt-4 hover:underline hover:text-highlight font-semibold text-xl group/link">
                        {buttonText} <ArrowRight className="ml-2 shrink-0 mt-1 transform transition-transform group-hover:text-highlight" />
                    </a>
                }
            </div>        
                                                                                                    
        </div>
    )
}