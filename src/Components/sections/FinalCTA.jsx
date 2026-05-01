import { motion } from "framer-motion"
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import ctabgdark from "../../assets/images/ctabg-dark.avif"
import ctabglight from "../../assets/images/ctabg-light.avif"

export default function FinalCTA() {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);

    return (
        <section className="relative flex items-center justify-center py-32 overflow-hidden border-t border-primary-color/20
            bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] ">

            <img src= {!lightMode ? ctabgdark : ctabglight} 
                alt="abstract background image" 
                className="absolute inset-0 w-full h-full object-cover blur-[1px]" 
                loading="lazy" 
                decoding="async"
            />
            
            <div className="container mx-auto max-w-full px-6 md:px-8 lg:px-10 z-10">
                
                <motion.div                      
                    initial={{ opacity:0, y:14 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:1.2, ease:"easeOut" }}
                    viewport={{ once:true }}
                >

                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/2 to-transparent pointer-events-none" />

                    <h2 className="block text-3xl md:text-4xl lg:text-6xl font-bold mb-8 text-center tracking-tight leading-relaxed wrap-break-word max-w-lg lg:max-w-4xl mx-auto">
                        Start Creating{" "}
                        <span className={`${!lightMode ? "bg-linear-to-br from-white via-highlight to-white bg-clip-text text-transparent" : "bg-linear-to-br from- via-primary-color to-primary-color bg-clip-text text-transparent"}`}>
                            Smarter {" "}
                        </span>  
                        Content Today 
                    </h2>
                    <p className={`text-xl md:text-2xl mb-14 leading-relaxed text-center max-w-md lg:max-w-lg mx-auto font-medium ${!lightMode ? "text-white/85 drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]" : "text-slate-700"}`}> 
                        Create high-quality content faster with AI — from idea to final draft.
                    </p>

                    <div className=" flex justify-center items-center">
                        <button className={` px-10 py-4 border border-primary-color/50 text-xl font-medium
                             ${ !lightMode ? "shadow-[0_0_15px_var(--primary-color)] bg-white text-primary-color hover:bg-white/90 " : "shadow-[0_0_3px_var(--primary-color)] bg-primary-color text-white hover:bg-primary-color/90" } 
                             rounded-xl font-medium transition-all duration-300 transform hover:scale-105`}>
                            Get Started Free
                        </button> 
                    </div>
                    
                      
                        
                </motion.div>
            </div>
        </section>
    )
}