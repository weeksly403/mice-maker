import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./components/LanguageProvider";
import { AuthProvider } from "./components/auth/AuthProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ChatBotButton } from "./components/chatbot/ChatBotButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Destinations from "./pages/Destinations";
import MarrakechDestination from "./pages/destinations/Marrakech";
import CasablancaDestination from "./pages/destinations/Casablanca";
import AgadirDestination from "./pages/destinations/Agadir";
import FesDestination from "./pages/destinations/Fes";
import SaharaDestination from "./pages/destinations/Sahara";
import Services from "./pages/Services";
import SuccessStories from "./pages/SuccessStories";
import Blog from "./pages/Blog";
import BlogArticleMarrakech from "./pages/blog/BlogArticleMarrakech";
import TopVenuesMorocco from "./pages/blog/TopVenuesMorocco";
import MarrakechIncentive from "./pages/blog/MarrakechIncentive";
import AgadirTeamBuilding from "./pages/blog/AgadirTeamBuilding";
import GulfTeamBuilding from "./pages/blog/GulfTeamBuilding";
import SpanishCorporate from "./pages/blog/SpanishCorporate";
import SaharaRetreats from "./pages/blog/SaharaRetreats";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AuthPage from "./pages/auth/AuthPage";
import CRMLayout from "./components/crm/CRMLayout";
import Dashboard from "./pages/crm/Dashboard";
import Leads from "./pages/crm/Leads";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <ErrorBoundary>
              <Toaster />
              <Sonner />
              <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  {/* English Routes (default) */}
                  <Route path="/" element={<Index />} />
                  <Route path="/destinations" element={<Destinations />} />
                  <Route path="/destinations/marrakech" element={<MarrakechDestination />} />
                  <Route path="/destinations/casablanca" element={<CasablancaDestination />} />
                  <Route path="/destinations/agadir" element={<AgadirDestination />} />
                  <Route path="/destinations/fes" element={<FesDestination />} />
                  <Route path="/destinations/sahara" element={<SaharaDestination />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/organizing-successful-seminars-marrakech" element={<BlogArticleMarrakech />} />
            <Route path="/blog/top-venues-morocco-conferences" element={<TopVenuesMorocco />} />
            <Route path="/blog/marrakech-incentive-capital" element={<MarrakechIncentive />} />
            <Route path="/blog/agadir-team-building" element={<AgadirTeamBuilding />} />
            <Route path="/blog/gulf-team-building" element={<GulfTeamBuilding />} />
            <Route path="/blog/spanish-corporate-morocco" element={<SpanishCorporate />} />
            <Route path="/blog/sahara-retreats" element={<SaharaRetreats />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Authentication Routes */}
                  <Route path="/auth" element={<AuthPage />} />
                  
                  {/* CRM Routes */}
                  <Route path="/crm" element={<CRMLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="leads" element={<Leads />} />
                  </Route>
                  
                  {/* French Routes */}
                  <Route path="/fr" element={<Index />} />
                  <Route path="/fr/destinations" element={<Destinations />} />
                  <Route path="/fr/destinations/marrakech" element={<MarrakechDestination />} />
                  <Route path="/fr/destinations/casablanca" element={<CasablancaDestination />} />
                  <Route path="/fr/destinations/agadir" element={<AgadirDestination />} />
                  <Route path="/fr/destinations/fes" element={<FesDestination />} />
                  <Route path="/fr/destinations/sahara" element={<SaharaDestination />} />
                  <Route path="/fr/services" element={<Services />} />
                  <Route path="/fr/success-stories" element={<SuccessStories />} />
                  <Route path="/fr/blog" element={<Blog />} />
                  <Route path="/fr/blog/organizing-successful-seminars-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/fr/blog/top-venues-morocco-conferences" element={<TopVenuesMorocco />} />
                  <Route path="/fr/blog/marrakech-incentive-capital" element={<MarrakechIncentive />} />
                  <Route path="/fr/blog/agadir-team-building" element={<AgadirTeamBuilding />} />
                  <Route path="/fr/blog/gulf-team-building" element={<GulfTeamBuilding />} />
                  <Route path="/fr/blog/spanish-corporate-morocco" element={<SpanishCorporate />} />
                  <Route path="/fr/blog/sahara-retreats" element={<SaharaRetreats />} />
                  <Route path="/fr/a-propos" element={<About />} />
                  <Route path="/fr/faq" element={<FAQ />} />
                  <Route path="/fr/contact" element={<Contact />} />
                  
                  {/* Spanish Routes */}
                  <Route path="/es" element={<Index />} />
                  <Route path="/es/destinos" element={<Destinations />} />
                  <Route path="/es/destinos/marrakech" element={<MarrakechDestination />} />
                  <Route path="/es/destinos/casablanca" element={<CasablancaDestination />} />
                  <Route path="/es/destinos/agadir" element={<AgadirDestination />} />
                  <Route path="/es/destinos/fes" element={<FesDestination />} />
                  <Route path="/es/destinos/sahara" element={<SaharaDestination />} />
                  <Route path="/es/servicios" element={<Services />} />
                  <Route path="/es/success-stories" element={<SuccessStories />} />
                  <Route path="/es/blog" element={<Blog />} />
                  <Route path="/es/blog/organizing-successful-seminars-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/es/blog/top-venues-morocco-conferences" element={<TopVenuesMorocco />} />
                  <Route path="/es/blog/marrakech-incentive-capital" element={<MarrakechIncentive />} />
                  <Route path="/es/blog/agadir-team-building" element={<AgadirTeamBuilding />} />
                  <Route path="/es/blog/gulf-team-building" element={<GulfTeamBuilding />} />
                  <Route path="/es/blog/spanish-corporate-morocco" element={<SpanishCorporate />} />
                  <Route path="/es/blog/sahara-retreats" element={<SaharaRetreats />} />
                  <Route path="/es/acerca-de" element={<About />} />
                  <Route path="/es/faq" element={<FAQ />} />
                  <Route path="/es/contacto" element={<Contact />} />
                  
                  {/* Arabic Routes */}
                  <Route path="/ar" element={<Index />} />
                  <Route path="/ar/الوجهات" element={<Destinations />} />
                  <Route path="/ar/الوجهات/مراكش" element={<MarrakechDestination />} />
                  <Route path="/ar/الوجهات/الدار-البيضاء" element={<CasablancaDestination />} />
                  <Route path="/ar/الوجهات/أكادير" element={<AgadirDestination />} />
                  <Route path="/ar/الوجهات/فاس" element={<FesDestination />} />
                  <Route path="/ar/الوجهات/الصحراء" element={<SaharaDestination />} />
                  <Route path="/ar/الخدمات" element={<Services />} />
                  <Route path="/ar/قصص-النجاح" element={<SuccessStories />} />
                  <Route path="/ar/المدونة" element={<Blog />} />
                  <Route path="/ar/المدونة/organizing-successful-seminars-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/ar/المدونة/top-venues-morocco-conferences" element={<TopVenuesMorocco />} />
                  <Route path="/ar/المدونة/marrakech-incentive-capital" element={<MarrakechIncentive />} />
                  <Route path="/ar/المدونة/agadir-team-building" element={<AgadirTeamBuilding />} />
                  <Route path="/ar/المدونة/gulf-team-building" element={<GulfTeamBuilding />} />
                  <Route path="/ar/المدونة/spanish-corporate-morocco" element={<SpanishCorporate />} />
                  <Route path="/ar/المدونة/sahara-retreats" element={<SaharaRetreats />} />
                  <Route path="/ar/من-نحن" element={<About />} />
                  <Route path="/ar/الأسئلة-الشائعة" element={<FAQ />} />
                  <Route path="/ar/اتصل-بنا" element={<Contact />} />
                  
                  {/* Catch-all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
               </main>
                <Footer />
                <ChatBotButton />
              </div>
            </ErrorBoundary>
          </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
