import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, MessageCircle, Download, Phone, MousePointer, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Mock data structure
const mockData = {
  businessName: "Swift Plumbing Solutions",
  metrics: {
    totalLeads: 12,
    phoneCalls: 8,
    websiteClicks: 45,
    adSpend: 120,
    trends: {
      totalLeads: 'up' as const,
      phoneCalls: 'up' as const, 
      websiteClicks: 'up' as const,
      adSpend: 'down' as const
    }
  },
  activities: [
    {
      id: 1,
      date: "2024-01-15",
      time: "14:30",
      action: "Launched new Facebook Ad set targeting homeowners in SW1 postcode"
    },
    {
      id: 2,
      date: "2024-01-14",
      time: "09:15",
      action: "Optimised ad copy based on initial performance data"
    },
    {
      id: 3,
      date: "2024-01-13",
      time: "16:45",
      action: "Added new ad creative featuring your latest project photos"
    },
    {
      id: 4,
      date: "2024-01-12",
      time: "10:00",
      action: "Generated and sent weekly performance report"
    },
    {
      id: 5,
      date: "2024-01-11",
      time: "11:30",
      action: "Adjusted targeting to focus on emergency plumbing searches"
    }
  ],
  chartData: [
    { day: 'Jan 8', leads: 1 },
    { day: 'Jan 9', leads: 2 },
    { day: 'Jan 10', leads: 1 },
    { day: 'Jan 11', leads: 3 },
    { day: 'Jan 12', leads: 2 },
    { day: 'Jan 13', leads: 1 },
    { day: 'Jan 14', leads: 2 },
    { day: 'Jan 15', leads: 0 }
  ]
};

// Animated counter component
const AnimatedCounter = ({ value, symbol = "", duration = 2000 }: { value: number; symbol?: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setDisplayValue(Math.floor(progress * value));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [value, duration]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-brand-primary">
      {symbol}{displayValue}
    </span>
  );
};

// Metric card component
const MetricCard = ({ icon: Icon, label, value, trend, symbol = "" }: {
  icon: any;
  label: string;
  value: number;
  trend: 'up' | 'down';
  symbol?: string;
}) => (
  <Card className="p-4 text-center hover:shadow-lg transition-shadow">
    <CardContent className="p-0">
      <div className="flex justify-center mb-2">
        <Icon className="h-6 w-6 text-brand-primary" />
      </div>
      <AnimatedCounter value={value} symbol={symbol} />
      <p className="text-sm text-text-secondary mt-1">{label}</p>
      <div className="flex items-center justify-center mt-2">
        {trend === 'up' ? (
          <ArrowUp className="h-4 w-4 text-green-600" />
        ) : (
          <ArrowDown className="h-4 w-4 text-red-600" />
        )}
        <span className={`text-xs ml-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          vs last week
        </span>
      </div>
    </CardContent>
  </Card>
);

const GrowthHub = () => {
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
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open('https://wa.me/447123456789', '_blank')}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Message Us on WhatsApp
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Lead Generation Boost
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're actively managing your campaign to get your phone ringing. Here's your impact so far.
          </p>
          <Badge variant="outline" className="text-brand-primary border-brand-primary">
            For {mockData.businessName}
          </Badge>
        </section>

        {/* Key Metrics */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-foreground">
            Key Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              icon={TrendingUp}
              label="Total Leads Generated"
              value={mockData.metrics.totalLeads}
              trend={mockData.metrics.trends.totalLeads}
            />
            <MetricCard
              icon={Phone}
              label="Phone Calls"
              value={mockData.metrics.phoneCalls}
              trend={mockData.metrics.trends.phoneCalls}
            />
            <MetricCard
              icon={MousePointer}
              label="Website Clicks"
              value={mockData.metrics.websiteClicks}
              trend={mockData.metrics.trends.websiteClicks}
            />
            <MetricCard
              icon={TrendingUp}
              label="Ad Spend"
              value={mockData.metrics.adSpend}
              trend={mockData.metrics.trends.adSpend}
              symbol="£"
            />
          </div>
        </section>

        {/* Chart Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-foreground">
            Leads Over Time
          </h2>
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData.chartData}>
                    <XAxis dataKey="day" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Line 
                      type="monotone" 
                      dataKey="leads" 
                      stroke="hsl(var(--brand-primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--brand-primary))", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Activity Feed */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-foreground">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {mockData.activities.map((activity) => (
              <Card key={activity.id} className="p-4">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="text-xs">
                        {activity.date} at {activity.time}
                      </Badge>
                    </div>
                    <p className="text-text-primary">{activity.action}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Report CTA */}
        <section className="text-center space-y-6 py-8">
          <Card className="p-8 bg-gradient-subtle">
            <CardContent className="p-0 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Your 30-Day Performance Report is Ready
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                See the full impact of your Lead Generation Boost, including all insights and recommendations.
              </p>
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Download Full Report (PDF)
              </Button>
            </CardContent>
          </Card>
        </section>
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