import { ExternalLink,Github, ArrowRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const projects = [
    {
        id:1,
        title: "Stickman-The Savior",
        description: "A 2D beat-’em-up browser game built with JavaScript and HTML5 Canvas, featuring responsive player controls, smooth sprite-based animations, and engaging gameplay focused on interactivity and performance optimization.",
        image: `${BASE}/projects/project1.png`,
        tags: ["JS", "HTML5 Canvas", "Animation"],
        demoURL: "https://joser27.github.io/TCSS491-GameProject/",
        githubURL: "https://github.com/joser27/TCSS491-GameProject",

    },

    {
        id: 2,
        title: "Library Website Front-End",
        description: "A full-stack web app developed with React and Next.js that enables users to view, search, create, and edit books through RESTful API integration and intuitive UI design.",
        image: `${BASE}/projects/project2.png`,
        tags: ["React", "Next.js", "REST API"],
        demoURL: "#",
        githubURL: "https://github.com/hawkeyegoat/TCSS460-group2-frontend"
    },

    {
        id: 3,
        title: "Indie Arcade",
        description: "A scalable backend system built with Node.js, Express, and SQL to support secure user accounts, game discovery, and purchase functionality with reliable API routing and data integrity.",
        image: `${BASE}/projects/project3.png`,
        tags: ["Node.js", "Express", "SQL"],
        demoURL: "#",
        githubURL: "https://github.com/joser27/445-backend.git"
    }
]

const hasLink = (url) => url && url !== "#" && url.trim() !== "";

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted with attention to detail, 
                performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-1">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                                <div className="mt-auto flex items-center space-x-3">
                                    {hasLink(project.demoURL) && (
                                        <a  
                                            href={project.demoURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {hasLink(project.githubURL) && (
                                        <a  
                                            href={project.githubURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                    href="https://github.com/csbrar25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                >
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>

    </section>
    );
}