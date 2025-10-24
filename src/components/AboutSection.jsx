import { Code, BrainCircuit, Server  } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>

                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Driven Software Engineer & AI Enthusiast </h3>

                        <p className="text-muted-foreground">
                            I’m a Computer Science graduate from the University of Washington Tacoma, passionate about crafting scalable, 
                            high-quality applications that bridge functionality and creativity. 
                            I enjoy solving complex problems and transforming ideas into polished, impactful digital experiences.
                        </p>

                        <p className="text-muted-foreground">
                            Through hands-on experience in full-stack development, machine learning, and data-driven systems, 
                            I’ve built projects using React, Next.js, Node.js, PostgreSQL, and Python, and contributed to AI model 
                            optimization at Outlier AI. Working with diverse teams has strengthened my collaboration, adaptability, 
                            and project-management skills across both technical and creative workflows.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href={`${import.meta.env.BASE_URL}Resume/CharankamalBrarCSResume.pdf`}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground">
                                        Building responsive, high-performance websites and web applications using React, Next.js, and Tailwind CSS. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <Server className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Backend & Databases </h4>
                                    <p className="text-muted-foreground">
                                        Developing scalable APIs and managing structured data with Node.js, Express, and PostgreSQL.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <BrainCircuit className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> AI & Data Science </h4>
                                    <p className="text-muted-foreground">
                                        Exploring machine learning and data analysis through Python, PyTorch, and R to drive intelligent automation. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}