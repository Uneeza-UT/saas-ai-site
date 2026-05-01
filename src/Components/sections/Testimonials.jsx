import { motion } from "framer-motion"
import TestimonialsCard from '../ui/TestimonialsCard';
import testimonial1 from "../../assets/images/testimonial1.avif"
import testimonial2 from "../../assets/images/testimonial2.avif"
import testimonial3 from "../../assets/images/testimonial3.jpg"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function Testimonials() {

    const [index, setIndex] = useState(0);
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const { lightMode, toggleLightMode } = useContext(ThemeContext);

    const testimonials = [
        {
            id: 1,
            image: testimonial1,
            imgAlt: "A laptop on a desk",
            title: "Freelance Writer",
            role: "Content Creator",
            testimonial: "Helped me cut my content writing time in half. The suggestions are actually useful and not generic."
        },
        {
            id: 2,
            image: testimonial2,
            imgAlt: "A man in a suit",
            title: "Blogger",
            role: "Digital Creator",
            testimonial: "Great for generating blog ideas quickly. It saves me a lot of time when planning content for the week."
        },
        {
            id: 3,
            image: testimonial3,
            imgAlt: "A laptop on a desk",
            title: "Marketing Student",
            role: "Learner",
            testimonial: "It makes writing feel less overwhelming. I can go from idea to draft much faster now."
        }
    ]

    useEffect(() => {
        const updateCardWidth = () => {
            if (cardRef.current) {
                setCardWidth(cardRef.current.offsetWidth);
            }
        }

        updateCardWidth();
        window.addEventListener("resize", updateCardWidth);
        return () => window.removeEventListener("resize", updateCardWidth);

    }, []);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1) % testimonials.length);
    };

    return (
        <section className="pb-10 md:pb-28">
            <div className="container mx-auto px-8 md:px-10 lg:px-14">
                <motion.div
                    initial={{ opacity:0, y:14 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:1.2, ease:"easeOut" }}
                    viewport={{ once:true }}
                    className="order-1 lg:order-2"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">Why Users Love Textyra AI </h2>
                    <p className="text-xl text-muted-text mb-16 leading-relaxed text-center"> 
                        Loved by Creators
                    </p>

                    <div className="relative w-full">

                        <button
                            onClick={prevSlide}
                            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 ${!lightMode ? "bg-black/40" : "bg-white/80"} p-2 rounded-full shadow`}
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={nextSlide}
                            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 ${!lightMode ? "bg-black/40" : "bg-white/80"} p-2 rounded-full shadow`}
                        >
                            <ChevronRight />
                        </button>

                        <div className="relative w-full overflow-hidden">
                            <motion.div
                                className="flex gap-8"
                                animate={{ x: -index * (cardWidth + 24) }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                
                                {testimonials.map((item, index) => (
                                    <TestimonialsCard 
                                        key={item.id} 
                                        image={item.image} 
                                        imgAlt={item.imgAlt} 
                                        clientTitle={item.title} 
                                        clientRole={item.role} 
                                        testimonial={item.testimonial} 
                                        ref={index === 0 ? cardRef : null}
                                    /> 
                                ))}

                            </motion.div>
                        </div>
                        
                    </div>
                    
                </motion.div>
            </div>
        </section>
    )
}