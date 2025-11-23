import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import { useActiveRoute } from '@/hooks/useActiveRoute';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { languages, languageNames, getLocalizedPath } from '@/lib/i18n';
import { QuoteDialog } from './QuoteDialog';

export const Header: React.FC = () => {
  const { language, t } = useLanguage();
  const { isActive } = useActiveRoute();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'destinations', path: '/destinations' },
    { key: 'services', path: '/services' },
    { key: 'successStories', path: '/success-stories' },
    { key: 'blog', path: '/blog' },
    { key: 'about', path: '/about' },
    { key: 'faq', path: '/faq' },
    { key: 'contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-elegant border-b border-border ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-md shadow-elegant' 
        : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={getLocalizedPath('/')} className="flex items-center group">
            <div className="w-12 h-12 flex items-center justify-center transition-corporate group-hover:scale-105">
              <img 
                src="/lovable-uploads/cfc08f51-9311-488b-aa3c-cd9ef1376332.png" 
                alt="Event Morocco Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={getLocalizedPath(item.path)}
                className={`relative text-foreground hover:text-primary transition-corporate font-medium ${
                  isActive(item.path) ? 'nav-active text-primary' : ''
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 hover-lift"
                aria-label={`Change language - Current: ${languageNames[language]}`}
                aria-expanded={isLangMenuOpen}
                aria-haspopup="true"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>{languageNames[language]}</span>
              </Button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-background backdrop-blur-md rounded-md shadow-lg border-2 border-border z-50 animate-slide-down">
                  {languages.map((lang, index) => (
                    <a
                      key={lang}
                      href={`/${lang === 'en' ? '' : lang}`}
                      className={`block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-corporate hover-lift stagger-${index + 1}`}
                      onClick={() => setIsLangMenuOpen(false)}
                    >
                      {languageNames[lang]}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <QuoteDialog>
              <Button variant="cta" size="sm" className="hover-lift hover-glow">
                {t('getProposal')}
              </Button>
            </QuoteDialog>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-corporate"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="relative w-5 h-5">
              <Menu className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'}`} aria-hidden="true" />
              <X className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`} aria-hidden="true" />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-navigation" 
            className="md:hidden border-t border-border mt-2 pt-4 pb-4 animate-slide-down"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.key}
                  to={getLocalizedPath(item.path)}
                  className={`text-foreground hover:text-primary transition-corporate font-medium hover-lift stagger-${index + 1} ${
                    isActive(item.path) ? 'nav-active text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 flex flex-col space-y-3 animate-fade-in-up">
              {/* Mobile Language Selector */}
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang === 'en' ? '' : lang}`}
                    className={`px-3 py-1 rounded text-sm transition-corporate hover-scale ${
                      lang === language 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    {languageNames[lang]}
                  </a>
                ))}
               </div>
               
                <QuoteDialog>
                  <Button variant="cta" className="w-full hover-lift hover-glow">
                    {t('getProposal')}
                  </Button>
                </QuoteDialog>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};