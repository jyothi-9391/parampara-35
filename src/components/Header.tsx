import { Badge } from "@/components/ui/badge";
import { Bell, Settings, User } from "lucide-react";
import Navigation from "./Navigation";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">ParamparaSmriti AI</h1>
            <p className="text-muted-foreground">Preserving India's Cultural Heritage with AI</p>
          </div>
          
          <Navigation />
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              AI Processing Active
            </Badge>
            
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Settings className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <User className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};