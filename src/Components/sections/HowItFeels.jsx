import { Target, Zap, Brain } from "lucide-react";
import { motion } from "framer-motion";
import HowItFeelsCard from "../ui/HowItFeelsCard";

export default function HowItFeels() {
    const experiences = [
        {
            id: 1,
            icon: <Target className="w-5 h-5 text-white" />,
            title: "Fast",
            description: "Generate content in seconds with lightning speed.",
        },
        {
            id: 2,
            icon: <Zap className="w-5 h-5 text-white" />,
            title: "Smart",
            description: "AI understands context and generates relevant ideas.",
        },
        {
            id: 3,
            icon: <Brain className="w-5 h-5 text-white" />,
            title: "Accurate",
            description: "High-quality results tailored to your needs.",
        },
    ];

    return (
        <section className="pb-32 md:pb-40">
            <div className="container mx-auto px-8 md:px-10 lg:px-14">
                <motion.div
                    initial={{ opacity:0, y:14 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:1.2, ease:"easeOut" }}
                    viewport={{ once:true }}
                    className="order-1 lg:order-2"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">How It Feels </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {experiences.map((exp) => (
                            <HowItFeelsCard key={exp.id} 
                                            icon={exp.icon}
                                            title={exp.title}
                                            description={exp.description}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}