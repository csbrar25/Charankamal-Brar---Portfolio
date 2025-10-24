import { LucideArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in "> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Charankamal</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Brar</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        A Computer Science graduate from the University of Washington Tacoma, specializing in software engineering 
                        and machine learning.
                        I build scalable, user-focused applications using React, Next.js, Tailwind, Node.js, and PostgreSQL, and 
                        leverage Python, Java, and PyTorch to explore data-driven systems and intelligent automation.
                        With hands-on experience across front-end, back-end, and AI projects - from full-stack web platforms to 
                        model evaluation for Outlier AI. I’m driven by a passion for creating reliable, efficient, and impactful technology.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <LucideArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}