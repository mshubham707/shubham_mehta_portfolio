import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LayoutTemplate } from "lucide-react";
import { useState, useEffect } from "react";

type Template = 'default' | 'neumorph';

interface TemplateSwitcherProps {
  onTemplateChange: (template: Template) => void;
}

const TemplateSwitcher = ({ onTemplateChange }: TemplateSwitcherProps) => {
  const [currentTemplate, setCurrentTemplate] = useState<Template>('default');

  useEffect(() => {
    const savedTemplate = localStorage.getItem('template') as Template;
    if (savedTemplate) {
      setCurrentTemplate(savedTemplate);
      onTemplateChange(savedTemplate);
    }
  }, [onTemplateChange]);

  const changeTemplate = (template: Template) => {
    setCurrentTemplate(template);
    localStorage.setItem('template', template);
    onTemplateChange(template);
  };

  const templates = [
    { name: 'Default', value: 'default' as Template, description: 'Modern gradient design' },
    { name: 'Neumorphic', value: 'neumorph' as Template, description: 'Soft 3D design' },
  ];

  return (
    <div className="fixed top-4 left-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="bg-card border-border shadow-lg hover:bg-accent"
          >
            <LayoutTemplate className="h-4 w-4 mr-1" />
            Template
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4" align="start">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <LayoutTemplate className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Choose Template</span>
            </div>
            <div className="space-y-2">
              {templates.map((template) => (
                <Button
                  key={template.value}
                  variant={currentTemplate === template.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeTemplate(template.value)}
                  className="w-full justify-start h-auto py-3 flex-col items-start"
                >
                  <div className="font-semibold text-sm">{template.name}</div>
                  <div className="text-xs text-muted-foreground font-normal">
                    {template.description}
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TemplateSwitcher;
