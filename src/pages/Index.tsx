import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Music, 
  Image, 
  Languages, 
  Search, 
  Wand2,
  Upload,
  TrendingUp,
  Users,
  Database
} from "lucide-react";

const Index = () => {
  const stats = [
    { label: "Manuscripts Processed", value: "1,247", icon: BookOpen, change: "+12%" },
    { label: "Audio Recordings", value: "589", icon: Music, change: "+8%" },
    { label: "Artifacts Catalogued", value: "2,156", icon: Image, change: "+15%" },
    { label: "Languages Supported", value: "8", icon: Languages, change: "New: Bengali" },
  ];

  const recentActivity = [
    { action: "OCR processed Tamil manuscript", time: "5 minutes ago", type: "manuscript" },
    { action: "Audio transcription completed", time: "12 minutes ago", type: "audio" },
    { action: "Translation: Sanskrit to English", time: "18 minutes ago", type: "translation" },
    { action: "AI restoration of damaged text", time: "25 minutes ago", type: "restoration" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to ParamparaSmriti AI</h2>
          <p className="text-muted-foreground text-lg">
            Preserving, digitizing, and reviving India's rich cultural heritage through advanced AI technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <Badge variant="secondary" className="text-xs mt-2">
                      {stat.change}
                    </Badge>
                  </div>
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">Upload Content</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                    <Wand2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">AI Restoration</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                    <Languages className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">Translate</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
                    <Search className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">Search</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processing Status */}
            <Card>
              <CardHeader>
                <CardTitle>AI Processing Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>OCR Processing Queue</span>
                    <span>3 of 7 complete</span>
                  </div>
                  <Progress value={43} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Translation Tasks</span>
                    <span>5 of 6 complete</span>
                  </div>
                  <Progress value={83} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Audio Transcription</span>
                    <span>2 of 4 complete</span>
                  </div>
                  <Progress value={50} />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    <span className="text-sm">Database</span>
                  </div>
                  <Badge className="bg-success text-success-foreground">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">AI Models</span>
                  </div>
                  <Badge className="bg-success text-success-foreground">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">API Status</span>
                  </div>
                  <Badge className="bg-success text-success-foreground">Healthy</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
