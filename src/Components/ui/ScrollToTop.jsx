import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function ScrollToTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    },[])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    };

    return (
        <>
            {visible && 
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary-color 
                        text-white shadow-lg hover:shadow-brandMarketing-500/30 grid 
                        place-items-center cursor-pointer"
                    aria-label="Scroll To Top"
                >                   
                    <ArrowUp strokeWidth={2.5}/>
                </button>
            }
        </>
    )
}