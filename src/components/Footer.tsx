
import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Link } from 'react-router-dom';
import { getLocalizedPath } from '@/lib/i18n';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'destinations', path: '/destinations' },
    { key: 'services', path: '/services' },
    { key: 'blog', path: '/blog' },
    { key: 'faq', path: '/faq' },
    { key: 'contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-serif font-bold text-xl">Event Morocco</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Votre expert en événements d'entreprise au Maroc. Séminaires, incentives, conférences et team-building sur mesure.
            </p>
            <div className="flex space-x-4 hidden">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('quickLinks')}</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.key}
                  to={getLocalizedPath(link.path)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info with Schema Microdata */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="font-semibold text-lg mb-6">{t('contact')}</h3>
            <meta itemProp="name" content="Event Morocco" />
            <meta itemProp="url" content="https://eventmorocco.com" />
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-secondary" />
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p className="text-primary-foreground/80">
                    <span itemProp="addressLocality">Marrakech</span>, <span itemProp="addressCountry">Morocco</span><br />
                    <span itemProp="streetAddress">Quartier Hivernage</span>
                  </p>
                  <meta itemProp="postalCode" content="40000" />
                  <meta itemProp="addressRegion" content="Marrakech-Safi" />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-primary-foreground/80" itemProp="telephone">+212 684 84 84 87</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-primary-foreground/80" itemProp="email">contact@eventsmorocco.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">
              Recevez nos dernières offres et actualités MICE.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-l-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-r-md hover:bg-secondary-hover transition-smooth">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Morocco MICE. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to={getLocalizedPath('/legal')}
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth"
            >
              {t('legalNotice')}
            </Link>
            <Link
              to={getLocalizedPath('/privacy')}
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth"
            >
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
