import { FaTwitter, FaLinkedin } from "react-icons/fa6"
import { FileText, Sparkles, SendHorizonal  } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useForm } from "react-hook-form"

export default function Footer() {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);
    const {register, formState: {errors}} = useForm({
        mode: "onChange"
    });

    return (
        <footer className={`bg-alt border-t ${!lightMode ? "border-white/10" : "border-black/10 "} pt-12 pb-3`}>
            <div className="px-16 md:px-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] justify-between gap-x-14 md:gap-x-24 gap-y-16 py-16">
                        <div>
                            <h3 className="text-3xl font-bold text-main-text mb-6 flex items-center">
                            <div className="group-hover:text-hover transition-colors text-highlight">
                                    <FileText className="w-8 h-8"/>
                                    <Sparkles className="w-8 h-8" />
                                </div>  
                                <span className="ml-3"> Textyra AI </span>
                            </h3>
                            <p className="text-muted-text text-lg leading-relaxed mb-8 max-w-sm">
                                Generate, refine, and scale your content with AI.
                            </p>

                            <div className="flex gap-4">
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-main-text transition-colors" aria-label="X">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-main-text transition-colors" aria-label="LinkedIn">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                            
                        </div>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold mb-4">Product</h4>
                            <ul className="space-y-4 text-lg text-muted-text">
                                <li><a href="#features" className="hover:text-main-text">Features</a></li>
                                <li><a href="#demo" className="hover:text-main-text">Demo</a></li>
                                <li><a href="#pricing" className="hover:text-main-text">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold mb-4">Company</h4>
                            <ul className="space-y-4 text-lg text-muted-text">
                                <li><a href="#contact" className="hover:text-main-text">Contact</a></li>
                                <li><a href="#" className="hover:text-main-text">About</a></li>
                            </ul>                     
                        </div>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
                            <p className="text-lg text-muted-text mb-6">
                            Receive our latest updates
                            </p>

                            <form className="relative group min-h-25">
                                <div className="relative flex items-center">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className={`w-full px-4 py-3 pr-10 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-color/70 
                                            ${!lightMode ? "border-white/10 bg-white/5" : "border-gray-400 bg-white shadow-md"}`}
                                        {...register("email", {
                                            pattern: {
                                                value: /^\S+@\S+\.\S+$/,
                                                message: "Invalid email format"
                                            }
                                        })}
                                        
                                    />
                                    <button type="submit" className="absolute right-4 border-none">
                                        <SendHorizonal className={`w-5 h-5 transition-colors group-focus-within:text-primary-color cursor-pointer ${!lightMode ? "text-white" : "text-muted-text"}`} />
                                    </button>
                                    
                                </div>
                                    
                                {errors.email && <p className='text-red-500 text-sm mt-6'> {errors.email.message} </p>}
                                
                            </form>          

                        </div>
                    </div>
                </div>
            </div>
            

            <div className={`border-t ${!lightMode ? "border-white/10" : "border-black/10"} w-full  mx-auto px-8 md:px-20 py-6`}>
                <div className="flex flex-col md:flex-row justify-between items-center text-base text-muted-text">
                    <p className="">© {new Date().getFullYear()} Textyra AI. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-main-text">Privacy Policy</a>
                        <a href="#" className="hover:text-main-text">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}