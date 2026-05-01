import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { motion } from "framer-motion";

export default function FeaturesCard({image, imgAlt, title, description,variants }) {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);

    return (
        <motion.div 
            variants={variants}  
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex flex-col h-full relative bg-alt backdrop-blur-sm shadow-xl 
                rounded-lg p-12 text-left hover:shadow-2xl group
                border ${!lightMode ? 'border-white/10' : 'border-black/10'}
                ${!lightMode ? 'shadow-none hover:shadow-[inset_0_20px_50px_-15px_var(--primary-color)]' 
                : 'shadow-lg hover:shadow-[0_0_10px_var(--primary-color)] '}`}       
        >

            <div className={`absolute top-0 left-0 h-1 w-full ${!lightMode ? "bg-linear-to-r from-transparent via-primary-color to-transparent" : "bg-primary-color"}  rounded-t-xl`} />
            <div className="relative group cursor-pointer">
                <motion.img src={image}
                    alt={imgAlt} 
                    className="h-48 w-full mb-10 object-cover rounded-2xl shadow-2xl ring-1 ring-slate-700/60" loading="lazy" decoding="async" 
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 tracking-tight"> {title} </h3>
            <p className="text-lg text-muted-text leading-relaxed"> {description} </p>
                                                                                                    
        </motion.div>
    )
}