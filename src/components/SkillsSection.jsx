import { useState } from "react";
import { cn } from "@/lib/utils"

const skills = [
  // ===== Frontend =====
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "UI/UX Design", level: 80, category: "frontend" },
  { name: "Responsive Design", level: 90, category: "frontend" },

  // ===== Backend =====
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "REST API", level: 85, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "SQLite", level: 65, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // ===== Programming Languages =====
  { name: "Java", level: 85, category: "language" },
  { name: "Python", level: 85, category: "language" },
  { name: "C", level: 75, category: "language" },
  { name: "R", level: 65, category: "language" },
  { name: "Erlang", level: 50, category: "language" },

  // ===== Tools =====
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "IntelliJ IDEA", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Jupyter Notebook", level: 90, category: "tools" },
  { name: "Anaconda", level: 85, category: "tools" },
  { name: "Linux", level: 80, category: "tools" },

  // ===== Frameworks / Libraries =====
  { name: "PyTorch", level: 70, category: "framework" },
  { name: "Unity", level: 75, category: "framework" },

  // ===== Concepts =====
  { name: "Object-Oriented Design (OOD)", level: 90, category: "concepts" },
  { name: "Design Patterns", level: 85, category: "concepts" },
  { name: "Software Engineering", level: 90, category: "concepts" },
  { name: "Web Development", level: 90, category: "concepts" },
  { name: "Game Development", level: 80, category: "concepts" },
  { name: "Machine Learning / AI", level: 75, category: "concepts" },
  { name: "UML Modeling", level: 80, category: "concepts" },
  { name: "Unit Testing", level: 75, category: "concepts" },
];

const categories = ["all", "frontend", "backend", "tools", "language", "framework", "concepts"];

export const SkillsSection = () => {

    const [activeCatrgory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCatrgory === "all" || skill.category ===activeCatrgory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>
                <div className="felx felx-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)} 
                            className={cn("px-4 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCatrgory === category 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className=" w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground"> {skill.level}% </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}