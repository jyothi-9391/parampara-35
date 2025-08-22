import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Wand2, Download, Share, Eye } from "lucide-react";

const RestorationPage = () => {
  const [isRestoring, setIsRestoring] = useState(false);
  const [restorationProgress, setRestorationProgress] = useState(0);

  const mockOriginalText = `श्री गणेशाय नमः।
[damaged text] राजा महाराजाधिराज श्री...
[illegible section - 3 lines]
...सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।
[water damage - partial text visible]
इति समाप्तम्।`;

  const mockRestoredText = `श्री गणेशाय नमः।
अस्य ग्रन्थस्य प्रारम्भे राजा महाराजाधिराज श्री चन्द्रगुप्तस्य वंशावली प्रस्तूयते।
तत्र लिखितम् यत् राज्ये शान्तिः आसीत् प्रजाः सुखिनः आसन्।
धर्मेण राज्यं चालितम् न्यायेन प्रजा पालिता।
सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।
अतः सर्वे जनाः धर्ममार्गे स्थित्वा राष्ट्रस्य कल्याणं कुर्वन्तु।
इति समाप्तम्।`;

  const handleRestore = () => {
    setIsRestoring(true);
    setRestorationProgress(0);

    const interval = setInterval(() => {
      setRestorationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRestoring(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">AI Text Restoration</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Eye className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">OCR Accuracy</h3>
              <div className="text-2xl font-bold text-success">94.2%</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Wand2 className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">AI Confidence</h3>
              <div className="text-2xl font-bold text-warning">87.5%</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-8 w-8 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                सं
              </div>
              <h3 className="font-semibold mb-2">Script</h3>
              <div className="text-lg font-medium">Devanagari</div>
            </CardContent>
          </Card>
        </div>

        {isRestoring && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">AI Restoration in Progress</h3>
                  <Badge variant="secondary">{restorationProgress}%</Badge>
                </div>
                <Progress value={restorationProgress} className="w-full" />
                <p className="text-sm text-muted-foreground">
                  Analyzing damaged sections and reconstructing missing text using historical context...
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Manuscript Analysis</CardTitle>
              <Button onClick={handleRestore} disabled={isRestoring}>
                <Wand2 className="h-4 w-4 mr-2" />
                {isRestoring ? 'Restoring...' : 'Enhance with AI'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="comparison" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="original">Original OCR</TabsTrigger>
                <TabsTrigger value="comparison">Side-by-Side</TabsTrigger>
                <TabsTrigger value="restored">AI Restored</TabsTrigger>
              </TabsList>

              <TabsContent value="original" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Original OCR Output</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-sm leading-relaxed bg-muted p-4 rounded-lg">
                      {mockOriginalText.split('\n').map((line, index) => (
                        <div key={index} className="mb-2">
                          {line.includes('[damaged') || line.includes('[illegible') || line.includes('[water') ? (
                            <span className="bg-destructive/20 text-destructive px-2 py-1 rounded">
                              {line}
                            </span>
                          ) : (
                            line
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comparison" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Original OCR</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-mono text-sm leading-relaxed bg-muted p-4 rounded-lg h-96 overflow-y-auto">
                        {mockOriginalText.split('\n').map((line, index) => (
                          <div key={index} className="mb-2">
                            {line.includes('[damaged') || line.includes('[illegible') || line.includes('[water') ? (
                              <span className="bg-destructive/20 text-destructive px-2 py-1 rounded">
                                {line}
                              </span>
                            ) : (
                              line
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">AI Restored</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-mono text-sm leading-relaxed bg-muted p-4 rounded-lg h-96 overflow-y-auto">
                        {mockRestoredText.split('\n').map((line, index) => (
                          <div key={index} className="mb-2">
                            {index === 1 || index === 2 || index === 3 || index === 5 ? (
                              <span className="bg-success/20 text-success px-2 py-1 rounded">
                                {line}
                              </span>
                            ) : (
                              line
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="restored" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">AI Enhanced Text</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-sm leading-relaxed bg-muted p-4 rounded-lg">
                      {mockRestoredText.split('\n').map((line, index) => (
                        <div key={index} className="mb-2">
                          {index === 1 || index === 2 || index === 3 || index === 5 ? (
                            <span className="bg-success/20 text-success px-2 py-1 rounded">
                              {line}
                            </span>
                          ) : (
                            line
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-accent/50 rounded-lg">
                      <h4 className="font-semibold mb-2">AI Restoration Notes:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Reconstructed royal lineage based on historical context</li>
                        <li>• Filled missing sections using common Sanskrit manuscript patterns</li>
                        <li>• Maintained original meter and style</li>
                        <li>• High confidence in restored philosophical verse</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RestorationPage;