import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from "react";

import { FaLinkedin } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () =>
{
    const { toast } = useToast();

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (event) =>
    {
        event.preventDefault();
        setIsSubmitting(true);

        setTimeout(() =>
        {
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out! I'll get back to you as soon as possible.",
            })
            setIsSubmitting(false);
        }, 1500)


    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>


                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 flex flex-col justify-between">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-8 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="grid justify-items-start">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:yingtao54321@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        yingtao54321@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="grid justify-items-start">
                                    <h4 className="font-medium items-start">Phone</h4>
                                    <a href="tel:+14259798974" className="text-muted-foreground hover:text-primary transition-colors">
                                        +(1) 425-979-8974
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="grid justify-items-start">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Edmonton, Alberta, Canada
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="py-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/ying-t-47230a25b/">
                                    <FaLinkedin fontSize={ 50 } className="text-primary" target="_blank" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={ handleSubmit } >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="John Smith ..." ></input>
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="example@gmail.com" ></input>
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea

                                    id="message"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-textarea bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hi, I'd like to talk about ..." ></textarea>
                            </div>

                            <button type="submit"
                                className={ cn("cosmic-button w-full flex items-center justify-center gap-2") }
                                disabled={ isSubmitting }
                            >
                                { isSubmitting ? "Sending ... " : "Send Message" }
                                <Send size={ 16 } />
                            </button>
                        </form>
                    </div>

                </div>

            </div>

        </section>
    )

}