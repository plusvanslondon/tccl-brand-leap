import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import Billing from "./pages/Billing";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import GrowthHub from "./pages/GrowthHub";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isGrowthHub = location.pathname === "/growth-hub";

  return (
    <div className="min-h-screen bg-background">
      {!isHomePage && !isGrowthHub && <Navigation />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/growth-hub" element={<GrowthHub />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/services" element={<Services />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
