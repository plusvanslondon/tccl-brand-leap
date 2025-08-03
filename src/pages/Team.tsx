import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Search, 
  Mail, 
  Phone, 
  Calendar, 
  Users, 
  Star,
  MapPin,
  Briefcase,
  Award
} from "lucide-react";

const Team = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Developer",
      department: "Development",
      email: "sarah@company.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      status: "Active",
      joinDate: "2022-01-15",
      projects: 8,
      rating: 4.9,
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      currentProject: "E-commerce Platform",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "UX Designer",
      department: "Design",
      email: "mike@company.com",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
      status: "Active",
      joinDate: "2021-08-20",
      projects: 12,
      rating: 4.8,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      currentProject: "Mobile App Redesign",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Project Manager",
      department: "Management",
      email: "emily@company.com",
      phone: "+1 (555) 456-7890",
      location: "Austin, TX",
      status: "Active",
      joinDate: "2020-03-10",
      projects: 15,
      rating: 4.9,
      skills: ["Agile", "Scrum", "Risk Management", "Stakeholder Communication"],
      currentProject: "Website Redesign",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Specialist",
      department: "Marketing",
      email: "david@company.com",
      phone: "+1 (555) 321-0987",
      location: "Chicago, IL",
      status: "Away",
      joinDate: "2022-06-01",
      projects: 6,
      rating: 4.7,
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      currentProject: "Brand Campaign",
    },
  ];

  const departments = ["All", "Development", "Design", "Management", "Marketing"];
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Away": return "bg-yellow-500";
      case "Inactive": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const activeMembers = teamMembers.filter(member => member.status === "Active").length;
  const totalProjects = teamMembers.reduce((sum, member) => sum + member.projects, 0);
  const avgRating = teamMembers.reduce((sum, member) => sum + member.rating, 0) / teamMembers.length;

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Team Management</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamMembers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeMembers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgRating.toFixed(1)}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex space-x-2">
          {departments.map((department) => (
            <Button
              key={department}
              variant={selectedDepartment === department ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>
                          {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </div>
                    </div>
                    <Badge className={getStatusColor(member.status)}>
                      {member.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      {member.email}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="mr-2 h-4 w-4" />
                      {member.phone}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {member.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="mr-2 h-4 w-4" />
                      {member.currentProject}
                    </div>
                    
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Projects</span>
                        <span className="font-medium">{member.projects}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Rating</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{member.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Joined</span>
                        <span className="text-sm">{member.joinDate}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-muted-foreground mb-2">Skills</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance Metrics</CardTitle>
              <CardDescription>
                Individual performance ratings and project contributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>
                          {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Projects</p>
                        <p className="font-bold">{member.projects}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-bold">{member.rating}</span>
                        </div>
                      </div>
                      <div className="w-24">
                        <Progress value={member.rating * 20} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {departments.slice(1).map((department) => {
              const deptMembers = teamMembers.filter(m => m.department === department);
              const deptProjects = deptMembers.reduce((sum, m) => sum + m.projects, 0);
              const deptRating = deptMembers.length > 0 
                ? deptMembers.reduce((sum, m) => sum + m.rating, 0) / deptMembers.length 
                : 0;

              return (
                <Card key={department}>
                  <CardHeader>
                    <CardTitle className="text-lg">{department}</CardTitle>
                    <CardDescription>
                      {deptMembers.length} member{deptMembers.length !== 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Projects</span>
                        <span className="font-medium">{deptProjects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Avg Rating</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{deptRating.toFixed(1)}</span>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="flex -space-x-2">
                          {deptMembers.slice(0, 3).map((member, index) => (
                            <Avatar key={index} className="h-8 w-8 border-2 border-background">
                              <AvatarFallback className="text-xs">
                                {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {deptMembers.length > 3 && (
                            <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                              <span className="text-xs text-muted-foreground">
                                +{deptMembers.length - 3}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Team;