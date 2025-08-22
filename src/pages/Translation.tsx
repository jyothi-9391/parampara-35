import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Languages, ArrowLeftRight, Volume2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TranslationPage = () => {
  const [sourceText, setSourceText] = useState(
    `सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।
येनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत् सत्यस्य परमं निधानम्॥`
  );
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("sanskrit");
  const [targetLang, setTargetLang] = useState("english");
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const languages = [
    { code: "sanskrit", name: "Sanskrit", native: "संस्कृतम्" },
    { code: "hindi", name: "Hindi", native: "हिन्दी" },
    { code: "tamil", name: "Tamil", native: "தமிழ்" },
    { code: "telugu", name: "Telugu", native: "తెలుగు" },
    { code: "kannada", name: "Kannada", native: "ಕನ್ನಡ" },
    { code: "bengali", name: "Bengali", native: "বাংলা" },
    { code: "english", name: "English", native: "English" }
  ];

  const mockTranslations = {
    "sanskrit-english": `Truth alone triumphs, not falsehood. Through truth, the divine path is spread out by which the sages, whose desires have been completely fulfilled, travel where that supreme treasure of truth is.`,
    "sanskrit-hindi": `सत्य ही विजयी होता है, असत्य नहीं। सत्य के द्वारा देवयान मार्ग फैलाया गया है, जिससे होकर आप्तकाम ऋषि उस स्थान पर जाते हैं जहाँ सत्य का परम खजाना है।`,
    "sanskrit-tamil": `சத்தியமே வெற்றி பெறும், பொய்யல்ல. சத்தியத்தின் மூலம் தேவயான பாதை விரிக்கப்பட்டுள்ளது, அதன் மூலம் தங்கள் விருப்பங்கள் நிறைவேறிய ரிஷிகள் சத்தியத்தின் உயர்ந்த பொக்கிஷம் உள்ள இடத்திற்குச் செல்கின்றனர்.`
  };

  const handleTranslate = async () => {
    setIsTranslating(true);
    
    // Simulate API call
    setTimeout(() => {
      const key = `${sourceLang}-${targetLang}`;
      const translation = mockTranslations[key as keyof typeof mockTranslations] || 
        "Translation would be processed by the AI translation engine.";
      
      setTranslatedText(translation);
      setIsTranslating(false);
      
      toast({
        title: "Translation Complete",
        description: `Translated from ${languages.find(l => l.code === sourceLang)?.name} to ${languages.find(l => l.code === targetLang)?.name}`
      });
    }, 2000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Text has been copied successfully"
    });
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  const handleTTS = (text: string, lang: string) => {
    // Mock TTS functionality
    toast({
      title: "Playing Audio",
      description: `Speaking in ${languages.find(l => l.code === lang)?.name}`
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Multilingual Translation</h1>
          <p className="text-muted-foreground">
            Preserve and share India's cultural heritage across languages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Source Text */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Source Text
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleTTS(sourceText, sourceLang)}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(sourceText)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Select value={sourceLang} onValueChange={setSourceLang}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center gap-2">
                        <span>{lang.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {lang.native}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <Textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Enter text to translate..."
                className="min-h-[300px] text-lg leading-relaxed"
              />
            </CardContent>
          </Card>

          {/* Translation Controls */}
          <div className="lg:hidden flex justify-center py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSwapLanguages}
              className="flex items-center gap-2"
            >
              <ArrowLeftRight className="h-4 w-4" />
              Swap
            </Button>
          </div>

          {/* Target Text */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Translation
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleTTS(translatedText, targetLang)}
                    disabled={!translatedText}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(translatedText)}
                    disabled={!translatedText}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Select value={targetLang} onValueChange={setTargetLang}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center gap-2">
                        <span>{lang.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {lang.native}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <Textarea
                value={translatedText}
                readOnly
                placeholder="Translation will appear here..."
                className="min-h-[300px] text-lg leading-relaxed bg-muted"
              />
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={handleSwapLanguages}
            className="hidden lg:flex items-center gap-2"
          >
            <ArrowLeftRight className="h-4 w-4" />
            Swap Languages
          </Button>
          
          <Button
            onClick={handleTranslate}
            disabled={isTranslating || !sourceText.trim()}
            className="px-8"
          >
            {isTranslating ? "Translating..." : "Translate"}
          </Button>
        </div>

        {/* Translation History */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Translations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { from: "Sanskrit", to: "English", text: "श्लोक translation completed", time: "2 minutes ago" },
                { from: "Tamil", to: "Hindi", text: "Ancient poetry translation", time: "15 minutes ago" },
                { from: "Telugu", to: "English", text: "Historical manuscript", time: "1 hour ago" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{item.from} → {item.to}</Badge>
                    <span className="text-sm">{item.text}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TranslationPage;