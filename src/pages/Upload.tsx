import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, AudioLines, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadType, setUploadType] = useState<'manuscript' | 'audio' | 'image'>('manuscript');
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive"
      });
      return;
    }

    // Mock API call - replace with actual backend integration
    toast({
      title: "Upload Started",
      description: `Processing ${selectedFile.name} for ${uploadType} analysis...`
    });

    // Simulate processing
    setTimeout(() => {
      toast({
        title: "Upload Complete",
        description: "File processed successfully!"
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Upload Cultural Heritage Content</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card 
            className={`cursor-pointer transition-all hover:shadow-lg ${uploadType === 'manuscript' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setUploadType('manuscript')}
          >
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold">Manuscripts</h3>
              <p className="text-sm text-muted-foreground">Upload ancient texts, palm leaves, or historical documents</p>
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all hover:shadow-lg ${uploadType === 'audio' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setUploadType('audio')}
          >
            <CardContent className="p-6 text-center">
              <AudioLines className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold">Folk Songs</h3>
              <p className="text-sm text-muted-foreground">Upload audio recordings of traditional songs and stories</p>
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all hover:shadow-lg ${uploadType === 'image' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setUploadType('image')}
          >
            <CardContent className="p-6 text-center">
              <Image className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold">Artifacts</h3>
              <p className="text-sm text-muted-foreground">Upload images of sculptures, paintings, or inscriptions</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload {uploadType.charAt(0).toUpperCase() + uploadType.slice(1)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <div className="space-y-2">
                <p className="text-lg font-medium">Drop your file here or click to browse</p>
                <p className="text-sm text-muted-foreground">
                  {uploadType === 'manuscript' && 'Supports: PDF, JPG, PNG (Ancient scripts: Devanagari, Tamil, Telugu, Bengali)'}
                  {uploadType === 'audio' && 'Supports: MP3, WAV, M4A (Traditional folk songs and oral histories)'}
                  {uploadType === 'image' && 'Supports: JPG, PNG, TIFF (Artifacts, sculptures, paintings)'}
                </p>
              </div>
              <input
                type="file"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept={
                  uploadType === 'manuscript' ? '.pdf,.jpg,.jpeg,.png' :
                  uploadType === 'audio' ? '.mp3,.wav,.m4a' :
                  '.jpg,.jpeg,.png,.tiff'
                }
              />
            </div>

            {selectedFile && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">Selected file: {selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            )}

            <Button onClick={handleSubmit} className="w-full" disabled={!selectedFile}>
              Process with AI
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadPage;