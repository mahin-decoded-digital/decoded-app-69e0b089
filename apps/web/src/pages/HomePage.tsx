import { useMemo } from "react";
import { 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  RotateCcw, 
  Type, 
  Palette, 
  Settings2, 
  LayoutTemplate
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useStyleStore } from "@/store/styleStore";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const text = useStyleStore((s) => s.text);
  const color = useStyleStore((s) => s.color);
  const fontSize = useStyleStore((s) => s.fontSize);
  const fontWeight = useStyleStore((s) => s.fontWeight);
  const textAlign = useStyleStore((s) => s.textAlign);
  const fontFamily = useStyleStore((s) => s.fontFamily);

  const setText = useStyleStore((s) => s.setText);
  const setColor = useStyleStore((s) => s.setColor);
  const setFontSize = useStyleStore((s) => s.setFontSize);
  const setFontWeight = useStyleStore((s) => s.setFontWeight);
  const setTextAlign = useStyleStore((s) => s.setTextAlign);
  const setFontFamily = useStyleStore((s) => s.setFontFamily);
  const resetStyles = useStyleStore((s) => s.resetStyles);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header Section with Hero Image as faint background */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm mb-8">
          <img 
            src="https://picsum.photos/seed/1d80tqe/1600/900" 
            alt="Clean abstract background for showcase" 
            crossOrigin="anonymous" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" 
          />
          <div className="relative px-6 py-12 md:px-12 md:py-16 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Hello World Showcase
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, elegant playground to experiment with text styling. Customize your message, 
              adjust the typography, and see the results instantly in the showcase below.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Control Panel */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Settings2 className="w-5 h-5 text-primary" />
                  Style Editor
                </CardTitle>
                <CardDescription>
                  Tweak the parameters below to instantly update the showcase display.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Text Content */}
                <div className="space-y-2.5">
                  <Label htmlFor="message-text" className="text-slate-700 flex items-center gap-1.5">
                    <Type className="w-4 h-4" /> Message
                  </Label>
                  <Input 
                    id="message-text"
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter your message..."
                    className="bg-white"
                  />
                </div>

                {/* Color Picker */}
                <div className="space-y-2.5">
                  <Label htmlFor="color-picker" className="text-slate-700 flex items-center gap-1.5">
                    <Palette className="w-4 h-4" /> Text Color
                  </Label>
                  <div className="flex gap-3">
                    <div className="relative w-12 h-10 rounded-md overflow-hidden border border-slate-200 shadow-sm shrink-0">
                      <input 
                        id="color-picker"
                        type="color" 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)} 
                        className="absolute -top-2 -left-2 w-16 h-16 cursor-pointer" 
                      />
                    </div>
                    <Input 
                      type="text" 
                      value={color} 
                      onChange={(e) => setColor(e.target.value)} 
                      className="font-mono bg-white uppercase text-slate-600"
                      maxLength={7}
                    />
                  </div>
                </div>

                {/* Typography Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2.5">
                    <Label className="text-slate-700">Size</Label>
                    <Select value={fontSize} onValueChange={setFontSize}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text-xl">Small</SelectItem>
                        <SelectItem value="text-3xl">Medium</SelectItem>
                        <SelectItem value="text-6xl">Large</SelectItem>
                        <SelectItem value="text-8xl">Extra Large</SelectItem>
                        <SelectItem value="text-[10rem]">Massive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2.5">
                    <Label className="text-slate-700">Weight</Label>
                    <Select value={fontWeight} onValueChange={setFontWeight}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select weight" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="font-light">Light</SelectItem>
                        <SelectItem value="font-normal">Normal</SelectItem>
                        <SelectItem value="font-medium">Medium</SelectItem>
                        <SelectItem value="font-bold">Bold</SelectItem>
                        <SelectItem value="font-extrabold">Extra Bold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label className="text-slate-700">Font Family</Label>
                  <Select value={fontFamily} onValueChange={setFontFamily}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select family" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="font-sans">Sans Serif (Clean)</SelectItem>
                      <SelectItem value="font-serif">Serif (Classic)</SelectItem>
                      <SelectItem value="font-mono">Monospace (Code)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Alignment */}
                <div className="space-y-2.5">
                  <Label className="text-slate-700">Alignment</Label>
                  <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 w-fit">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setTextAlign('text-left')}
                      className={cn(
                        "h-8 px-3 text-slate-600 hover:text-slate-900", 
                        textAlign === 'text-left' && "bg-white shadow-sm text-slate-900"
                      )}
                    >
                      <AlignLeft className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setTextAlign('text-center')}
                      className={cn(
                        "h-8 px-3 text-slate-600 hover:text-slate-900", 
                        textAlign === 'text-center' && "bg-white shadow-sm text-slate-900"
                      )}
                    >
                      <AlignCenter className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setTextAlign('text-right')}
                      className={cn(
                        "h-8 px-3 text-slate-600 hover:text-slate-900", 
                        textAlign === 'text-right' && "bg-white shadow-sm text-slate-900"
                      )}
                    >
                      <AlignRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 border-t border-slate-100">
                <Button 
                  variant="outline" 
                  className="w-full text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100"
                  onClick={resetStyles}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset to Defaults
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Right Column: Interactive Showcase */}
          <div className="lg:col-span-8 flex flex-col h-full min-h-[500px]">
            <div className="flex-1 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col relative group">
              
              {/* Showcase Toolbar */}
              <div className="h-12 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm px-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                  <LayoutTemplate className="w-4 h-4" />
                  Live Preview
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/40"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/40"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/40"></div>
                </div>
              </div>

              {/* Showcase Canvas */}
              <div className="flex-1 p-8 sm:p-12 md:p-16 flex items-center justify-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                
                <div className={cn("w-full transition-all duration-300 ease-in-out", textAlign)}>
                  <p 
                    className={cn(
                      "break-words leading-tight transition-all duration-300",
                      fontSize,
                      fontWeight,
                      fontFamily
                    )}
                    style={{ color }}
                  >
                    {text || " "}
                  </p>
                </div>
                
                {/* Empty State Overlay if text is deleted */}
                {!text && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p className="text-slate-300 text-2xl font-light italic">
                      Start typing to see your message...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}