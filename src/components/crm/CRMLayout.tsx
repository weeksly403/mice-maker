import { Outlet, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/components/auth/AuthProvider';
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { CRMSidebar } from './CRMSidebar';
import { Loader2 } from 'lucide-react';

const CRMLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>
      <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <CRMSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b bg-background px-4">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-lg font-semibold text-primary">
              Event Morocco CRM
            </h1>
          </header>
          <main className="flex-1 p-6 bg-muted/10">
            <Outlet />
          </main>
        </div>
      </div>
      </SidebarProvider>
    </>
  );
};

export default CRMLayout;