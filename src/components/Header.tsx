import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import { useActiveRoute } from '@/hooks/useActiveRoute';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { languages, languageNames, getLocalizedPath } from '@/lib/i18n';

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
          <Link to={getLocalizedPath('/')} className="flex items-center space-x-2 group">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center transition-corporate group-hover:scale-105 hover-glow">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-serif font-bold text-xl text-foreground transition-corporate group-hover:text-primary">
              Morocco MICE
            </span>
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
              >
                <Globe className="w-4 h-4" />
                <span>{languageNames[language]}</span>
              </Button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-popover/98 backdrop-blur-md rounded-md shadow-elegant border border-border z-50 animate-slide-down">
                  {languages.map((lang, index) => (
                    <a
                      key={lang}
                      href={`/${lang === 'en' ? '' : lang}`}
                      className={`block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-corporate hover-lift stagger-${index + 1}`}
                      onClick={() => setIsLangMenuOpen(false)}
                    >
                      {languageNames[lang]}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Button variant="cta" size="sm" className="hover-lift hover-glow">
              {t('getProposal')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-corporate"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <Menu className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'}`} />
              <X className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4 animate-slide-down">
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
              
              <Button variant="cta" className="w-full hover-lift hover-glow">
                {t('getProposal')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};