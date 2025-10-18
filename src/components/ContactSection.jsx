import { Mail, Phone, MapPin, Send, LucideLinkedin } from "lucide-react";
import {cn }  from "@/lib/utils";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {

        }, 1500)
    }
    return (
        <section 
            id="contact"
            className="py-24 px-24 relative bg-secondary"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-semibold mb-10"> Contact Information </h3>
                        <div className="space-y-10 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg"> Email</h4>
                                    <a 
                                        href="mailto: csbrar25@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        csbrar25@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg"> Phone</h4>
                                    <a 
                                        href="tel:+12065883265"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1(206)-588-3265
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg"> Location </h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Seattle, Washington
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <LucideLinkedin className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg"> Linkedin </h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        href="http://www.linkedin.com/in/charankamal-brar-b032782b0"
                                        target="_blank"
                                    >
                                        My Linkedin Link
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Charankamal Brar"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="csbrar25@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea
                
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hi, I'd like to talk about..."
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",

                                )}
                            >
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}