import { useState } from "react"
import { cn } from "@/lib/utils"

// level = relative time and effort invested, not a self-assessed mastery score.
const skills = [
    // Languages
    { name: "JavaScript", level: 85, category: "languages" },
    { name: "SQL", level: 85, category: "languages" },
    { name: "C#", level: 85, category: "languages" },
    { name: "Python", level: 50, category: "languages" },
    { name: "C++", level: 50, category: "languages" },

    // Web
    { name: "HTML/CSS", level: 75, category: "web" },
    { name: "Bootstrap", level: 65, category: "web" },
    { name: "Material-UI", level: 50, category: "web" },
    { name: "Blazor", level: 55, category: "web" },
    { name: "MudBlazor", level: 60, category: "web" },
    { name: "React", level: 90, category: "web" },
    { name: "Next.js", level: 70, category: "web" },
    { name: "Node.js", level: 80, category: "web" },
    { name: "Tailwind CSS", level: 50, category: "web" },

    // AI / ML
    { name: "Pandas", level: 50, category: "ai" },
    { name: "NumPy", level: 55, category: "ai" },
    { name: "scikit-learn", level: 40, category: "ai" },
    { name: "Matplotlib", level: 35, category: "ai" },

    // Data & Cloud
    { name: "Entity Framework", level: 55, category: "data" },
    { name: "Microsoft Azure", level: 50, category: "data" },
    { name: "Power BI", level: 35, category: "data" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Figma", level: 55, category: "tools" },
    { name: "Vite", level: 50, category: "tools" },

]

// Derived from the data, so a new category appears only once a skill uses it.
const categories = ["all", ...new Set(skills.map((skill) => skill.category))]

const categoryLabels = {
    all: "All",
    languages: "Languages",
    web: "Web",
    ai: "AI / ML",
    data: "Data & Cloud",
    tools: "Tools",
}

export const SkillsSection = () =>
{
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills
        .filter((skill) => activeCategory === "all" || skill.category === activeCategory)
        .sort((a, b) => b.level - a.level)

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Bar length reflects the relative time and effort I've invested in each
                    technology.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    { categories.map((category) => (
                        <button
                            key={ category }
                            onClick={ () => setActiveCategory(category) }
                            className={ cn("px-5 py-2 rounded-full transition-colors duration-300",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            ) }
                        >
                            { categoryLabels[category] ?? category }
                        </button>
                    )) }
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    { filteredSkills.map((skill) => (
                        <div className="bg-card p-6 rounded-lg shadow-xs card-hover" key={ skill.name }>
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-xl">{ skill.name }</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={ { width: skill.level + "%" } } />
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}
