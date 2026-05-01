import {motion} from "framer-motion"
import { SendHorizonal, Mail, MapPin } from "lucide-react"
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function Contact() {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();
    const { lightMode, toggleLightMode } = useContext(ThemeContext);

     return (

        <section id="contact" className="relative pt-30 pb-36 md:pb-40 overflow-hidden">
            <div className="container mx-auto px-8 md:px-10 lg:px-14">
               
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <motion.div
                            initial={{ opacity:0, y:14 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration:1, ease:"easeOut" }}
                            viewport={{ once:true }}
                            className='order-1 lg:order-1'
                    >
                        <div className="mb-10 lg:mt-4">
                            <p className="text-sm uppercase tracking-widest text-primary-color mb-6">
                            Contact
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                            Get in Touch
                            </h2>
                            <p className="text-lg text-muted-text leading-relaxed">
                            Have questions about Textyra AI or need help getting started? Our team is here to help.
                            </p>
                        </div>

                        <div className="space-y-6 text-lg text-left">
                            <p className="flex items-center gap-2">
                                < Mail />
                                <span className="font-semibold text-xl">
                                    Email:
                                </span> 
                                textyra.ai@gmail.com 
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin  /> 
                                <span className="font-semibold text-xl">
                                    Location:
                                </span> 
                                Lahore, Pakistan
                            </p>
                        </div>

                        <p className="text-base text-muted-text mt-6 text-left">
                            We usually respond within 24 hours.
                        </p>


                    </motion.div>

                    <motion.div className="order-2 lg:order-2 flex justify-center" 
                                initial={{ opacity:0, y:14 }}
                                whileInView={{ opacity:1, y:0 }}
                                transition={{ duration:1.2, ease:"easeOut" }}
                                viewport={{ once:true }}
                    >
                        <div className={`relative bg-alt border p-6 lg:p-12 rounded-xl ${!lightMode ? "shadow-[0_0_10px_var(--primary-color)] border-white/10" : "shadow-2xl border-black/20"} max-w-xl w-full`} >

                            <form className="space-y-8" onSubmit={handleSubmit((data) => console.log(data))}>

                                <div className="flex flex-col md:flex-row justify-center gap-5">
                                    <label className='flex flex-col gap-4 w-full'>
                                        <span className='text-xs uppercase tracking-widest font-semibold text-muted-text'> 
                                            Name: 
                                            <span className="text-red-500 ml-1">*</span>
                                        </span>
                                        <input 
                                            type="text" 
                                            placeholder="Enter FullName" 
                                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color/50 
                                                 ${!lightMode ? "border-white/10 bg-white/5" : "border-gray-400 bg-white shadow-md"}`}
                                            {...register("name", {
                                                required: "Name is required",
                                                pattern: {
                                                    value: /^[A-Za-z\s]+$/,
                                                    message: "Only letters allowed"
                                                }
                                            })}
                                        />
                                        <div className="h-2">
                                            {errors.name && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>
                                    </label>

                                    <label className='flex flex-col gap-4 w-full'>
                                        <span className='text-xs uppercase tracking-widest font-semibold text-muted-text'> 
                                            Email: 
                                            <span className="text-red-500 ml-1">*</span>
                                        </span>
                                        <input 
                                            type="email" 
                                            placeholder="Enter Email" 
                                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color/70 
                                                ${!lightMode ? "border-white/10 bg-white/5" : "border-gray-400 bg-white shadow-md"}`}
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+\.\S+$/,
                                                    message: "Invalid email format"
                                                }
                                            })}
                                        />
                                        <div className="h-2">
                                            {errors.email && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                    </label>
                                </div>
                                
                                 <label className='flex flex-col gap-4 w-full'>
                                    <span className='text-xs uppercase tracking-widest font-semibold text-muted-text'> 
                                        Message: 
                                        <span className="text-red-500 ml-1">*</span>
                                    </span>
                                    <textarea 
                                        placeholder="Message" 
                                        rows={4} 
                                         className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color/70 resize-none
                                                ${!lightMode ? "border-white/10 bg-white/5" : "border-gray-400 bg-white shadow-md"}`}
                                        {...register("message", {
                                            required: "Message is required",
                                        })}
                                    />
                                    <div className="h-2">
                                            {errors.message && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>
                                </label>

                                <button 
                                    type="submit" 
                                    disabled = {isSubmitting}
                                    className="bg-primary-color mt-1 xl:mt-3 text-white px-4 py-2 lg:py-3 rounded-lg w-full shadow-[0_0_10px_var(--primary-color)] hover:scale-[1.02] transition-all duration-200"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                                            Sending Message...
                                        </>) : (
                                            <span className="inline-flex"> <SendHorizonal className="mr-2" /> Send Message </span>
                                        )}
                                </button>
                            </form>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}