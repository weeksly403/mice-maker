import { Building2 } from 'lucide-react';

interface Client {
  name: string;
  logo: string;
  industry: string;
}

const clients: Client[] = [
  { name: 'Fortune 500 Tech Company', logo: '🏢', industry: 'Technology' },
  { name: 'Global Financial Services', logo: '🏦', industry: 'Finance' },
  { name: 'International Pharma Corp', logo: '💊', industry: 'Healthcare' },
  { name: 'European Auto Manufacturer', logo: '🚗', industry: 'Automotive' },
  { name: 'Luxury Hotel Chain', logo: '🏨', industry: 'Hospitality' },
  { name: 'Energy Multinational', logo: '⚡', industry: 'Energy' },
  { name: 'Telecom Leader', logo: '📱', industry: 'Telecommunications' },
  { name: 'Global Consulting Firm', logo: '📊', industry: 'Consulting' },
];

export const ClientLogos = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Trusted by Leading Organizations
            </span>
          </div>
          <p className="text-muted-foreground">
            500+ successful events for global brands and Fortune 500 companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              title={client.name}
            >
              <div className="text-4xl mb-2">{client.logo}</div>
              <p className="text-xs text-center text-muted-foreground">{client.industry}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div>
              <span className="font-bold text-2xl text-primary">500+</span>
              <p className="text-muted-foreground">Events Delivered</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-primary">98%</span>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-primary">45+</span>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-primary">15+</span>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
