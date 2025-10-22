import {Moon, Sun} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };
    return (
        <button onClick={toggleTheme} 
        className={cn("fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "cursor-pointer hover:bg-primary/10 hover:scale-110 focus:outline-hidden"
        )}>
            {""}
            {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300 transition-transform duration-500 rotate-180" /> 
            ): (
            <Moon className="h-6 w-6 text-blue-900 transition-transform duration-500 rotate-180" /> 
            )}</button>
    );
}