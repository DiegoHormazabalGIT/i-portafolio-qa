import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {[
            { id: "experience", label: "Experiencia" }, // ID en inglés minúscula, Label en español capitalizado
            { id: "skills", label: "Habilidades" },
            { id: "projects", label: "Proyectos" },
            { id: "education", label: "Educación" },
          ].map((section, index) => (
            // <--- ¡Y LA VARIABLE 'item' A 'section'!
            <motion.a
              key={section.id} // Usamos el ID como clave
              href={`#${section.id}`} // <--- Apunta directamente al ID (en inglés minúscula)
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {section.id === "experience" && "💼 "}
              {section.id === "skills" && "🛠️ "}
              {section.id === "projects" && "🚀 "}
              {section.id === "education" && "🎓 "}
              {section.label} {/* <--- Muestra el texto legible en español */}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 px-4 border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/80 dark:bg-background/40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {["Experiencia", "skills", "projects", "awards", "education"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item === "Experiencia" && "💼 "}
                    {item === "skills" && "🛠️ "}
                    {item === "projects" && "🚀 "}
                    {item === "awards" && "🏆 "}
                    {item === "education" && "🎓 "}
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}