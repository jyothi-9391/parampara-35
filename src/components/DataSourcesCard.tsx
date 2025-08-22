import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, TrendingUp, FileText, Globe } from "lucide-react";

interface DataSource {
  name: string;
  type: "structured" | "unstructured";
  status: "active" | "warning" | "error";
  lastSync: string;
  icon: React.ReactNode;
}

const dataSources: DataSource[] = [
  {
    name: "Financial APIs",
    type: "structured",
    status: "active",
    lastSync: "2 min ago",
    icon: <Database className="h-4 w-4" />
  },
  {
    name: "Market Data",
    type: "structured", 
    status: "active",
    lastSync: "5 min ago",
    icon: <TrendingUp className="h-4 w-4" />
  },
  {
    name: "News Sentiment",
    type: "unstructured",
    status: "warning",
    lastSync: "15 min ago",
    icon: <FileText className="h-4 w-4" />
  },
  {
    name: "Social Media",
    type: "unstructured",
    status: "active",
    lastSync: "8 min ago", 
    icon: <Globe className="h-4 w-4" />
  }
];

export const DataSourcesCard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success/20 text-success border-success/30";
      case "warning": return "bg-warning/20 text-warning border-warning/30";
      case "error": return "bg-destructive/20 text-destructive border-destructive/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 bg-gradient-card border-border shadow-elevated">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Data Sources</h3>
        <p className="text-sm text-muted-foreground">Real-time data pipeline status</p>
      </div>
      
      <div className="space-y-3">
        {dataSources.map((source, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 text-primary rounded-lg">
                {source.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">{source.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {source.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Last sync: {source.lastSync}</p>
              </div>
            </div>
            
            <div className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(source.status)}`}>
              {source.status}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};