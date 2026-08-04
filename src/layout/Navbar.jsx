import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  {href: "#about", label: "About"},
  {href: "#projects", label: "Projects"},
  {href: "#experience", label: "Experience"},
  {href: "#testimonials", label: "Testimonials"}
];


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // On scrolling = true

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)  // scrolling above 50 it will get true.
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // removing(cleaning up) to prevent memory leaks
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${ isScrolled ? "glass-strong py-3" : "bg-transparent py-5" } z-50 border-none outline-none`}>
      <nav className="container mx-auto flex justify-between items-center py-1">
        <a
          href="#"
          className="text-xl tracking-tight hover:text-primary">
          <span>Prathamesh</span>
          <span className="text-primary">.</span>
          <span className="text-primary hover:text-foreground">dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            { navLinks.map((links, index ) => (
              <a 
                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                href={links.href} 
                key={index}>
                  {links.label}
              </a>
            )) }
          </div>
        </div>
        
        {/* CTA button */}
        <div>
          <Button 
            className="hidden md:block"
            size="sm">
            Contact Me
          </Button>
        </div>

        {/* Mobile button */}
        <button 
        className="md:hidden p-2 text-foreground cursor-pointer"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
        
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            { navLinks.map((links, index ) => (
              <a 
                key={index}
                href={links.href} 
                className="text-lg text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                  {links.label}
              </a>
            ))}
            
            <Button>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      )}

    </header>    
  )
}

