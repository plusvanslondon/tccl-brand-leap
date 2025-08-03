import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Search, 
  Download, 
  DollarSign, 
  Calendar, 
  Clock, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react";

const Billing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const invoices = [
    {
      id: "INV-001",
      client: "Acme Corporation",
      amount: "$25,000",
      status: "Paid",
      date: "2024-02-15",
      dueDate: "2024-02-28",
      project: "Website Redesign",
    },
    {
      id: "INV-002",
      client: "TechStart Inc",
      amount: "$15,000",
      status: "Pending",
      date: "2024-02-10",
      dueDate: "2024-02-25",
      project: "Mobile App Development",
    },
    {
      id: "INV-003",
      client: "Creative Studio",
      amount: "$8,500",
      status: "Overdue",
      date: "2024-01-20",
      dueDate: "2024-02-05",
      project: "Brand Identity Package",
    },
    {
      id: "INV-004",
      client: "Global Enterprises",
      amount: "$32,000",
      status: "Draft",
      date: "2024-02-20",
      dueDate: "2024-03-05",
      project: "E-commerce Platform",
    },
  ];

  const expenses = [
    {
      id: 1,
      description: "Design Software Licenses",
      amount: "$299",
      category: "Software",
      date: "2024-02-01",
      recurring: true,
    },
    {
      id: 2,
      description: "Cloud Hosting Services",
      amount: "$150",
      category: "Infrastructure",
      date: "2024-02-05",
      recurring: true,
    },
    {
      id: 3,
      description: "Client Meeting - Travel",
      amount: "$450",
      category: "Travel",
      date: "2024-02-10",
      recurring: false,
    },
    {
      id: 4,
      description: "Marketing Campaign",
      amount: "$1,200",
      category: "Marketing",
      date: "2024-02-12",
      recurring: false,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Pending": return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Overdue": return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "Draft": return <XCircle className="h-4 w-4 text-gray-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid": return "bg-green-500";
      case "Pending": return "bg-yellow-500";
      case "Overdue": return "bg-red-500";
      case "Draft": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const filteredInvoices = invoices.filter(invoice =>
    invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = invoices
    .filter(inv => inv.status === "Paid")
    .reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[$,]/g, "")), 0);

  const pendingAmount = invoices
    .filter(inv => inv.status === "Pending")
    .reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[$,]/g, "")), 0);

  const overdueAmount = invoices
    .filter(inv => inv.status === "Overdue")
    .reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[$,]/g, "")), 0);

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Billing & Invoices</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">2 invoices pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Amount</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${overdueAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$48,500</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-4">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>
                Track and manage your client invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(invoice.status)}
                      <div>
                        <h3 className="font-medium">{invoice.id}</h3>
                        <p className="text-sm text-muted-foreground">{invoice.client}</p>
                        <p className="text-xs text-muted-foreground">{invoice.project}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">{invoice.amount}</p>
                        <p className="text-sm text-muted-foreground">Due: {invoice.dueDate}</p>
                      </div>
                      <Badge className={getStatusColor(invoice.status)}>
                        {invoice.status}
                      </Badge>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Expenses</CardTitle>
              <CardDescription>
                Track your business expenses and recurring costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <DollarSign className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{expense.description}</h3>
                        <p className="text-sm text-muted-foreground">{expense.category}</p>
                        <p className="text-xs text-muted-foreground">{expense.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold">{expense.amount}</p>
                        {expense.recurring && (
                          <Badge variant="outline">Recurring</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Web Development</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Design Services</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <Progress value={25} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Consulting</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <Progress value={15} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Paid Invoices</span>
                    </div>
                    <span className="font-medium">
                      {invoices.filter(i => i.status === "Paid").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Pending Payments</span>
                    </div>
                    <span className="font-medium">
                      {invoices.filter(i => i.status === "Pending").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Overdue</span>
                    </div>
                    <span className="font-medium">
                      {invoices.filter(i => i.status === "Overdue").length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Billing;