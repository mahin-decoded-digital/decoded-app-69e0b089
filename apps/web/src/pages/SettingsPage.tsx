import React from "react";
import { useStyleStore } from "@/store/styleStore";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RefreshCw, Type, Palette, AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
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

  const fontSizes = [
    { label: "Small (sm)", value: "text-sm" },
    { label: "Base (base)", value: "text-base" },
    { label: "Large (lg)", value: "text-lg" },
    { label: "Extra Large (xl)", value: "text-xl" },
    { label: "2XL", value: "text-2xl" },
    { label: "4XL", value: "text-4xl" },
    { label: "6XL", value: "text-6xl" },
    { label: "8XL", value: "text-8xl" },
  ];

  const fontWeights = [
    { label: "Light", value: "font-light" },
    { label: "Normal", value: "font-normal" },
    { label: "Medium", value: "font-medium" },
    { label: "Semi Bold", value: "font-semibold" },
    { label: "Bold", value: "font-bold" },
    { label: "Extra Bold", value: "font-extrabold" },
  ];

  const fontFamilies = [
    { label: "Sans Serif", value: "font-sans" },
    { label: "Serif", value: "font-serif" },
    { label: "Monospace", value: "font-mono" },
  ];

  const alignments = [
    { val: "text-left", icon: AlignLeft, label: "Left" },
    { val: "text-center", icon: AlignCenter, label: "Center" },
    { val: "text-right", icon: AlignRight, label: "Right" },
    { val: "text-justify", icon: AlignJustify, label: "Justify" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      {/* Hero Banner */}
      <div className="w-full h-48 md:h-64 relative overflow-hidden flex-shrink-0">
        <img
          src="https://picsum.photos/seed/1d80tqe/1600/900"
          alt="Clean abstract background for showcase"
          crossOrigin="anonymous"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-foreground">
              Editor Panel
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto px-4 text-sm md:text-base">
              Customize your display text, colors, and typography settings in real-time.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Settings Form */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            <Card className="shadow-sm border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Palette className="w-5 h-5 text-primary" />
                      Customization
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Adjust the appearance of your text.
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetStyles}
                    title="Reset to defaults"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span className="sr-only">Reset styles</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Text Content */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground">
                    Display Text
                  </label>
                  <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your message..."
                    className="bg-background"
                  />
                </div>

                {/* Color Picker */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground">
                    Text Color
                  </label>
                  <div className="flex gap-3">
                    <Input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-14 h-10 p-1 cursor-pointer bg-background"
                    />
                    <Input
                      type="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="flex-1 font-mono uppercase bg-background"
                      placeholder="#000000"
                    />
                  </div>
                </div>

                {/* Font Family */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground">
                    Font Family
                  </label>
                  <Select value={fontFamily} onValueChange={setFontFamily}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fontFamilies.map((f) => (
                        <SelectItem key={f.value} value={f.value}>
                          {f.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Font Size & Weight Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-foreground">
                      Size
                    </label>
                    <Select value={fontSize} onValueChange={setFontSize}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Size" />
                      </SelectTrigger>
                      <SelectContent>
                        {fontSizes.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-foreground">
                      Weight
                    </label>
                    <Select value={fontWeight} onValueChange={setFontWeight}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Weight" />
                      </SelectTrigger>
                      <SelectContent>
                        {fontWeights.map((w) => (
                          <SelectItem key={w.value} value={w.value}>
                            {w.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Text Align */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground">
                    Alignment
                  </label>
                  <div className="flex bg-muted/50 p-1 rounded-md border border-border">
                    {alignments.map((align) => {
                      const Icon = align.icon;
                      const isActive = textAlign === align.val;
                      return (
                        <button
                          key={align.val}
                          onClick={() => setTextAlign(align.val)}
                          className={cn(
                            "flex-1 flex justify-center py-2 rounded-sm text-sm font-medium transition-all duration-200",
                            isActive
                              ? "bg-background shadow-sm text-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                          )}
                          title={align.label}
                          type="button"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="sr-only">{align.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Live Preview */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <Card className="flex-1 flex flex-col min-h-[400px] shadow-sm border-border overflow-hidden">
              <CardHeader className="border-b bg-muted/30 py-3 px-6 shrink-0">
                <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Type className="w-4 h-4 text-primary" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-0 relative bg-background flex items-center justify-center overflow-auto">
                <div className="w-full h-full min-h-[300px] flex p-8 md:p-16">
                  <div
                    className={cn(
                      "w-full transition-all duration-300 ease-in-out my-auto break-words",
                      fontSize,
                      fontWeight,
                      textAlign,
                      fontFamily
                    )}
                    style={{ color }}
                  >
                    {text || (
                      <span className="opacity-40 italic font-light tracking-wide">
                        Start typing...
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </main>
    </div>
  );
}