import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      <Link 
        to="/" 
        className={cn(
          "text-sm font-medium transition-colors hover:text-accent",
          isActive("/") ? "text-accent" : "text-muted-foreground"
        )}
      >
        Главная
      </Link>
      <Link 
        to="/gallery" 
        className={cn(
          "text-sm font-medium transition-colors hover:text-accent",
          isActive("/gallery") ? "text-accent" : "text-muted-foreground"
        )}
      >
        Галерея
      </Link>
    </nav>
  );
};