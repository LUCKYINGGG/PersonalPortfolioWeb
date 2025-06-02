import { Star } from "lucide-react";
import { useEffect, useState } from "react";

// id, size, x, y, speed, opacity, animationDUration

export const StarBackground = () =>
{
    const [stars, setStars] = useState([]);

    useEffect(() =>
    {
        generateStars();
    }, [])

    const generateStars = () =>
    {
        // Calculate the number of stars based on the window size
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++)
        {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 4 px
                x: Math.random() * 100, // position of the star
                y: Math.random() * 100,

                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Duration between 2 and 6 seconds
            });
        }
        setStars(newStars);

    }


    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        { stars.map((star) => (
            <div key={ star.id } className="star animate-pulse-subtle" style={ {
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            } } />
        )) }
    </div>


}  