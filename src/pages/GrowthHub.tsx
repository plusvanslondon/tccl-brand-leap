import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown, MessageCircle, Download, Phone, MousePointer, TrendingUp, Facebook, Chrome, Globe, Users, Target, Zap, DollarSign, BarChart3, PieChart, Activity, FileText, Share2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, Area, AreaChart, Pie } from "recharts";

// Comprehensive mock data structure
const mockData = {
  businessName: "Swift Plumbing Solutions",
  
  // Headline Metrics (The "At-a-Glance" Numbers)
  headlineMetrics: {
    totalLeads: 47,
    costPerLead: 18.50,
    roas: 4.2,
    amountInvested: 870,
    trends: {
      totalLeads: 'up' as const,
      costPerLead: 'down' as const,
      roas: 'up' as const,
      amountInvested: 'up' as const
    }
  },

  // Channel-Level Performance
  channelPerformance: {
    meta: {
      leads: 28,
      costPerLead: 16.80,
      linkClicks: 156,
      reach: 8420,
      spend: 470
    },
    google: {
      leads: 19,
      costPerLead: 21.05,
      impressions: 12340,
      ctr: 3.2,
      spend: 400
    },
    website: {
      formCompletions: 31,
      phoneCalls: 16,
      visitors: 892,
      newVsReturning: { new: 78, returning: 22 }
    }
  },

  // Lead Quality & Business Impact
  leadQuality: {
    leadToCustomerRate: 68,
    estimatedRevenue: 14600,
    avgValuePerCustomer: 455,
    qualityScore: 8.4
  },

  // Campaign Activity & Management
  campaignActivity: {
    activeCampaigns: 6,
    adsCreatedTested: 23,
    audienceSize: 45000,
    optimizationsMade: 12
  },

  // Enhanced Activity Feed
  activities: [
    {
      id: 1,
      date: "2024-01-15",
      time: "14:30",
      type: "campaign",
      action: "Launched new Facebook Ad set targeting homeowners in SW1 postcode",
      impact: "high"
    },
    {
      id: 2,
      date: "2024-01-14",
      time: "09:15",
      type: "optimization",
      action: "Optimised ad copy based on performance data - improved CTR by 23%",
      impact: "medium"
    },
    {
      id: 3,
      date: "2024-01-13",
      time: "16:45",
      type: "creative",
      action: "Added new ad creative featuring your latest emergency call-out photos",
      impact: "high"
    },
    {
      id: 4,
      date: "2024-01-12",
      time: "10:00",
      type: "report",
      action: "Generated and sent weekly performance report via WhatsApp",
      impact: "low"
    },
    {
      id: 5,
      date: "2024-01-11",
      time: "11:30",
      type: "targeting",
      action: "Adjusted targeting to focus on emergency plumbing keywords",
      impact: "high"
    },
    {
      id: 6,
      date: "2024-01-10",
      time: "13:20",
      type: "audience",
      action: "Expanded audience to include surrounding postcodes",
      impact: "medium"
    }
  ],

  // Enhanced Chart Data
  chartData: {
    leadsOverTime: [
      { day: 'Jan 8', leads: 3, meta: 2, google: 1 },
      { day: 'Jan 9', leads: 5, meta: 3, google: 2 },
      { day: 'Jan 10', leads: 4, meta: 2, google: 2 },
      { day: 'Jan 11', leads: 7, meta: 4, google: 3 },
      { day: 'Jan 12', leads: 6, meta: 4, google: 2 },
      { day: 'Jan 13', leads: 8, meta: 5, google: 3 },
      { day: 'Jan 14', leads: 9, meta: 6, google: 3 },
      { day: 'Jan 15', leads: 5, meta: 2, google: 3 }
    ],
    channelBreakdown: [
      { channel: 'Meta Ads', leads: 28, spend: 470 },
      { channel: 'Google Ads', leads: 19, spend: 400 }
    ],
    trafficSources: [
      { name: 'Meta Ads', value: 45, color: '#1877F2' },
      { name: 'Google Ads', value: 32, color: '#4285F4' },
      { name: 'Direct', value: 15, color: '#34A853' },
      { name: 'Referral', value: 8, color: '#FBBC04' }
    ]
  }
};

// Enhanced animated counter component
const AnimatedCounter = ({ value, symbol = "", suffix = "", decimals = 0, duration = 2000 }: { 
  value: number; 
  symbol?: string; 
  suffix?: string;
  decimals?: number;
  duration?: number 
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentValue = progress * value;
      setDisplayValue(decimals > 0 ? Number(currentValue.toFixed(decimals)) : Math.floor(currentValue));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [value, duration, decimals]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-brand-primary">
      {symbol}{displayValue}{suffix}
    </span>
  );
};

// Enhanced metric card component
const MetricCard = ({ icon: Icon, label, value, trend, symbol = "", suffix = "", decimals = 0, size = "default" }: {
  icon: any;
  label: string;
  value: number;
  trend: 'up' | 'down';
  symbol?: string;
  suffix?: string;
  decimals?: number;
  size?: 'default' | 'large';
}) => (
  <Card className={`${size === 'large' ? 'p-6' : 'p-4'} text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}>
    <CardContent className="p-0">
      <div className="flex justify-center mb-3">
        <div className={`${size === 'large' ? 'p-3 bg-brand-primary/10' : ''} rounded-full`}>
          <Icon className={`${size === 'large' ? 'h-8 w-8' : 'h-6 w-6'} text-brand-primary`} />
        </div>
      </div>
      <AnimatedCounter value={value} symbol={symbol} suffix={suffix} decimals={decimals} />
      <p className={`${size === 'large' ? 'text-base' : 'text-sm'} text-text-secondary mt-2 font-medium`}>{label}</p>
      <div className="flex items-center justify-center mt-3">
        {trend === 'up' ? (
          <ArrowUp className="h-4 w-4 text-green-600" />
        ) : (
          <ArrowDown className="h-4 w-4 text-red-600" />
        )}
        <span className={`text-xs ml-1 font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          vs last week
        </span>
      </div>
    </CardContent>
  </Card>
);

// Channel performance card component
const ChannelCard = ({ icon: Icon, title, data, primaryMetric, primaryValue, color }: {
  icon: any;
  title: string;
  data: any;
  primaryMetric: string;
  primaryValue: number;
  color: string;
}) => (
  <Card className="hover:shadow-lg transition-all duration-300">
    <CardHeader className="pb-3">
      <CardTitle className="flex items-center text-lg">
        <div className={`p-2 rounded-lg mr-3`} style={{ backgroundColor: `${color}20` }}>
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm text-text-secondary">{primaryMetric}</span>
        <span className="text-2xl font-bold text-brand-primary">{primaryValue}</span>
      </div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex justify-between items-center text-sm">
          <span className="text-text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
          <span className="font-medium text-foreground">
            {typeof value === 'number' && (key.includes('cost') || key.includes('spend')) ? `£${value}` :
             typeof value === 'number' && key.includes('ctr') ? `${value}%` :
             typeof value === 'object' && value !== null && 'new' in value && 'returning' in value ? 
               `${(value as {new: number, returning: number}).new}% / ${(value as {new: number, returning: number}).returning}%` :
             String(value)}
          </span>
        </div>
      ))}
    </CardContent>
  </Card>
);

// Activity item component with enhanced styling
const ActivityItem = ({ activity }: { activity: any }) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'campaign': return Target;
      case 'optimization': return Zap;
      case 'creative': return PieChart;
      case 'targeting': return Users;
      case 'audience': return Globe;
      case 'report': return FileText;
      default: return Activity;
    }
  };

  const TypeIcon = getTypeIcon(activity.type);

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-2 bg-brand-primary/10 rounded-lg">
              <TypeIcon className="h-4 w-4 text-brand-primary" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <Badge variant="outline" className="text-xs w-fit mb-2 md:mb-0">
                {activity.date} at {activity.time}
              </Badge>
              <Badge className={`text-xs w-fit ${getImpactColor(activity.impact)}`}>
                {activity.impact} impact
              </Badge>
            </div>
            <p className="text-text-primary leading-relaxed">{activity.action}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const GrowthHub = () => {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TC</span>
            </div>
            <span className="font-bold text-lg text-foreground">TCCL</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => window.open('https://wa.me/447123456789', '_blank')}
              className="hidden sm:flex"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Report
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://wa.me/447123456789', '_blank')}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Message Us
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Lead Generation Boost
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive reporting system showing real-time performance, weekly insights, and final results.
          </p>
          <Badge variant="outline" className="text-brand-primary border-brand-primary text-base px-4 py-1">
            For {mockData.businessName}
          </Badge>
        </section>

        {/* Report Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="live" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Live Growth Hub</span>
            </TabsTrigger>
            <TabsTrigger value="weekly" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Weekly Report</span>
            </TabsTrigger>
            <TabsTrigger value="final" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>30-Day Final</span>
            </TabsTrigger>
          </TabsList>

          {/* Live Growth Hub Tab */}
          <TabsContent value="live" className="space-y-8">
            {/* Headline Metrics */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-foreground">
                Headline Metrics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricCard
                  icon={TrendingUp}
                  label="Total Leads Generated"
                  value={mockData.headlineMetrics.totalLeads}
                  trend={mockData.headlineMetrics.trends.totalLeads}
                  size="large"
                />
                <MetricCard
                  icon={DollarSign}
                  label="Cost per Lead"
                  value={mockData.headlineMetrics.costPerLead}
                  trend={mockData.headlineMetrics.trends.costPerLead}
                  symbol="£"
                  decimals={2}
                  size="large"
                />
                <MetricCard
                  icon={BarChart3}
                  label="Return on Ad Spend"
                  value={mockData.headlineMetrics.roas}
                  trend={mockData.headlineMetrics.trends.roas}
                  suffix="x"
                  decimals={1}
                  size="large"
                />
                <MetricCard
                  icon={Target}
                  label="Amount Invested"
                  value={mockData.headlineMetrics.amountInvested}
                  trend={mockData.headlineMetrics.trends.amountInvested}
                  symbol="£"
                  size="large"
                />
              </div>
            </section>

            {/* Channel Performance */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-foreground">
                Channel Performance
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ChannelCard
                  icon={Facebook}
                  title="Meta Ads"
                  data={{
                    costPerLead: mockData.channelPerformance.meta.costPerLead,
                    linkClicks: mockData.channelPerformance.meta.linkClicks,
                    reach: mockData.channelPerformance.meta.reach.toLocaleString(),
                    spend: mockData.channelPerformance.meta.spend
                  }}
                  primaryMetric="Leads Generated"
                  primaryValue={mockData.channelPerformance.meta.leads}
                  color="#1877F2"
                />
                <ChannelCard
                  icon={Chrome}
                  title="Google Ads"
                  data={{
                    costPerLead: mockData.channelPerformance.google.costPerLead,
                    impressions: mockData.channelPerformance.google.impressions.toLocaleString(),
                    ctr: mockData.channelPerformance.google.ctr,
                    spend: mockData.channelPerformance.google.spend
                  }}
                  primaryMetric="Leads Generated"
                  primaryValue={mockData.channelPerformance.google.leads}
                  color="#4285F4"
                />
                <ChannelCard
                  icon={Globe}
                  title="Website Performance"
                  data={{
                    phoneCalls: mockData.channelPerformance.website.phoneCalls,
                    visitors: mockData.channelPerformance.website.visitors,
                    newVsReturning: mockData.channelPerformance.website.newVsReturning
                  }}
                  primaryMetric="Form Completions"
                  primaryValue={mockData.channelPerformance.website.formCompletions}
                  color="#34A853"
                />
              </div>
            </section>

            {/* Enhanced Charts */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-foreground">
                Performance Visualizations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Leads Over Time</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockData.chartData.leadsOverTime}>
                          <XAxis dataKey="day" className="text-xs" />
                          <YAxis className="text-xs" />
                          <Area 
                            type="monotone" 
                            dataKey="leads" 
                            stroke="hsl(var(--brand-primary))" 
                            fill="hsl(var(--brand-primary) / 0.2)"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Traffic Sources</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                      <div className="h-64 w-full">
                         <ResponsiveContainer width="100%" height="100%">
                           <RechartsPieChart>
                             <Pie
                               data={mockData.chartData.trafficSources}
                               cx="50%"
                               cy="50%"
                               outerRadius={80}
                               dataKey="value"
                             >
                               {mockData.chartData.trafficSources.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={entry.color} />
                               ))}
                             </Pie>
                           </RechartsPieChart>
                         </ResponsiveContainer>
                      </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Activity Feed */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-foreground">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {mockData.activities.slice(0, 4).map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Weekly Report Tab */}
          <TabsContent value="weekly" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Weekly PDF Report Preview</h2>
              <p className="text-text-secondary">Detailed snapshot sent via WhatsApp every week</p>
            </div>

            {/* Campaign Activity Focus */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Campaign Activity & Management</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricCard
                  icon={Target}
                  label="Active Campaigns"
                  value={mockData.campaignActivity.activeCampaigns}
                  trend="up"
                />
                <MetricCard
                  icon={PieChart}
                  label="Ads Created & Tested"
                  value={mockData.campaignActivity.adsCreatedTested}
                  trend="up"
                />
                <MetricCard
                  icon={Users}
                  label="Audience Size"
                  value={mockData.campaignActivity.audienceSize}
                  trend="up"
                  suffix="K"
                />
                <MetricCard
                  icon={Zap}
                  label="Key Optimizations"
                  value={mockData.campaignActivity.optimizationsMade}
                  trend="up"
                />
              </div>
            </section>

            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-lg font-semibold">All Weekly Activities</h3>
                <div className="space-y-3">
                  {mockData.activities.map((activity) => (
                    <ActivityItem key={activity.id} activity={activity} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Get Weekly Report via WhatsApp
              </Button>
            </div>
          </TabsContent>

          {/* Final Report Tab */}
          <TabsContent value="final" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">30-Day Final Report</h2>
              <p className="text-text-secondary">Comprehensive narrative-driven report concluding your trial</p>
            </div>

            {/* Lead Quality & Business Impact Focus */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Lead Quality & Business Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricCard
                  icon={TrendingUp}
                  label="Lead to Customer Rate"
                  value={mockData.leadQuality.leadToCustomerRate}
                  trend="up"
                  suffix="%"
                  size="large"
                />
                <MetricCard
                  icon={DollarSign}
                  label="Estimated Revenue"
                  value={mockData.leadQuality.estimatedRevenue}
                  trend="up"
                  symbol="£"
                  size="large"
                />
                <MetricCard
                  icon={BarChart3}
                  label="Avg Value per Customer"
                  value={mockData.leadQuality.avgValuePerCustomer}
                  trend="up"
                  symbol="£"
                  size="large"
                />
                <MetricCard
                  icon={Target}
                  label="Quality Score"
                  value={mockData.leadQuality.qualityScore}
                  trend="up"
                  suffix="/10"
                  decimals={1}
                  size="large"
                />
              </div>
            </section>

            {/* Comprehensive Summary */}
            <Card className="p-8 bg-gradient-subtle">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-2xl font-semibold text-foreground text-center">
                  Your 30-Day Performance Summary
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Campaign Highlights</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• Generated {mockData.headlineMetrics.totalLeads} qualified leads</li>
                      <li>• Achieved £{mockData.headlineMetrics.costPerLead} cost per lead</li>
                      <li>• Delivered {mockData.headlineMetrics.roas}x return on ad spend</li>
                      <li>• Converted {mockData.leadQuality.leadToCustomerRate}% of leads to customers</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Business Impact</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• Generated estimated £{mockData.leadQuality.estimatedRevenue.toLocaleString()} in revenue</li>
                      <li>• Average customer value of £{mockData.leadQuality.avgValuePerCustomer}</li>
                      <li>• Managed {mockData.campaignActivity.activeCampaigns} active campaigns</li>
                      <li>• Created and tested {mockData.campaignActivity.adsCreatedTested} ad variations</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Report (PDF)
                  </Button>
                  <Button size="lg" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discuss Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-text-muted text-sm">
            © 2024 TCCL. All rights reserved. | 
            <a href="https://tccl.co.uk" className="hover:text-brand-primary ml-1">
              Visit our main website
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GrowthHub;