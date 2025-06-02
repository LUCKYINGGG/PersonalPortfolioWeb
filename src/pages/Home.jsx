import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export const Home = () =>
{
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      Home Page
      {/* Theme Toggle */ }
      <ThemeToggle />
      {/* Background Effects */ }
      <StarBackground />
      {/* Navbar */ }
      {/* Main Content */ }
      {/* Footer */ }
    </div>
  );
};
