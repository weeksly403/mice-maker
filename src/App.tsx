import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { LanguageProvider } from "./components/LanguageProvider";
import { AuthProvider } from "./components/auth/AuthProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ChatBotButton } from "./components/chatbot/ChatBotButton";
import { SEOEnhancer } from "./components/SEO/SEOEnhancer";
import { StickyCTA } from "./components/conversion/StickyCTA";
import { WhatsAppBusinessButton } from "./components/conversion/WhatsAppBusinessButton";
import { initializeSEOAnalytics } from "./utils/seoAnalytics";
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
import ChoosingDMCMorocco from "./pages/blog/ChoosingDMCMorocco";
import CorporateEventROI from "./pages/blog/CorporateEventROI";
import HybridEventsMorocco from "./pages/blog/HybridEventsMorocco";
import AfconCorporateHospitality from "./pages/blog/AfconCorporateHospitality";
import AfconLanding from "./pages/AfconLanding";
import CorporateEventsGuide from "./pages/CorporateEventsGuide";
import { ExitIntentPopup } from "./components/conversion/ExitIntentPopup";
import { LiveChat } from "./components/conversion/LiveChat";
import { EnhancedLocalBusinessSchema } from "./components/SEO/EnhancedLocalBusinessSchema";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AuthPage from "./pages/auth/AuthPage";
import CRMLayout from "./components/crm/CRMLayout";
// Force reimport of components to clear any cache issues
import Dashboard from "./pages/crm/Dashboard";
import Leads from "./pages/crm/Leads";
import Calls from "./pages/crm/Calls";
import Partners from "./pages/crm/Partners";

const queryClient = new QueryClient();

const App = () => {
  // Initialize SEO analytics tracking (scroll depth, time on page, etc.)
  useEffect(() => {
    const cleanup = initializeSEOAnalytics();
    return cleanup;
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <LanguageProvider>
            <AuthProvider>
              <TooltipProvider>
                <ErrorBoundary>
                  <SEOEnhancer />
                  <EnhancedLocalBusinessSchema />
                  <ExitIntentPopup />
                  <Toaster />
                  <Sonner />
                  <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                <Routes>
                  {/* English Routes (default) - SEO Optimized */}
                  <Route path="/" element={<Index />} />
                  <Route path="/afcon-2025-morocco" element={<AfconLanding />} />
                  
                  {/* French Routes */}
                  <Route path="/fr/afcon-2025-maroc" element={<AfconLanding />} />
                  
                  {/* Spanish Routes */}
                  <Route path="/es/afcon-2025-marruecos" element={<AfconLanding />} />
                  
                  {/* Arabic Routes */}
                  <Route path="/ar/afcon-2025-morocco" element={<AfconLanding />} />
                  
                  {/* Services - Keyword-rich URLs */}
                  <Route path="/services" element={<Services />} />
                  <Route path="/corporate-event-planning" element={<Services />} />
                  <Route path="/incentive-travel" element={<Services />} />
                  <Route path="/conference-venues" element={<Services />} />
                  <Route path="/team-building" element={<Services />} />
                  
                  {/* Destinations - SEO Enhanced */}
                  <Route path="/destinations" element={<Destinations />} />
                  <Route path="/destinations/marrakech-events" element={<MarrakechDestination />} />
                  <Route path="/destinations/casablanca-conferences" element={<CasablancaDestination />} />
                  <Route path="/destinations/agadir-incentives" element={<AgadirDestination />} />
                  <Route path="/destinations/fes-seminars" element={<FesDestination />} />
                  <Route path="/destinations/sahara-retreats" element={<SaharaDestination />} />
                  
                  {/* Legacy destination redirects */}
                  <Route path="/destinations/marrakech" element={<MarrakechDestination />} />
                  <Route path="/destinations/casablanca" element={<CasablancaDestination />} />
                  <Route path="/destinations/agadir" element={<AgadirDestination />} />
                  <Route path="/destinations/fes" element={<FesDestination />} />
                  <Route path="/destinations/sahara" element={<SaharaDestination />} />
                  
                  {/* Case Studies (renamed from success-stories) */}
                  <Route path="/case-studies" element={<SuccessStories />} />
                  <Route path="/success-stories" element={<SuccessStories />} /> {/* Legacy redirect */}
                  
                  {/* Blog - SEO Optimized URLs */}
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/choosing-dmc-morocco" element={<ChoosingDMCMorocco />} />
                  <Route path="/blog/corporate-event-roi" element={<CorporateEventROI />} />
                  <Route path="/blog/hybrid-events-morocco" element={<HybridEventsMorocco />} />
                  <Route path="/blog/afcon-corporate-hospitality" element={<AfconCorporateHospitality />} />
                  
                  {/* Pillar Pages */}
                  <Route path="/guide/corporate-events-morocco" element={<CorporateEventsGuide />} />
                  
                  {/* Legacy blog SEO-optimized URLs */}
                  <Route path="/blog/seminars-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/blog/conference-venues-morocco" element={<TopVenuesMorocco />} />
                  <Route path="/blog/incentive-travel-marrakech" element={<MarrakechIncentive />} />
                  <Route path="/blog/agadir-team-building" element={<AgadirTeamBuilding />} />
                  <Route path="/blog/team-building-gulf-corporates" element={<GulfTeamBuilding />} />
                  <Route path="/blog/spain-corporate-events-morocco" element={<SpanishCorporate />} />
                  <Route path="/blog/sahara-retreats" element={<SaharaRetreats />} />
                  
                  {/* Legacy blog redirects */}
                  <Route path="/blog/organizing-successful-seminars-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/blog/top-venues-morocco-conferences" element={<TopVenuesMorocco />} />
                  <Route path="/blog/marrakech-incentive-capital" element={<MarrakechIncentive />} />
                  <Route path="/blog/gulf-team-building" element={<GulfTeamBuilding />} />
                  <Route path="/blog/spanish-corporate-morocco" element={<SpanishCorporate />} />
                  
                  {/* Core Pages */}
                  <Route path="/about" element={<About />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Authentication Routes */}
                  <Route path="/auth" element={<AuthPage />} />
                  
                  {/* CRM Routes */}
                  <Route path="/crm" element={<CRMLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="leads" element={<Leads />} />
                    <Route path="calls" element={<Calls />} />
                    <Route path="partners" element={<Partners />} />
                  </Route>
                  
                  {/* French Routes - SEO Optimized */}
                  <Route path="/fr" element={<Index />} />
                  
                  {/* Services - French */}
                  <Route path="/fr/services" element={<Services />} />
                  <Route path="/fr/planification-evenements-entreprise" element={<Services />} />
                  <Route path="/fr/voyage-incentive" element={<Services />} />
                  <Route path="/fr/lieux-conferences" element={<Services />} />
                  <Route path="/fr/team-building" element={<Services />} />
                  
                  {/* Destinations - French */}
                  <Route path="/fr/destinations" element={<Destinations />} />
                  <Route path="/fr/destinations/marrakech-evenements" element={<MarrakechDestination />} />
                  <Route path="/fr/destinations/casablanca-conferences" element={<CasablancaDestination />} />
                  <Route path="/fr/destinations/agadir-incentives" element={<AgadirDestination />} />
                  <Route path="/fr/destinations/fes-seminaires" element={<FesDestination />} />
                  <Route path="/fr/destinations/sahara-retraites" element={<SaharaDestination />} />
                  
                  {/* Legacy French destinations */}
                  <Route path="/fr/destinations/marrakech" element={<MarrakechDestination />} />
                  <Route path="/fr/destinations/casablanca" element={<CasablancaDestination />} />
                  <Route path="/fr/destinations/agadir" element={<AgadirDestination />} />
                  <Route path="/fr/destinations/fes" element={<FesDestination />} />
                  <Route path="/fr/destinations/sahara" element={<SaharaDestination />} />
                  
                  {/* Case Studies - French */}
                  <Route path="/fr/etudes-de-cas" element={<SuccessStories />} />
                  <Route path="/fr/success-stories" element={<SuccessStories />} /> {/* Legacy */}
                  
                  {/* Blog - French */}
                  <Route path="/fr/blog" element={<Blog />} />
                  <Route path="/fr/blog/seminaires-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/fr/blog/lieux-conferences-maroc" element={<TopVenuesMorocco />} />
                  <Route path="/fr/blog/voyage-incentive-marrakech" element={<MarrakechIncentive />} />
                  <Route path="/fr/blog/team-building-agadir" element={<AgadirTeamBuilding />} />
                  <Route path="/fr/blog/team-building-golfe-entreprises" element={<GulfTeamBuilding />} />
                  <Route path="/fr/blog/evenements-entreprise-espagne-maroc" element={<SpanishCorporate />} />
                  <Route path="/fr/blog/retraites-sahara" element={<SaharaRetreats />} />
                  
                  {/* Legacy French blog redirects */}
                  <Route path="/fr/blog/organizing-successful-seminars-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/fr/blog/top-venues-morocco-conferences" element={<TopVenuesMorocco />} />
                  <Route path="/fr/blog/marrakech-incentive-capital" element={<MarrakechIncentive />} />
                  <Route path="/fr/blog/agadir-team-building" element={<AgadirTeamBuilding />} />
                  <Route path="/fr/blog/gulf-team-building" element={<GulfTeamBuilding />} />
                  <Route path="/fr/blog/spanish-corporate-morocco" element={<SpanishCorporate />} />
                  <Route path="/fr/blog/sahara-retreats" element={<SaharaRetreats />} />
                  
                  {/* Core Pages - French */}
                  <Route path="/fr/a-propos" element={<About />} />
                  <Route path="/fr/faq" element={<FAQ />} />
                  <Route path="/fr/contact" element={<Contact />} />
                  
                  {/* Spanish Routes - SEO Optimized */}
                  <Route path="/es" element={<Index />} />
                  
                  {/* Services - Spanish */}
                  <Route path="/es/servicios" element={<Services />} />
                  <Route path="/es/planificacion-eventos-corporativos" element={<Services />} />
                  <Route path="/es/viajes-incentivo" element={<Services />} />
                  <Route path="/es/salas-conferencias" element={<Services />} />
                  <Route path="/es/team-building" element={<Services />} />
                  
                  {/* Destinations - Spanish */}
                  <Route path="/es/destinos" element={<Destinations />} />
                  <Route path="/es/destinos/marrakech-eventos" element={<MarrakechDestination />} />
                  <Route path="/es/destinos/casablanca-conferencias" element={<CasablancaDestination />} />
                  <Route path="/es/destinos/agadir-incentivos" element={<AgadirDestination />} />
                  <Route path="/es/destinos/fes-seminarios" element={<FesDestination />} />
                  <Route path="/es/destinos/sahara-retiros" element={<SaharaDestination />} />
                  
                  {/* Legacy Spanish destinations */}
                  <Route path="/es/destinos/marrakech" element={<MarrakechDestination />} />
                  <Route path="/es/destinos/casablanca" element={<CasablancaDestination />} />
                  <Route path="/es/destinos/agadir" element={<AgadirDestination />} />
                  <Route path="/es/destinos/fes" element={<FesDestination />} />
                  <Route path="/es/destinos/sahara" element={<SaharaDestination />} />
                  
                  {/* Case Studies - Spanish */}
                  <Route path="/es/casos-de-estudio" element={<SuccessStories />} />
                  <Route path="/es/success-stories" element={<SuccessStories />} /> {/* Legacy */}
                  
                  {/* Blog - Spanish */}
                  <Route path="/es/blog" element={<Blog />} />
                  <Route path="/es/blog/seminarios-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/es/blog/salas-conferencias-marruecos" element={<TopVenuesMorocco />} />
                  <Route path="/es/blog/viaje-incentivo-marrakech" element={<MarrakechIncentive />} />
                  <Route path="/es/blog/team-building-agadir" element={<AgadirTeamBuilding />} />
                  <Route path="/es/blog/team-building-golfo-empresas" element={<GulfTeamBuilding />} />
                  <Route path="/es/blog/eventos-corporativos-espana-marruecos" element={<SpanishCorporate />} />
                  <Route path="/es/blog/retiros-sahara" element={<SaharaRetreats />} />
                  
                  {/* Legacy Spanish blog redirects */}
                  <Route path="/es/blog/organizing-successful-seminars-marrakech" element={<BlogArticleMarrakech />} />
                  <Route path="/es/blog/top-venues-morocco-conferences" element={<TopVenuesMorocco />} />
                  <Route path="/es/blog/marrakech-incentive-capital" element={<MarrakechIncentive />} />
                  <Route path="/es/blog/agadir-team-building" element={<AgadirTeamBuilding />} />
                  <Route path="/es/blog/gulf-team-building" element={<GulfTeamBuilding />} />
                  <Route path="/es/blog/spanish-corporate-morocco" element={<SpanishCorporate />} />
                  <Route path="/es/blog/sahara-retreats" element={<SaharaRetreats />} />
                  
                  {/* Core Pages - Spanish */}
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
                <StickyCTA />
                <WhatsAppBusinessButton />
                <LiveChat />
              </div>
            </ErrorBoundary>
          </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
  );
};

export default App;
