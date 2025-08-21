import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Star, TrendingUp, Clock, Target } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  metrics: string;
  image: string;
}

interface CaseStudyDialogProps {
  children: React.ReactNode;
  caseStudy: CaseStudy;
  index: number;
}

export const CaseStudyDialog: React.FC<CaseStudyDialogProps> = ({ children, caseStudy, index }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  // Detailed case study data based on index
  const detailedCaseStudies = [
    {
      title: caseStudy.title,
      description: caseStudy.description,
      metrics: caseStudy.metrics,
      image: caseStudy.image,
      details: {
        client: "European Tech Company",
        duration: "4 days / 3 nights",
        participants: "80 executives",
        location: "Marrakech & Agafay Desert",
        budget: "€120,000",
        satisfaction: "98%"
      },
      highlights: [
        t('caseStudyHighlight1_1'),
        t('caseStudyHighlight1_2'),
        t('caseStudyHighlight1_3'),
        t('caseStudyHighlight1_4')
      ],
      results: [
        { metric: "98%", label: t('clientSatisfaction') },
        { metric: "95%", label: t('attendanceRate') },
        { metric: "4.8/5", label: t('venueRating') },
        { metric: "€25k", label: t('costSavings') }
      ]
    },
    {
      title: caseStudy.title,
      description: caseStudy.description,
      metrics: caseStudy.metrics,
      image: caseStudy.image,
      details: {
        client: "International Finance Group",
        duration: "3 days / 2 nights",
        participants: "300 delegates",
        location: "Casablanca Convention Center",
        budget: "€200,000",
        satisfaction: "96%"
      },
      highlights: [
        t('caseStudyHighlight2_1'),
        t('caseStudyHighlight2_2'),
        t('caseStudyHighlight2_3'),
        t('caseStudyHighlight2_4')
      ],
      results: [
        { metric: "300", label: t('delegates') },
        { metric: "15", label: t('countries') },
        { metric: "96%", label: t('satisfaction') },
        { metric: "48h", label: t('setupTime') }
      ]
    },
    {
      title: caseStudy.title,
      description: caseStudy.description,
      metrics: caseStudy.metrics,
      image: caseStudy.image,
      details: {
        client: "Gulf Manufacturing Corp",
        duration: "5 days / 4 nights",
        participants: "50 team members",
        location: "Agadir Beach Resort",
        budget: "€75,000",
        satisfaction: "99%"
      },
      highlights: [
        t('caseStudyHighlight3_1'),
        t('caseStudyHighlight3_2'),
        t('caseStudyHighlight3_3'),
        t('caseStudyHighlight3_4')
      ],
      results: [
        { metric: "99%", label: t('teamEngagement') },
        { metric: "85%", label: t('goalAchievement') },
        { metric: "100%", label: t('activitiesCompleted') },
        { metric: "4.9/5", label: t('overallRating') }
      ]
    }
  ];

  const currentCase = detailedCaseStudies[index] || detailedCaseStudies[0];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold text-foreground">
            {currentCase.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Hero Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src={currentCase.image} 
              alt={currentCase.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <Badge variant="secondary" className="mb-2">
                {t('caseStudy')}
              </Badge>
              <h3 className="text-white font-semibold text-lg">
                {currentCase.details.client}
              </h3>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-4 text-center">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t('duration')}</p>
                <p className="font-semibold">{currentCase.details.duration}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-4 text-center">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t('participants')}</p>
                <p className="font-semibold">{currentCase.details.participants}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-4 text-center">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t('location')}</p>
                <p className="font-semibold">{currentCase.details.location}</p>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">{t('projectOverview')}</h4>
            <p className="text-muted-foreground leading-relaxed">
              {currentCase.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('keyHighlights')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentCase.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center">
                  <Star className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Metrics */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('resultsMetrics')}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentCase.results.map((result, idx) => (
                <Card key={idx} className="text-center border-0 bg-primary/5">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {result.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="gradient-primary text-primary-foreground border-0">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold text-lg mb-2">
                {t('inspiredByThisCase')}
              </h4>
              <p className="text-primary-foreground/90 mb-4">
                {t('inspiredByThisCaseDesc')}
              </p>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {t('discussYourProject')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};