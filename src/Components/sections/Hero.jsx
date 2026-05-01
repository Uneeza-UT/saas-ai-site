import {motion} from "framer-motion"
import { Rocket, PlayCircle, FileText, Sparkles, Copy } from "lucide-react"
import { useState, useRef } from "react"
import { Link } from "react-router-dom";

export default function Hero() {
    const [text, setText] = useState("");
    const intervalRef = useRef(null)
    const timeOutRef = useRef(null)

    const fullText = `Artificial intelligence is transforming modern marketing by enabling
                    data-driven decisions, personalized experiences, and automation at scale...`

    const handleGenerate = () => {

        if (intervalRef.current) clearInterval(intervalRef.current)
        if (timeOutRef.current) clearInterval(timeOutRef.current)

        let i = 0;
        setText("Generating...")

        timeOutRef.current = setTimeout(() => {

            setText("")

            intervalRef.current = setInterval(() => {
                i++;
                setText(fullText.slice(0, i));

                if (i >= fullText.length) {
                    clearInterval(intervalRef.current)
                }
            }, 50)
        } , 800)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
    }

    return (

        <section id="home" className="relative pt-30 pb-36 md:pb-40 overflow-hidden">
            <div className="container mx-auto px-8 md:px-10 lg:px-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top, rgba(99,102,241,0.15),_transparent_60%)] pointer-events-none" />
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                    <motion.div
                            initial={{ opacity:0, y:14 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration:1, ease:"easeOut" }}
                            viewport={{ once:true }}
                            className='order-1 lg:order-1'
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-bold mb-7"> Turn ideas into high-converting content instantly </h2>
                        <p className="text-xl text-muted-text text-center lg:text-left mb-9 leading-relaxed">
                            AI-powered platform for marketers, founders, and creators
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                            <Link to={"/signup"} className="bg-primary-color hover:bg-hover px-8 py-4 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex">
                                <Rocket className="mr-2" />Get Started
                            </Link>
                            <a href="#demo" className="border border-primary-color hover:border-highlight shadow-[0_0_15px_var(--primary-color)] px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 group flex">
                                <PlayCircle className="mr-2 group-hover:text-hover" />Live Demo
                            </a>
                        </div>

                    </motion.div>

                    <motion.div className="order-2 lg:order-2 flex justify-center" 
                                initial={{ opacity:0, y:14 }}
                                whileInView={{ opacity:1, y:0 }}
                                transition={{ duration:1.2, ease:"easeOut" }}
                                viewport={{ once:true }}
                    >
                        <div className="relative bg-alt min-h-75 border border-highlight p-6 sm:p-12 rounded-xl shadow-[0_0_15px_var(--primary-color)] max-w-lg w-full " >

                            <h3 className="font-semibold text-lg flex items-center gap-2 mb-6"> 
                                <span>
                                    <FileText className="w-4 h-4"/> <Sparkles className="ml-1 w-4 h-4"/>
                                </span> 
                                Textyra AI 
                            </h3>

                            <div className="mb-4">
                                <p className="text-sm text-muted-text mb-2"> Input </p>
                                <div className="bg-body-color border border-highlight rounded-md p-2 sm:p-4 text-xs sm:text-sm">
                                    Write a blog intro about AI in marketing
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm text-muted-text mb-2"> Output </p>
                                <div className="bg-body-color border border-highlight rounded-md p-2 sm:p-4 text-xs sm:text-sm min-h-25">
                                    {text || "AI output will appear here..."}
                                    <span className="inline-block animate-blink">|</span>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={handleGenerate} 
                                    className="px-3 py-2 text-sm bg-primary-color text-white rounded-lg inline-flex items-center 
                                        justify-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-hover"
                                    >
                                    <Sparkles className="w-4 h-4"/> Generate
                                </button>
                                <button 
                                    onClick={handleCopy}
                                    className="ml-2 px-3 py-2 text-sm border border-highlight rounded-lg inline-flex items-center 
                                        justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_0_5px_var(--primary-color)]"
                                    >
                                    <Copy className="w-4 h-4"/> Copy
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}