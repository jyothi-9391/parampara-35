import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  Upload, 
  Wand2, 
  Languages, 
  Search, 
  BookOpen, 
  Trophy,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { to: "/", label: "Dashboard", icon: Home },
    { to: "/upload", label: "Upload", icon: Upload },
    { to: "/restoration", label: "AI Restoration", icon: Wand2 },
    { to: "/translation", label: "Translation", icon: Languages },
    { to: "/search", label: "Search", icon: Search },
    { to: "/storytelling", label: "Stories", icon: BookOpen },
    { to: "/gamification", label: "Achievements", icon: Trophy },
  ];

  const NavItem = ({ item, mobile = false, onClick }: { 
    item: typeof navigationItems[0], 
    mobile?: boolean,
    onClick?: () => void 
  }) => (
    <NavLink
      to={item.to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
          mobile ? "text-base" : "text-sm"
        )
      }
    >
      <item.icon className={cn("h-5 w-5", mobile && "h-6 w-6")} />
      <span>{item.label}</span>
    </NavLink>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-2">
        {navigationItems.map((item) => (
          <NavItem key={item.to} item={item} />
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <div className="mt-8 space-y-2">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">ParamparaSmriti AI</h2>
              <p className="text-sm text-muted-foreground">
                Preserving India's Cultural Heritage
              </p>
            </div>
            
            {navigationItems.map((item) => (
              <NavItem 
                key={item.to} 
                item={item} 
                mobile 
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navigation;