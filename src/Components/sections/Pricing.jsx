import { motion } from 'framer-motion'
import PricingCard from '../ui/PricingCard';

export default function Pricing() {

    const pricingPlans = [
        {
            id: 1,
            title: "Free",
            subtitle: "Perfect to get started",
            price: "$0",
            features: ["Basic AI tools", "Limited usage", "Community support"],
            buttonText: "Try Free" ,
            isPro: false            
        },
        {
            id: 2,
            title: "Pro",
            subtitle: "For power users & small teams",
            price: "$29",
            features: ["All free features", "Unlimited AI usage", "Priority support", " Advanced analytics"],
            buttonText: "Get Pro",
            isPro: true        
        },
         {
            id: 3,
            title: "Business",
            subtitle: "For large teams & enterprises",
            price: "$99",
            features: ["All Pro features", "Team management", "Dedicated support", " Custom integrations"],
            buttonText: "Request Demo",
            isPro: false         
        }
    ]
    return (
         <section id="pricing" className="pb-32 md:pb-44">
            <div className="container mx-auto px-6 md:px-8 lg:px-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-9 text-center">Choose Your Plan </h2>
                <p className="text-xl text-muted-text mb-16 leading-relaxed text-center"> 
                    Flexible plans for teams of all sizes. Upgrade anytime.
                </p>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-20 items-center"
                    initial={{ opacity:0, y:14 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:1.2, ease:"easeOut" }}
                    viewport={{ once:true }}
                >
                    {pricingPlans.map((plans) => (
                        <PricingCard 
                            key={plans.id}
                            title={plans.title}
                            subtitle={plans.subtitle}
                            price={plans.price}
                            features={plans.features}
                            buttonText={plans.buttonText}
                            isPro={plans.isPro}
                        />
                    ))}                
                        
                </motion.div>
            </div>
        </section>
    )
}