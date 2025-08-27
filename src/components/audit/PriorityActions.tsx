import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PriorityAction } from "@/data/websiteAuditMockData";
import { AlertTriangle, Zap, Clock } from "lucide-react";

interface PriorityActionsProps {
  actions: PriorityAction[];
}

export function PriorityActions({ actions }: PriorityActionsProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-brand-surface text-text-secondary border-brand-border';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-brand-surface text-text-secondary border-brand-border';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return <Zap className="h-4 w-4 text-green-600" />;
      case 'Medium': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Hard': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="sticky top-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-brand-primary" />
            Top Priority Fixes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {actions.slice(0, 5).map((action) => (
              <div key={action.id} className="p-4 border border-brand-border rounded-lg hover:bg-brand-surface transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {action.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-text-primary text-sm leading-tight mb-2">
                      {action.title}
                    </h4>
                    <p className="text-xs text-text-secondary mb-3 leading-relaxed">
                      {action.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {action.category}
                      </Badge>
                      <Badge className={`text-xs ${getDifficultyColor(action.difficulty)}`}>
                        <span className="flex items-center gap-1">
                          {getDifficultyIcon(action.difficulty)}
                          {action.difficulty}
                        </span>
                      </Badge>
                      <Badge className={`text-xs ${getImpactColor(action.impact)}`}>
                        {action.impact} Impact
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-brand-surface rounded-lg">
            <p className="text-xs text-text-secondary text-center">
              Focus on high-impact, easy fixes first for quick wins. 
              <br />
              Need help implementing these fixes? Contact our team.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}