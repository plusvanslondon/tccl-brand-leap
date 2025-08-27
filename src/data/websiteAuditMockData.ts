export interface AuditData {
  website: {
    url: string;
    lastAuditDate: string;
    overallScore: number;
    overallGrade: 'A' | 'B' | 'C' | 'D' | 'F';
  };
  categories: {
    technicalSeo: CategoryData;
    userExperience: CategoryData;
    contentQuality: CategoryData;
    conversions: CategoryData;
    competitive: CategoryData;
  };
  priorityActions: PriorityAction[];
}

export interface CategoryData {
  name: string;
  score: number;
  maxScore: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  issues: Issue[];
  metrics: Record<string, any>;
}

export interface Issue {
  title: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  category: string;
}

export interface PriorityAction {
  id: number;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  impact: 'High' | 'Medium' | 'Low';
  description: string;
}

export const mockAuditData: AuditData = {
  website: {
    url: "example-business.com",
    lastAuditDate: "2024-01-15T10:30:00Z",
    overallScore: 82,
    overallGrade: 'B'
  },
  categories: {
    technicalSeo: {
      name: "Technical SEO & Health",
      score: 15,
      maxScore: 20,
      grade: 'B',
      issues: [
        {
          title: "12 broken internal links found",
          severity: 'medium',
          description: "Several internal links return 404 errors",
          category: 'Technical SEO'
        },
        {
          title: "Missing SSL certificate on 3 pages",
          severity: 'high',
          description: "Some pages not served over HTTPS",
          category: 'Security'
        },
        {
          title: "Page load speed above 4 seconds",
          severity: 'high',
          description: "Core Web Vitals need improvement",
          category: 'Performance'
        }
      ],
      metrics: {
        coreWebVitals: {
          lcp: { value: 4.2, trend: [-0.2, 0.1, -0.3, 0.4, -0.1] },
          fid: { value: 180, trend: [10, -5, 15, -8, 3] },
          cls: { value: 0.15, trend: [0.02, -0.01, 0.03, -0.02, 0.01] }
        },
        crawlErrors: 12,
        indexedPages: 247,
        sitemapStatus: 'valid',
        robotsTxtStatus: 'valid'
      }
    },
    userExperience: {
      name: "User Experience & Performance",
      score: 16,
      maxScore: 20,
      grade: 'B',
      issues: [
        {
          title: "Mobile page speed below threshold",
          severity: 'medium',
          description: "Mobile performance could be improved",
          category: 'UX'
        }
      ],
      metrics: {
        mobileScore: 78,
        desktopScore: 92,
        accessibilityScore: 88,
        usabilityIssues: 3,
        mobileResponsive: true
      }
    },
    contentQuality: {
      name: "Content Quality & Relevance",
      score: 18,
      maxScore: 20,
      grade: 'A',
      issues: [
        {
          title: "2 pages with duplicate meta descriptions",
          severity: 'low',
          description: "Some meta descriptions are duplicated",
          category: 'SEO'
        }
      ],
      metrics: {
        topPages: [
          { url: '/services', views: 12450, conversions: 89 },
          { url: '/about', views: 8920, conversions: 34 },
          { url: '/contact', views: 6780, conversions: 156 }
        ],
        readabilityScore: 85,
        keywordDensity: 'optimal',
        contentDepth: 'good'
      }
    },
    conversions: {
      name: "Conversion & Marketing Effectiveness",
      score: 17,
      maxScore: 20,
      grade: 'A',
      issues: [],
      metrics: {
        conversionRate: 3.2,
        trafficSources: {
          organic: 45,
          direct: 25,
          social: 15,
          paid: 10,
          referral: 5
        },
        monthlyVisitors: 15420,
        bounceRate: 42
      }
    },
    competitive: {
      name: "Competitive Positioning",
      score: 16,
      maxScore: 20,
      grade: 'B',
      issues: [
        {
          title: "Domain authority below top competitors",
          severity: 'medium',
          description: "DA could be improved through link building",
          category: 'SEO'
        }
      ],
      metrics: {
        domainAuthority: 42,
        competitors: [
          { name: 'Competitor A', domainAuthority: 58, traffic: 25000 },
          { name: 'Competitor B', domainAuthority: 52, traffic: 18000 },
          { name: 'Competitor C', domainAuthority: 48, traffic: 22000 }
        ],
        backlinks: 1250,
        keywordRankings: {
          top3: 12,
          top10: 45,
          top50: 128
        }
      }
    }
  },
  priorityActions: [
    {
      id: 1,
      title: "Fix 404 error on /contact-us page",
      category: "Technical SEO",
      difficulty: "Easy",
      impact: "Medium",
      description: "Update broken link to contact page"
    },
    {
      id: 2,
      title: "Improve Largest Contentful Paint from 4.2s to <2.5s",
      category: "UX & Performance",
      difficulty: "Hard",
      impact: "High",
      description: "Optimize images and reduce server response time"
    },
    {
      id: 3,
      title: "Add SSL certificate to remaining 3 pages",
      category: "Security",
      difficulty: "Medium",
      impact: "High",
      description: "Ensure all pages are served over HTTPS"
    },
    {
      id: 4,
      title: "Build 15 high-quality backlinks",
      category: "Competitive",
      difficulty: "Hard",
      impact: "High",
      description: "Increase domain authority through strategic link building"
    },
    {
      id: 5,
      title: "Fix duplicate meta descriptions",
      category: "Content Quality",
      difficulty: "Easy",
      impact: "Low",
      description: "Create unique meta descriptions for affected pages"
    }
  ]
};