import { RefreshCw, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuditHeaderProps {
  websiteUrl: string;
  lastAuditDate: string;
  onRerunAudit: () => void;
}

export function AuditHeader({ websiteUrl, lastAuditDate, onRerunAudit }: AuditHeaderProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-card border border-brand-border rounded-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Website Audit Report
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p className="text-lg font-medium text-brand-primary">{websiteUrl}</p>
            <div className="flex items-center gap-2 text-text-secondary">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Last audit: {formatDate(lastAuditDate)}</span>
            </div>
          </div>
        </div>
        <Button
          onClick={onRerunAudit}
          className="btn-primary flex items-center gap-2 w-fit"
        >
          <RefreshCw className="h-4 w-4" />
          Re-run Audit
        </Button>
      </div>
    </div>
  );
}