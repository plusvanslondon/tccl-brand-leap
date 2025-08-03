import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  FileText,
  Menu,
  X,
  Bell,
  LogOut,
  FolderOpen,
  Package,
  CreditCard,
  UserCheck
} from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { path: "/projects", label: "Projects", icon: FolderOpen },
    { path: "/clients", label: "Clients", icon: Users },
    { path: "/services", label: "Services", icon: Package },
    { path: "/billing", label: "Billing", icon: CreditCard },
    { path: "/team", label: "Team", icon: UserCheck },
    { path: "/reports", label: "Reports", icon: FileText },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between bg-background border-b border-brand-border px-6 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-brand-primary">
            TCCL
          </Link>
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-brand-primary text-white"
                    : "text-text-secondary hover:text-brand-primary hover:bg-brand-surface"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500">
              3
            </Badge>
          </Button>
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between bg-background border-b border-brand-border px-4 py-3">
        <Link to="/" className="text-xl font-bold text-brand-primary">
          TCCL
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-brand-border">
          <nav className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-brand-primary text-white"
                    : "text-text-secondary hover:text-brand-primary hover:bg-brand-surface"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
            <div className="border-t border-brand-border pt-2 mt-2">
              <div className="flex items-center gap-3 px-3 py-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-text-primary">John Doe</div>
                  <div className="text-xs text-text-muted">john@example.com</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="mx-3 mb-2 w-auto">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;