import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./components/LanguageProvider";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <LanguageProvider>
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
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* French Routes */}
                  <Route path="/fr" element={<Index />} />
                  <Route path="/fr/destinations" element={<Index />} />
                  <Route path="/fr/services" element={<Index />} />
                  <Route path="/fr/blog" element={<Index />} />
                  <Route path="/fr/faq" element={<Index />} />
                  <Route path="/fr/contact" element={<Index />} />
                  
                  {/* Spanish Routes */}
                  <Route path="/es" element={<Index />} />
                  <Route path="/es/destinos" element={<Index />} />
                  <Route path="/es/servicios" element={<Index />} />
                  <Route path="/es/blog" element={<Index />} />
                  <Route path="/es/faq" element={<Index />} />
                  <Route path="/es/contacto" element={<Index />} />
                  
                  {/* Arabic Routes */}
                  <Route path="/ar" element={<Index />} />
                  <Route path="/ar/الوجهات" element={<Index />} />
                  <Route path="/ar/الخدمات" element={<Index />} />
                  <Route path="/ar/المدونة" element={<Index />} />
                  <Route path="/ar/الأسئلة-الشائعة" element={<Index />} />
                  <Route path="/ar/اتصل-بنا" element={<Index />} />
                  
                  {/* Catch-all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
               </main>
                <Footer />
                <ChatBotButton />
              </div>
            </ErrorBoundary>
          </TooltipProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
