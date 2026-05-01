import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FileText, Sparkles, Copy } from "lucide-react"
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import toast from "react-hot-toast";

export default function Demo() {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);
    const [currentDemoIndex, setCurrentDemoIndex] = useState(0);
    const [output, setOutput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const intervalRef = useRef(null)
    const timeOutRef = useRef(null)
    const autoRotateRef = useRef(true);

   const demos = [
    {
        input: "Write an Instagram ad for running shoes",
        output: "Run faster, feel lighter 👟💨 Discover our newest running shoes designed for comfort and performance. Elevate every step. #RunWithConfidence"
    },
    {
        input: "Generate a product description for a smartwatch",
        output: "Stay connected and in control with our sleek smartwatch. Track your health, manage notifications, and elevate your lifestyle — all from your wrist."
    },
    {
        input: "Write a caption for a coffee brand",
        output: "Start your day right ☕✨ Bold flavor, smooth finish — because every great story begins with coffee."
    }
];

    useEffect(() => {
        const interval = setInterval(() => {

            if (!autoRotateRef.current) return;

            setCurrentDemoIndex((prev) => (prev + 1) % demos.length);
        }, 4000); // change every 4s

        return () => clearInterval(interval);
    }, []);

    const handleGenerate = () => {

        autoRotateRef.current = false;

        if (intervalRef.current) clearInterval(intervalRef.current)
        if (timeOutRef.current) clearTimeout(timeOutRef.current)

        const selectedDemo = demos[currentDemoIndex];
        setIsTyping(true)

        let i = 0;
        setOutput("Generating...")
        

        timeOutRef.current = setTimeout(() => {

            setOutput("")

            intervalRef.current = setInterval(() => {
                i++;
                setOutput(selectedDemo.output.slice(0, i));

                if (i >= selectedDemo.output.length) {
                    clearInterval(intervalRef.current)
                    setIsTyping(false)
                    autoRotateRef.current = true;                   
                }
            }, 50)
            
        } , 800)
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(output);
            toast.success("Copied to clipboard!");
            setOutput("")
        } catch {
            toast.error("Failed to copy!");
        }
    };

    return (
        <section id="demo" className="pb-32 md:pb-40">
            <div className="container mx-auto px-8 md:px-10 lg:px-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-9 text-center"> See Textyra in Action </h2>
                <p className="text-xl text-muted-text mb-16 leading-relaxed text-center"> 
                    Generate high-quality content instantly with AI — from ideas to polished results in seconds.
                </p>

                <motion.div className="flex justify-center" 
                    initial={{ opacity:0, y:14 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:1.2, ease:"easeOut" }}
                    viewport={{ once:true }}
                >
                    <div className="relative bg-alt border border-highlight max-w-lg md:max-w-2xl lg:max-w-3xl w-full mx-auto p-8 sm:p-12 rounded-2xl shadow-[0_0_15px_var(--primary-color)]" >

                        <h3 className="font-bold text-xl flex items-center gap-2 mb-10"> 
                            <span>
                                <FileText className="w-6 h-6"/> <Sparkles className="ml-1 w-6 h-6"/>
                            </span> 
                            Textyra AI 
                        </h3>

                        <div className="mb-6">
                            <p className="text-sm md:text-lg font-semibold text-muted-text mb-4"> Input </p>
                            <div className="bg-body-color border border-highlight rounded-lg p-4 text-base md:text-lg">
                                {demos[currentDemoIndex].input}
                            </div>
                        </div>

                        <div className="mb-10">
                            <p className="text-sm md:text-lg font-semibold text-muted-text mb-4"> Output </p>
                            <div className={`bg-body-color border border-highlight rounded-lg p-4 text-base md:text-lg min-h-30
                                ${!lightMode ? 'shadow-[inset_0_2px_10px_rgba(0,0,0,0.5),inset_0_0_12px_var(--primary-color)]' 
                                : ' '}`}
                            >
                                {output || "AI output will appear here..."}
                                {isTyping && <span className="inline-block animate-blink">|</span>}
                            </div>
                        </div>

                        <div className="flex gap-2 md:gap-4">
                            <button
                                onClick={handleGenerate} 
                                className="px-3 sm:px-4 py-3 md:px-6 md:py-3 inline-flex items-center 
                                    justify-center gap-2 text-sm sm:text-base md:text-lg bg-primary-color 
                                    text-white rounded-xl transition-all duration-300 hover:scale-105 
                                    hover:bg-hover cursor-pointer"
                            >
                                <Sparkles className="w-4 h-4 md:w-5 md:h-5"/> Generate
                            </button>

                            <button 
                                onClick={handleCopy}
                                className="ml-2 px-3 sm:px-4 py-3 md:px-6 md:py-3 inline-flex items-center 
                                    justify-center gap-2 text-sm sm:text-base md:text-lg border border-highlight 
                                    rounded-xl transition-all duration-300 hover:scale-105 
                                    shadow-[0_0_5px_var(--primary-color)] cursor-pointer"
                            >
                                <Copy className="w-4 h-4 md:w-5 md:h-5"/> Copy
                            </button>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}