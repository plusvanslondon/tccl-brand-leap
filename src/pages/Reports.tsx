import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Filter, 
  Calendar as CalendarIcon,
  Users,
  DollarSign,
  Target,
  Eye,
  FileText,
  Share,
  Mail
} from "lucide-react";
import { format } from "date-fns";

const Reports = () => {
  const [dateRange, setDateRange] = useState<Date | undefined>(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState("30days");
  const [reportType, setReportType] = useState("overview");

  const reports = [
    {
      id: 1,
      title: "Monthly Performance Report",
      description: "Comprehensive overview of business metrics",
      type: "Performance",
      lastGenerated: "2024-01-15",
      status: "ready",
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Customer Analytics Report",
      description: "Customer behavior and engagement insights",
      type: "Analytics",
      lastGenerated: "2024-01-14",
      status: "ready",
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "Revenue Breakdown",
      description: "Detailed revenue analysis by source",
      type: "Financial",
      lastGenerated: "2024-01-13",
      status: "generating",
      size: "0 MB"
    },
    {
      id: 4,
      title: "Marketing Campaign ROI",
      description: "Campaign performance and return on investment",
      type: "Marketing",
      lastGenerated: "2024-01-12",
      status: "ready",
      size: "3.1 MB"
    }
  ];

  const metrics = {
    totalRevenue: 125430,
    totalCustomers: 2847,
    conversionRate: 8.7,
    avgOrderValue: 156.42,
    customerRetention: 89.3,
    monthlyGrowth: 12.5
  };

  return (
    <div className="min-h-screen bg-brand-surface/30">
      {/* Header */}
      <header className="bg-background border-b border-brand-border px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Reports & Analytics</h1>
            <p className="text-text-secondary">Track performance and generate insights</p>
          </div>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {dateRange ? format(dateRange, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateRange}
                  onSelect={setDateRange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Button className="btn-primary">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-brand-primary" />
                <span className="text-sm font-medium text-text-secondary">Revenue</span>
              </div>
              <div className="text-xl font-bold text-text-primary">${metrics.totalRevenue.toLocaleString()}</div>
              <div className="text-xs text-green-600">+{metrics.monthlyGrowth}%</div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-brand-primary" />
                <span className="text-sm font-medium text-text-secondary">Customers</span>
              </div>
              <div className="text-xl font-bold text-text-primary">{metrics.totalCustomers.toLocaleString()}</div>
              <div className="text-xs text-green-600">+15.3%</div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-brand-primary" />
                <span className="text-sm font-medium text-text-secondary">Conversion</span>
              </div>
              <div className="text-xl font-bold text-text-primary">{metrics.conversionRate}%</div>
              <div className="text-xs text-green-600">+2.1%</div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-4 w-4 text-brand-primary" />
                <span className="text-sm font-medium text-text-secondary">AOV</span>
              </div>
              <div className="text-xl font-bold text-text-primary">${metrics.avgOrderValue}</div>
              <div className="text-xs text-green-600">+8.2%</div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-brand-primary" />
                <span className="text-sm font-medium text-text-secondary">Retention</span>
              </div>
              <div className="text-xl font-bold text-text-primary">{metrics.customerRetention}%</div>
              <div className="text-xs text-green-600">+3.7%</div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-brand-primary" />
                <span className="text-sm font-medium text-text-secondary">Growth</span>
              </div>
              <div className="text-xl font-bold text-text-primary">{metrics.monthlyGrowth}%</div>
              <div className="text-xs text-green-600">Monthly</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList className="grid grid-cols-3 w-full sm:w-auto">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="1year">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Revenue and customer growth trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-end justify-between bg-gradient-subtle rounded-lg p-6">
                  {/* Mock Chart Data */}
                  {[
                    { month: "Jan", revenue: 45, customers: 30 },
                    { month: "Feb", revenue: 52, customers: 35 },
                    { month: "Mar", revenue: 48, customers: 40 },
                    { month: "Apr", revenue: 61, customers: 45 },
                    { month: "May", revenue: 55, customers: 50 },
                    { month: "Jun", revenue: 67, customers: 55 },
                    { month: "Jul", revenue: 72, customers: 60 },
                    { month: "Aug", revenue: 69, customers: 65 },
                    { month: "Sep", revenue: 78, customers: 70 },
                    { month: "Oct", revenue: 85, customers: 75 },
                    { month: "Nov", revenue: 82, customers: 80 },
                    { month: "Dec", revenue: 90, customers: 85 }
                  ].map((data, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="flex gap-1">
                        <div 
                          className="bg-gradient-primary rounded-t-md transition-all duration-300 hover:opacity-80 w-6"
                          style={{ height: `${data.revenue * 2}px` }}
                        />
                        <div 
                          className="bg-brand-accent rounded-t-md transition-all duration-300 hover:opacity-80 w-6"
                          style={{ height: `${data.customers * 2}px` }}
                        />
                      </div>
                      <span className="text-xs text-text-muted">{data.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-primary rounded"></div>
                    <span className="text-sm text-text-secondary">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-accent rounded"></div>
                    <span className="text-sm text-text-secondary">Customers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Campaigns</CardTitle>
                  <CardDescription>Your most successful marketing efforts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Summer Sale 2024", conversions: 1247, roi: "320%" },
                      { name: "Product Launch Campaign", conversions: 892, roi: "280%" },
                      { name: "Holiday Promotion", conversions: 674, roi: "195%" }
                    ].map((campaign, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-brand-surface rounded-lg">
                        <div>
                          <h4 className="font-medium text-text-primary">{campaign.name}</h4>
                          <p className="text-sm text-text-secondary">{campaign.conversions} conversions</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{campaign.roi} ROI</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Segments</CardTitle>
                  <CardDescription>Breakdown of your customer base</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { segment: "New Customers", count: 847, percentage: 35 },
                      { segment: "Returning Customers", count: 1200, percentage: 45 },
                      { segment: "VIP Customers", count: 300, percentage: 20 }
                    ].map((segment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-text-secondary">{segment.segment}</span>
                          <span className="font-medium text-text-primary">{segment.count}</span>
                        </div>
                        <div className="w-full bg-brand-surface rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${segment.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generated Reports</CardTitle>
                <CardDescription>Your downloadable business reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border border-brand-border rounded-lg hover:bg-brand-surface/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-text-primary">{report.title}</h3>
                          <p className="text-sm text-text-secondary mb-2">{report.description}</p>
                          <div className="flex items-center gap-4 text-xs text-text-muted">
                            <span>Type: {report.type}</span>
                            <span>Generated: {report.lastGenerated}</span>
                            <span>Size: {report.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={report.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {report.status}
                        </Badge>
                        {report.status === 'ready' && (
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors are coming from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { source: "Organic Search", visitors: 12847, percentage: 45 },
                      { source: "Direct", visitors: 8932, percentage: 31 },
                      { source: "Social Media", visitors: 4521, percentage: 16 },
                      { source: "Email", visitors: 2340, percentage: 8 }
                    ].map((source, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                          <span className="text-sm text-text-primary">{source.source}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-text-primary">{source.visitors.toLocaleString()}</div>
                          <div className="text-xs text-text-secondary">{source.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email Campaign Performance</CardTitle>
                  <CardDescription>Your email marketing metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-text-primary mb-2">24.7%</div>
                      <div className="text-sm text-text-secondary">Average Open Rate</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Click-through Rate</span>
                        <span className="text-sm font-medium text-text-primary">8.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Unsubscribe Rate</span>
                        <span className="text-sm font-medium text-text-primary">0.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Bounce Rate</span>
                        <span className="text-sm font-medium text-text-primary">2.1%</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      View Email Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reports;