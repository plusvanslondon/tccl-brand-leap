import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { mockAuditData } from "@/data/websiteAuditMockData";
import { AuditHeader } from "@/components/audit/AuditHeader";
import { OverallScore } from "@/components/audit/OverallScore";
import { CategoryOverview } from "@/components/audit/CategoryOverview";
import { CategoryDetail } from "@/components/audit/CategoryDetail";
import { PriorityActions } from "@/components/audit/PriorityActions";
import { useToast } from "@/hooks/use-toast";

export default function WebsiteAudit() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();

  const handleRerunAudit = () => {
    toast({
      title: "Audit Started",
      description: "Your website audit is now running. This may take a few minutes to complete.",
    });
  };

  const handleDownloadReport = () => {
    toast({
      title: "Report Generated",
      description: "Your comprehensive PDF report is being prepared for download.",
    });
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <AuditHeader
          websiteUrl={mockAuditData.website.url}
          lastAuditDate={mockAuditData.website.lastAuditDate}
          onRerunAudit={handleRerunAudit}
        />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3 space-y-6">
            <OverallScore
              grade={mockAuditData.website.overallGrade}
              score={mockAuditData.website.overallScore}
            />

            <CategoryOverview
              categories={mockAuditData.categories}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />

            {selectedCategory && (
              <CategoryDetail
                category={mockAuditData.categories[selectedCategory as keyof typeof mockAuditData.categories]}
                categoryId={selectedCategory}
              />
            )}

            <div className="bg-card border border-brand-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Want the Full Report?
              </h3>
              <p className="text-text-secondary mb-4">
                Download a comprehensive PDF report with detailed analysis and recommendations.
              </p>
              <Button
                onClick={handleDownloadReport}
                className="btn-primary flex items-center gap-2 mx-auto"
              >
                <Download className="h-4 w-4" />
                Download Full PDF Report
              </Button>
            </div>
          </div>

          <div className="xl:col-span-1">
            <PriorityActions actions={mockAuditData.priorityActions} />
          </div>
        </div>
      </div>
    </div>
  );
}