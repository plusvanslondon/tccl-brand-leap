import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { CategoryData } from "@/data/websiteAuditMockData";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

interface CategoryDetailProps {
  category: CategoryData;
  categoryId: string;
}

export function CategoryDetail({ category, categoryId }: CategoryDetailProps) {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'medium': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'low': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return null;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-brand-surface text-text-secondary border-brand-border';
    }
  };

  const renderTechnicalSeoCharts = () => {
    if (categoryId !== 'technicalSeo') return null;
    
    const vitalsData = category.metrics.coreWebVitals;
    const chartData = [
      { name: 'Week 1', LCP: 4.4, FID: 185, CLS: 0.13 },
      { name: 'Week 2', LCP: 4.5, FID: 180, CLS: 0.14 },
      { name: 'Week 3', LCP: 4.2, FID: 195, CLS: 0.11 },
      { name: 'Week 4', LCP: 4.6, FID: 175, CLS: 0.16 },
      { name: 'Week 5', LCP: 4.2, FID: 180, CLS: 0.15 }
    ];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Core Web Vitals Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="LCP" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Technical Health Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Crawl Errors</span>
                <Badge variant="destructive">{category.metrics.crawlErrors}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Indexed Pages</span>
                <Badge variant="secondary">{category.metrics.indexedPages}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Sitemap Status</span>
                <Badge variant="default">{category.metrics.sitemapStatus}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderConversionsCharts = () => {
    if (categoryId !== 'conversions') return null;
    
    const trafficData = Object.entries(category.metrics.trafficSources).map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value: value as number
    }));

    const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">{category.metrics.conversionRate}%</div>
                <div className="text-text-secondary">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">{category.metrics.monthlyVisitors.toLocaleString()}</div>
                <div className="text-text-secondary">Monthly Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">{category.metrics.bounceRate}%</div>
                <div className="text-text-secondary">Bounce Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderCompetitiveCharts = () => {
    if (categoryId !== 'competitive') return null;
    
    const competitorData = [
      { name: 'Your Site', domainAuthority: category.metrics.domainAuthority, traffic: 15420 },
      ...category.metrics.competitors
    ];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Domain Authority Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="domainAuthority" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Keyword Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Top 3 Rankings</span>
                <Badge variant="default">{category.metrics.keywordRankings.top3}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Top 10 Rankings</span>
                <Badge variant="secondary">{category.metrics.keywordRankings.top10}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Top 50 Rankings</span>
                <Badge variant="outline">{category.metrics.keywordRankings.top50}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{category.name} - Detailed Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="issues">Issues</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-brand-surface rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary">{category.grade}</div>
                  <div className="text-text-secondary">Grade</div>
                </div>
                <div className="text-center p-4 bg-brand-surface rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary">{category.score}/{category.maxScore}</div>
                  <div className="text-text-secondary">Score</div>
                </div>
                <div className="text-center p-4 bg-brand-surface rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary">{category.issues.length}</div>
                  <div className="text-text-secondary">Issues Found</div>
                </div>
              </div>
              
              {categoryId === 'technicalSeo' && renderTechnicalSeoCharts()}
              {categoryId === 'conversions' && renderConversionsCharts()}
              {categoryId === 'competitive' && renderCompetitiveCharts()}
            </TabsContent>
            
            <TabsContent value="issues" className="space-y-4">
              {category.issues.length > 0 ? (
                category.issues.map((issue, index) => (
                  <div key={index} className="p-4 border border-brand-border rounded-lg">
                    <div className="flex items-start gap-3">
                      {getSeverityIcon(issue.severity)}
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary">{issue.title}</h4>
                        <p className="text-text-secondary text-sm mt-1">{issue.description}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge className={getSeverityColor(issue.severity)}>{issue.severity}</Badge>
                          <Badge variant="outline">{issue.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-text-primary">No Issues Found</h3>
                  <p className="text-text-secondary">This category is performing excellently!</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="metrics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(category.metrics).map(([key, value]) => (
                  <div key={key} className="p-4 bg-brand-surface rounded-lg">
                    <h4 className="font-semibold text-text-primary capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                    <p className="text-text-secondary">{typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}