import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "This is the first project. This is the first project. This is the first project. This is the first project.",
        image: "/projects/meteorPortfolio.png",
        tags: ["React", "TailWind", "JavaScript"],
        demoUrl: "https://personal-portfolio-web-silk.vercel.app/",
        githubUrl: "https://github.com/LUCKYINGGG/PersonalPortfolioWeb"
    },
    {
        id: 2,
        title: "E-Bike Ecommerce Website",
        description: "This website perform servicing features for customers. It allows customers to book a service, select parts and make service orders. It not yet deployed, but you can check the source code on GitHub.",
        image: "/projects/Ebike.png",
        tags: ["C#", "Entity Framework", "Blazor", "MudBlazor", "SQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/LUCKYINGGG/E-Bike-Ecommerce"
    },
    {
        id: 3,
        title: "Simple Stactic Website",
        description: "A static demo showcasing responsive web design and related techniques. Primarily use CSS and Bootstrap to deliver a polished and user-friendly interface",
        image: "/projects/simpleWeb.png",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        demoUrl: "https://chimerical-twilight-229bfa.netlify.app/",
        githubUrl: "https://github.com/LUCKYINGGG/NAIT-1530-Web-Design-Fundamentals-II-assignments/tree/main/assignment-4"
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
                                <a href={ project.githubUrl } target="_blank" className="text-fore-ground/80 hover:text-primary duration-300">
                                    <Github size={ 20 } />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            )) }
        </div>

        <div className="tex-center mt-12">
            <a href="https://github.com/LUCKYINGGG" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check My GitHub <ArrowRight size={ 16 } />
            </a>

        </div>



    </section>

}