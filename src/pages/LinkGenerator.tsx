import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Check } from "lucide-react";

const LinkGenerator = () => {
  const [names, setNames] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [generatedLinks, setGeneratedLinks] = useState<{ name: string; url: string }[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Set default base URL to current window location
    setBaseUrl(window.location.origin);
  }, []);

  const handleGenerate = () => {
    const nameList = names
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    const links = nameList.map((name) => {
      // Encode the name for URL safety
      const encodedName = encodeURIComponent(name);
      return {
        name,
        url: `${baseUrl}/?to=${encodedName}`,
      };
    });

    setGeneratedLinks(links);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-2">Invitation Link Generator</h1>
          <p className="text-muted-foreground">
            Generate unique invitation links for your guests.
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="baseUrl">Base URL</Label>
            <Input
              id="baseUrl"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="https://your-wedding-site.com"
            />
            <p className="text-xs text-muted-foreground">
              This is the address of your wedding website.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="names">Guest Names (one per line)</Label>
            <Textarea
              id="names"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              placeholder="Budi Santoso&#10;Siti Aminah&#10;Keluarga Besar Bapak Joko"
              className="min-h-[200px]"
            />
          </div>

          <Button onClick={handleGenerate} className="w-full">
            Generate Links
          </Button>
        </Card>

        {generatedLinks.length > 0 && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Links</h2>
            <div className="space-y-2">
              {generatedLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg group"
                >
                  <div className="overflow-hidden">
                    <p className="font-medium truncate">{link.name}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {link.url}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(link.url, index)}
                    className="shrink-0 ml-2"
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LinkGenerator;
