import { ArrowUp } from "lucide-react"



export const Footer = () =>
{
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">

            <p className="text-sm text-muted-foreground mb-4">
                &copy; { new Date().getFullYear() }This is a personal portfolio website created by Ying Tao. All rights reserved.

            </p>

            <a href="#hero" className="flex flex-wrap jusfity-between">
                <ArrowUp className="p-2 rounded-ful bg-primary/10 hover:bg-primary/20 text-primary text-primary transition-colors mr-3" size={ 30 } />
                Back to Top
            </a>
        </footer>)
}