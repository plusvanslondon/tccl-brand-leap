interface OverallScoreProps {
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  score: number;
}

export function OverallScore({ grade, score }: OverallScoreProps) {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600 border-green-600 bg-green-50';
      case 'B': return 'text-blue-600 border-blue-600 bg-blue-50';
      case 'C': return 'text-yellow-600 border-yellow-600 bg-yellow-50';
      case 'D': return 'text-orange-600 border-orange-600 bg-orange-50';
      case 'F': return 'text-red-600 border-red-600 bg-red-50';
      default: return 'text-text-secondary border-brand-border bg-brand-surface';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-card border border-brand-border rounded-lg p-8 text-center mb-6">
      <h2 className="text-xl font-semibold text-text-primary mb-6">
        Overall Website Health Score
      </h2>
      
      <div className="flex flex-col items-center gap-4">
        <div className={`
          w-32 h-32 rounded-full border-4 flex items-center justify-center
          ${getGradeColor(grade)}
        `}>
          <span className="text-4xl font-bold">{grade}</span>
        </div>
        
        <div className="text-center">
          <p className={`text-3xl font-bold ${getScoreColor(score)}`}>
            {score}/100
          </p>
          <p className="text-text-secondary mt-1">Overall Score</p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-brand-surface rounded-lg">
        <p className="text-sm text-text-secondary">
          Your website is performing {grade === 'A' ? 'excellently' : grade === 'B' ? 'well' : 'adequately'} overall. 
          Review the category breakdowns below for specific improvement opportunities.
        </p>
      </div>
    </div>
  );
}