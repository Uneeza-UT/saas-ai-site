import { useState, useEffect } from "react"
import { FileText, Sparkles, Menu, X, SunMedium, Moon  } from "lucide-react";
import {motion, AnimatePresence} from "framer-motion"
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

export default function Header() {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const sections = ["home", "features", "demo", "pricing", "contact"]
    const location = useLocation();

     useEffect(() => {
        if (location.pathname !== "/") {
            setActive(null); 
        }
    }, [location.pathname]);


    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
      
        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })
            },
            {
                root: null,
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        })

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };

    },[]);

    return (
        <header className={`backdrop-blur-md border-b border-highlight/40 sticky top-0 z-50 transition-all ${scrolled ? "bg-body-color/70 shadow-lg" : "bg-body-color/85"}`}>
            <nav className="container mx-auto px-6 py-4" aria-label="Primary">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-2xl md:text-lg lg:text-3xl font-bold text-main-text flex items-center group space-x-3">
                        <div className="group-hover:text-hover transition-colors text-highlight">
                            <FileText className="w-6 h-6 md:w-8 md:h-8"/>
                            <Sparkles className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                        </div>                              
                        <span className="group-hover:text-hover transition-colors">Textyra AI</span>
                    </a>
                    <div className="hidden md:flex items-center md:space-x-6 lg:space-x-8 font-semibold md:text-sm lg:text-xl">
                        {sections.map((id) => (
                            <HashLink smooth to={`/#${id}`}
                                key={id}
                                className={ `hover:text-hover transition-all duration-300 transform hover:scale-105
                                    ${active === id ? "text-primary-color font-semibold border-b-2 border-primary-color" : ""}`
                                }
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </HashLink>
                        ))}
                        
                    </div>
                    <div className="flex justify-end items-center md:space-x-2 lg:space-x-5">
                        <NavLink to={"/login"} 
                            className={({isActive}) =>
                                `hidden md:inline-flex mr-5 lg:mr-7 font-medium lg:text-xl
                                hover:text-hover transition-all duration-300 transform hover:scale-105 cursor-pointer
                                ${isActive ? 
                                    "text-primary-color font-semibold border-b-2 border-primary-color" : ""}`
                                }
                        >   
                            Sign In
                        </NavLink>

                        <button className="hidden md:inline-flex items-center mr-7 px-4 py-2 rounded-lg 
                            bg-primary-color text-white text-base md:text-sm lg:text-lg hover:bg-hover transition-all duration-300 
                            transform hover:scale-105 hover:shadow-xl cursor-pointer "
                        >
                            <NavLink to={"/signup"} >   
                                Sign Up
                            </NavLink>
                        </button>

                        <button 
                            onClick={toggleLightMode} 
                            className="transition-all duration-300 hover:scale-110 cursor-pointer"
                        > 
                            { !lightMode ? <SunMedium className="hover:text-yellow-500 w-8 h-8"/> : <Moon className="hover:text-gray-600 w-8 h-8"/> } 
                        </button>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded="mobileMenuOpen" aria-controls="mobileMenu" className="md:hidden p-2 rounded-lg hover:bg-primary-color transition-colors" aria-label="Toggle menu">
                            {!mobileMenuOpen && <Menu className="w-6 h-6" />}
                            {mobileMenuOpen && <X className="w-6 h-6 text-primary-color"/>}
                        </button>
                    </div>                  

                    
                    
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && 
                        <motion.div id="mobileMenu"
                            className="md:hidden mt-4 space-y-4 glass rounded-xl p-4 border border-highlight/40" 
                            initial={{ opacity:0, y:-16}}
                            animate={{ opacity:1, y:0 }}
                            exit={{ opacity:0, y:-16 }}
                            transition={{ duration:0.4, ease:"easeOut" }}
                        >
                            
                            {sections.map((id) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className={ `block transition-colors py-2
                                        ${active === id ? "text-primary-color font-medium" : "text-muted-text "}`
                                    }
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            ))}

                            <a className="mt-2 text-white bg-primary-color hover:bg-hover px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                                Sign Up
                            </a>
                        </motion.div>
                    }
                </AnimatePresence>
                
            </nav>
        </header>
    )
}