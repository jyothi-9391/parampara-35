import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Calendar, CreditCard } from "lucide-react";

interface RiskFactor {
  type: "critical" | "warning" | "info";
  title: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
}

const riskFactors: RiskFactor[] = [
  {
    type: "warning",
    title: "High Credit Utilization",
    description: "Currently using 68% of available credit",
    impact: "-15 points",
    icon: <CreditCard className="h-4 w-4" />
  },
  {
    type: "critical",
    title: "Recent Market Volatility",
    description: "Economic indicators suggest increased lending risk",
    impact: "-8 points",
    icon: <AlertTriangle className="h-4 w-4" />
  },
  {
    type: "info",
    title: "Seasonal Trends",
    description: "Q3 typically shows improved payment patterns",
    impact: "+5 points",
    icon: <Calendar className="h-4 w-4" />
  },
  {
    type: "info",
    title: "Industry Performance",
    description: "Technology sector employment remains stable",
    impact: "+3 points",
    icon: <TrendingUp className="h-4 w-4" />
  }
];

export const RiskFactorsCard = () => {
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "critical": return "destructive";
      case "warning": return "secondary";
      case "info": return "default";
      default: return "default";
    }
  };

  const getImpactColor = (impact: string) => {
    return impact.startsWith("+") ? "text-success" : "text-destructive";
  };

  return (
    <Card className="p-6 bg-gradient-card border-border shadow-elevated">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Risk Factors</h3>
        <p className="text-sm text-muted-foreground">Current factors influencing your score</p>
      </div>
      
      <div className="space-y-4">
        {riskFactors.map((factor, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
            <div className={`p-2 rounded-full ${
              factor.type === "critical" ? "bg-destructive/20 text-destructive" :
              factor.type === "warning" ? "bg-warning/20 text-warning" :
              "bg-primary/20 text-primary"
            }`}>
              {factor.icon}
            </div>
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-medium text-foreground">{factor.title}</h4>
                <Badge variant={getBadgeVariant(factor.type)} className="text-xs">
                  {factor.type}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{factor.description}</p>
            </div>
            
            <div className={`text-sm font-medium ${getImpactColor(factor.impact)}`}>
              {factor.impact}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};