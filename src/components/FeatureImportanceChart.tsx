import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Progress } from "@/components/ui/progress";

interface FeatureData {
  feature: string;
  impact: number;
  direction: "positive" | "negative";
  description: string;
}

const featuresData: FeatureData[] = [
  { feature: "Payment History", impact: 85, direction: "positive", description: "Consistent on-time payments" },
  { feature: "Credit Utilization", impact: 72, direction: "negative", description: "Above recommended 30%" },
  { feature: "Credit Age", impact: 68, direction: "positive", description: "Long credit history" },
  { feature: "Credit Mix", impact: 45, direction: "positive", description: "Diverse credit types" },
  { feature: "New Inquiries", impact: 35, direction: "negative", description: "Recent credit applications" },
];

export const FeatureImportanceChart = () => {
  return (
    <Card className="p-6 bg-gradient-card border-border shadow-elevated">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Feature Importance</h3>
        <p className="text-sm text-muted-foreground">What's affecting your credit score</p>
      </div>
      
      <div className="space-y-4">
        {featuresData.map((feature, index) => (
          <div key={feature.feature} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{feature.feature}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  feature.direction === "positive" 
                    ? "bg-success/20 text-success" 
                    : "bg-destructive/20 text-destructive"
                }`}>
                  {feature.direction === "positive" ? "+" : "-"}{feature.impact}%
                </span>
              </div>
            </div>
            <Progress 
              value={feature.impact} 
              className={`h-2 ${
                feature.direction === "positive" 
                  ? "[&>div]:bg-success" 
                  : "[&>div]:bg-destructive"
              }`}
            />
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};