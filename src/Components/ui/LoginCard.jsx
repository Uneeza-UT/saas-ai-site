import { FileText, Sparkles, Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import { FaGithub, FaGoogle } from "react-icons/fa6";

export default function LoginCard() {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();
    const { lightMode, toggleLightMode } = useContext(ThemeContext);
    const [showPassword, setShowPassword] = useState(false)

    return (
       
        <main className="flex-1 flex flex-col items-center justify-center gap-8 container mx-auto px-10 lg:px-14 pt-16 pb-28">
            <a href="#" className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-text flex items-center group space-x-3">
                <div className="group-hover:text-hover transition-colors text-highlight">
                    <FileText className="w-6 h-6"/>
                    <Sparkles className="w-6 h-6 ml-1" />
                </div>                              
                <span className="group-hover:text-hover transition-colors">Login</span>
            </a>

            <div className={`relative bg-alt border p-8 lg:p-12 rounded-xl ${!lightMode ? "shadow-[0_0_20px_var(--primary-color)] border-white/10" : "shadow-2xl border-black/20"} max-w-xl md:max-w-md lg:max-w-xl w-full`} >
                <form className="space-y-8" onSubmit={handleSubmit((data) => console.log(data))}>

                    <label className='flex flex-col gap-4 w-full'>
                        <span className='text-base md:text-lg tracking-widest font-semibold text-muted-text'> 
                            Email: 
                            <span className="text-red-500 ml-1">*</span>
                        </span>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color/70 
                                ${!lightMode ? "border-white/10 bg-white/5" : "border-gray-400 bg-white shadow-md"}
                                placeholder:text-gray-400`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email format"
                                }
                            })}
                        />
                        {errors.email && <p className='text-red-500 text-sm'> {errors.email.message} </p>}
                    </label>
                    
                    <label className='flex flex-col gap-4 w-full'>
                        <span className='text-base md:text-lg tracking-widest font-semibold text-muted-text'> 
                            Password: 
                            <span className="text-red-500 ml-1">*</span>
                        </span>
                        <div className="relative w-full">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Enter Password" 
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color/70 
                                    ${!lightMode ? "border-white/10 bg-white/5" : "border-gray-400 bg-white shadow-md"}
                                    placeholder:text-gray-400`}
                                {...register("password", {
                                    required: "Password is required"
                                })}
                            />

                            <button
                                type="button"
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brandMarketing-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>                

                        {errors.password && <p className='text-red-500 text-sm'> {errors.password.message} </p>}
                    </label>

                    <div className="flex justify-between items-center">

                        <p className="flex items-center text-sm md:text-base text-muted-text">
                            <input
                                type="checkbox"
                                className="rounded-lg accent-primary-color w-6 h-6 md:w-8 md:h-8 transform scale-50"
                                {...register("rememberme", {})} 
                            />
                            Remember me
                        </p>

                        <a href="#" className="text-muted-text text-sm md:text-base hover:text-highlight hover:border-b-2 hover:border-highlight"> 
                            Forgot Password? 
                        </a>

                    </div>

                    <button 
                        type="submit" 
                        disabled = {isSubmitting}
                        className="bg-primary-color mt-1 xl:mt-3 text-base font-bold md:text-lg 
                            text-white px-4 py-2 lg:py-3 rounded-lg w-full shadow-[0_0_5px_var(--primary-color)] 
                            hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                                Logging In...
                            </>) : (
                                "Login" 
                            )}
                    </button>
                </form>

                <div className="relative my-10">
                    <div className="absolute inset-0 flex items-center">
                        <div className={` ${!lightMode ? "h-0.75" : "h-0.5"}
                            w-full bg-linear-to-r from-transparent via-primary-color to-transparent rounded-t-xl`} 
                        />
                    </div>

                    <div className="relative flex justify-center">
                        <span className="px-4 text-sm md:text-base bg-alt">
                            OR
                        </span>
                    </div> 
                </div>

                <div className="flex flex-col items-center gap-6 font-semibold">
                    <button className = {`w-full px-4 py-3 flex items-center justify-center gap-3 border rounded-xl
                            ${!lightMode ? "border-white/10 bg-white/5 hover:bg-highlight/10" : 
                            "border-gray-400 text-slate-800 bg-white shadow-md hover:bg-white/70"}
                            cursor-pointer transition-all duration-300 hover:scale-105 shadow-[inset_0_4px_4px_rgba(255,255,255,0.05)] `}
                        >
                        <FaGoogle className="w-5 h-5" /> Login With Google
                    </button>

                    <button className = {`w-full px-4 py-3 flex items-center justify-center gap-3 border rounded-xl
                            ${!lightMode ? "border-white/10 bg-white/5 hover:bg-highlight/10" : 
                            "border-gray-400 text-slate-800 bg-white shadow-md hover:bg-white/70"}
                            cursor-pointer transition-all duration-300 hover:scale-105 shadow-[inset_0_4px_4px_rgba(255,255,255,0.05)] `}
                        >
                        <FaGithub className="w-5 h-5" /> Login With GitHub
                    </button> 
                </div>
                

                <p className="text-muted-text text-base mt-10"> 
                    Don't have an account?
                    <a href="/signup" className="text-main-text test-base font-semibold hover:border-b-2 hover:text-highlight"> 
                        {" "} Sign up
                    </a>
                </p>

            </div>
        </main>
              
    )
}