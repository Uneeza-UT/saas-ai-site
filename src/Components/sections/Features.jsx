import { motion } from 'framer-motion'
import FeaturesCard from '../ui/FeaturesCard';
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import blogLight from "../../assets/images/blog-light.avif"
import blogDark from "../../assets/images/blog-dark.avif"
import linkedinLight from "../../assets/images/linkedin-light.avif"
import linkedinDark from "../../assets/images/linkedin-dark.avif"
import adLight from "../../assets/images/ad-light.avif"
import adDark from "../../assets/images/ad-dark.avif"
import seoLight from "../../assets/images/seo-light.avif"
import seoDark from "../../assets/images/seo-dark.avif"
import contentDark from "../../assets/images/content-dark.avif"
import contentLight from "../../assets/images/content-light.avif"


export default function Features() {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1], 
            },
        },
    };

    const features = [
    {
        id: 1,
        title: "AI Blog Generator",
        description: "Automatically generate full blog posts with optimized structure and tone.",
        image: !lightMode ? blogDark : blogLight,
        imgAlt: !lightMode ? "A desktop computer sitting on top of a desk" : `A person typing on laptop with "written by ai" text`
    },
    {
        id: 2,
        title: "LinkedIn Post Creator",
        description: "Craft professional LinkedIn posts quickly for engagement.",
        image: !lightMode ? linkedinDark : linkedinLight,
        imgAlt: !lightMode ? "A cellphone with paper cut out of it" : "Smartphone screen displaying linkedin app"
    },
    {
        id: 3,
        title: "Ad Copy Writer",
        description: "Generate ad copy for social media, Google Ads, or campaigns.",
        image: !lightMode ? adDark : adLight,
        imgAlt: !lightMode ? "Hands holding smartphone with generate button" : "Abstract graphic with generate button and image icon"
    },
    {
        id: 4,
        title: "SEO Optimizer",
        description: "Suggest keyword-optimized content for better search visibility.",
        image: !lightMode ? seoDark : seoLight,
        imgAlt: !lightMode ? "A computer screen with a keyboard and a cactus" :"Stacks of books, light bulb and coffee over blue background" 
    },
    {
        id: 5,
        title: "Content Summarizer",
        description: "Summarize long articles or reports into concise, readable text.",
        image: !lightMode ? contentDark : contentLight,
        imgAlt: !lightMode ? "AI rewriting text above a vintage keyboard" : "Two people looking at ai writing tool suggestions"
    },
    ];


    return (
        <section id="features" className="pb-32 md:pb-40">
            <div className="container mx-auto px-8 md:px-10 lg:px-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-9 text-center">Textyra AI Features </h2>
                <p className="text-xl text-muted-text mb-16 leading-relaxed text-center"> 
                    From ideas to polished content — Textyra helps you generate the writing you need, instantly.
                </p>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center"
                    variants={container} 
                    initial="hidden" 
                    whileInView="show"
                    viewport={{ once: true }}
                >
                        {features.map((feature) => (
                            <FeaturesCard 
                                key={feature.id}
                                image={feature.image}
                                imgAlt={feature.imgAlt}
                                title={feature.title}
                                description={feature.description}
                                variants={item}
                            />
                        ))}
                        
                </motion.div>
            </div>
        </section>
    )
}