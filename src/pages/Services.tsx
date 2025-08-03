import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Code, Palette, Megaphone, TrendingUp, Globe, Smartphone } from "lucide-react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      id: 1,
      name: "Web Development",
      icon: Code,
      description: "Custom websites and web applications",
      price: "$5,000 - $50,000",
      duration: "4-12 weeks",
      category: "Development",
      featured: true,
      clients: 45,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Brand Design",
      icon: Palette,
      description: "Complete brand identity and visual design",
      price: "$3,000 - $15,000",
      duration: "2-6 weeks",
      category: "Design",
      featured: true,
      clients: 32,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Digital Marketing",
      icon: Megaphone,
      description: "SEO, SEM, and social media marketing",
      price: "$2,000 - $10,000/month",
      duration: "Ongoing",
      category: "Marketing",
      featured: false,
      clients: 28,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Business Consulting",
      icon: TrendingUp,
      description: "Strategic business planning and optimization",
      price: "$150 - $300/hour",
      duration: "Variable",
      category: "Consulting",
      featured: false,
      clients: 15,
      rating: 4.9,
    },
    {
      id: 5,
      name: "E-commerce Solutions",
      icon: Globe,
      description: "Online stores and payment integration",
      price: "$8,000 - $25,000",
      duration: "6-10 weeks",
      category: "Development",
      featured: true,
      clients: 22,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Mobile App Development",
      icon: Smartphone,
      description: "iOS and Android mobile applications",
      price: "$15,000 - $75,000",
      duration: "8-16 weeks",
      category: "Development",
      featured: false,
      clients: 18,
      rating: 4.9,
    },
  ];

  const categories = ["All", "Development", "Design", "Marketing", "Consulting"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredServices = services.filter(service => service.featured);

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{services.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Featured Services</CardTitle>
            <Palette className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{featuredServices.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {services.reduce((sum, s) => sum + s.clients, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(services.reduce((sum, s) => sum + s.rating, 0) / services.length).toFixed(1)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <Badge variant="secondary">{service.category}</Badge>
                        </div>
                      </div>
                      {service.featured && (
                        <Badge className="bg-yellow-500">Featured</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <CardDescription>{service.description}</CardDescription>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Price Range</span>
                          <span className="font-medium">{service.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Duration</span>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Clients Served</span>
                          <span className="font-medium">{service.clients}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Rating</span>
                          <span className="font-medium">⭐ {service.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="featured" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <Badge className="bg-yellow-500">Featured</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Service Pricing Overview</CardTitle>
              <CardDescription>
                Transparent pricing for all our professional services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{service.price}</p>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Services;