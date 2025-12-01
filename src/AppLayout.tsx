import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy, Suspense } from 'react';
import { LanguageProvider } from "./components/LanguageProvider";
import { AuthProvider } from "./components/auth/AuthProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SEOEnhancer } from "./components/SEO/SEOEnhancer";
import { initializeSEOAnalytics } from "./utils/seoAnalytics";
import { deployLog, deployErrorLog, isPrerenderingEnv } from "./utils/deployLogging";
import { EnhancedLocalBusinessSchema } from "./components/SEO/EnhancedLocalBusinessSchema";

// Lazy load non-critical conversion widgets to reduce initial bundle
const ChatBotButton = lazy(() => import("./components/chatbot/ChatBotButton").then(m => ({ default: m.ChatBotButton })));
const StickyCTA = lazy(() => import("./components/conversion/StickyCTA").then(m => ({ default: m.StickyCTA })));
const WhatsAppBusinessButton = lazy(() => import("./components/conversion/WhatsAppBusinessButton").then(m => ({ default: m.WhatsAppBusinessButton })));
const ExitIntentPopup = lazy(() => import("./components/conversion/ExitIntentPopup").then(m => ({ default: m.ExitIntentPopup })));
const LiveChat = lazy(() => import("./components/conversion/LiveChat").then(m => ({ default: m.LiveChat })));

const queryClient = new QueryClient();

export const AppLayout = () => {
  // Initialize SEO analytics tracking (scroll depth, time on page, etc.)
  useEffect(() => {
    const isPrerendering = isPrerenderingEnv();

    try {
      if (isPrerendering) {
        deployLog('seo_analytics_skip_prerender', 'Skipping SEO analytics during prerender');
        return;
      }

      deployLog('seo_analytics_init', 'Initializing SEO analytics');
      const cleanup = initializeSEOAnalytics();
      return cleanup;
    } catch (error) {
      deployErrorLog('seo_analytics_error', 'SEO analytics initialization failed', {
        error: error instanceof Error ? error.message : String(error),
      });
      // Also log to console for local debugging
      console.error('SEO analytics initialization failed:', error);
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ScrollToTop />
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <ErrorBoundary>
                <SEOEnhancer />
                <EnhancedLocalBusinessSchema />
                {/* Lazy-load non-critical conversion widgets */}
                <Suspense fallback={null}>
                  <ExitIntentPopup />
                </Suspense>
                <Toaster />
                <Sonner />
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Suspense fallback={
                      <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                          <p className="text-muted-foreground">Loading...</p>
                        </div>
                      </div>
                    }>
                      <Outlet />
                    </Suspense>
                  </main>
                  <Footer />
                  {/* Lazy-load non-critical conversion widgets */}
                  <Suspense fallback={null}>
                    <ChatBotButton />
                    <StickyCTA />
                    <WhatsAppBusinessButton />
                    <LiveChat />
                  </Suspense>
                </div>
              </ErrorBoundary>
            </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default AppLayout;
