import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "This is the first project.",
        image: "/projects/picture1.jpg",
        tags: ["React", "TailWind", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is the second project.",
        image: "/projects/picture2.jpg",
        tags: ["C#", "Bootstrap", "SQL", "MudBlazor"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is the third project.",
        image: "/projects/picture3.jpg",
        tags: ["Python", "Django", "Flask", "SQLite"],
        demoUrl: "#",
        githubUrl: "#"
    }
]

export const ProjectsSection = () =>
{

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity. Click on the links to view the live demos or the source code on GitHub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { projects.map((project, key) => (
                <div key={ key } className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                    <div className="h-48 overflow-hidden">
                        <img src={ project.image } alt={ project.title } className="w-full h-full object-cover transition-transform duration-500 group-hover:110 group-hover:scale-110" />

                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                            { project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground" >
                                    { tag }
                                </span>
                            )) }
                        </div>


                        <h3 className="text-xl font-semibold mb-2">{ project.title }</h3>
                        <p className="text-muted-foreground text-sm mb-4">{ project.description }</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={ project.demoUrl } target="_blank" className="text-fore-ground/80 hover:text-primary duration-300">
                                    <ExternalLink size={ 20 } />
                                </a>
                                <a href={ project.demoUrl } target="_blank" className="text-fore-ground/80 hover:text-primary duration-300">
                                    <Github size={ 20 } />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            )) }

        </div>



    </section>

}