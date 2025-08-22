import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon, Filter, BookOpen, Music, Image, MapPin, Calendar } from "lucide-react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contentType, setContentType] = useState("all");
  const [region, setRegion] = useState("all");
  const [timeperiod, setTimeperiod] = useState("all");

  const mockResults = [
    {
      id: 1,
      title: "Ramayana Palm Leaf Manuscript",
      type: "manuscript",
      region: "Tamil Nadu",
      period: "16th Century",
      description: "Ancient palm leaf manuscript containing verses from Ramayana in Tamil script. Features beautiful illustrations and well-preserved text.",
      confidence: 0.95,
      tags: ["Ramayana", "Tamil", "Palm Leaf", "Epic"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Carnatic Classical Composition",
      type: "audio",
      region: "Karnataka",
      period: "18th Century",
      description: "Traditional Carnatic raga composition by Thyagaraja. Recorded performance includes detailed raag exposition.",
      confidence: 0.87,
      tags: ["Carnatic", "Thyagaraja", "Classical", "Music"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Ajanta Cave Paintings Documentation",
      type: "image",
      region: "Maharashtra",
      period: "2nd Century BCE",
      description: "High-resolution documentation of Buddhist cave paintings showcasing ancient Indian art techniques and religious themes.",
      confidence: 0.92,
      tags: ["Buddhist", "Cave Art", "Ancient", "Paintings"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Vedic Chanting Recording",
      type: "audio",
      region: "Kerala",
      period: "Traditional",
      description: "Authentic Vedic chanting by traditional priests. Includes pronunciation guide and Sanskrit text.",
      confidence: 0.91,
      tags: ["Vedic", "Chanting", "Sanskrit", "Ritual"],
      thumbnail: "/placeholder.svg"
    }
  ];

  const [results, setResults] = useState(mockResults);

  const handleSearch = () => {
    // Mock search - filter results based on criteria
    let filteredResults = mockResults;

    if (contentType !== "all") {
      filteredResults = filteredResults.filter(item => item.type === contentType);
    }

    if (region !== "all") {
      filteredResults = filteredResults.filter(item => 
        item.region.toLowerCase().includes(region.toLowerCase())
      );
    }

    if (searchQuery.trim()) {
      filteredResults = filteredResults.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setResults(filteredResults);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "manuscript": return <BookOpen className="h-4 w-4" />;
      case "audio": return <Music className="h-4 w-4" />;
      case "image": return <Image className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "manuscript": return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "audio": return "bg-green-500/10 text-green-700 border-green-200";
      case "image": return "bg-purple-500/10 text-purple-700 border-purple-200";
      default: return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Semantic Search & Discovery</h1>
          <p className="text-muted-foreground">
            Explore India's cultural heritage through intelligent search
          </p>
        </div>

        {/* Search Interface */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Main Search */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search manuscripts, folk songs, artifacts..."
                    className="pl-10"
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch}>
                  Search
                </Button>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Content Type</label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="manuscript">Manuscripts</SelectItem>
                      <SelectItem value="audio">Audio Recordings</SelectItem>
                      <SelectItem value="image">Artifacts & Images</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Region</label>
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="tamil nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Time Period</label>
                  <Select value={timeperiod} onValueChange={setTimeperiod}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Periods</SelectItem>
                      <SelectItem value="ancient">Ancient (Before 500 CE)</SelectItem>
                      <SelectItem value="medieval">Medieval (500-1500 CE)</SelectItem>
                      <SelectItem value="early-modern">Early Modern (1500-1800 CE)</SelectItem>
                      <SelectItem value="modern">Modern (After 1800 CE)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Search Results ({results.length} found)
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {results.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Thumbnail */}
                  <div className="md:col-span-1">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      {getTypeIcon(item.type)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <Badge variant="outline" className={getTypeColor(item.type)}>
                        {getTypeIcon(item.type)}
                        <span className="ml-1 capitalize">{item.type}</span>
                      </Badge>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.region}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Confidence: {Math.round(item.confidence * 100)}%</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {results.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <SearchIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No Results Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find more content.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SearchPage;