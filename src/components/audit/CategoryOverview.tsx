import { Progress } from "@/components/ui/progress";
import { CategoryData } from "@/data/websiteAuditMockData";

interface CategoryOverviewProps {
  categories: Record<string, CategoryData>;
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}

export function CategoryOverview({ categories, selectedCategory, onCategorySelect }: CategoryOverviewProps) {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600 border-green-200 bg-green-50';
      case 'B': return 'text-blue-600 border-blue-200 bg-blue-50';
      case 'C': return 'text-yellow-600 border-yellow-200 bg-yellow-50';
      case 'D': return 'text-orange-600 border-orange-200 bg-orange-50';
      case 'F': return 'text-red-600 border-red-200 bg-red-50';
      default: return 'text-text-secondary border-brand-border bg-brand-surface';
    }
  };

  const getProgressColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'bg-green-600';
      case 'B': return 'bg-blue-600';
      case 'C': return 'bg-yellow-600';
      case 'D': return 'bg-orange-600';
      case 'F': return 'bg-red-600';
      default: return 'bg-brand-primary';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-text-primary mb-6">Category Breakdown</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {Object.entries(categories).map(([categoryId, category]) => (
          <div
            key={categoryId}
            className={`
              bg-card border-2 rounded-lg p-4 cursor-pointer transition-all duration-200
              hover:shadow-lg hover:-translate-y-1
              ${selectedCategory === categoryId 
                ? 'border-brand-primary shadow-lg' 
                : 'border-brand-border hover:border-brand-primary/50'
              }
            `}
            onClick={() => onCategorySelect(categoryId)}
          >
            <div className="text-center">
              <h3 className="font-semibold text-text-primary mb-3 text-sm leading-tight">
                {category.name}
              </h3>
              
              <div className={`
                w-16 h-16 mx-auto rounded-full border-2 flex items-center justify-center mb-3
                ${getGradeColor(category.grade)}
              `}>
                <span className="text-xl font-bold">{category.grade}</span>
              </div>
              
              <p className="text-lg font-bold text-text-primary mb-2">
                {category.score}/{category.maxScore}
              </p>
              
              <div className="relative">
                <Progress 
                  value={(category.score / category.maxScore) * 100} 
                  className="h-2"
                />
                <div 
                  className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-300 ${getProgressColor(category.grade)}`}
                  style={{ width: `${(category.score / category.maxScore) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}