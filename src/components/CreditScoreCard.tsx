import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface CreditScoreCardProps {
  score: number;
  change: number;
  lastUpdated: string;
  riskLevel: "low" | "medium" | "high";
}

export const CreditScoreCard = ({ score, change, lastUpdated, riskLevel }: CreditScoreCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 750) return "text-success";
    if (score >= 650) return "text-warning";
    return "text-destructive";
  };

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "low": return "default";
      case "medium": return "secondary";
      case "high": return "destructive";
      default: return "default";
    }
  };

  const getTrendIcon = () => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-success" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-destructive" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <Card className="p-6 bg-gradient-card border-border shadow-elevated">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Credit Score</h3>
        <Badge variant={getRiskBadgeVariant(riskLevel)} className="capitalize">
          {riskLevel} Risk
        </Badge>
      </div>
      
      <div className="space-y-4">
        <div className="text-center">
          <div className={`text-6xl font-bold ${getScoreColor(score)} mb-2`}>
            {score}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            {getTrendIcon()}
            <span className={change > 0 ? "text-success" : change < 0 ? "text-destructive" : "text-muted-foreground"}>
              {change > 0 ? "+" : ""}{change} points
            </span>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </div>
        
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              score >= 750 ? "bg-success" : score >= 650 ? "bg-warning" : "bg-destructive"
            }`}
            style={{ width: `${(score / 850) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>300</span>
          <span>850</span>
        </div>
      </div>
    </Card>
  );
};