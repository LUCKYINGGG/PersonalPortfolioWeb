import { BookOpen, Briefcase, Code, Library, User } from "lucide-react"


export const AboutSection = () =>
{
    return (
        <section id="#about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Developer & Problem Solver</h3>
                        <p className="text-muted-foreground">
                            I thrive on solving real-world problems with thoughtful, user-centered software.
                            Whether I’m writing backend logic in C# or designing responsive UIs in React and Blazor,
                            I bring curiosity, creativity, and a relentless drive to learn.
                            Every challenge is an opportunity to grow — and I’m here to build tools that make life better,
                            smarter, and more efficient.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="https://www.linkedin.com/in/ying-t-47230a25b/" className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300">
                                LinkedIn
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
                                    <h4 className="font-semibold text-lg">Front-End Development</h4>
                                    <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Back-End Development</h4>
                                    <p className="text-muted-foreground">Crafting responsive and accessible user interfaces using modern frameworks like React and Blazor to deliver seamless web experiences.</p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BookOpen className="h-6 w-6 text-primary" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Lifelong Learner</h4>
                                    <p className="text-muted-foreground">Always evolving—driven by curiosity and a passion for continuous learning. Constantly exploring new tools, patterns, and practices to grow as a developer.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}