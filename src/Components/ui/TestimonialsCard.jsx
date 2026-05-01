import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { forwardRef } from "react";

const TestimonialsCard = forwardRef(({image, imgAlt, clientTitle, clientRole, testimonial}, ref) => {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);

    return (
        <div ref={ref} className={`relative bg-alt backdrop-blur-sm shadow-xl rounded-xl p-12 
            text-left hover:shadow-2xl group border min-w-[85vw] md:min-w-150 lg:min-w-187.5
            ${!lightMode ? 'border-white/10' : 'border-black/10'}
            ${!lightMode ? 'shadow-none hover:shadow-[inset_0_20px_50px_-15px_var(--primary-color)]' 
            : 'shadow-lg hover:shadow-[0_0_10px_var(--primary-color)] '}`}       
        >

            <div className={`absolute top-0 left-0 h-1 w-full ${!lightMode ? "bg-linear-to-r from-transparent via-primary-color to-transparent" : "bg-primary-color"}  rounded-t-xl`} />
            <div className="flex flex-col h-full">
                <blockquote className="text-xl font-medium leading-relaxed text-start">“{testimonial}”</blockquote>
                <div className={`my-10 ${!lightMode ? "h-0.75" : "h-0.5"} inset-0 w-full mx-auto bg-linear-to-r from-transparent via-primary-color to-transparent rounded-t-xl`} />
                
                <div className="flex items-center gap-4 mt-auto">
                    <img src={image} alt={imgAlt} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-primary-color/60 shadow-lg" />
                    <div className="flex flex-col justify-center">
                        <h3 className="font-bold text-lg">{clientRole}</h3>
                        <p className="text-primary-color text-sm font-semibold">{clientTitle}</p>
                    </div>                               
                </div>
            </div>
                                                                                                    
        </div>
    )
})

export default TestimonialsCard;