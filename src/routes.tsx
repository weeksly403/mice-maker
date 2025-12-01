import type { RouteObject } from 'react-router-dom';
import AppLayout from './AppLayout';

// All pages - directly imported for SSG compatibility
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
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AuthPage from "./pages/auth/AuthPage";
import CRMLayout from "./components/crm/CRMLayout";
import Dashboard from "./pages/crm/Dashboard";
import Leads from "./pages/crm/Leads";
import Calls from "./pages/crm/Calls";
import Partners from "./pages/crm/Partners";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      // English Routes (default) - SEO Optimized
      { index: true, Component: Index },
      { path: "afcon-2025-morocco", Component: AfconLanding },
      
      // French Routes
      { path: "fr/afcon-2025-maroc", Component: AfconLanding },
      
      // Spanish Routes
      { path: "es/afcon-2025-marruecos", Component: AfconLanding },
      
      // Arabic Routes
      { path: "ar/afcon-2025-morocco", Component: AfconLanding },
      
      // Services - Keyword-rich URLs
      { path: "services", Component: Services },
      { path: "corporate-event-planning", Component: Services },
      { path: "incentive-travel", Component: Services },
      { path: "conference-venues", Component: Services },
      { path: "team-building", Component: Services },
      
      // Destinations - SEO Enhanced
      { path: "destinations", Component: Destinations },
      { path: "destinations/marrakech-events", Component: MarrakechDestination },
      { path: "destinations/casablanca-conferences", Component: CasablancaDestination },
      { path: "destinations/agadir-incentives", Component: AgadirDestination },
      { path: "destinations/fes-seminars", Component: FesDestination },
      { path: "destinations/sahara-retreats", Component: SaharaDestination },
      
      // Legacy destination redirects
      { path: "destinations/marrakech", Component: MarrakechDestination },
      { path: "destinations/casablanca", Component: CasablancaDestination },
      { path: "destinations/agadir", Component: AgadirDestination },
      { path: "destinations/fes", Component: FesDestination },
      { path: "destinations/sahara", Component: SaharaDestination },
      
      // Case Studies (renamed from success-stories)
      { path: "case-studies", Component: SuccessStories },
      { path: "success-stories", Component: SuccessStories },
      
      // Blog - SEO Optimized URLs
      { path: "blog", Component: Blog },
      { path: "blog/choosing-dmc-morocco", Component: ChoosingDMCMorocco },
      { path: "blog/corporate-event-roi", Component: CorporateEventROI },
      { path: "blog/hybrid-events-morocco", Component: HybridEventsMorocco },
      { path: "blog/afcon-corporate-hospitality", Component: AfconCorporateHospitality },
      
      // Pillar Pages
      { path: "guide/corporate-events-morocco", Component: CorporateEventsGuide },
      
      // Legacy blog SEO-optimized URLs
      { path: "blog/seminars-marrakech", Component: BlogArticleMarrakech },
      { path: "blog/conference-venues-morocco", Component: TopVenuesMorocco },
      { path: "blog/incentive-travel-marrakech", Component: MarrakechIncentive },
      { path: "blog/agadir-team-building", Component: AgadirTeamBuilding },
      { path: "blog/team-building-gulf-corporates", Component: GulfTeamBuilding },
      { path: "blog/spain-corporate-events-morocco", Component: SpanishCorporate },
      { path: "blog/sahara-retreats", Component: SaharaRetreats },
      
      // Legacy blog redirects
      { path: "blog/organizing-successful-seminars-marrakech", Component: BlogArticleMarrakech },
      { path: "blog/top-venues-morocco-conferences", Component: TopVenuesMorocco },
      { path: "blog/marrakech-incentive-capital", Component: MarrakechIncentive },
      { path: "blog/gulf-team-building", Component: GulfTeamBuilding },
      { path: "blog/spanish-corporate-morocco", Component: SpanishCorporate },
      
      // Core Pages
      { path: "about", Component: About },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      
      // Authentication Routes
      { path: "auth", Component: AuthPage },
      
      // CRM Routes
      {
        path: "crm",
        Component: CRMLayout,
        children: [
          { path: "dashboard", Component: Dashboard },
          { path: "leads", Component: Leads },
          { path: "calls", Component: Calls },
          { path: "partners", Component: Partners },
        ],
      },
      
      // French Routes - SEO Optimized
      { path: "fr", Component: Index },
      
      // Services - French
      { path: "fr/services", Component: Services },
      { path: "fr/planification-evenements-entreprise", Component: Services },
      { path: "fr/voyage-incentive", Component: Services },
      { path: "fr/lieux-conferences", Component: Services },
      { path: "fr/team-building", Component: Services },
      
      // Destinations - French
      { path: "fr/destinations", Component: Destinations },
      { path: "fr/destinations/marrakech-evenements", Component: MarrakechDestination },
      { path: "fr/destinations/casablanca-conferences", Component: CasablancaDestination },
      { path: "fr/destinations/agadir-incentives", Component: AgadirDestination },
      { path: "fr/destinations/fes-seminaires", Component: FesDestination },
      { path: "fr/destinations/sahara-retraites", Component: SaharaDestination },
      
      // Legacy French destinations
      { path: "fr/destinations/marrakech", Component: MarrakechDestination },
      { path: "fr/destinations/casablanca", Component: CasablancaDestination },
      { path: "fr/destinations/agadir", Component: AgadirDestination },
      { path: "fr/destinations/fes", Component: FesDestination },
      { path: "fr/destinations/sahara", Component: SaharaDestination },
      
      // Case Studies - French
      { path: "fr/etudes-de-cas", Component: SuccessStories },
      { path: "fr/success-stories", Component: SuccessStories },
      
      // Blog - French
      { path: "fr/blog", Component: Blog },
      { path: "fr/blog/seminaires-marrakech", Component: BlogArticleMarrakech },
      { path: "fr/blog/lieux-conferences-maroc", Component: TopVenuesMorocco },
      { path: "fr/blog/voyage-incentive-marrakech", Component: MarrakechIncentive },
      { path: "fr/blog/team-building-agadir", Component: AgadirTeamBuilding },
      { path: "fr/blog/team-building-golfe-entreprises", Component: GulfTeamBuilding },
      { path: "fr/blog/evenements-entreprise-espagne-maroc", Component: SpanishCorporate },
      { path: "fr/blog/retraites-sahara", Component: SaharaRetreats },
      
      // Legacy French blog redirects
      { path: "fr/blog/organizing-successful-seminars-marrakech", Component: BlogArticleMarrakech },
      { path: "fr/blog/top-venues-morocco-conferences", Component: TopVenuesMorocco },
      { path: "fr/blog/marrakech-incentive-capital", Component: MarrakechIncentive },
      { path: "fr/blog/agadir-team-building", Component: AgadirTeamBuilding },
      { path: "fr/blog/gulf-team-building", Component: GulfTeamBuilding },
      { path: "fr/blog/spanish-corporate-morocco", Component: SpanishCorporate },
      { path: "fr/blog/sahara-retreats", Component: SaharaRetreats },
      
      // Core Pages - French
      { path: "fr/a-propos", Component: About },
      { path: "fr/faq", Component: FAQ },
      { path: "fr/contact", Component: Contact },
      
      // Spanish Routes - SEO Optimized
      { path: "es", Component: Index },
      
      // Services - Spanish
      { path: "es/servicios", Component: Services },
      { path: "es/planificacion-eventos-corporativos", Component: Services },
      { path: "es/viajes-incentivo", Component: Services },
      { path: "es/salas-conferencias", Component: Services },
      { path: "es/team-building", Component: Services },
      
      // Destinations - Spanish
      { path: "es/destinos", Component: Destinations },
      { path: "es/destinos/marrakech-eventos", Component: MarrakechDestination },
      { path: "es/destinos/casablanca-conferencias", Component: CasablancaDestination },
      { path: "es/destinos/agadir-incentivos", Component: AgadirDestination },
      { path: "es/destinos/fes-seminarios", Component: FesDestination },
      { path: "es/destinos/sahara-retiros", Component: SaharaDestination },
      
      // Legacy Spanish destinations
      { path: "es/destinos/marrakech", Component: MarrakechDestination },
      { path: "es/destinos/casablanca", Component: CasablancaDestination },
      { path: "es/destinos/agadir", Component: AgadirDestination },
      { path: "es/destinos/fes", Component: FesDestination },
      { path: "es/destinos/sahara", Component: SaharaDestination },
      
      // Case Studies - Spanish
      { path: "es/casos-de-estudio", Component: SuccessStories },
      { path: "es/success-stories", Component: SuccessStories },
      
      // Blog - Spanish
      { path: "es/blog", Component: Blog },
      { path: "es/blog/seminarios-marrakech", Component: BlogArticleMarrakech },
      { path: "es/blog/salas-conferencias-marruecos", Component: TopVenuesMorocco },
      { path: "es/blog/viaje-incentivo-marrakech", Component: MarrakechIncentive },
      { path: "es/blog/team-building-agadir", Component: AgadirTeamBuilding },
      { path: "es/blog/team-building-golfo-empresas", Component: GulfTeamBuilding },
      { path: "es/blog/eventos-corporativos-espana-marruecos", Component: SpanishCorporate },
      { path: "es/blog/retiros-sahara", Component: SaharaRetreats },
      
      // Legacy Spanish blog redirects
      { path: "es/blog/organizing-successful-seminars-marrakech", Component: BlogArticleMarrakech },
      { path: "es/blog/top-venues-morocco-conferences", Component: TopVenuesMorocco },
      { path: "es/blog/marrakech-incentive-capital", Component: MarrakechIncentive },
      { path: "es/blog/agadir-team-building", Component: AgadirTeamBuilding },
      { path: "es/blog/gulf-team-building", Component: GulfTeamBuilding },
      { path: "es/blog/spanish-corporate-morocco", Component: SpanishCorporate },
      { path: "es/blog/sahara-retreats", Component: SaharaRetreats },
      
      // Core Pages - Spanish
      { path: "es/acerca-de", Component: About },
      { path: "es/faq", Component: FAQ },
      { path: "es/contacto", Component: Contact },
      
      // Arabic Routes
      { path: "ar", Component: Index },
      { path: "ar/الوجهات", Component: Destinations },
      { path: "ar/الوجهات/مراكش", Component: MarrakechDestination },
      { path: "ar/الوجهات/الدار-البيضاء", Component: CasablancaDestination },
      { path: "ar/الوجهات/أكادير", Component: AgadirDestination },
      { path: "ar/الوجهات/فاس", Component: FesDestination },
      { path: "ar/الوجهات/الصحراء", Component: SaharaDestination },
      { path: "ar/الخدمات", Component: Services },
      { path: "ar/قصص-النجاح", Component: SuccessStories },
      { path: "ar/المدونة", Component: Blog },
      { path: "ar/المدونة/organizing-successful-seminars-marrakech", Component: BlogArticleMarrakech },
      { path: "ar/المدونة/top-venues-morocco-conferences", Component: TopVenuesMorocco },
      { path: "ar/المدونة/marrakech-incentive-capital", Component: MarrakechIncentive },
      { path: "ar/المدونة/agadir-team-building", Component: AgadirTeamBuilding },
      { path: "ar/المدونة/gulf-team-building", Component: GulfTeamBuilding },
      { path: "ar/المدونة/spanish-corporate-morocco", Component: SpanishCorporate },
      { path: "ar/المدونة/sahara-retreats", Component: SaharaRetreats },
      { path: "ar/من-نحن", Component: About },
      { path: "ar/الأسئلة-الشائعة", Component: FAQ },
      { path: "ar/اتصل-بنا", Component: Contact },
      
      // Catch-all route
      { path: "*", Component: NotFound },
    ],
  },
];
