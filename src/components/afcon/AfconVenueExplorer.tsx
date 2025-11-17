import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Calendar, Building } from 'lucide-react';
import venueMap from '@/assets/afcon-venue-map.jpg';

interface Venue {
  id: string;
  city: string;
  name: string;
  capacity: number;
  features: string[];
  matchCount: number;
  isFinalVenue?: boolean;
}

export const AfconVenueExplorer = () => {
  const { t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const venues: Venue[] = [
    {
      id: 'rabat',
      city: t('afcon.venues.rabat.city'),
      name: t('afcon.venues.rabat.name'),
      capacity: 53000,
      features: [
        t('afcon.venues.rabat.feature1'),
        t('afcon.venues.rabat.feature2'),
        t('afcon.venues.rabat.feature3'),
      ],
      matchCount: 8,
      isFinalVenue: true,
    },
    {
      id: 'casablanca',
      city: t('afcon.venues.casablanca.city'),
      name: t('afcon.venues.casablanca.name'),
      capacity: 45000,
      features: [
        t('afcon.venues.casablanca.feature1'),
        t('afcon.venues.casablanca.feature2'),
        t('afcon.venues.casablanca.feature3'),
      ],
      matchCount: 8,
    },
    {
      id: 'marrakech',
      city: t('afcon.venues.marrakech.city'),
      name: t('afcon.venues.marrakech.name'),
      capacity: 45000,
      features: [
        t('afcon.venues.marrakech.feature1'),
        t('afcon.venues.marrakech.feature2'),
        t('afcon.venues.marrakech.feature3'),
      ],
      matchCount: 8,
    },
    {
      id: 'agadir',
      city: t('afcon.venues.agadir.city'),
      name: t('afcon.venues.agadir.name'),
      capacity: 45000,
      features: [
        t('afcon.venues.agadir.feature1'),
        t('afcon.venues.agadir.feature2'),
        t('afcon.venues.agadir.feature3'),
      ],
      matchCount: 7,
    },
    {
      id: 'fes',
      city: t('afcon.venues.fes.city'),
      name: t('afcon.venues.fes.name'),
      capacity: 45000,
      features: [
        t('afcon.venues.fes.feature1'),
        t('afcon.venues.fes.feature2'),
        t('afcon.venues.fes.feature3'),
      ],
      matchCount: 7,
    },
    {
      id: 'tangier',
      city: t('afcon.venues.tangier.city'),
      name: t('afcon.venues.tangier.name'),
      capacity: 45000,
      features: [
        t('afcon.venues.tangier.feature1'),
        t('afcon.venues.tangier.feature2'),
        t('afcon.venues.tangier.feature3'),
      ],
      matchCount: 8,
    },
  ];

  const filteredVenues = selectedCity
    ? venues.filter((v) => v.id === selectedCity)
    : venues;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <img
          src={venueMap}
          alt={t('afcon.venues.mapAlt')}
          className="w-full max-w-4xl mx-auto rounded-xl shadow-elegant"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <Badge
          variant={selectedCity === null ? 'default' : 'outline'}
          className="cursor-pointer px-4 py-2"
          onClick={() => setSelectedCity(null)}
        >
          {t('afcon.venues.allCities')}
        </Badge>
        {venues.map((venue) => (
          <Badge
            key={venue.id}
            variant={selectedCity === venue.id ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setSelectedCity(venue.id)}
          >
            {venue.city}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVenues.map((venue) => (
          <Card key={venue.id} className="p-6 hover:shadow-glow transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">{venue.city}</h3>
                </div>
                {venue.isFinalVenue && (
                  <Badge variant="default" className="text-xs bg-gold text-gold-foreground">
                    {t('afcon.venues.finalVenue')}
                  </Badge>
                )}
              </div>

              <div>
                <h4 className="font-serif font-bold text-xl mb-3">
                  {venue.name}
                </h4>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>
                      {t('afcon.venues.capacity')}: {venue.capacity.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {venue.matchCount} {t('afcon.venues.matches')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <div className="space-y-1">
                    {venue.features.map((feature, index) => (
                      <p key={index} className="text-xs text-muted-foreground">
                        • {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
