import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

interface ScoreTrendData {
  date: string;
  score: number;
  event?: string;
}

const mockData: ScoreTrendData[] = [
  { date: "Jan", score: 720 },
  { date: "Feb", score: 725, event: "Payment made on time" },
  { date: "Mar", score: 710, event: "High credit utilization" },
  { date: "Apr", score: 730 },
  { date: "May", score: 745, event: "Credit limit increased" },
  { date: "Jun", score: 755 },
  { date: "Jul", score: 742, event: "New credit inquiry" },
];

export const ScoreTrendChart = () => {
  return (
    <Card className="p-6 bg-gradient-card border-border shadow-elevated">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Score Trend (6 Months)</h3>
        <p className="text-sm text-muted-foreground">Track your credit score changes over time</p>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              domain={[680, 780]}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--foreground))"
              }}
              formatter={(value: number, name: string) => [value, "Score"]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};